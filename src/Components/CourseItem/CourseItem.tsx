
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { courseActions } from '../../Store/course-slice';
import './CourseItem.css'

interface Props {
    id: string;
    title: string;
    author: string;
    price: number;
    addToCart: (id: string) => void;
    tags: [];
    discount: number
}

const CourseItem: React.FC<Props> = (props) => {

    const [inWishlist, setInWishlist] = useState(false)

    const dispatch = useDispatch()

    const navigate = useNavigate();

    interface RootState {
        courseReducer: {
            wishlistCourses: [],
            totalCheckoutAmount: number
        }
    }

    interface CourseState {
        id: string;
        title: string;
        author: string;
        price: number;
        discount: number;
    }

    const wishlistCourses = useSelector<RootState, CourseState[]>((state: RootState) => state.courseReducer.wishlistCourses)

    const addToCart = () => {
        props.addToCart(props.id)
    }

    const navigateToCourse = () => {
        dispatch(courseActions.selectCourse(props.id))
        navigate('/course')
    }

    const addToWishlist = () => {
        dispatch(courseActions.addToWishlist(props.id))
    }

    const checkWishlist = () => {
        const arr = wishlistCourses.find((course => course.id === props.id))
        if(arr) setInWishlist(true)
    }

    useEffect(() => {
        checkWishlist()
    })

    return (
        <div className="course-list">
            <div style={{display:"flex"}}>
                <div className='item-image'></div>
                <div className="item-details">
                    <div className="course-title">{props.title}</div> 
                    <div className='course-tags'>
                        {props.tags.map((tag) => <p className='tag' key={tag}>{tag}</p>)}
                    </div>
                </div>
            </div>
            <div>
                <p className='author'>{props.author}</p>
            </div>
                {!inWishlist ? 
                    <div onClick={addToWishlist} className="grey-star"> </div> :
                    <div className="gold-star"></div>
                }
                <p className='price'>{props.discount > 0 ? `Rs ${props.price - props.price * props.discount/100}/-` : `Rs ${props.price}/-`}</p>
                <p className='discount'>{props.discount > 0 ? <s>{`Rs ${props.price}/-`}</s> : "-" }</p>
                <button onClick={addToCart} className="add-to-cart">ADD TO CART</button>
                <button onClick={navigateToCourse} className="arrow-btn" role="navigate"><img src="/images/rightArrow.png" alt="rightArrow" className='right-arrow' /></button>
    
        </div>
    )
}

export default CourseItem
