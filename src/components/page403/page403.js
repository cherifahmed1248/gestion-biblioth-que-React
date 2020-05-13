import React from 'react';
import 'antd/dist/antd.css';
import './page403.css';
import { Link } from "react-router-dom"

import { Result, Button } from 'antd';

function Page403() {
    return (
        <Result
            status="403"
            title="403"
            subTitle="Désolé mais vous n'êtes pas autorisés à accéder à cette page."
            extra={<Button type="primary"><Link to="/">Accueil</Link></Button>}
        />
    )

}

export default Page403;