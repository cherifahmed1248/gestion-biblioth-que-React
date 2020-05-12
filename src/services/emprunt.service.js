import { getLivreById } from './livres.service';
import { getAdherentById } from './adherents.service';

var emprunts = [
    {
        "key": 0,
        "idUser": 2,
        "idLivre": 21,
        "dateEmprunt": "02/20/2020",
        "dateRetour": "04/20/2021"
    },
    {
        "key": 1,
        "idUser": 2,
        "idLivre": 22,
        "dateEmprunt": "04/29/2020",
        "dateRetour": ""
    },
    {
        "key": 2,
        "idUser": 3,
        "idLivre": 31,
        "dateEmprunt": "03/25/2020",
        "dateRetour": "04/23/2020"
    },
    {
        "key": 3,
        "idUser": 3,
        "idLivre": 32,
        "dateEmprunt": "04/25/2020",
        "dateRetour": "05/03/2020"
    },
    {
        "key": 4,
        "idUser": 1,
        "idLivre": 31,
        "dateEmprunt": "03/25/2020",
        "dateRetour": "03/29/2020"
    },
    {
        "key": 5,
        "idUser": 1,
        "idLivre": 32,
        "dateEmprunt": "04/25/2020",
        "dateRetour": "05/03/2020"
    },
    {
        "key": 6,
        "idUser": 41,
        "idLivre": 32,
        "dateEmprunt": "02/20/2020",
        "dateRetour": ""
    },

    {
        "key": 7,
        "idUser": 41,
        "idLivre": 1,
        "dateEmprunt": "04/30/2020",
        "dateRetour": ""
    },
    {
        "key": 8,
        "idUser": 41,
        "idLivre": 22,
        "dateEmprunt": "04/30/2019",
        "dateRetour": "06/01/2019"
    },
]
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy;

export function getLivresEmprunts() {
    const Liste = emprunts.filter((e) => (e.dateRetour === ""));
    var test = false

    test = Liste.map(L => test = (
        {
            id: Number(L.key), idUser: L.idUser, userName: getAdherentById(L.idUser).username,
            idLivre: L.idLivre, title: getLivreById(L.idLivre).title,
            auteur: getLivreById(L.idLivre).auteur,
            dateEmprunt: L.dateEmprunt, dateRetour: L.dateRetour,
            etat: testRetard(today, L.dateEmprunt)

        }))
    console.log('test: ', test);
    return test
    return Liste
}
export function getHistoriqueDesEmprunts() {
    const Liste = emprunts.filter((e) => (e.dateRetour !== ""));
    var test = false

    test = Liste.map(L => test = (
        {
            id: Number(L.key), idUser: L.idUser,
            idLivre: L.idLivre, title: getLivreById(L.idLivre).title,
            auteur: getLivreById(L.idLivre).auteur,
            dateEmprunt: L.dateEmprunt, dateRetour: L.dateRetour,
            etat: testRetard(L.dateRetour, L.dateEmprunt)

        }))
    console.log('test: ', test);
    return test
}
export function getLivresByAdhérentId(id) {
    const Liste = emprunts.filter((e) => Number(e.idUser) === Number(id));
    return Liste
}
export function getLivresEncoursByAdhérentId(Id) {
    console.log('Id: ', Id);

    var Liste = emprunts.filter((e) => (Number(e.idUser) === Number(Id) && e.dateRetour === ""));
    var test = false

    test = Liste.map(L => test = (
        {
            id: Number(L.key), idUser: L.idUser,
            idLivre: L.idLivre, title: getLivreById(L.idLivre).title,
            auteur: getLivreById(L.idLivre).auteur,
            dateEmprunt: L.dateEmprunt, dateRetour: L.dateRetour,
            etat: testRetard(today, L.dateEmprunt)

        }))
    console.log('test: ', test);
    return test
}
export function getHistorieByAdhérentId(id) {
    const Liste = emprunts.filter((e) => (Number(e.idUser) === Number(id) && e.dateRetour !== ""));
    var test = false

    test = Liste.map(L => test = (
        {
            id: Number(L.key), idUser: L.idUser,
            idLivre: L.idLivre, title: getLivreById(L.idLivre).title,
            auteur: getLivreById(L.idLivre).auteur,
            dateEmprunt: L.dateEmprunt, dateRetour: L.dateRetour,
            etat: testRetard(L.dateRetour, L.dateEmprunt)

        }))
    console.log('test: ', test);
    return test
}
export function CountLivresById(id) {
    const Liste = emprunts.filter((e) => Number(e.idLivre) === Number(id));
    return (Liste.length)

}
export function testRetard(dr, de) {
    var date1 = new Date(de);
    console.log('date1: ', date1);
    var date2 = new Date(dr);
    console.log('date2: ', date2);
    // différence des seconde
    var time_diff = date2.getTime() - date1.getTime();
    // différence de jours
    var days_Diff = time_diff / (1000 * 3600 * 24);

    return Math.floor(days_Diff);
}
export function retournerLivreByIdEmprunt(Id) {
    console.log('Id: ', Id);
    emprunts = emprunts.map(L => L.key === Number(Id) ? (
        {
            key: L.key, idUser: L.idUser,
            idLivre: L.idLivre, dateEmprunt: L.dateEmprunt,
            dateRetour: today
        }) : L)

    console.log('emprunts: ', emprunts);
    return emprunts
}
export function empruntLivre(data) {
    var resultat = false;
    if ((getLivresEncoursByAdhérentId(data.idUser).length) < 2) {
        emprunts = [
            ...emprunts,
            {
                key: emprunts.length, idUser: data.idUser,
                idLivre: data.idLivre, dateEmprunt: today,
                dateRetour: ""
            }
        ]
        console.log(emprunts)
        resultat = true
    }

    return resultat


}