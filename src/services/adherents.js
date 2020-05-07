var adhérents = [
    {
        "key": 0,
        "username": "John Brown 0",
        "email": "test@test.com",
        "password": "aefver",
        "date": "2020-05-01",
        "adresse": "LA",
        "tel": "21690129390",
        "banni": "non",
        "etat": "accepté",
        "biblo": "oui",

    },

];
var emprunts = [
    {
        "idUser": "3",
        "idLivre": "4",
        "dateEmprunt": "2020-05-04",
        "dateRetour": "2020-05-24"
    }
]
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
export const getAdhérents = () => {
    delay(2000);
    return adhérents;
}
export const deleteAdhérents = async (id) => {
    const newAdhérents = await adhérents.filter((adhérent) => adhérent.key !== id);
    adhérents = newAdhérents.slice();
}