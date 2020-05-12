import React, { } from 'react';
import './AdhérentLivres.css';
import { Descriptions, PageHeader, Result } from 'antd';
import 'antd/dist/antd.css';
import { useRouteMatch, useHistory } from "react-router-dom"
import { getLivresEncoursByAdhérentId, testRetard } from '../../../services/emprunt.service';
import { getLivreById } from '../../../services/livres.service';
function AdhérentLivres() {

    let { params } = useRouteMatch()
    let history = useHistory();
    const List = getLivresEncoursByAdhérentId(params.id);
    // Liste des livres qui ne sont pas en retard 
    var i = 0;
    var Liste = List.map(function (element) {
        const livre = getLivreById(element.idLivre);
        i++;

        if (element.etat <= 15) {
            return <Descriptions title={"Livre" + i} size="default" key={i} bordered>
                <Descriptions.Item label="Titre " >{livre.title}</Descriptions.Item>
                <Descriptions.Item label="date d'emprunt " >{element.dateEmprunt}</Descriptions.Item>
                <Descriptions.Item label="Etat "  >Reste {15 - element.etat} jours</Descriptions.Item>
            </Descriptions>;
        } else {
            return <Descriptions title={"Livre" + i} size="default" key={i} bordered>
                <Descriptions.Item label="Titre " >{livre.title}</Descriptions.Item>
                <Descriptions.Item label="Date d'emprunt " >{element.dateEmprunt}</Descriptions.Item>
                <Descriptions.Item label="Etat "  >Retard {element.etat - 15} jours</Descriptions.Item>
            </Descriptions>;
        }

    })
    return (
        <>
            <PageHeader
                className="site-page-header"
                onBack={() => history.goBack()}
                title="Liste des empruntes de cet adhérent"
            />
            {console.log("liste=", List)}
            {Liste.length === 0 ?
                <Result
                    status="warning"
                    title="Cet adhérent n'a emprunté aucun livre"
                /> :
                <>
                    <h3> Liste des emprunts encours</h3>
                    {Liste}  </>
            }
        </>
    );
}
export default AdhérentLivres;