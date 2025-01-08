// ---------- Cadenas de Caracteres en JavaScript ----------

// Las cadenas de caracteres, o strings, son un tipo de dato fundamental en JavaScript.
// Representan secuencias de caracteres y se utilizan para almacenar y manipular texto, 
// como nombres, frases, código HTML o cualquier tipo de información textual.

// ----------- Cómo Crear Strings -----------

// 1. Literales de Cadena: 
// Son la forma más común de crear cadenas y utilizan comillas simples ('') o comillas dobles ("") 
// para delimitar el texto.
const saludo = "Hola mundo!";
const mensaje = 'Hoy estoy aprendiendo JavaScript.';

// 2. Plantillas de Cadena (Template Strings):
// Forma moderna y flexible de crear cadenas utilizando las comillas invertidas (``).
// Permiten incluir expresiones dentro de la cadena utilizando `${}`.
const nombre = "Susana";
const edad = 26;
const saludoPlantilla = `Hola, ${nombre}! Tienes ${edad} años.`;
console.log(saludoPlantilla); // Salida: Hola, Susana! Tienes 26 años.

// ---------- Propiedades y Métodos de Strings ----------

// Los strings tienen varias propiedades y métodos para manipularlos y obtener información sobre ellos.

// 1. Propiedad "length":
// Devuelve la longitud de la cadena (número de caracteres incluidos espacios).
const texto = "Aprender JavaScript es divertido!";
console.log(texto.length); // Salida: 33

// 2. Métodos comunes:
console.log(texto.toLowerCase()); // Convierte la cadena a minúsculas
console.log(texto.toUpperCase()); // Convierte la cadena a mayúsculas
console.log(texto.trim()); // Elimina los espacios en blanco al inicio y al final
console.log(texto.slice(0, 9)); // Extrae una porción de la cadena (de índice 0 a 9)
console.log(texto.charAt(2)); // Devuelve el carácter en la posición 2
console.log(texto.concat(" ¡Vamos a programar!")); // Concatena cadenas
console.log(texto.match(/JavaScript/)); // Busca coincidencias de una expresión regular

// 3. Método substring():
// Extrae una parte de un string basado en índices inicial y final.
let cadena = "¡Hola, Mundo!";
let subCadena = cadena.substring(0, 5);
console.log(subCadena); // Salida: "¡Hola"

// ----------- Concatenación de Strings -----------

// 1. Usando el operador "+":
const direccion = "5 de mayo";
const ciudad = "México";
const direccionCompleta = "Mi dirección completa es " + direccion + ", " + ciudad;
console.log(direccionCompleta);

// 2. Usando Template Literals:
const pais = "México";
const presentacion = `Mi nombre es ${nombre} y soy de ${pais}.`;
console.log(presentacion);

// ---------- Ejemplo de uso práctico ----------

const frase = "  Aprende JavaScript con Platzi  ";
// Manipulaciones
const nuevaFrase = frase.trim().toUpperCase().substring(0, 20);
console.log(nuevaFrase); // Salida: "APRENDE JAVASCRIPT CO"
