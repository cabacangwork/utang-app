import React from 'react';

function SuccessPop(props) {

    return (
        <div className="pop-component">
            <div className="animated zoomIn content-area">
                <h2 className="title-page">{props.title}</h2>
                <button className="button-ok" onClick={onClick}>OK</button>
            </div>
        </div>
    );

    function onClick() {
        props.popUpClose();
    }
}

export default SuccessPop; 