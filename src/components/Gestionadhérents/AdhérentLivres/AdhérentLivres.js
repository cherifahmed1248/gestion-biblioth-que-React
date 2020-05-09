import React, { } from 'react';
import './AdhérentLivres.css';
import { Descriptions, PageHeader, Result } from 'antd';
import 'antd/dist/antd.css';
import { useRouteMatch, useHistory } from "react-router-dom"
import { getLivresByAdhérentId, testRetard } from '../../../services/emprunt.service';
import { getLivreById } from '../../../services/livres.service';
function AdhérentLivres() {
    let { params } = useRouteMatch()
    let history = useHistory();
    const List = getLivresByAdhérentId(params.id);
    // Liste des livres qui ne sont pas en retard 
    var i = 0;
    var Liste = List.map(function (element) {
        const livre = getLivreById(element.idLivre);
        i++;
        if (element.dateRetour) {
            // Liste des livres qui sont déjà rendu
            let nbj = testRetard(element.dateRetour, element.dateEmprunt);
            if (nbj <= 15) {
                return <Descriptions title={"Livre" + i} size="default" key={i} bordered>
                    <Descriptions.Item label="Titre " >{livre.title}</Descriptions.Item>
                    <Descriptions.Item label="date d'emprunt " >{element.dateEmprunt}</Descriptions.Item>
                    <Descriptions.Item label="date de retour "  >{element.dateRetour}</Descriptions.Item>
                </Descriptions>;
            }
        } else {
            // Liste des livres non encore rendu
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            today = mm + "/" + dd + "/" + yyyy;
            console.log("date= ", today)
            let nbj = testRetard(today, element.dateEmprunt);
            if (nbj <= 15) {
                return <Descriptions title={"Livre" + i} size="default" key={i} bordered>
                    <Descriptions.Item label="Titre " >{livre.title}</Descriptions.Item>
                    <Descriptions.Item label="date d'emprunt " >{element.dateEmprunt}</Descriptions.Item>
                    <Descriptions.Item label="Retard "  >Reste {15 - nbj} jours</Descriptions.Item>
                </Descriptions>;
            }
        }
    })
    var j = 0;
    var ListeRetard = List.map(function (element) {
        const livre = getLivreById(element.idLivre);
        j++;
        if (element.dateRetour) {
            // Liste des livres qui sont déjà rendu en retard
            let nbj = testRetard(element.dateRetour, element.dateEmprunt);
            if (nbj > 15) {
                return <Descriptions title={"Livre" + j} size="default" key={j} bordered>
                    <Descriptions.Item label="Titre " >{livre.title}</Descriptions.Item>
                    <Descriptions.Item label="date d'emprunt " >{element.dateEmprunt}</Descriptions.Item>
                    <Descriptions.Item label="Retard "  >Retard de {nbj} jours </Descriptions.Item>
                </Descriptions>;
            }
        } else {
            // Liste des livres non pas encore rendu mais déjà en retard
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            today = mm + "/" + dd + "/" + yyyy;
            console.log("date= ", today)
            let nbj = testRetard(today, element.dateEmprunt);
            if (nbj > 15) {
                return <Descriptions title={"Livre" + j} size="default" key={j} bordered>
                    <Descriptions.Item label="Titre " >{livre.title}</Descriptions.Item>
                    <Descriptions.Item label="Date d'emprunt " >{element.dateEmprunt}</Descriptions.Item>
                    <Descriptions.Item label="Retard "  >Retard {nbj - 15} jours</Descriptions.Item>
                </Descriptions>;
            }
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
            {Liste.length === 0 && ListeRetard.length === 0 ?
                <Result
                    status="warning"
                    title="Cet adhérent n'a emprunté aucun livre"
                /> : (Liste[1] !== undefined) ?
                    <> <h3>Liste des emprunts non retardé</h3> {Liste}  </> :
                    console.log("erreur L")
            }
            {console.log("listeR=", ListeRetard)}
            {Liste.length === 0 && ListeRetard.length === 0 ?
                console.log("déjà affiché")
                : (ListeRetard[0] !== undefined) ?
                    <> <h3>Liste des emprunts en retard</h3> {ListeRetard} </> :
                    console.log("erreur R ")
            }
        </>
    );
}
export default AdhérentLivres;