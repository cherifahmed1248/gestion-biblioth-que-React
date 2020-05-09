var emprunts = [
    {
        "key": 0,
        "idUser": 2,
        "idLivre": 21,
        "dateEmprunt": "02/20/2020",
        "dateRetour": "03/20/2021"
    },
    {
        "key": 1,
        "idUser": 2,
        "idLivre": 22,
        "dateEmprunt": "04/22/2020",
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
    }
]
export function getLivresByAdhérentId(id) {
    const Liste = emprunts.filter((e) => Number(e.idUser) === Number(id));
    return Liste
}
export function testRetard(dr, de) {
    var date1 = new Date(de);
    var date2 = new Date(dr);
    // différence des heures
    var time_diff = date2.getTime() - date1.getTime();
    // différence de jours
    var days_Diff = time_diff / (1000 * 3600 * 24);
    return days_Diff;
}