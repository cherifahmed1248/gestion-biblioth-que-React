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
            subTitle="Sorry, you are not authorized to access this page."
            extra={<Button type="primary"><Link to="/">Back Home</Link></Button>}
        />
    )

}

export default Page403;