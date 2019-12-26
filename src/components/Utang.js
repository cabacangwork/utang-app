import React, { useState } from 'react';
import UtangDetails from './UtangDetails';

function Utang(props) {

    const [description, setDescription] = useState(false);

    return (
        <div className="content-list">
            <div className="content-info">
                <div className="column-left">
                    <p>
                        <span onClick={() => setDescription(!description) }>
                            <span className={description ? 'shown arrow': 'hidden arrow'}></span>
                            <span>{props.utang.title}</span>
                        </span>
                    </p>
                </div>
                <div className="column-right">
                    <p>₱ {props.utang.remainingBal}.00</p>
                </div>
            </div>
            {description? <UtangDetails utang={props.utang}/> : null}
        </div>
    );
}

export default Utang;