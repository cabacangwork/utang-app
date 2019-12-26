
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PaymentList from './PaymentList';
import DeletePop from './modals/DeletePop';
import { toggleEdit, togglePayment, deleteUtang } from '../store/action-creators';

function UtangDetails(props) {

    const [popUp, setPopUp] = useState(false);
    const dispatch = useDispatch();

    return(
        <div className="details-wrapper">
            <div className="col-left">
                <h3>Description: {props.utang.description}</h3>
                <h3>Date Added: {props.utang.date}</h3>
                <h3>Original Amount: <span>₱ {props.utang.amount}.00</span></h3> 
                <PaymentList list={props.utang}/>
            </div>
            <div className="col-right">
                <div className="option-buttons">
                    <button className="edit-title" 
                        onClick={() => dispatch(toggleEdit(props.utang.id))}>
                        Edit Details
                    </button>
                    <button className="add-payment" 
                        onClick={() => dispatch(togglePayment(props.utang.id))}>
                        Add Payment
                    </button>
                    <button className="delete-utang" 
                        onClick={openModal}>
                        Delete Utang
                    </button>
                </div>
            </div>
            {
                popUp?
                <DeletePop title="Are tou sure you want to delete this Utang?" closeModal={closeModal} handleDelete={handleDelete}/> :
                null
            }
        </div>
    );

    function openModal() {
        setPopUp(true);
    }

    function closeModal() {
        setPopUp(false);
    }

    function handleDelete() {
        dispatch(deleteUtang(props.utang.id));
    }

}

export default UtangDetails;