import React, { useEffect, useState } from 'react';
import './AdminHome.css'


const AdminHome = (props) => {
    const{displayName,email,checkIn,_id}= props.admin
    const{name} = props.admin.fakeVolunteer
    const [adminDelete, setaAminDelete] = useState(false)

    const handelDeleteButton =(_id)=> {
        fetch(`https://limitless-forest-22043.herokuapp.com/deleteId/${_id}`, {
            method: "DELETE"
        })
        .then(res=> res.json())
        .then(data=> {
            setaAminDelete(true)
        })
    }

    useEffect(()=> {
        props.handelDeleteButton()
    },[adminDelete])

    return (
        <div>
            <div >
                <table className="table table-primary">
                <thead>
                    <tr>
                        <th scope="col">{displayName}</th>
                        <th scope="col">{email}</th>
                        <th scope="col">{checkIn}</th>
                        <th scope="col">{name}</th>
                        <th scope="col"><button className="adminDelete" onClick={()=>handelDeleteButton(_id)}>Delete</button></th>
                    </tr>
                    </thead>
                </table>
            </div>
        </div>
    );
};

export default AdminHome;