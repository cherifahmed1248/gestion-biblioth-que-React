var livres = [
    {
        id: 1,
        title: "Réalisez votre site web avec HTML 5 et CSS 3",
        libelle: "Vous rêvez d'apprendre à créer des sites web mais vous avez peur que ce soit compliqué car vous débutez ? Ce livre est fait pour vous ! Conçu pour les débutants, il vous permettra de découvrir HTML 5 et CSS 3, les dernières technologies en matière de création de sites web, de façon progressive et sans aucun prérequis, si ce n'est de savoir allumer son ordinateur !",
        prix: "18,99",
        auteur: "Mathieu Nebra",
        edition: "2 EDITION",
        exemplaire: "133",
        archive: "false"
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
export function addLivre(livre) {


    livres = [
        ...livres,
        {
            id: livre.id, title: livre.title,
            libelle: livre.libelle, prix: Number(livre.prix), auteur: livre.auteur, edition: livre.edition, exemplaire: livre.exemplaire, archive: livre.archive
        }
    ]
    console.log(livres)
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
    console.log('livres: ', livres);
    return livres
}
export function archiveLivre(id) {

    livres = livres.map(L => L.id === id ? ({
        id: L.id, title: L.title,
        libelle: L.libelle, prix: L.prix, auteur: L.auteur, edition: L.edition, exemplaire: L.exemplaire,
        archive: String(!(JSON.parse(L.archive)))
    }) : L)
    console.log(livres);
}
export function deleteLivre(id) {
    console.log(id)
    livres = livres.filter(task => task.id !== id)
    console.log(livres)
}