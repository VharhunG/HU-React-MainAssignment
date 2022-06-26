import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import './ShoppingCart.css'

const ShoppingCart = () => {

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
        
    return (
        <div className="cart-area">
            <div className="your-cart">YOUR CART DETAILS</div>
            <hr></hr>
            <div className="middle-content">
                {coursesInCart.length <= 0 ? (<p className='empty-cart-text'>Your cart is empty right now. Please add courses in the cart from the list</p>) : 
                    coursesInCart.map((course) => {
                        return (
                            <div className="course-list-in-cart course-list " key={course.id}>
                                <div style={{"display":"flex"}}>
                                    <div className='item-image'></div>
                                    <div className='course-title' style={{"marginLeft":"20px"}}>{course.title}</div>
                                </div>
                                <div className="price" style={{"float":"right", "marginRight":"40px"}}>Rs {course.discount > 0 ? course.price - course.price * course.discount/100 : course.price}/-</div>
                            </div>
                        )
                    })
                }
            </div>
            <hr></hr>
            <div style={{"display":"flex", "justifyContent":"space-around"}}>
                <div>
                    <div className='total-cart-value'>Total Cart Value</div> 
                    <div className='total-amt-field'>Rs {checkoutAmount}/-</div>
                </div>
                <div>
                    <div onClick={() => navigate('/checkout')} role='checkout' className="go-to-checkout"></div>
                </div>
                
                
            </div>

        </div>
    )
}

export default ShoppingCart

// import { render, screen } from '@testing-library/react';

// import ShoppingCart from './ShoppingCart';

// describe('ShoppingCart', () => test('renders App component', () => {
//     const mockedUsedNavigate = jest.fn();

//     jest.mock('react-router-dom', () => ({
//        ...jest.requireActual('react-router-dom') as any,
//       useNavigate: () => mockedUsedNavigate,
//     }));
//     render(<ShoppingCart />);
//     screen.debug();
// }
// ));