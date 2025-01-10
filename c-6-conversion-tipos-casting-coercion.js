// Conversión de Tipos en JavaScript

// Introducción
// La conversión de tipos en JavaScript es una característica distintiva del lenguaje, que permite cambiar el tipo de las variables de forma implícita o explícita durante la ejecución del programa.

// Lenguajes de Programación: Compilados vs Interpretados
// - Compilados: Traducen el código antes de la ejecución. Ejemplos: C, C++, Rust, Go, Swift.
// - Interpretados: Traducen el código a medida que se ejecuta. Ejemplos: JavaScript, Python, Ruby, PHP.

// Analogía
// - Compilador: Una receta ya traducida.
// - Intérprete: Un amigo que traduce mientras cocinas.

// Tipado Débil en JavaScript
// JavaScript permite cambiar el tipo de una variable en tiempo de ejecución.
let variable = 2;        // tipo: number
variable = "Hola";       // tipo: string
console.log(variable);   // "Hola"

// Conversión Implícita y Explícita
// - Implícita: JavaScript convierte los tipos automáticamente.
// - Explícita: El programador especifica la conversión.

// Ejemplo de Conversión Implícita
const numero = 2;
const booleano = true;
const resultado = numero + booleano; // booleano se convierte a número (true = 1)
console.log("Conversión Implícita:", resultado); // 3

// Ejemplo de Conversión Explícita
const stringBooleano = String(booleano); // true -> "true"
console.log("Conversión Explícita a String:", stringBooleano); // "true"

const numeroString = "123";
const numeroConvertido = Number(numeroString); // "123" -> 123
console.log("Conversión Explícita a Número:", numeroConvertido); // 123

// Ejemplo de Error Común
// const titulo = 'Mi título;  // Error: Falta cerrar comillas
// console.log(titulo); // Uncaught SyntaxError: Invalid or unexpected token

// Comparación: Conversión Implícita vs Explícita
console.log("-----------------");

// Definimos valores iniciales
const stringValue = "Hola";
const numberValue = 42;
const booleanValue = true;

// Concatenaciones y sumas
console.log("string + string:", stringValue + stringValue); // "HolaHola"
console.log("string + number:", stringValue + numberValue); // "Hola42" (número convertido a string)
console.log("string + boolean:", stringValue + booleanValue); // "Holatrue" (booleano convertido a string)
console.log("number + number:", numberValue + numberValue); // 84
console.log("number + boolean:", numberValue + booleanValue); // 43 (booleano convertido a número)
console.log("boolean + boolean:", booleanValue + booleanValue); // 2 (true = 1 + true = 1)
console.log("boolean + number:", booleanValue + numberValue); // 43 (true = 1)

// Conversión Explícita con funciones
const numToStr = String(100); // Número a string
const strToNum = Number("456"); // String a número
const boolToNum = Number(false); // Booleano a número
console.log("Número a String:", numToStr, typeof numToStr); // "100", string
console.log("String a Número:", strToNum, typeof strToNum); // 456, number
console.log("Booleano a Número:", boolToNum, typeof boolToNum); // 0, number

// Próximos Pasos
// - Practicar con conversiones implícitas y explícitas.
// - Consultar la documentación oficial de JavaScript sobre coerción y conversiones.
// - Implementar ejemplos en proyectos para consolidar el conocimiento.

