// Existen 10 tipos de datos en JavaScript:

// TIPOS DE DATOS PRIMITIVOS (son inmutables)

// 1. String: Almacena secuencias de caracteres (texto).
let nombre = "Mario"; // Comillas dobles o simples se pueden usar.
let nombreCompleto = 'Mario Pérez'; 

// 2. Number: Almacena valores numéricos (enteros o decimales).
let edad = 25;  // Se puede almacenar tanto enteros como decimales, ejemplo: 25.5

// 3. Boolean: Almacena un valor de verdadero (true) o falso (false).
let esMayorDeEdad = true;  // Indica si algo es verdadero o falso.

// 4. null: Representa un valor vacío o la ausencia intencional de un valor.
let noHayValor = null;  // Especifica que no hay valor definido.

// 5. undefined: Indica que una variable ha sido declarada pero no se le ha asignado valor.Usualmente es una respuesta.
let noDefinido;  // Es equivalente a `let noDefinido = undefined;`, ya que automáticamente tiene ese valor.

// 6. Symbol: Crea un valor único e inmutable (no puede ser modificado una vez creado), útil como identificador único.
let simboloUnico = Symbol('único');  // El símbolo es único, incluso si se le pasa el mismo string como argumento.

// 7. BigInt: Representa números enteros muy grandes, más allá del límite de Number.
let numeroGrande = 1234567890123456789012345678901234567890n;  // Se usa la "n" al final del número.

// TIPOS DE DATOS COMPLEJOS (son mutables, modificados una vez creados sin crear una nueva instancia)

// 8. Object: Almacena colecciones de datos y se representan como claves y valores.
let carro = {
    marca: 'Tesla',
    modelo: 'Model S',
    anio: 2022
}; // Se usan llaves {} para definir objetos y los datos se estructuran en clave-valor.

// 9. Array (Arreglo): Almacena listas de elementos ordenados. Los índices empiezan en 0.
let frutas = ['manzana', 'banana', 'uvas'];  // Cada elemento puede ser de cualquier tipo de dato (numeros, letras,etc). 

// 10. Function: Un bloque de código diseñado para realizar una tarea específica. En lugar de repetir un bloque de código
// una y otra vez puedes crearla y llamarla cuando necesites.
// Usamos la palabra clave function para decirle a JS que estamos creando una función.
// Luego le damos un nombre a la función para poder llamarla.
// Dentro de los paréntesis () colocamos la información que necesitamos mandar para que la misma funcione, esto se le llama Parametros o Argumentos. 
// Luego dentro de las llaves {} envolvemos el cuerpo de la función, que es el código que se ejecutara una vez la función sea llamada.
//Cuando la función termina su trabajo retorna un valor que es el resultado y puedes utilizarlo.


function saludar(nombre) {
    return `Hola, ${nombre}!`; // La función toma un argumento y retorna un saludo con ese nombre.
}
//ejemplo de uso
let mensaje = saludar("Juan");  // Llamamos a la función, pasando "Juan" como argumento
console.log(mensaje);  // Esto imprime: "Hola, Juan!"