import React from 'react';
import 'antd/dist/antd.css';
import './page404.css';
import { Link } from "react-router-dom"

import { Result, Button } from 'antd';

function Page404() {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Désolé mais la page que vous êtes en train de chercher n'existe pas."
            extra={<Button type="primary"><Link to="/">Accueil</Link></Button>}
        />
    )

}

export default Page404;