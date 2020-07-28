const { addAdherent, updateAdherent, updatePassword, seConnecter, getAdherentById, getAdhérents } = require('./adherents.service');
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
describe("test of Adherent service", () => {

    test("add adherents", async () => {
        const queue = {
            "username": "add",
            "email": "add@test.com",
            "password": "1234",
            "date": {
                "_i": "1920/06/20"
            },
            "address": "add",
            "phone": "145687854",
        }
        const expected =
        {
            "key": adhérents.length,
            "username": "add",
            "email": "add@test.com",
            "password": "1234",
            "date": "1920/06/20",
            "adresse": "add",
            "tel": "145687854",
            "etat": "false",
            "banni": "false",
            "biblo": "false",

        }
        expect(await addAdherent(queue)).toStrictEqual(expected)
    })

    test("update adherents", async () => {
        const queue = {
            "key": adhérents.length - 1,
            "username": "add",
            "email": "add@test.com",
            "date": {
                "_i": "1920/06/20"
            },
            "address": "add",
            "phone": "145687854",
        }
        const expected =
        {
            "key": adhérents.length - 1,
            "username": "add",
            "email": "add@test.com",
            "password": "1234",
            "date": "1920/06/20",
            "adresse": "add",
            "tel": "145687854",
            "etat": "false",
            "banni": "false",
            "biblo": "false",

        }
        expect(await updateAdherent(queue)).toStrictEqual(expected)
    })
    test("update Password", async () => {
        const queue = {
            "key": adhérents.length - 1,
            "oldPassword": "1234",
            "password": "newpasswordtest",
        }
        const expected =
        {
            "key": adhérents.length - 1,
            "username": "add",
            "email": "add@test.com",
            "password": "newpasswordtest",
            "date": "1920/06/20",
            "adresse": "add",
            "tel": "145687854",
            "etat": "false",
            "banni": "false",
            "biblo": "false",

        }
        expect(await updatePassword(queue)).toStrictEqual(expected)
    })
    test("update Password with invalid password", async () => {
        const queue = {
            "key": adhérents.length - 1,
            "oldPassword": "1234",
            "password": "newpasswordtest",
        }
        const expected = false
        expect(await updatePassword(queue)).toStrictEqual(expected)
    })
    test("seConnecter", async () => {
        const queue = {
            "email": "add@test.com",
            "password": "newpasswordtest",
        }
        const expected = 11
        expect(await seConnecter(queue)).toStrictEqual(expected)
    })
    test("seConnecter with wrong username or password", async () => {
        const queue = {
            "email": "add@test.com",
            "password": "newpass7452728wordtest",
        }
        const expected = false
        expect(await seConnecter(queue)).toStrictEqual(expected)
    })
    test("getAdherentById", async () => {
        const queue = 11
        const expected = {
            "adresse": "add", "banni": "false", "biblo": "false",
            "date": "1920/06/20", "email": "add@test.com", "etat": "false",
            "key": 11, "password": "newpasswordtest", "tel": "145687854",
            "username": "add"
        }
        expect(await getAdherentById(queue)).toStrictEqual(expected)
    })
    test("getAdhérents", async () => {
        const expected = [
            {
                "adresse": "LA", "banni": "false", "biblo": "false", "date": "1920/06/20", "email": "amir@test.com",
                "etat": "false", "key": 8, "password": "1234", "tel": "2162859688", "username": "Amir"
            },
            {
                "adresse": "testour", "banni": "false", "biblo": "false", "date": "2000/02/24", "email": "Ahmed9@test.com", "etat": "false",
                "key": 9, "password": "1234", "tel": "21690129390", "username": "Ahmed"
            },
            {
                "adresse": "LA", "banni": "false", "biblo": "false", "date": "1998/04/12", "email": "test@test.com", "etat": "false",
                "key": 10, "password": "1234", "tel": "21690129390", "username": "John Brown 0"
            },
            {
                "adresse": "add", "banni": "false", "biblo": "false", "date": "1920/06/20", "email": "add@test.com", "etat": "false",
                "key": 11, "password": "newpasswordtest", "tel": "145687854", "username": "add"
            },
            {
                "adresse": "LA", "banni": "false", "biblo": "false", "date": "1984/09/19", "email": "John2@test.com", "etat": "true",
                "key": 21, "password": "1234", "tel": "21690129390", "username": "John Brown 2"
            },
            {
                "adresse": "LA", "banni": "true", "biblo": "false", "date": "1954/08/15", "email": "John3@test.com", "etat": "true",
                "key": 31, "password": "1234", "tel": "21690129390", "username": "John Brown 3"
            },
            {
                "adresse": "LA", "banni": "false", "biblo": "true", "date": "1897/11/02", "email": "John4@test.com", "etat": "true",
                "key": 41, "password": "1234", "tel": "21690129390", "username": "John Brown 4"
            },
            {
                "adresse": "LA", "banni": "true", "biblo": "true", "date": "1946/06/27", "email": "John5@test.com", "etat": "true",
                "key": 51, "password": "1234", "tel": "21690129390", "username": "John Brown 5"
            },
            {
                "adresse": "LA", "banni": "true", "biblio": "false", "date": "2020-05-01", "email": "test1@test.com", "etat": "false",
                "key": 1, "password": "test1", "tel": "21690129390", "username": "John Brown 1"
            },
            {
                "adresse": "LA", "banni": "false", "biblio": "false", "date": "1938/10/10", "email": "test2@test.com", "etat": "true",
                "key": 2, "password": "test2", "tel": "21690129390", "username": "John Brown 2"
            },
            {
                "adresse": "LA", "banni": "false", "biblio": "false", "date": "2000/02/20", "email": "test3@test.com", "etat": "false",
                "key": 3, "password": "test3", "tel": "21690129390", "username": "John Brown 3"
            },
            {
                "adresse": "add", "banni": "false", "biblo": "false", "date": "1920/06/20", "email": "add@test.com", "etat": "false",
                "key": 12, "password": "1234", "tel": "145687854", "username": "add"
            }]
        expect(await getAdhérents()).toStrictEqual(expected)
    })


})