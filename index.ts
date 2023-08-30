type Address = {
    streat: string
    number: number
}

type People = {
    name?: string
    age: number
    address: Address
}

const people: People = {
    age: 30,
    address: {
        streat: 'Zona Sul',
        number: 23
    }
}

// get key of Object
type PeopleProperties = keyof People

function pickProperty(people: People, property: PeopleProperties){
    return people[property]
}

console.log(pickProperty(people, 'age'))


const audio = {
    title: 'Audio 01',
    duration: 565,
    author: 'Anselmo'
}

// create a type of any object
// podemos passar o  keyof pra pegar as chaves
// ex.: type AudioType = keyof typeof audio
type AudioType = typeof audio

// pegar os possiveis returno de uma function e atribuir a um type
// ela podemos retornar qualquer valor do object People
type PickPropertyReturnType = ReturnType<typeof pickProperty>

// Sem Age and Address
type PeopleWithOutAgeAndAddress = Omit<People, 'age' | 'address'>

// Apenas Name and Age
type PeopleNameAndAge = Pick<People, 'name' | 'age'>

// converter tudo para optional usamos o Partial
type PeoplePartial = Partial<People>

//
type DbConfig = {
    name: string
    url: string
}

// as serve para forçar uma tipagem
const conn1 = {name: 'postgres', url: 'postgres://root:root@127.0.0.1:3306/peolple'} as DbConfig

// : precisa ter todas as informações
const conn2: DbConfig = {name: 'mysql', url: 'mysql://root:root@127.0.0.1:3306/peolple'}

// satisfies => pegar os valores de forma obrigatoria
const conn3 = {name: 'sqllite', url: 'sqllite://root:root@127.0.0.1:3306/peolple'} satisfies DbConfig



// generic

type Video = {
    title: string
    duration: number
}




