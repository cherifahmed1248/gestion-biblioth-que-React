import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from "../../useContext/auth/auth";
function AuthenticationMiddleware({ component: Component, ...rest }) {
    const isAuthenticated = useAuth();


    return (
        <Route
            {...rest}
            render={props =>

                (isAuthenticated === "false" || isAuthenticated === false) ?
                    <Component {...props} />
                    :
                    <Redirect to="/403" />

            }
        />
    );
}

export default AuthenticationMiddleware;
