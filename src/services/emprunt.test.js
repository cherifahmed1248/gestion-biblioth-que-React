const { getLivresEmprunts, getHistoriqueDesEmprunts, getLivresByAdhérentId,
    getLivresEncoursByAdhérentId, getHistorieByAdhérentId, CountLivresById, testRetard,
    retournerLivreByIdEmprunt, empruntLivre } = require('./emprunt.service');
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
describe("test of emprunt service", () => {
    test(" getLivresEmprunts ", async () => {
        const expected = [
            {
                id: 1,
                idUser: 2,
                userName: 'John Brown 2',
                idLivre: 22,
                title: 'Livre 22',
                auteur: 'Mathieu Nebra',
                dateEmprunt: '04/29/2020',
                dateRetour: '',
                etat: 91
            },
            {
                id: 6,
                idUser: 41,
                userName: 'John Brown 4',
                idLivre: 32,
                title: 'Livre 32',
                auteur: 'Mathieu Nebra',
                dateEmprunt: '02/20/2020',
                dateRetour: '',
                etat: 159
            },
            {
                id: 7,
                idUser: 41,
                userName: 'John Brown 4',
                idLivre: 1,
                title: 'Réalisez votre site web avec HTML 5 et CSS 3',
                auteur: 'Mathieu Nebra',
                dateEmprunt: '04/30/2020',
                dateRetour: '',
                etat: 90
            }]

        expect(await getLivresEmprunts()).toStrictEqual(expected)
    })
    test(" getHistoriqueDesEmprunts ", async () => {
        const expected = [
            {
                id: 0,
                idUser: 2,
                idLivre: 21,
                title: 'Livre 21',
                auteur: 'Ahmed',
                dateEmprunt: '02/20/2020',
                dateRetour: '04/20/2021',
                etat: 424
            },
            {
                id: 2,
                idUser: 3,
                idLivre: 31,
                title: 'Livre 31',
                auteur: 'Mathieu Nebra',
                dateEmprunt: '03/25/2020',
                dateRetour: '04/23/2020',
                etat: 28
            },
            {
                id: 3,
                idUser: 3,
                idLivre: 32,
                title: 'Livre 32',
                auteur: 'Mathieu Nebra',
                dateEmprunt: '04/25/2020',
                dateRetour: '05/03/2020',
                etat: 8
            },
            {
                id: 4,
                idUser: 1,
                idLivre: 31,
                title: 'Livre 31',
                auteur: 'Mathieu Nebra',
                dateEmprunt: '03/25/2020',
                dateRetour: '03/29/2020',
                etat: 4
            },
            {
                id: 5,
                idUser: 1,
                idLivre: 32,
                title: 'Livre 32',
                auteur: 'Mathieu Nebra',
                dateEmprunt: '04/25/2020',
                dateRetour: '05/03/2020',
                etat: 8
            },
            {
                id: 8,
                idUser: 41,
                idLivre: 22,
                title: 'Livre 22',
                auteur: 'Mathieu Nebra',
                dateEmprunt: '04/30/2019',
                dateRetour: '06/01/2019',
                etat: 32
            }]

        expect(await getHistoriqueDesEmprunts()).toStrictEqual(expected)
    })
    test(" getLivresByAdhérentId ", async () => {
        const expected = [
            { "dateEmprunt": "02/20/2020", "dateRetour": "04/20/2021", "idLivre": 21, "idUser": 2, "key": 0 },
            { "dateEmprunt": "04/29/2020", "dateRetour": "", "idLivre": 22, "idUser": 2, "key": 1 }
        ]

        expect(await getLivresByAdhérentId(2)).toStrictEqual(expected)
    })
    test(" getLivresEncoursByAdhérentId ", async () => {
        const expected =
            [{
                "auteur": "Mathieu Nebra", "dateEmprunt": "04/29/2020", "dateRetour": "", "etat": 91, "id": 1, "idLivre": 22, "idUser": 2, "title": "Livre 22"
            }]

        expect(await getLivresEncoursByAdhérentId(2)).toStrictEqual(expected)
    })
    test(" getHistorieByAdhérentId ", async () => {
        const expected =
            [{
                "auteur": "Ahmed", "dateEmprunt": "02/20/2020", "dateRetour": "04/20/2021", "etat": 424, "id": 0, "idLivre": 21, "idUser": 2, "title": "Livre 21"
            }]

        expect(await getHistorieByAdhérentId(2)).toStrictEqual(expected)
    })
    test(" CountLivresById ", async () => {
        const expected = 1

        expect(await CountLivresById(21)).toStrictEqual(expected)
    })
    test(" testRetard ", async () => {
        const expected = 10

        expect(await testRetard("04/20/2020", "04/10/2020")).toStrictEqual(expected)
    })
    test(" retournerLivreByIdEmprunt ", async () => {
        const expected =
            [{ "dateEmprunt": "02/20/2020", "dateRetour": "07/29/2020", "idLivre": 21, "idUser": 2, "key": 0 },
            { "dateEmprunt": "04/29/2020", "dateRetour": "", "idLivre": 22, "idUser": 2, "key": 1 },
            { "dateEmprunt": "03/25/2020", "dateRetour": "04/23/2020", "idLivre": 31, "idUser": 3, "key": 2 },
            { "dateEmprunt": "04/25/2020", "dateRetour": "05/03/2020", "idLivre": 32, "idUser": 3, "key": 3 },
            { "dateEmprunt": "03/25/2020", "dateRetour": "03/29/2020", "idLivre": 31, "idUser": 1, "key": 4 },
            { "dateEmprunt": "04/25/2020", "dateRetour": "05/03/2020", "idLivre": 32, "idUser": 1, "key": 5 },
            { "dateEmprunt": "02/20/2020", "dateRetour": "", "idLivre": 32, "idUser": 41, "key": 6 },
            { "dateEmprunt": "04/30/2020", "dateRetour": "", "idLivre": 1, "idUser": 41, "key": 7 },
            { "dateEmprunt": "04/30/2019", "dateRetour": "06/01/2019", "idLivre": 22, "idUser": 41, "key": 8 }]

        expect(await retournerLivreByIdEmprunt(0)).toStrictEqual(expected)
    })
    test(" empruntLivre <2 ", async () => {
        const queue = {
            "idUser": 2,
            "idLivre": 31
        }
        const expected =
            [{ "dateEmprunt": "02/20/2020", "dateRetour": new Date(), "idLivre": 21, "idUser": 2, "key": 0 },
            { "dateEmprunt": "04/29/2020", "dateRetour": "", "idLivre": 22, "idUser": 2, "key": 1 },
            { "dateEmprunt": "03/25/2020", "dateRetour": "04/23/2020", "idLivre": 31, "idUser": 3, "key": 2 },
            { "dateEmprunt": "04/25/2020", "dateRetour": "05/03/2020", "idLivre": 32, "idUser": 3, "key": 3 },
            { "dateEmprunt": "03/25/2020", "dateRetour": "03/29/2020", "idLivre": 31, "idUser": 1, "key": 4 },
            { "dateEmprunt": "04/25/2020", "dateRetour": "05/03/2020", "idLivre": 32, "idUser": 1, "key": 5 },
            { "dateEmprunt": "02/20/2020", "dateRetour": "", "idLivre": 32, "idUser": 41, "key": 6 },
            { "dateEmprunt": "04/30/2020", "dateRetour": "", "idLivre": 1, "idUser": 41, "key": 7 },
            { "dateEmprunt": "04/30/2019", "dateRetour": "06/01/2019", "idLivre": 22, "idUser": 41, "key": 8 }]

        expect(await empruntLivre(queue)).toStrictEqual(true)
    })
    test(" empruntLivre >= 2 ", async () => {
        const queue = {
            "idUser": 2,
            "idLivre": 31
        }
        const expected =
            [{ "dateEmprunt": "02/20/2020", "dateRetour": new Date(), "idLivre": 21, "idUser": 2, "key": 0 },
            { "dateEmprunt": "04/29/2020", "dateRetour": "", "idLivre": 22, "idUser": 2, "key": 1 },
            { "dateEmprunt": "03/25/2020", "dateRetour": "04/23/2020", "idLivre": 31, "idUser": 3, "key": 2 },
            { "dateEmprunt": "04/25/2020", "dateRetour": "05/03/2020", "idLivre": 32, "idUser": 3, "key": 3 },
            { "dateEmprunt": "03/25/2020", "dateRetour": "03/29/2020", "idLivre": 31, "idUser": 1, "key": 4 },
            { "dateEmprunt": "04/25/2020", "dateRetour": "05/03/2020", "idLivre": 32, "idUser": 1, "key": 5 },
            { "dateEmprunt": "02/20/2020", "dateRetour": "", "idLivre": 32, "idUser": 41, "key": 6 },
            { "dateEmprunt": "04/30/2020", "dateRetour": "", "idLivre": 1, "idUser": 41, "key": 7 },
            { "dateEmprunt": "04/30/2019", "dateRetour": "06/01/2019", "idLivre": 22, "idUser": 41, "key": 8 }]

        expect(await empruntLivre(queue)).toStrictEqual(false)
    })
})
