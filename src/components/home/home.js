
import React from "react";
import AppLayout from "../appLayout/appLayout"


import {

    Link,

} from "react-router-dom"
function Home({ logout }) {
    console.log("home");

    return (
        <AppLayout logout={logout}>

            <div>
                <h1>Home Page </h1>
                {localStorage.getItem('user')}    <br />
                <Link to="/bibliothecaire/gestionLivre"  >
                    Gestion livre
        </Link>
                <br />
                <Link to="/bibliothecaire/gestionadhérents"  >
                    gestionadhérents
        </Link>
            </div >
        </AppLayout >

    )
}

export default Home;