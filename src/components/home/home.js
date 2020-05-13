import React from "react";
import AppLayout from "../appLayout/appLayout"
import { getAdherentById } from "../../services/adherents.service"

function Home({ logout }) {
    console.log("home");

    return (
        <AppLayout logout={logout}>
            <div>
                <h1>Page d'Accueil </h1>
                <h3> Bienvenue {getAdherentById(localStorage.getItem('user')).username} à la bibliothèque</h3>    <br />
            </div >
        </AppLayout >

    )
}

export default Home;