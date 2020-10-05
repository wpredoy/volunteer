import React, { useEffect, useState } from 'react';
import './VolunteerServerList.css'

const VolunteerServerList = (props) => {
    const{checkIn,_id} = props.volunteers
    const{name,img} = props.volunteers.fakeVolunteer
    const [success, setSuccess] = useState(false)

    const deleteVolunteer = (_id)=> {
        fetch(`https://limitless-forest-22043.herokuapp.com/deleteId/${_id}`, {
            method: "DELETE"
        })
        .then(res=> res.json())
        .then(data=> {
            setSuccess(true)
        })
    }

    useEffect(()=> {
        props.faceDeleteData();
    },[success])
    return (
        <div>
            <div className="col-md-6">
                <div className="card serverStyle mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-5">
                            <img src={img} className="card-img" style={{width:"100%", height:"auto", padding: "10px"}} alt="..."/>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">{checkIn}</p>
                                <button onClick={()=>deleteVolunteer(_id)} className="btn btn-primary deleteStyle">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerServerList;