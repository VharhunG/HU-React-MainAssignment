import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import clockIcon from '../../logo/clock.svg'
import { courseActions } from "../../Store/course-slice";
import { uiActions } from "../../Store/ui-slice";
import "./CourseDetail.css"

const CourseDetail: React.FC = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch()

    const [inWishlist, setInWishlist] = useState(false)

    const allCourses = useSelector<RootState, CourseState[]>((state: RootState) => state.courseReducer.allCourses)
    const coursesInCart = useSelector<RootState, CourseState[]>((state: RootState) => state.courseReducer.coursesInCart)
    const wishlistCourses = useSelector<RootState, CourseState[]>((state: RootState) => state.courseReducer.wishlistCourses)

    interface RootState {
        courseReducer: {
            coursesInCart: [],
            selectedCourse: CourseState,
            allCourses: [],
            wishlistCourses: []
        }
    }

    interface CourseState {
        id: string;
        title: string;
        author: string;
        price: number;
        discount: number;
        courseDescription: number;
        tags: [];
    }

    const selectedCourse = useSelector<RootState, CourseState>((state: RootState) => state.courseReducer.selectedCourse)

    const addToCart = (id: String) => {
        const newCourse : CourseState | undefined = allCourses.find((course) => (course.id === id))
        if (newCourse && coursesInCart.includes(newCourse)) {
            dispatch(uiActions.toggleShowModal({text: "Already exists in the cart", page: 'courseExists'}))
        } else {
            dispatch(courseActions.addCourseToCart(newCourse))
            dispatch(uiActions.toggleShowModal({text: "Course successfully added in the cart", page: 'courseAdded'}))   
        }
    }   

    const addToWishlist = () => {
        dispatch(courseActions.addToWishlist(selectedCourse.id))
        dispatch(uiActions.toggleShowModal({text: 'Course successfully added to wishlist', page: 'checkout'}))
    }

    const checkWishlist = () => {
        const arr = wishlistCourses.find((course => course.id === selectedCourse.id))
        if(arr) setInWishlist(true)
    }

    useEffect(() => {
        checkWishlist()
    })

    return (
        <div>
            <div style={{"display":"flex", "justifyContent":"flex-start"}}>
                <button onClick={() => navigate('/')} className="all-courses">All Courses</button>
                <p className="empty"> {">"} </p>
                <p className="course-name">{selectedCourse.title}</p>
            </div>
            <div style={{"maxHeight": "100vh","height": "100vh"}}>
                <div className="course-detail-banner">
                    <div className="selected-course-name"> {selectedCourse.title}</div>
                    <div className="course-desc">{selectedCourse.courseDescription}</div>
                    <div className="course-auth">{selectedCourse.author}</div>
                    <div className="course-tag">
                        { selectedCourse && selectedCourse.tags && selectedCourse.tags.map(tag => <p key={tag} className="tag-span">{tag}</p>)}
                    </div>
                </div>
                <div className="video-comp">
                    <div className="play-video-symbol"></div>
                </div>
                <div className="course-detail-comp">
                    <div className="course-heading">Course Details</div>
                    <p className="course-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /><br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /><br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /><br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /><br />
                    </p>
                </div>
                <div className="course-bottom-buttons">
                        {selectedCourse.discount > 0 ?
                            <div style={{"textAlign":"left"}}>
                                <p className="price-text">Rs {selectedCourse.price - selectedCourse.price * selectedCourse.discount/100}/-</p>
                                <p className="discount"><s>{`Rs ${selectedCourse.price}/-`}</s></p>
                                {/* <p><span><img src={clockIcon} alt='clock icon' /></span> 8 hourses left for this price</p> */}
                                <div style={{"display":"flex"}}>
                                    <div className="clock-comp"></div>
                                    <div className="discount-time"></div>
                                </div>
                            </div>
                            :
                            <div>
                                <p className="price-text">Rs {selectedCourse.price}/-</p>
                            </div>
                        }
                        <div className="btns">
                            <button onClick={() => addToCart(selectedCourse.id)} className="add-to-cartbtn">ADD TO CART</button>
                            <button disabled={inWishlist} onClick={addToWishlist} className="add-to-wishlist">ADD TO WISHLIST</button>
                        </div>
                    
                </div>
            </div>
        </div>
    )
}

export default CourseDetail
