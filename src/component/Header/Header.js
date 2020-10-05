import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../image/Group 1329.png'

const Header = () => {
    return (
        <div className="container bgImage">
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                    <Link to="/" className="navbar-brand"><img src={logo} alt=""/></Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/donation" className="nav-link">Donation</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/events" className="nav-link">Events</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blog" className="nav-link">Blog</Link>
                            </li>
                                <Link to="/login"><button className="registerStyle">Register</button></Link>
                                <Link to="/admin"><button className="adminStyle">Admin</button></Link>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="growByStyle">
                <h1>I grow by helping people in need.</h1>
                    <div className="input-group mb-2 formStyle">
                        <div className="input-group-prepend w-50">
                            <input type="text" className="form-control" placeholder="Search...."/>
                        </div>
                        <div className="input-group-text">Search</div>
                    </div>
            </div>
        </div>
    );
};

export default Header;