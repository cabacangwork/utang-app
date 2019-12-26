import React, { Fragment } from 'react';

function PaymentList(props) {
    return (
        <Fragment>
            <h3>Payment Details:</h3>
            {props.list.paymentList.map((payment) => (
                <div className="paid-details" key={payment.paymentId}>
                    <span className="paid">₱ {payment.paymentAmount}.00</span>
                    <span className="note">{payment.paymentNote} ({payment.paymentDate})</span>
                </div>
            ))}
        </Fragment>
    );
}

export default PaymentList; 