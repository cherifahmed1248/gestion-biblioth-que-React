const { getLivres, getLivreById, getLivreNonArchive, addLivre, updateLivre, archiveLivre, deleteLivre } = require('./livres.service');
var livres = [
    {
        id: 1,
        title: "Réalisez votre site web avec HTML 5 et CSS 3",
        libelle: "Vous rêvez d'apprendre à créer des sites web mais vous avez peur que ce soit compliqué car vous débutez ? Ce livre est fait pour vous ! Conçu pour les débutants, il vous permettra de découvrir HTML 5 et CSS 3, les dernières technologies en matière de création de sites web, de façon progressive et sans aucun prérequis, si ce n'est de savoir allumer son ordinateur !",
        prix: "18,99",
        auteur: "Mathieu Nebra",
        edition: "2 EDITION",
        exemplaire: "133",
        archive: "true"
    },
    {
        id: 21,
        title: "Livre 21",
        libelle: "Vous rêvez d'apprendre à créer des sites web mais vous avez peur que ce soit compliqué car vous débutez ? Ce livre est fait pour vous ! Conçu pour les débutants, il vous permettra de découvrir HTML 5 et CSS 3, les dernières technologies en matière de création de sites web, de façon progressive et sans aucun prérequis, si ce n'est de savoir allumer son ordinateur !",
        prix: "18,99",
        auteur: "Ahmed",
        edition: "2 EDITION",
        exemplaire: "3",
        archive: "false"
    },
    {
        id: 22,
        title: "Livre 22",
        libelle: "Vous rêvez d'apprendre à créer des sites web mais vous avez peur que ce soit compliqué car vous débutez ? Ce livre est fait pour vous ! Conçu pour les débutants, il vous permettra de découvrir HTML 5 et CSS 3, les dernières technologies en matière de création de sites web, de façon progressive et sans aucun prérequis, si ce n'est de savoir allumer son ordinateur !",
        prix: "18,99",
        auteur: "Mathieu Nebra",
        edition: "2 EDITION",
        exemplaire: "133",
        archive: "false"
    },
    {
        id: 31,
        title: "Livre 31",
        libelle: "Vous rêvez d'apprendre à créer des sites web mais vous avez peur que ce soit compliqué car vous débutez ? Ce livre est fait pour vous ! Conçu pour les débutants, il vous permettra de découvrir HTML 5 et CSS 3, les dernières technologies en matière de création de sites web, de façon progressive et sans aucun prérequis, si ce n'est de savoir allumer son ordinateur !",
        prix: "18,99",
        auteur: "Mathieu Nebra",
        edition: "2 EDITION",
        exemplaire: "133",
        archive: "false"
    },
    {
        id: 32,
        title: "Livre 32",
        libelle: "Vous rêvez d'apprendre à créer des sites web mais vous avez peur que ce soit compliqué car vous débutez ? Ce livre est fait pour vous ! Conçu pour les débutants, il vous permettra de découvrir HTML 5 et CSS 3, les dernières technologies en matière de création de sites web, de façon progressive et sans aucun prérequis, si ce n'est de savoir allumer son ordinateur !",
        prix: "18,99",
        auteur: "Mathieu Nebra",
        edition: "2 EDITION",
        exemplaire: "133",
        archive: "false"
    },
    {
        id: 6,
        title: "livre test",
        libelle: "livre pour le test",
        prix: "100,50",
        auteur: "Cherif Ahmed",
        edition: "5 EDITION",
        exemplaire: "1",
        archive: "true"
    },

]
describe("test of livres service", () => {
    test("add adherents", async () => {
        const expected = [...livres]

        expect(await getLivres()).toStrictEqual(expected)
    })
    test("getLivreById", async () => {
        const queue = 1
        const expected = {
            id: 1,
            title: "Réalisez votre site web avec HTML 5 et CSS 3",
            libelle: "Vous rêvez d'apprendre à créer des sites web mais vous avez peur que ce soit compliqué car vous débutez ? Ce livre est fait pour vous ! Conçu pour les débutants, il vous permettra de découvrir HTML 5 et CSS 3, les dernières technologies en matière de création de sites web, de façon progressive et sans aucun prérequis, si ce n'est de savoir allumer son ordinateur !",
            prix: "18,99",
            auteur: "Mathieu Nebra",
            edition: "2 EDITION",
            exemplaire: "133",
            archive: "true"
        }

        expect(await getLivreById(queue)).toStrictEqual(expected)
    })
    test("getLivreNonArchive", async () => {
        const queue = 1
        const expected = [{
            "archive": "false", "auteur": "Ahmed", "edition": "2 EDITION", "exemplaire": "3",
            "id": 21, "libelle": "Vous rêvez d'apprendre à créer des sites web mais vous avez peur que ce soit compliqué car vous débutez ? Ce livre est fait pour vous ! Conçu pour les débutants, il vous permettra de découvrir HTML 5 et CSS 3, les dernières technologies en matière de création de sites web, de façon progressive et sans aucun prérequis, si ce n'est de savoir allumer son ordinateur !", "prix": "18,99", "title": "Livre 21"
        },
        {
            "archive": "false", "auteur": "Mathieu Nebra", "edition": "2 EDITION", "exemplaire": "133", "id": 22,
            "libelle": "Vous rêvez d'apprendre à créer des sites web mais vous avez peur que ce soit compliqué car vous débutez ? Ce livre est fait pour vous ! Conçu pour les débutants, il vous permettra de découvrir HTML 5 et CSS 3, les dernières technologies en matière de création de sites web, de façon progressive et sans aucun prérequis, si ce n'est de savoir allumer son ordinateur !", "prix": "18,99", "title": "Livre 22"
        },
        {
            "archive": "false", "auteur": "Mathieu Nebra", "edition": "2 EDITION", "exemplaire": "133", "id": 31,
            "libelle": "Vous rêvez d'apprendre à créer des sites web mais vous avez peur que ce soit compliqué car vous débutez ? Ce livre est fait pour vous ! Conçu pour les débutants, il vous permettra de découvrir HTML 5 et CSS 3, les dernières technologies en matière de création de sites web, de façon progressive et sans aucun prérequis, si ce n'est de savoir allumer son ordinateur !", "prix": "18,99", "title": "Livre 31"
        },
        {
            "archive": "false", "auteur": "Mathieu Nebra", "edition": "2 EDITION", "exemplaire": "133", "id": 32,
            "libelle": "Vous rêvez d'apprendre à créer des sites web mais vous avez peur que ce soit compliqué car vous débutez ? Ce livre est fait pour vous ! Conçu pour les débutants, il vous permettra de découvrir HTML 5 et CSS 3, les dernières technologies en matière de création de sites web, de façon progressive et sans aucun prérequis, si ce n'est de savoir allumer son ordinateur !", "prix": "18,99", "title": "Livre 32"
        }]

        expect(await getLivreNonArchive()).toStrictEqual(expected)
    })
    test("addLivre", async () => {
        const queue = {
            id: 7,
            title: "test add",
            libelle: "test add livre",
            prix: "24",
            auteur: "Makki amir",
            edition: "7 EDITION",
            exemplaire: "5",
            archive: "true"
        }
        const expected = [
            ...livres,
            {
                id: 7,
                title: "test add",
                libelle: "test add livre",
                prix: 24,
                auteur: "Makki amir",
                edition: "7 EDITION",
                exemplaire: "5",
                archive: "true"
            }
        ]

        expect(await addLivre(queue)).toStrictEqual(expected)
    })
    test("updateLivre", async () => {
        const queue = {
            id: 7,
            title: "test update",
            libelle: "test update livre",
            prix: "26",
            auteur: "Makki amir",
            edition: "8 EDITION",
            exemplaire: "6",
            archive: "true"
        }
        const expected = [
            ...livres,
            {
                id: 7,
                title: "test update",
                libelle: "test update livre",
                prix: 26,
                auteur: "Makki amir",
                edition: "8 EDITION",
                exemplaire: "6",
                archive: "true"
            }
        ]

        expect(await updateLivre(queue)).toStrictEqual(expected)
    })
    test("archiveLivre", async () => {
        const queue = 7
        const expected = [
            {
                id: 1,
                title: "Réalisez votre site web avec HTML 5 et CSS 3",
                libelle: "Vous rêvez d'apprendre à créer des sites web mais vous avez peur que ce soit compliqué car vous débutez ? Ce livre est fait pour vous ! Conçu pour les débutants, il vous permettra de découvrir HTML 5 et CSS 3, les dernières technologies en matière de création de sites web, de façon progressive et sans aucun prérequis, si ce n'est de savoir allumer son ordinateur !",
                prix: "18,99",
                auteur: "Mathieu Nebra",
                edition: "2 EDITION",
                exemplaire: "133",
                archive: "true"
            },
            {
                id: 21,
                title: "Livre 21",
                libelle: "Vous rêvez d'apprendre à créer des sites web mais vous avez peur que ce soit compliqué car vous débutez ? Ce livre est fait pour vous ! Conçu pour les débutants, il vous permettra de découvrir HTML 5 et CSS 3, les dernières technologies en matière de création de sites web, de façon progressive et sans aucun prérequis, si ce n'est de savoir allumer son ordinateur !",
                prix: "18,99",
                auteur: "Ahmed",
                edition: "2 EDITION",
                exemplaire: "3",
                archive: "false"
            },
            {
                id: 22,
                title: "Livre 22",
                libelle: "Vous rêvez d'apprendre à créer des sites web mais vous avez peur que ce soit compliqué car vous débutez ? Ce livre est fait pour vous ! Conçu pour les débutants, il vous permettra de découvrir HTML 5 et CSS 3, les dernières technologies en matière de création de sites web, de façon progressive et sans aucun prérequis, si ce n'est de savoir allumer son ordinateur !",
                prix: "18,99",
                auteur: "Mathieu Nebra",
                edition: "2 EDITION",
                exemplaire: "133",
                archive: "false"
            },
            {
                id: 31,
                title: "Livre 31",
                libelle: "Vous rêvez d'apprendre à créer des sites web mais vous avez peur que ce soit compliqué car vous débutez ? Ce livre est fait pour vous ! Conçu pour les débutants, il vous permettra de découvrir HTML 5 et CSS 3, les dernières technologies en matière de création de sites web, de façon progressive et sans aucun prérequis, si ce n'est de savoir allumer son ordinateur !",
                prix: "18,99",
                auteur: "Mathieu Nebra",
                edition: "2 EDITION",
                exemplaire: "133",
                archive: "false"
            },
            {
                id: 32,
                title: "Livre 32",
                libelle: "Vous rêvez d'apprendre à créer des sites web mais vous avez peur que ce soit compliqué car vous débutez ? Ce livre est fait pour vous ! Conçu pour les débutants, il vous permettra de découvrir HTML 5 et CSS 3, les dernières technologies en matière de création de sites web, de façon progressive et sans aucun prérequis, si ce n'est de savoir allumer son ordinateur !",
                prix: "18,99",
                auteur: "Mathieu Nebra",
                edition: "2 EDITION",
                exemplaire: "133",
                archive: "false"
            },
            {
                id: 6,
                title: "livre test",
                libelle: "livre pour le test",
                prix: "100,50",
                auteur: "Cherif Ahmed",
                edition: "5 EDITION",
                exemplaire: "1",
                archive: "true"
            },
            {
                id: 7,
                title: "test update",
                libelle: "test update livre",
                prix: 26,
                auteur: "Makki amir",
                edition: "8 EDITION",
                exemplaire: "6",
                archive: "false"
            }
        ]

        expect(await archiveLivre(queue)).toStrictEqual(expected)
    })
})