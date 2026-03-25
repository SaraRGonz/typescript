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
    switch (estado.tipo) {
        case "ACTIVA":
            return `Hay ${estado.asignatura.length} asignaturas activas`;
        case "SUSPENDIDA":
            return `Matrícula suspendida por ${estado.motivo}`;
        case "FINALIZADA":
            return `Finalizada con nota: ${estado.notaMedia}`;
    }
}