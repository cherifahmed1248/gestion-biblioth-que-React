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
            title="Votre compte a été banni"
            subTitle="Veillez contacter le bibliothécaire pour plus de détails"
            extra={[

                <Button type="primary" key="console" onClick={() => (logout(), history.push("/login"))}>
                    Se déconnecter
                        </Button>
            ]}
        >
            <div className="desc">
                <Paragraph>

                </Paragraph>
                <Paragraph>
                    <CloseCircleOutlined className="site-result-demo-error-icon" /> Votre compte n'est pas disponible pour le moment
      </Paragraph>

            </div>
        </Result>
    )
}
export default Banni;
