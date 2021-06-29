import React from "react"
import {ModalContainer, ModalBg } from "./style"
import ReactDOM from 'react-dom';
import './Modal.css'

export function Modal({ isShowing, hide }){
    return(
        isShowing ? ReactDOM.createPortal(
                <>
                    <div className="modal-overlay" />
                    <div className="modal-wrapper">
                    <div className="modal">
                            <button className="modal-close" onClick={hide}>X</button>
                            <h1>Here you have some tips about the files and formats</h1>
                            <ul>
                                <li>Upload only JSON files</li>
                                <li>The format of the JSON file should be only one key with a list as value
                                <p>An example: {" { key: [1.9303, 2.3903, ...]} "} </p>
                                </li>
                            </ul>
                    </div>
                    </div>
                </>, document.body,
        ): null
    )
}