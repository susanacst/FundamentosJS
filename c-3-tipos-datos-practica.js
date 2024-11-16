let students = [
    {"id": 1, "nombre": "Juan Pérez", "edad": 16, "clase": "10-A"},
    {"id": 2, "nombre": "María López", "edad": 17, "clase": "10-B"},
    {"id": 3, "nombre": "Carlos García", "edad": 16, "clase": "10-A"},
    {"id": 4, "nombre": "Ana Martínez", "edad": 17, "clase": "10-C"},
    {"id": 5, "nombre": "Luis Fernández", "edad": 16, "clase": "10-B"},
    {"id": 6, "nombre": "Marta Rodríguez", "edad": 17, "clase": "10-A"},
    {"id": 7, "nombre": "Jorge Sánchez", "edad": 16, "clase": "10-C"},
    {"id": 8, "nombre": "Sofía Ramírez", "edad": 17, "clase": "10-B"},
    {"id": 9, "nombre": "Raúl Torres", "edad": 16, "clase": "10-A"},
    {"id": 10, "nombre": "Elena Díaz", "edad": 17, "clase": "10-C"}
]

let materias = [
    {"id_alumno": 1, "materias": ["Matemáticas", "Historia", "Ciencias"]},
    {"id_alumno": 2, "materias": ["Matemáticas", "Inglés", "Geografía"]},
    {"id_alumno": 3, "materias": ["Matemáticas", "Historia", "Arte"]},
    {"id_alumno": 4, "materias": ["Ciencias", "Inglés", "Educación Física"]},
    {"id_alumno": 5, "materias": ["Matemáticas", "Historia", "Geografía"]},
    {"id_alumno": 6, "materias": ["Ciencias", "Arte", "Educación Física"]},
    {"id_alumno": 7, "materias": ["Inglés", "Historia", "Geografía"]},
    {"id_alumno": 8, "materias": ["Matemáticas", "Ciencias", "Arte"]},
    {"id_alumno": 9, "materias": ["Historia", "Geografía", "Educación Física"]},
    {"id_alumno": 10, "materias": ["Ciencias", "Arte", "Matemáticas"]}
]

/*Ejercicio 1 - Muéstrame todos los estudiantes*/
// Respuesta 1.
console.log(students);
// Respuesta 2.
for (let index = 0; index < students.length; index++) {
    console.log(students[index]);
    
}

//Respuesta 3. 
console.log(students.join(","))

/*Ejercicio 2- Muéstrame todos los estudiantes de la clase 10-A */
//Respuesta
let match = students.filter( students => students.clase==="10-A")
console.log(match);

/*Ejercicio 3- Guarda en un arreglo los alumnos de cada clase. Ejemplo: 
    clase10_A = ['Juan Pérez', 'Carlos García', etc...]
    clase10_B = ['María López', 'Luis Fernández', etc...]
    clase10_C = ['Ana Martínez', 'Jorge Sánchez', etc...]
*/
// Respuesta
students.push({
    "id": 101, "nombre": "Meliodas Alejandro", "edad": 16, "clase": "10-J"
},
{
    "id": 102, "nombre": "Goku Miguel", "edad": 16, "clase": "10-J"
},
{
    "id": 103, "nombre": "Elizabeth Moon", "edad": 16, "clase": "10-J"
});
/*Ejercicio 4- Muéstrame un arreglo con todos los alumnos en un objeto cada uno, cada alumno debe tener su información y sus materias */