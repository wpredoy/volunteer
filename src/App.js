import React, { createContext, useState } from 'react';
import './App.css';
import Header from './component/Header/Header';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Nomatch from './component/Nomatch/Nomatch';
import Volunteer from './component/Volunteer/Volunteer';
import Register from './component/Register/Register';
import Login from './component/Login/Login';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import VolunteerToServer from './component/VolunteerToServer/VolunteerToServer';
import Admin from './component/Admin/Admin';


export const newContext = createContext()

function App() {
  const [logInUser, setLogInUser] = useState({})
  return (
    <newContext.Provider value={[logInUser, setLogInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
          <Header></Header>
          <Volunteer></Volunteer>
          </Route>
          <PrivateRoute path="/register/:fakeid">
            <Register></Register>
          </PrivateRoute>
          <Route path="/serverItem">
              <VolunteerToServer></VolunteerToServer>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/admin">
              <Admin></Admin>
          </Route>
          <Route exact path="/">
            <Header></Header>
            <Volunteer></Volunteer>
          </Route>
          <Route path="*">
              <Nomatch></Nomatch>
          </Route>
        </Switch>
      </Router>
    </newContext.Provider>
  );
}

export default App;
