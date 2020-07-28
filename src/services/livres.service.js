import { CountLivresById } from './emprunt.service';

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

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
export const getLivres = async searchValue => {
    await delay(2000)
    return livres
}
export function getLivreById(id) {
    var test = false
    livres = livres.map(L => L.id === Number(id) ? (test = ({

        id: L.id, title: L.title,
        libelle: L.libelle, prix: L.prix, auteur: L.auteur, edition: L.edition, exemplaire: L.exemplaire,
        archive: L.archive
    })) : L)
    return test
}

export const getLivreNonArchive = async searchValue => {
    await delay(2000)

    //console.log("Count=")
    return (livres.filter(livre => livre.archive === "false" && (livre.exemplaire - CountLivresById(livre.id) > 0)))
}

export function addLivre(livre) {


    livres = [
        ...livres,
        {
            id: livre.id, title: livre.title,
            libelle: livre.libelle, prix: Number(livre.prix), auteur: livre.auteur, edition: livre.edition, exemplaire: livre.exemplaire, archive: livre.archive
        }
    ]
    //console.log(livres)
    return livres


}
export function updateLivre(livre) {



    livres = livres.map(L => L.id === Number(livre.id) ? (
        {
            id: Number(livre.id), title: livre.title,
            libelle: livre.libelle, prix: Number(livre.prix),
            auteur: livre.auteur, edition: livre.edition,
            exemplaire: livre.exemplaire, archive: livre.archive
        }) : L)
    //console.log('livres: ', livres);
    return livres
}
export function archiveLivre(id) {

    livres = livres.map(L => L.id === id ? ({
        id: L.id, title: L.title,
        libelle: L.libelle, prix: L.prix, auteur: L.auteur, edition: L.edition, exemplaire: L.exemplaire,
        archive: String(!(JSON.parse(L.archive)))
    }) : L)
    //console.log(livres);
    return livres;
}
export function deleteLivre(id) {
    //console.log(id)
    livres = livres.filter(task => task.id !== id)
    //console.log(livres)
    return livres;
}