import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { courseActions } from "../../Store/course-slice"
import { uiActions } from "../../Store/ui-slice"
import "./Checkout.css"

const Checkout: React.FC = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate();

    interface RootState {
        courseReducer: {
            coursesInCart: [],
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

    const coursesInCart = useSelector<RootState, CourseState[]>((state: RootState) => state.courseReducer.coursesInCart)
    const checkoutAmount = useSelector<RootState, number>((state: RootState) => state.courseReducer.totalCheckoutAmount)

    const calcAmount = () => {
        const obj = {
            amount: 0,
            isDiscount: false
        }
        coursesInCart.forEach(course => {
            obj.amount += course.price
            if (course.discount > 0) obj.isDiscount = true
        });
        return obj
    }
    const totalAmount = calcAmount()

    const checkout = () => {
        if(checkoutAmount > 0){
            dispatch(courseActions.checkoutCart())
            dispatch(uiActions.toggleShowModal({ text: 'You have successfully placed your order', page: 'checkout'}))
            navigate('/')
        }
    }

    const addToWishlist = (id: string) => {
        dispatch(courseActions.removeCourseFromCart(id))
        dispatch(courseActions.addToWishlist(id))
    }

    const deleteFromCart = (id: string) => {
        dispatch(courseActions.removeCourseFromCart(id))
    }

    useEffect(() => {
        dispatch(uiActions.changeBannerText('Shopping Cart'))
    }, [dispatch])

    return (
        <div>
            <p className="cart-item-message"> {coursesInCart.length} courses in cart</p>

            <div style={{display:"flex"}}>
                <div style={{flex:"3"}}>
                {coursesInCart.length <= 0 ? (<p>your cart is currently empty</p>) : 
                    coursesInCart.map((course) => {
                        return (
                            <div className="course-list" key={course.id}>
                                <div style={{display:"flex","flex":"1"}}>
                                    <div className="item-image"></div>
                                    <div className="item-details">
                                        <div className="course-title">{course.title}</div>
                                        <div className="course-author">{course.author}</div>
                                    </div>
                                </div>
                                <div style={{"display":"flex","alignItems": "center","justifyContent": "space-around","flex":"1"}}>
                                    
                                    <button onClick={() => addToWishlist(course.id)} className="wishlist-text">Move to WishList</button>
                                    <div className="course-price">Rs.{course.discount > 0 ? course.price - course.price * course.discount/100 : course.price}/-</div>
                                    <button onClick={() => deleteFromCart(course.id)} className="delete-btn"><img src="/images/delete icon.svg" alt="delete icon" /></button>
                                </div>
                                
                            </div>
                        )
                    })
                }
                {/* reccommended courses */}
                </div>
                <div style={{flex:"1"}} className="total-amt-comp">
                    <p className="total-amt-text">Total Amount</p>
                    <p className="total-amt-field">Rs {checkoutAmount}/- </p>
                    <div className="green-text">{totalAmount.isDiscount ? <p>You have saved Rs {totalAmount.amount - checkoutAmount}/-</p> : null}</div>
                    <div className="checkout-btn" role={"checkout"} onClick={checkout}>CHECKOUT</div>
                </div>
            </div>

        </div>
    )
}

export default Checkout
