import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from "../../useContext/auth/auth";
import { useBanned } from "../../useContext/banned/banned";
import { useBiblio } from "../../useContext/biblio/biblio";
import { useEtat } from '../../useContext/etat/etat';

function BibliothecaireMiddleware({ component: Component, ...rest }) {
    const isAuthenticated = useAuth();
    console.log('isAuthenticated: ', isAuthenticated);
    const isBanned = useBanned();
    console.log('isBanned: ', isBanned);
    const isBiblio = useBiblio();
    console.log('isBiblio: ', isBiblio);
    const isEtat = useEtat();
    console.log("isEtat", isEtat);
    return (
        <Route
            {...rest}
            render={props =>

                isAuthenticated ?
                    (isEtat ?
                        (isBanned ?

                            <Redirect to="/banni" />
                            :
                            (isBiblio ?
                                <Component {...props} />
                                : <Redirect to="/home" />
                            )

                        ) : (
                            <Redirect to="/state" />
                        )
                    )
                    : (
                        <Redirect to="/login" />
                    )

            }
        />
    );
}

export default BibliothecaireMiddleware;
