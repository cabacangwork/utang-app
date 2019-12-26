import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Utang from './Utang';
import EditForm from './modals/EditForm';
import PaymentForm from './modals/PaymentForm';

function UtangList() {

    const utang_list = useSelector(state => state.activeUtangs.list);
    
    return (
        <div className="list-page content-area">
            <h2 className="title-page">List of my Active Utangs</h2>
            <div className="list-table">
                <div className="header">
                    <div className="column-left">
                        <h3>Title</h3>
                    </div>
                    <div className="column-right">
                        <h3>Utang Balance</h3>
                    </div>
                </div>
                {
                    (utang_list).length >= 1 ?
                        utang_list.map((utang) => (
                            <Fragment key={utang.id}>                        
                                <Utang utang={utang} />
                                {
                                    utang.editing ?
                                        <EditForm utang={utang}/>
                                        :
                                            ( 
                                            utang.addPayment ?
                                                <PaymentForm utang={utang} />
                                                :
                                                null
                                            )
                                }
                            </Fragment>)):
                    <div className="no-item">
                        <h2>Currently You Have No Active Utang</h2>
                    </div>
                }
            </div>
        </div>
    );

}
  

export default UtangList;