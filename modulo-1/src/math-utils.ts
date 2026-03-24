export function calcularMedia(datos: number[]): number | null {
    if (datos.length === 0) { // comprueba que el array no está vacío
        return null;
    }
    let suma = 0;
    for (let i = 0; i < datos.length; i++) {
        suma += datos[i]; // ( suma = suma de todos los números en el array)
    }
    return suma / datos.length;
}

export function calcularMediana(datos: number[]): number | null {
    if (datos.length === 0) {
        return null;
    }
    let datosOrdenados = [...datos]; // copia del array original
    datosOrdenados.sort((a,b) => a - b); // añade una función comparadora a sort() para que ordene por número y no alfabéticamente
    if (datosOrdenados.length % 2 === 0) { // si es un array par
        let indiceDer = datosOrdenados.length / 2; // toma las dos posiciones centrales
        let indiceIzq = (datosOrdenados.length / 2) - 1;
        let valor1 = datosOrdenados[indiceDer]; // obtiene los valores de ambas posiciones
        let valor2 = datosOrdenados[indiceIzq]; 
        return (valor1 + valor2) / 2; 

    } else {
        let indiceCentral = Math.floor(datosOrdenados.length / 2); // redondea hacia abajo para obtener la posicion central
        let valorCentral = datosOrdenados[indiceCentral]; // obtiene el valor de la posición central
        return valorCentral; 
    }
}

export function filtrarAtipicos(datos: number[], limite: number): number[] | null {
    if (datos.length === 0) {
        return null;
    }
    let datosFiltrados: number[] = []; // crea un array vacío (específicando que es de números)
    for (let i = 0; i < datos.length; i++) { // recorre todos el array con un bucle for
        if (datos[i] <= limite) { // si el número es igual o menor que el limite
            datosFiltrados.push(datos[i]); // lo añadimos al final del array de datosFiltrados[]
        }
    }
    return datosFiltrados; 
}