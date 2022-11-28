import React, { useContext } from "react";
import { ModalContext } from "./context/ModalContext";


const Modal = () => {
    const {modal, changeMode} = useContext(ModalContext);
    
    return (
        <div className={modal ? "modal show" : "modal"}>
            <div className="modal__content">
                <div className="modal__head">
                    <h3>Rules</h3>
                    <button type="button" className="close-icon"><img src="../images/icon-close.svg" alt="close" onClick={changeMode}/></button>
                </div>
                <div className="modal__body">
                    {/* <img src="../images/image-rules.svg" alt="Game rules"/> */}
                    <img src="../images/image-rules-bonus.svg" alt="Game rules"/>
                </div>
            </div>
        </div>
    )
}

export default Modal;