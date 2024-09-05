enum Gender{
    MALE = "male",
    FEMALE = "female",
    OTHER = "other"
}

type Person = {
    name: string,
    age: number,
    gender:Gender
}

const person: Person = {
    name: 'João da silva',
    age: 13,
    gender: Gender.MALE
}

function displayPersonInfo(person: Person): void{
    console.log(`${person.name}`)
    console.log(`${person.age}`)
    console.log(`${person.gender}`)
}

displayPersonInfo(person)