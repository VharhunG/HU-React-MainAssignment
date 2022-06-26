import { useDispatch, useSelector } from "react-redux"
import { uiActions } from "../../../Store/ui-slice"
import "./Modal.css"

const Modal = () => {

    const dispatch = useDispatch()

    const modal = useSelector<RootState, {text: string, page: string}>((state: RootState) => state.uiReducer.modal)

    interface RootState {
        uiReducer: {
            modal: {
                text: string,
                page: string
            };
            showTick:boolean;
        }
    }

    return (
            <div className="modal">
                <div className="modal-content">
                    <div className="close-btn" role="close" onClick={() => dispatch(uiActions.toggleShowModal(''))}>X</div>
                    <div className="modal-text">
                        <div>
                           {modal.page === 'checkout' && 
                                <>
                                <div className="modal-div">
                                    <img src="/images/noun_tick_1611480.png" alt="tick"/> 
                                    <p className="modaltext">{modal.text}</p>
                                </div>
                                <button className="add-to-cart" onClick={() => dispatch(uiActions.toggleShowModal(''))}>OK</button>
                                </>
                            }
                           {modal.page === 'courseExists' && 
                                <>
                                    <div className="modal-div">
                                        <img src="/images/noun_exclamation_939973.svg" alt="tick"/> 
                                        <p className="modaltext">{modal.text}</p>
                                    </div>
                                    <p className="course-exsist">{`Course already exist in cart!`}</p>
                                </>
                            }
                           {modal.page === 'courseAdded'  &&
                                <div className="modal-div">
                                    <img src="/images/noun_tick_1611480.png" alt="tick"/>
                                    <p className="modaltext">{modal.text}</p>
                                </div>
                            }
                            {/* { modal.page === 'profile'}  */}
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default Modal
