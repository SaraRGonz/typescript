import {calcularMedia, calcularMediana, filtrarAtipicos} from './math-utils'

// <--- Datos de prueba para comprobar que las funciones se ejecutan correctamente ---> 

const datosPrueba = [10, 5, 100, 2, 8, 24, 78];

console.log("CALCULAR MEDIA:");
console.log(calcularMedia(datosPrueba));

console.log("CALCULAR MEDIANA:");
console.log(calcularMediana(datosPrueba));

console.log("FILTRAR ATIPICOS:");
console.log(filtrarAtipicos(datosPrueba, 20));