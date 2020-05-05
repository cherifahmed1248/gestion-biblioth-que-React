var tasks = [
    {
        id: "1",
        title: "Learn html",
        duration: 60,
        date: "2020-05-01",
        type: "Langage de programmation",
        description: "Le HyperText Markup Language, généralement abrégé HTML ou dans sa dernière version HTML5, est le langage de balisage conçu pour représenter les pages web. C’est un langage permettant d’écrire de l’hypertexte",

    },
    {
        id: "2",
        title: "Learn react",
        duration: 30,
        date: "2020-06-21",
        type: "Langage de programmation",
        description: "React est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page HTML à chaque changement d'état."
    },
    {
        id: "3",
        title: "Learn node",
        duration: 50,
        date: "2020-09-08",
        type: "Langage de programmation",
        description: "Node.js est une plateforme logicielle libre en JavaScript orientée vers les applications réseau événementielles hautement concurrentes qui doivent pouvoir monter en charge. Elle utilise la machine virtuelle V8, la librairie libuv pour sa boucle d'évènements, et implémente sous licence MIT les spécifications CommonJS."
    }
]

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export const fetchTasks = async searchValue => {
    await delay(2000)
    // return tasks
    return tasks.filter(task => task.title.includes(searchValue))
}
export const initT = async searchValue => {
    await delay(2000)
    return tasks
}
export function aTasks(newTasks) {
    console.log(newTasks)
    tasks = [
        ...tasks,
        {
            id: tasks.length + 1, title: newTasks.title,
            duration: Number(newTasks.duration), type: Number(newTasks.type), date: newTasks.date, description: newTasks.description
        }
    ]

}
export function mTasks(newTasks) {
    console.log(newTasks)

    tasks = tasks.map(task => task.id === newTasks.id ? ({
        id: newTasks.id, title: newTasks.title,
        duration: Number(newTasks.duration), type: newTasks.type, date: newTasks.date, description: newTasks.description
    }) : task)
}
export function dTasks(id) {
    console.log(id)
    tasks = tasks.filter(task => task.id !== id)
    console.log(tasks)
}