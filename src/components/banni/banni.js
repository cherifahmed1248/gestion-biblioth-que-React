import React from 'react';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";

import { Result, Button, Typography } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
function Banni() {
    const { Paragraph } = Typography;

    return (
        <Result
            status="error"
            title="your account has been banned"
            subTitle="please contact our librarian for more details"
            extra={[

                <Link to="/login" style={{
                    marginLeft: "1%",

                }}>
                    <Button type="primary" key="console">
                        Se connecter
                        </Button>
                </Link>
            ]}
        >
            <div className="desc">
                <Paragraph>

                </Paragraph>
                <Paragraph>
                    <CloseCircleOutlined className="site-result-demo-error-icon" /> Your account has been frozen
      </Paragraph>

            </div>
        </Result>
    )
}
export default Banni;
