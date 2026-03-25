// <T> es un genérico
interface RespuestaAPI<T> {
    codigoEstado: number,
    exito: boolean,
    datos: T, // aquçí va el contenido, sea cual sea el tipo T.
    errores?: string[],
}

// La función también usa T
// Retorna una promesa. Le asegura al sistema que le va a dar una RespuestaAPI con el tipo T
export function obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>> {
    return new Promise((resolve, reject) => { // Crea la promesa. resolve es el encargado de entregar la respuesta
        setTimeout(() => {
            resolve({
            codigoEstado: 200,
            exito: true,
            datos: "Prueba" as unknown as T // usa as unknown as T para forzar la compatibilidad y que no de error de tipado para la simulación
        })
        }, 1000); // simula una latencia de 1 segundo (1000 milisegundos)
    });
}

