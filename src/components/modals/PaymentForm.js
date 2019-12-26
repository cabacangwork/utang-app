import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import {addPayment, togglePayment, deleteUtang, completeUtang} from '../../store/action-creators';

function PaymentForm(props) {

    const [paymentAmount, setPaymentAmount] = useState('');
    const [paymentNote, setPaymentNote] = useState('');

    const dispatch = useDispatch();

    return(
        <div className="pop-component">
            <div className="content-area">
                <h2 className="title-page">Add Payment</h2>
                <div className="current-details">
                    <p>Add Payment for: {props.utang.title}</p>
                    <p>Current Balance: ₱  {props.utang.remainingBal}.00</p>                        
                </div>
                <form className="form-add" onSubmit={clickAdd}>
                    <div className="form-container">
                        <input value={paymentAmount} onChange={(e) => setPaymentAmount(e.target.value)} placeholder="Payment Amount" type="number" name="paymentAmount" min="1" max={props.utang.remainingBal} required/>
                        <textarea value={paymentNote} onChange={(e) => setPaymentNote(e.target.value)} placeholder="Payment Note" name="paymentNote" required></textarea>
                    </div>
                    <div className="form-buttons">
                        <button onClick={clickClose}>Cancel</button>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );

    function handlePay() {
        const newUtang= {
            id: props.utang.id,
            paymentId: Date.now(),
            paymentAmount: paymentAmount,
            paymentNote: paymentNote,
            paymentDate: moment().subtract(10, 'days').calendar()
        }
        dispatch(addPayment(newUtang));
    }

    function clickAdd(e) {
        e.preventDefault();
        if (paymentAmount == props.utang.remainingBal) {
            const completePaid = {
                id: Date.now(),
                title: props.utang.title,
                description: props.utang.description,
                amount: props.utang.amount,
                date: props.utang.date,
                lastPay: paymentAmount,
                lastNote: paymentNote,
                lastDate: moment().subtract(10, 'days').calendar(),
                paymentHistory: props.utang.paymentList
            }
            alert('Congratulations your Utang is now Completed!!! \n You can now Utang again! \n This Utang will be Deleted from your List')
            dispatch(completeUtang(completePaid));
            dispatch(deleteUtang(props.utang.id));
        }
        else {
            handlePay();
        }
    }

    function clickClose(e) {
        e.preventDefault();
        dispatch(togglePayment(props.utang.id));
    }

}

export default PaymentForm;