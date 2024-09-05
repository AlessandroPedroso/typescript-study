function getFirstElement<T>(data:T[]):T | null {
   
    if (!data.length) {
        return null
    }

    const [firstElement] = data

    return firstElement

}

const arrayString: string[] = ["Alessandro", "Eduardo Pedroso", "Taís Froner"];
const numberArray: number[] = [1, 2, 3, 4, 5, 6];
const arrayElements: (number | string)[] = ['Porto Alegre',75]
const arrayElementObject: Object[] = [{name:'alessandro',age:28}]

console.log(getFirstElement<string>(arrayString))