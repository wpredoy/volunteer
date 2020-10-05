import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import fake from '../../fakeData'
import biglogo from '../../image/Group 1329.png'
import './Register.css'
import "react-datepicker/dist/react-datepicker.css";
import { newContext } from '../../App';

const Register = () => {
    const [logInUser, setLogInUser] = useContext(newContext);
    const{fakeid} = useParams()
    const fakeVolunteer = fake.find(fake=>fake.id === fakeid)
    const {name,title} = fakeVolunteer;
    const history = useHistory()
        // date formate
        const [startDate, setSartdDate] = useState({
            checkIn: new Date()
        });
        const handelDateChange = (date)=> {
            const newDates = {...startDate}
            newDates.checkIn = date.target.value;
            setSartdDate(newDates)
        }
        // submitform
        const { register, handleSubmit, errors } = useForm();
        const onSubmit = () => {
            const newVolunteer = {...logInUser, ...startDate, fakeVolunteer};
            fetch("https://limitless-forest-22043.herokuapp.com/volunteer", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(newVolunteer)
            })
            .then(data=> {
                history.push("/serverItem")
                 ;})
        };
    return (
        <div className="container">
            <div style={{textAlign: "center", paddingTop: "80px"}}>
                <img src={biglogo} style={{width:"350px"}} alt=""/>
            </div>
            <div style={{marginLeft: "20px"}}>
                <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                    {/* name filed */}
                    <input name="name" defaultValue={logInUser.displayName} ref={register({ required: true })} placeholder="Name" />
                        {errors.name && <span className="error">Name is required</span>}
                    {/* Email filed */}
                    <input name="email" defaultValue={logInUser.email} ref={register({ required: true })} placeholder="Email"/>
                        {errors.email && <span className="error">Email is required</span>}
                    {/* Date filed */}
                    <input type="date" name="date" ref={register({ required: true })} selected={startDate.checkIn} onChange={handelDateChange}/>
                        {errors.date && <span className="error">Date is required</span>}
                    {/* description filed */}
                    <input name="description" defaultValue={name} ref={register({ required: true })} placeholder="Description"/>
                        {errors.description && <span className="error">Description is required</span>}
                    {/* organize filed */}
                    <input name="organize" defaultValue={title} ref={register({ required: true })} placeholder="Organize books at the library"/>
                        {errors.organize && <span className="error">Organize is required</span>}
                        
                    <button type="submit" className="submitButtonStyle">Registration</button>
                </form>
            </div>
        </div>
    );
};

export default Register;