/**
 * Tipos primitivos
 * number => números inteiros, números decimais
 * string => textos, caracteres
 * boolean => true ou false
 */

let age: number = 10;
let fullName: string = 'Alessandro Pedroso';
let isAlive: boolean = false;

// inferência de tipos
let animal = 'Cats'; // ele entende que o tipo é uma string
let quantidade = 10; // ele entende aumaticamente que é um number

// Parâmetros e retornos de funções
function sum(a: number, b: number):number {
    const result = a + b;

    return result;
}

// console.log(sum(10,5))

//Função com retorno opcional
function greeting(fullName: string): string | void{
    if (fullName) {
        
        return `Hello, ${fullName}`;
    }
}

// Função com parâmetros opcionais
function stringOrNumberSize(value: string | number): number {
    
    if (typeof value === 'string') {
        return value.length
    }

    return value
}

console.log(stringOrNumberSize('hello'))
console.log(stringOrNumberSize(10))