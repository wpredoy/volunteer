import React, { useContext, useEffect, useState } from 'react';
import { newContext } from '../../App';
import VolunteerServerList from '../VolunteerServerList/VolunteerServerList';

const VolunteerToServer = () => {
    const [volunteers, setVolunteers] = useState([]);
    const [logInUser, setLogInUser] = useContext(newContext);
    const faceDeleteData =()=> {
        fetch('https://limitless-forest-22043.herokuapp.com/volunteerlist?email='+logInUser.email)
        .then(res=> res.json())
        .then(data=> {
            setVolunteers(data)
        })
    }

    useEffect(()=> {
        faceDeleteData();
    },[])
    return (
        <div className="container">
            <div className="row">
            {
                volunteers.map(volunteers=><VolunteerServerList key={volunteers._id} volunteers={volunteers} faceDeleteData={faceDeleteData}></VolunteerServerList>)
            }
            </div>
        </div>
    );
};

export default VolunteerToServer;