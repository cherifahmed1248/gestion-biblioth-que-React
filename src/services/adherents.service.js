var adhérents = [
    {
        "key": 8,
        "username": "Amir",
        "email": "amir@test.com",
        "password": "1234",
        "date": "1920/06/20",
        "adresse": "LA",
        "tel": "2162859688",
        "etat": "false",
        "banni": "false",
        "biblo": "false",

    },
    {
        "key": 9,
        "username": "Ahmed",
        "email": "Ahmed9@test.com",
        "password": "1234",
        "date": "2000/02/24",
        "adresse": "testour",
        "tel": "21690129390",
        "etat": "false",
        "banni": "false",
        "biblo": "false",

    },
    {
        "key": 10,
        "username": "John Brown 0",
        "email": "test@test.com",
        "password": "1234",
        "date": "1998/04/12",
        "adresse": "LA",
        "tel": "21690129390",
        "etat": "false",
        "banni": "false",
        "biblo": "false",

    },
    {
        "key": 11,
        "username": "John Brown 1",
        "email": "John1@test.com",
        "password": "1234",
        "date": "1958/01/26",
        "adresse": "testour",
        "tel": "21690129390",
        "etat": "false",
        "banni": "false",
        "biblo": "false",

    },
    {
        "key": 21,
        "username": "John Brown 2",
        "email": "John2@test.com",
        "password": "1234",
        "date": "1984/09/19",
        "adresse": "LA",
        "tel": "21690129390",
        "etat": "true",
        "banni": "false",
        "biblo": "false",

    },
    {
        "key": 31,
        "username": "John Brown 3",
        "email": "John3@test.com",
        "password": "1234",
        "date": "1954/08/15",
        "adresse": "LA",
        "tel": "21690129390",
        "etat": "true",
        "banni": "true",
        "biblo": "false",
    },
    {
        "key": 41,
        "username": "John Brown 4",
        "email": "John4@test.com",
        "password": "1234",
        "date": "1897/11/02",
        "adresse": "LA",
        "tel": "21690129390",
        "etat": "true",
        "banni": "false",
        "biblo": "true",

    },
    {
        "key": 51,
        "username": "John Brown 5",
        "email": "John5@test.com",
        "password": "1234",
        "date": "1946/06/27",
        "adresse": "LA",
        "tel": "21690129390",
        "etat": "true",
        "banni": "true",
        "biblo": "true",

    },
    {
        "key": 0,
        "username": "John Brown 0",
        "email": "test0@test.com",
        "password": "test0",
        "date": "1929/12/20",
        "adresse": "LA",
        "tel": "21690129390",
        "banni": "false",
        "etat": "false",
        "biblio": "true",
    },
    {
        "key": 1,
        "username": "John Brown 1",
        "email": "test1@test.com",
        "password": "test1",
        "date": "2020-05-01",
        "adresse": "LA",
        "tel": "21690129390",
        "banni": "true",
        "etat": "false",
        "biblio": "false",
    },
    {
        "key": 2,
        "username": "John Brown 2",
        "email": "test2@test.com",
        "password": "test2",
        "date": "1938/10/10",
        "adresse": "LA",
        "tel": "21690129390",
        "banni": "false",
        "etat": "true",
        "biblio": "false",
    },
    {
        "key": 3,
        "username": "John Brown 3",
        "email": "test3@test.com",
        "password": "test3",
        "date": "2000/02/20",
        "adresse": "LA",
        "tel": "21690129390",
        "banni": "false",
        "etat": "false",
        "biblio": "false",
    }
];

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
export async function addAdherent(Adherent) {
    await delay(2000)
    adhérents = [
        ...adhérents,
        {
            key: adhérents.length, username: Adherent.username,
            email: Adherent.email, date: Adherent.date._i, password: Adherent.password,
            adresse: Adherent.address, tel: Adherent.phone,
            banni: "false", etat: "false", biblo: "false"
        }
    ]
    return adhérents[adhérents.length - 1]
}
export async function updateAdherent(data) {
    //console.log('data: ', data);
    var test = false
    adhérents = adhérents.map(a => a.key === Number(data.key) ? (test = {
        key: a.key, username: data.username, email: data.email, password: a.password, date: data.date._i, adresse: data.address, tel: data.phone, etat: a.etat,
        banni: a.banni, biblo: a.biblo
    }) : a);

    //console.log('test: ', test);
    return test
}
export async function updatePassword(data) {
    var test = false

    adhérents = adhérents.map(a => (a.key === Number(data.key) && a.password === data.oldPassword) ? (test = {
        key: a.key, username: a.username, email: a.email, password: data.password, date: a.date, adresse: a.adresse, tel: a.tel, etat: a.etat,
        banni: a.banni, biblo: a.biblo
    }) : a);

    //console.log('test: ', test);
    return test
}

export async function seConnecter(data) {


    await delay(2000)
    var test = false

    adhérents = adhérents.map(L => L.email === data.email && L.password === data.password ?
        (test = (L))
        : L)
    return (test.key || test)

}
export function getAdherentById(id) {
    var test = false
    adhérents = adhérents.map(L => L.key === Number(id) ? (test = (L)) : L)
    return test
}
export const getUser = () => {
    delay(2000);
    return adhérents;
}
export function getAdhérents() {
    delay(2000);
    const adhérent = adhérents.filter((a) => a.biblio !== "true");
    return adhérent;
}
export function deleteAdhérents(id) {
    adhérents = adhérents.filter((adhérent) => adhérent.key !== id);
}
export function bannir(id) {
    adhérents = adhérents.map(a => a.key === id ? ({
        key: a.key, username: a.username, email: a.email, password: a.password, date: a.date, adresse: a.adresse, tel: a.tel, etat: a.etat, biblo: a.biblo,
        banni: String(!(JSON.parse(a.banni))),
    }) : a);
    return true
}
export function ChangeEtatById(id) {
    adhérents = adhérents.map(a => a.key === id ? ({
        key: a.key, username: a.username, email: a.email, password: a.password, date: a.date, adresse: a.adresse, tel: a.tel, biblo: a.biblo, banni: a.banni,
        etat: String(!(JSON.parse(a.etat))),
    }) : a);
}
