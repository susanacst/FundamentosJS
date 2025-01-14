// Conversión de Tipos en JavaScript
/*
JavaScript permite realizar cambios en los tipos de datos mediante conversiones explícitas o implícitas:

1. **Conversión Explícita:**
   - El programador decide y aplica manualmente una conversión de tipos.
   - Esto se hace utilizando funciones como `parseInt`, `parseFloat`, o `String`.

2. **Conversión Implícita:**
   - JavaScript convierte automáticamente los tipos de datos en tiempo de ejecución.
   - Esto puede ocurrir durante operaciones como la suma o concatenación.
   - Aunque útil, puede causar errores si no se entiende bien.
*/

// Ejemplo de Conversión Explícita
const stringNumber = "42"; // Un número representado como string
const integer = parseInt(stringNumber); // Convierte el string a un número entero
console.log(integer); // 42
console.log(typeof integer); // "number"

const stringDecimal = "3.14"; // Un número decimal como string
const float = parseFloat(stringDecimal); // Convierte el string a un número flotante
console.log(float); // 3.14
console.log(typeof float); // "number"

const binaryStr = "1010"; // Un número en formato binario como string
const decimal = parseInt(binaryStr, 2); // Convierte el binario a decimal
console.log(decimal); // 10
console.log(typeof decimal); // "number"

// Ejemplo de Conversión Implícita
const sum1 = "5" + 3; // JavaScript convierte el número 3 a string y concatena
console.log(sum1); // "53"
console.log(typeof sum1); // "string"

const sum2 = 2 + true; // JavaScript convierte `true` a 1 y realiza la suma
console.log(sum2); // 3
console.log(typeof sum2); // "number"

// Solución a Problemas con Datos Mixtos
/*
Cuando trabajamos con datos provenientes de diferentes fuentes (como formularios o APIs),
podemos encontrarnos con problemas al intentar realizar operaciones matemáticas si los datos están en formatos diferentes.
*/
function sum(a, b) {
  a = parseInt(a); // Convertir el primer argumento a número entero
  b = parseInt(b); // Convertir el segundo argumento a número entero
  const suma = a + b; // Realizar la suma
  console.log(suma); // Imprimir el resultado
}
sum('5', 5); // Resultado: 10

/*
Truco: Cómo saber si JavaScript concatena o suma:
- Si al menos uno de los valores es un string, JavaScript concatenará los valores.
- Si ninguno de los valores es un string, JavaScript realizará una operación aritmética.
*/

// Reglas de Conversión Implícita en Operaciones
const stringValue = "10";
const numberValue = 10;
const booleanValue = true;

console.log(stringValue + numberValue); // "1010": El número se convierte a string y se concatena
console.log(numberValue + booleanValue); // 11: `true` se convierte a 1 y se suma al número

// Ejercicio de Práctica
const numero = "596"; // String que representa un número
const numeroConvertido = parseInt(numero); // Convertir el string a número entero
console.log(typeof numero); // "string": Tipo original
console.log(typeof numeroConvertido); // "number": Tipo después de la conversión

// Reflexión
/*
- JavaScript es un lenguaje de tipado débil, lo que significa que puede cambiar el tipo de una variable en tiempo de ejecución.
- Conocer las reglas y prácticas de conversión es esencial para evitar errores.
- Practicar y experimentar con diferentes casos ayuda a desarrollar un entendimiento más sólido.
*/
