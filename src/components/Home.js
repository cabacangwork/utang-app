import React from 'react';
import { NavLink } from "react-router-dom";

function Home() {
    return (
        <div className="home content-area">
            <div className="content">
                <h2 className="title-page">Welcome to <br/>your Utang Manager</h2>
                <NavLink to="/add">Add Utang</NavLink>
                <NavLink to="/list">List of Utang</NavLink>
                <NavLink to="/complete">Paid Utangs</NavLink>
            </div>
        </div>
    );
}

export default Home;