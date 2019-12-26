import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { addUtang } from '../store/action-creators';
import SuccessPop from './modals/SuccessPop';

function AddUtang() {
       
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [popUp, setPopUp] = useState(false);

    const dispatch = useDispatch();

    return (
        <div className="content-area">
            <h2 className="title-page">Add New Utang</h2>
            <form className="form-add" onSubmit={handleSubmit}>
                <div className="form-container">
                    <div className="column-left">
                        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Utang Title" type="text" name="title" required />
                        <input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Utang Payable" type="number" name="amount" min="1" required/>
                    </div>
                    <div className="column-right">
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Utang Description" name="description" required></textarea>
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
            {
                popUp?
                <SuccessPop title="Sucessfully Added Utang!!" popUpClose={popUpClose}/> :
                null
            }
        </div>
    );
    
    function popUpClose() {
        setTitle('');
        setDescription('');
        setAmount('');
        setPopUp(false);
    }

    function handleSubmit(e) {
        e.preventDefault();        
        const newUtang = {
            id: Date.now(),
            title: title,
            description: description,
            amount: amount,
            remainingBal: amount,
            editing: false,
            addPayment: false,
            paymentList: [],
            date: moment().subtract(10, 'days').calendar()
        }
        dispatch(
            addUtang(newUtang)
        );
        setPopUp(true);
    }

}

export default AddUtang;