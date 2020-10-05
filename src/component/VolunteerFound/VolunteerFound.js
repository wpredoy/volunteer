import React from 'react';
import './VolunteerFound.css'
import { Link } from 'react-router-dom';

const VolunteerFound = (props) => {
    const {name,img,id} = props.help;
    return (
        <div>
            <div className="col-md-4">
                <div className="card cardStyle">
                    <Link to={`/register/${id}`}>
                        <img src={img} style={{width: "100%", margin: "auto"}} alt=""/>
                    </Link>
                    <div className="card-body ">
                        <h4 className="card-title">{name}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerFound;