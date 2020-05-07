import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from "../auth/auth";
import { useAuthorised } from "../authorised/authorised";
import { useBiblio } from "../biblio/biblio";

function PrivateRoute({ component: Component, ...rest }) {
    const isAuthenticated = useAuth();
    console.log('isAuthenticated: ', isAuthenticated);
    const isAuthorised = useAuthorised();
    console.log('isAuthorised: ', isAuthorised);
    const isBiblio = useBiblio();
    console.log('isBiblio: ', isBiblio);
    return (
        <Route
            {...rest}
            render={props =>

                isAuthenticated ?
                    (isAuthorised ?
                        <Component {...props} />
                        : <Redirect to="/banni" />

                    ) : (
                        <Redirect to="/login" />
                    )
            }
        />
    );
}

export default PrivateRoute;
