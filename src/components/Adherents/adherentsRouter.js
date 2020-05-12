import React from "react"
import 'antd/dist/antd.css';
import './AdherentsRouter.css';


import {
    Switch,
    Route,
    Redirect,
    useRouteMatch
} from "react-router-dom"

import Emprunt from "../Adherents/emprunt/emprunt"
import DetailsLivre from "../detailsLivre/detailsLivre"
import ListDesEmprunt from "./ListDesEmprunt/ListDesEmprunt"
import HistorisqueEmprunt from "./historisqueEmprunt/historisqueEmprunt"

import Page404 from "../page404/page404"

import AppLayout from "../appLayout/appLayout"
import Profil from "./profil/profil";


function AdherentsRouter({ logout }) {

    let { path } = useRouteMatch()




    return (

        <AppLayout logout={logout}>

            <Switch>
                <Route exact path={`${path}/`}>
                    <Redirect to={`${path}/listeLivre`} />
                </Route>
                <Route exact path={`${path}/listeLivre`}>
                    <Emprunt />
                </Route>

                <Route path={`${path}/listeLivre/:livreId`}>
                    <DetailsLivre role="Adherents" />
                </Route>

                <Route exact path={`${path}/listeLivreEmprunt`}>
                    <ListDesEmprunt />
                </Route>
                <Route exact path={`${path}/historiqueEmprunt`}>
                    <HistorisqueEmprunt />
                </Route>
                historiqueEmprunt
                <Route exact path={`${path}/profil/:Id`}>

                    <Profil />
                </Route>
                <Route path={`${path}/`}>
                    <Page404 />
                </Route>
            </Switch>
        </AppLayout>


    )

}

export default AdherentsRouter