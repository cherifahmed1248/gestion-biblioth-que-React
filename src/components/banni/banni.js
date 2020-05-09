import React from 'react';
import 'antd/dist/antd.css';
import { useHistory } from "react-router-dom";

import { Result, Button, Typography } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
function Banni({ logout }) {
    const { Paragraph } = Typography;
    const history = useHistory();
    return (
        <Result
            status="error"
            title="your account has been banned"
            subTitle="please contact our librarian for more details"
            extra={[

                <Button type="primary" key="console" onClick={() => (logout(), history.push("/login"))}>
                    Logout
                        </Button>
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
