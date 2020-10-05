import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { newContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [logInUser, setLogInUser] = useContext(newContext)
    return (
        <Route
          {...rest}
          render={({ location }) =>
          logInUser.email ||logInUser.displayName ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
};

export default PrivateRoute;