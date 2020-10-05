import React, {useEffect, useState } from 'react';
import AdminHome from '../AdminHome/AdminHome';
import adminlogo from '../../image/Group 1329.png'
import { Link } from 'react-router-dom';


const Admin = () => {
    const [admin, setAdmin] = useState([])
    
    const handelDeleteButton=()=> {
        fetch("https://limitless-forest-22043.herokuapp.com/aladmin")
        .then(res=> res.json())
        .then(data=>{
            setAdmin(data)
        })
    }

    useEffect(()=> {
        handelDeleteButton();
    },[])
    return (
        <div className="container">
            <div style={{textAlign:"center", marginBottom: "20px"}}>
                <Link to="/home"><img src={adminlogo} style={{height:"80px"}} alt=""/></Link>
            </div>
                {
                    admin.map(admin=><AdminHome handelDeleteButton={handelDeleteButton} key={admin._id} admin={admin} ></AdminHome>)
                }
        </div>
    );
};

export default Admin;