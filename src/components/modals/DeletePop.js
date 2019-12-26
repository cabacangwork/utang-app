import React from 'react';

function DeletePop(props) {

    return (
        <div>
            <div className="delete pop-component">
                <div className="animated zoomIn content-area">
                    <h2 className="title-page">{props.title}</h2>
                    <div className="buttons">
                        <button className="button-ok" onClick={onYes}>YES</button>
                        <button className="button-ok" onClick={onCancel}>CANCEL</button>
                    </div>
                </div>
            </div>
        </div>
    );

    function onYes() {
        props.handleDelete();
    }

    function onCancel() {
        props.closeModal();
    }
}

export default DeletePop; 