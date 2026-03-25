export interface Estudiante {
    readonly id: string;
    nombre: string;
}

export interface Asignatura {
    readonly id: string;
    nombre: string;
}

interface MatriculaActiva {
    tipo: "ACTIVA"; 
    asignatura: Asignatura[];
}

interface MatriculaSuspendida {
    tipo: "SUSPENDIDA";
    motivo: string;
}

interface MatriculaFinalizada {
    tipo: "FINALIZADA";
    notaMedia: number;
}

export type EstadoMatricula = MatriculaActiva | MatriculaSuspendida | MatriculaFinalizada;

function generarReporte(estado: EstadoMatricula) {
    switch (estado.tipo) { // Evalua la propiedad discriminadora (tipo) que comparten todas las interfaces
        case "ACTIVA":
            // Debido al Type Narrowing TypeScript sabe que aquí el estado es MatriculaActiva
            return `Hay ${estado.asignatura.length} asignaturas activas`; // Deja acceder a estado.asignatura de forma segura
        case "SUSPENDIDA":
            return `Matrícula suspendida por ${estado.motivo}`;
        case "FINALIZADA":
            return `Finalizada con nota: ${estado.notaMedia}`;
        default: // El bloque default actúa como protección (Exhaustiveness checking)
            // Si se cubren todos los casos de EstadoMatricula, 'estado' será de tipo 'never'
            const comprobacionExhaustiva: never = estado;
            // Lanza un error en tiempo de ejecución por si estos datos vienen de un entorno sin TypeScript 
            throw new Error (`Estado no manejado: ${JSON.stringify(comprobacionExhaustiva)}`);
    }
}