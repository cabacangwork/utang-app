import React, { useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { editDetails, toggleEdit, closePopUp } from '../../store/action-creators';
import SuccessPop from './SuccessPop';

function EditForm(props) {

    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const dispatch = useDispatch();
    
    return(
        <Fragment>
            <div className="pop-component">
                <div className="content-area">
                    <h2 className="title-page">Edit Utang</h2>
                    <div className="current-details">
                        <p>Title: {props.utang.title}</p>
                        <p>Description: {props.utang.description}</p>
                        <p>Utang Payable: ₱  {props.utang.amount}.00</p>                        
                    </div>
                    <form className="form-add" onSubmit={clickEdit}>
                        <div className="form-container">
                            <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="New Utang Title" type="text" name="newTitle" required />
                            <textarea value={newDescription} onChange={(e) => setNewDescription(e.target.value)} placeholder="New Utang Description" name="newDescription" required></textarea>
                        </div>
                        <div className="form-buttons">
                            <button onClick={closeForm}>Cancel</button>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            {
                props.utang.popUp?
                <SuccessPop title="Sucessfully Edited!" popUpClose={popUpClose}/> :
                null
            }
        </Fragment>
    );

    function clickEdit(e) {
        e.preventDefault();
        const newUtang = {
            id: props.utang.id,
            newTitle: newTitle,
            newDescription: newDescription
        }
        dispatch(editDetails(newUtang));
    }

    function closeForm(e) {
        e.preventDefault();
        dispatch(toggleEdit(props.utang.id));
    }

    function popUpClose() {
        dispatch(closePopUp(props.utang.id));
    }

}

export default EditForm;
