
import React from "react";


import {

    Link,

} from "react-router-dom"
function Home(props) {
    console.log("home");

    return (
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
    )
}

export default Home;