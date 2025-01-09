// Operadores Aritméticos en JavaScript

// Los operadores aritméticos son símbolos que se utilizan para realizar operaciones matemáticas con uno o más valores (operandos).
// En JavaScript, estos operadores permiten realizar cálculos básicos como suma, resta, multiplicación, división, y exponenciación, 
// así como operaciones avanzadas como módulo, incremento, y decremento.

// TIPOS DE OPERADORES ARITMÉTICOS

// 1. Operadores Binarios: Requieren dos operandos
// Requieren dos operandos (un valor a cada lado del operador).

// Suma
const suma = 5 + 3; // 8
console.log("Suma:", suma);

// Resta
const resta = 10 - 4; // 6
console.log("Resta:", resta);

// Multiplicación
const multiplicacion = 6 * 7; // 42
console.log("Multiplicación:", multiplicacion);

// División
const division = 20 / 4; // 5
console.log("División:", division);

// Exponenciación
const potencia = 2 ** 3; // 8
console.log("Exponenciación:", potencia);

// Módulo
const modulo = 10 % 3; // 1
console.log("Módulo:", modulo);

// 2. Operadores Unarios: Requieren un solo operando

// Negación
const negativo = -5; // -5
console.log("Negativo:", negativo);

// Incremento
let num1 = 5;
console.log("Prefijo incremento:", ++num1); // 6
console.log("Sufijo incremento:", num1++); // 6
console.log("Después del sufijo:", num1);   // 7

// Decremento
let num2 = 5;
console.log("Prefijo decremento:", --num2); // 4
console.log("Sufijo decremento:", num2--); // 4
console.log("Después del sufijo:", num2);   // 3

// PRECEDENCIA DE OPERADORES

// La precedencia define el orden en el que se evalúan las operaciones en una expresión. 
// En JavaScript, el orden es el siguiente (de mayor a menor prioridad)

const resultado = (3 + 2) * 2 ** 2; // 20
console.log("Resultado con precedencia:", resultado);

// ORDEN DE PRECEDENCIA
// 1. Paréntesis
// 2. Exponenciación (**)
// 3. Multiplicación (*) y División (/)
// 4. Suma (+) y Resta (-)
// 5. Operadores unarios (-, ++, --)

// EJEMPLOS PRÁCTICOS

// Básicos
let sumaEjemplo = 5 + 3;                // 8
let restaEjemplo = 5 - 3;               // 2
let multiplicacionEjemplo = 5 * 3;      // 15
let divisionEjemplo = 5 / 3;            // 1.666...
let moduloEjemplo = 5 % 3;              // 2
let exponenciacionEjemplo = 5 ** 3;     // 125
console.log(sumaEjemplo, restaEjemplo, multiplicacionEjemplo, divisionEjemplo);
console.log(moduloEjemplo, exponenciacionEjemplo);

// Operaciones Avanzadas
// Raíz Cuadrada
const raizCuadrada = Math.sqrt(16); // 4
console.log("Raíz cuadrada:", raizCuadrada);

// Valor Absoluto
const valorAbsoluto = Math.abs(-7); // 7
console.log("Valor absoluto:", valorAbsoluto);

// Número Aleatorio
const aleatorio = Math.random(); // Un número entre 0 y 1
console.log("Número aleatorio:", aleatorio);

// NÚMEROS Y DECIMALES

// Enteros y Decimales
let entero = 42;          // Número entero
let decimal = 3.14;       // Número decimal
console.log("Entero:", entero, "Decimal:", decimal);

// Notación Científica
let cientifico = 5e3;     // 5000
console.log("Notación científica:", cientifico);

// Infinito y NaN
let infinito = Infinity; // Valor infinito
let noEsUnNumero = NaN;  // Not a Number
console.log("Infinito:", infinito, "NaN:", noEsUnNumero);

// Problema con Decimales
let resultadoDecimal = 0.1 + 0.2; // 0.30000000000000004
console.log("Resultado decimal:", resultadoDecimal);
console.log("Resultado con toFixed:", resultadoDecimal.toFixed(1)); // "0.3"
console.log("¿Es igual a 0.3?", resultadoDecimal === 0.3); // false

// toFixed() vs toPrecision()

// toFixed: Fija el número de decimales
let precio = 10.56789;
console.log("Precio con toFixed:", precio.toFixed(2)); // "10.57"

// toPrecision: Fija los dígitos significativos
let valor = 123.456;
console.log("Valor con toPrecision:", valor.toPrecision(4)); // "123.5"

// Consideración: toFixed() convierte el resultado a string.
// Usa toFixed() para precios o porcentajes,
//  y toPrecision() para valores grandes o pequeños donde importan los dígitos significativos.
