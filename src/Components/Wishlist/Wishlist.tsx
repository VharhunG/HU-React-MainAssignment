import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { courseActions } from "../../Store/course-slice";
import { uiActions } from "../../Store/ui-slice";
import Dropdown from "../UI/Dropdown/Dropdown";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

const Wishlist = () => {

    const dispatch = useDispatch()

    interface RootState {
        courseReducer: {
            wishlistCourses: [],
            coursesInCart: []
        }
    }

    interface CourseState {
        id: string;
        title: string;
        author: string;
        price: number;
        discount: number;
        tags: [];
    }

    const wishlistCourses = useSelector<RootState, CourseState[]>((state: RootState) => state.courseReducer.wishlistCourses)
    const coursesInCart = useSelector<RootState, CourseState[]>((state: RootState) => state.courseReducer.coursesInCart)

    const [courses, setCourses] = useState(wishlistCourses)

    const navigate = useNavigate();

    const sort = (sortType: string) => {
        const sortedArr = [...wishlistCourses]
    
        if (sortType === 'high') {
            sortedArr.sort((a: CourseState,b: CourseState) => {
                const priceA = a.discount > 0 ? a.price - a.price * a.discount/100 : a.price
                const priceB = b.discount > 0 ? b.price - b.price * b.discount/100 : b.price
                return priceB-priceA
            })
        } else {
            sortedArr.sort((a: CourseState,b: CourseState) => {
                const priceA = a.discount > 0 ? a.price - a.price * a.discount/100 : a.price
                const priceB = b.discount > 0 ? b.price - b.price * b.discount/100 : b.price
                return priceA-priceB
            })
        }
        setCourses(sortedArr)

    }

    const addToCart = (id: String) => {
        const newCourse : CourseState | undefined = courses.find((course) => (course.id === id))
        if (newCourse && coursesInCart.includes(newCourse)) {
            dispatch(uiActions.toggleShowModal({text: "Already exists in the cart", page: 'courseExists'}))
        } else {
            dispatch(courseActions.addCourseToCart(newCourse))
            dispatch(uiActions.toggleShowModal({text: "Course successfully added in the cart", page: 'courseAdded', courseName: newCourse?.title}))   
        }
    }

    const navigateToCourse = (id: string) => {
        dispatch(courseActions.selectCourse(id))
        navigate('/course')
    }

    useEffect(() => {
        setCourses(wishlistCourses)
    }, [wishlistCourses])

    return (
        <div>
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <p className="course-title">My Wishlist</p>
                <div style={{marginRight: "550px",paddingBottom: "10px"}}>
                    <Dropdown changeSort={(sortType: string) => sort(sortType)} />
                </div>
            </div>
            <div style={{"display":"flex"}}>
                <div style={{flex:"2"}}>
                {courses.length > 0 ?
                    courses.map((courseItem) => (
                        <div className="course-list">
                            <div style={{display:"flex"}}>
                                <div className='item-image'></div>
                                <div className="item-details">
                                    <div className="course-title">{courseItem.title}</div>
                                    <div className='course-tags'>
                                        {courseItem.tags.map((tag) => <div className='course-tags' key={tag}><p className='tag'>{tag}</p></div>)}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p>{courseItem.author}</p>
                            </div>
                            <p className='price'>{courseItem.discount > 0 ? `Rs ${courseItem.price - courseItem.price * courseItem.discount/100}/-` : `Rs ${courseItem.price}/-`}</p>
                            <p className='discount'>{courseItem.discount > 0 ? <s>{`Rs${courseItem.price}/-`}</s> : "-" }</p>
                            <button className="add-to-cart" onClick={() => addToCart(courseItem.id)}>Add to cart</button>
                            <button className="delete-btn" onClick={() => dispatch(courseActions.removeFromWishlist(courseItem.id))}><img src="/images/delete icon.svg" alt="delete icon" /></button>
                            <button className="arrow-btn" onClick={() => navigateToCourse(courseItem.id)} role="navigate"><img src="/images/rightArrow.png" alt="rightArrow" className='right-arrow' /></button>
                        </div>
                )) : <p className="empty-cart-text" style={{textAlign:"center"}}> Wishlist is empty</p>}
                </div>
                <div style={{flex:"1"}}>
                    <ShoppingCart />
                </div>
            </div> 
        </div>
    )
}
            
export default Wishlist
