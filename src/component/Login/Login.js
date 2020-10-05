import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {newContext} from '../../App'
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import loginlogo from '../../image/Group 1329.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons'

const Login = () => {
    const [logInUser, setLogInUser] = useContext(newContext);
    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };
    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const googleSignIn = ()=> {
        var googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then(function(result) {
        const{displayName,email} = result.user;
        const googleNewUser = {displayName, email}
        setLogInUser(googleNewUser)
        history.replace(from)
      })
      .catch(function(error) {
        const errorMessage = error.message;
        console.log(errorMessage)
      });
    }
    
    return (
        <div>
            <div className="container imageStyle">
                <img src={loginlogo} alt=""/>
            </div>
            <div className="container loginFormStyle">
                <h2>Login With</h2>
                <button className="loginButton" onClick={googleSignIn}><FontAwesomeIcon className="iconStyle" icon={ faGooglePlusG }/>Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;