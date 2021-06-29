import React from "react"
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
                            <h1>Here you have some tips about the files and formats:</h1>
                                <h3>Upload only JSON files</h3>
                                <h3>The format of the JSON file should be only one key with a list as value </h3>
                                <p>An example: {" { key: [1.9303, 2.3903, ...]} "} </p>
                    </div>
                    </div>
                </>, document.body,
        ): null
    )
}