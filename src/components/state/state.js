import React from 'react';
import 'antd/dist/antd.css';
import { useHistory } from 'react-router-dom';

import { Result, Button } from 'antd';
function State({ logout }) {
    const history = useHistory();

    return (
        <Result
            status="error"
            title="Votre demande d'inscription n'est pas encore traitée"
            subTitle="veillez patienter jusqu'à ce que vous serez accepté par l'administrateur"
            extra={[


                <Button type="primary" key="console" onClick={() => (logout(), history.push("/login"))}>
                    Se déconnecter
                        </Button>
            ]}
        >

        </Result>
    )
}
export default State;
