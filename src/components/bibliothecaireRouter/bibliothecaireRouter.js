import React from "react"

import 'antd/dist/antd.css';
import './bibliothecaireRouter.css';


import {
    Switch,
    Route,
    Redirect,
    useRouteMatch,
} from "react-router-dom"

import GestionLivre from "../gestionLivre/gestionLivre"
import DetailsLivre from "../detailsLivre/detailsLivre"
import GestionEmpruntsEncours from "../gestionEmpruntsEncours/gestionEmpruntsEncours"
import HistorisqueEmprunt from "../historiqueEmprunt/historiqueEmprunt"


import Gestionadhérents from "../Gestionadhérents/Gestionadhérents"
import AdhérentLivres from "../Gestionadhérents/AdhérentLivres/AdhérentLivres"
import Page404 from "../page404/page404"
import AppLayout from "../appLayout/appLayout"


function BibliothecaireRouter({ logout }) {

    let { path } = useRouteMatch()

    return (
        <AppLayout logout={logout}>

            <Switch>
                <Route exact path={`${path}/`}>
                    <Redirect to={`${path}/gestionLivre`} />
                </Route>
                <Route exact path={`${path}/gestionLivre`}>
                    <GestionLivre />
                </Route>

                <Route exact path={`${path}/gestionLivre/:livreId`}>

                    <DetailsLivre />
                </Route>
                <Route exact path={`${path}/`}>
                    <Redirect to={`${path}/gestionLivre`} />
                </Route>
                <Route exact path={`${path}/gestionadhérents`}>

                    <Gestionadhérents />
                </Route>

                <Route path={`${path}/gestionadhérents/:id`}>

                    <AdhérentLivres />
                </Route>
                <Route path={`${path}/gestionempruntsencours/`}>

                    <GestionEmpruntsEncours />
                </Route>
                <Route path={`${path}/historiqueEmprunts/`}>

                    <HistorisqueEmprunt />
                </Route>
                <Route path={`${path}/`}>
                    <Page404 />
                </Route>
            </Switch>
        </AppLayout>
    )

}

export default BibliothecaireRouter