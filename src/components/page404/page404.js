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
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary"><Link to="/">Back Home</Link></Button>}
        />
    )

}

export default Page404;