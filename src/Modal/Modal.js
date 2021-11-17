import React from "react";
import "./Modal.css "

const Modal = props => {
    return (
        <div className={`modal__wrapper ${props.isOpened ? 'open' : 'close'}`} style={{...props.style}}>
            <div className="modal__body">
                <div className="modal__close" onClick={props.onModalClose}>x</div>
                <h2>{props.title}</h2>
                <hr/>
                {props.childern}
            </div>
        </div>
    )
}

export default Modal;