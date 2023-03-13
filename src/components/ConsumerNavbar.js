import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import "../App.css";

const ConsumerNavbar = () => {
    
    let navigate = useNavigate();
    function handleGoBack(){
        navigate("/");
    }
    
    return (
        <nav className="navbar">
            <img className = "logo" src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png" width="50" height="50"></img>
            <h3 className="title">FoodToGo</h3>
            <ul className="nav-links">
                <Link to="/home" className="home">
                    <li>Home</li>
                </Link>
                <Link to="/searchrestaurant" className="search">
                    <li>Search Restaurants</li>
                </Link>
                <Link to="/search" className="search">
                    <li>Search Items</li>
                </Link>
                <a> <button className='btn btn-light'><span onClick={handleGoBack}> Logout</span></button></a>
            </ul>

        </nav>

    );
};

export default ConsumerNavbar;