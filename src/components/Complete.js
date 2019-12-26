import React from 'react';
import {useSelector} from 'react-redux';

function UtangList() {

    const complete_list = useSelector(state => state.paidUtangs.completeList);
    
    return (
        <div className="complete list-page content-area">
            <h2 className="title-page">List of my Completed Utangs</h2>
            <div className="list-table">
                <div className="header">
                    <div className="column-one">
                        <h3>Title</h3>
                    </div>
                    <div className="column-two">
                        <h3>Payment History</h3>
                    </div>
                    <div className="column-three">
                        <h3>Utang Amount</h3>
                    </div>
                </div>
                {
                    (complete_list).length >= 1 ?
                        complete_list.map((complete) => (
                            <div key={complete.id} className="content-list">    
                                <div className="content-info">     
                                    <div className="column-one">
                                        <p>{complete.title}</p>
                                        <p>{complete.description}</p>
                                        <p>{complete.date}</p>
                                    </div>
                                    <div className="column-two">
                                        {(complete.paymentHistory).map((history) => (
                                            <p key={history.paymentId}>
                                                {history.paymentNote} = <span>₱ {history.paymentAmount}.00 ({history.paymentDate})</span>
                                            </p>
                                        ))}
                                        <p key={history.paymentId}>
                                            {complete.lastNote} = <span>₱ {complete.lastPay}.00 ({complete.lastDate})</span>
                                        </p>
                                    </div>
                                    <div className="column-three">
                                        <p>₱ {complete.amount}.00</p>
                                    </div>  
                                </div>             
                            </div>
                        )):
                        <div className="no-item">
                            <h2>Currently You Have No Completed Utang</h2>
                        </div>
                }
            </div>
        </div>
    );

}
  

export default UtangList;