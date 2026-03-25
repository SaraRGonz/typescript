# Documentación de Arquitectura - Módulo 2

## 1. Interfaces y Types

### Uso de `interface` para entidades base

Se utiliza `interface` para definir la estructura de `Estudiante` y `Asignatura` porque las interfaces están pensadas para describir la forma de objetos concretos y predecibles, es decir objetos que siempre van a tener las mismas propiedades.

Se aplica el modificador `readonly` al campo `id` para que no pueda modificarse una vez creado el objeto. Esto evita que por error se modifique el id en alguna parte del código.

```ts
interface Estudiante {
  readonly id: number;
  nombre: string;
  // ...
}
```

### Uso de `type` para la Unión Discriminada

Para representar el estado de la matrícula se necesita expresar que un valor puede ser una de tres formas distintas: `MatriculaActiva`, `MatriculaSuspendida` o `MatriculaFinalizada`. 
A esto se le llama Unión Discriminada (Tagged Union).

Las interfaces no permiten este tipo de construcción porque solo describen un único objeto, no varios posibles. Por eso es necesario usar `type`:

```ts
type EstadoMatricula = MatriculaActiva | MatriculaSuspendida | MatriculaFinalizada;
```

Con esta estructura TypeScript puede determinar en qué variante nos encontramos dentro de una función analizando un campo discriminador, a esto se le conoce como Type Narrowing. Esto es lo que permite generar reportes distintos según el estado de la matrícula de forma segura.

---

## 2. Servicio de Datos Genérico (Generics `<T>`)

Cuando se trabaja con llamadas a una API, la respuesta siempre tiene la misma estructura externa (código HTTP, indicador de éxito, posibles errores), pero el contenido que devuelve varía según el recurso que se pide: a veces es un `Estudiante`, a veces una `Asignatura`, etc.

Si no se usasen genéricos, habría que crear una interfaz distinta para cada caso y escribir código innecesario.

Se diseña una interfaz genérica con un parámetro de tipo `<T>` que actúa como un hueco que se rellena en el momento de uso:

```ts
interface RespuestaAPI<T> {
  codigoHTTP: number;
  exito: boolean;
  datos: T;
  errores?: string[];
}
```

De esta forma la misma interfaz sirve para cualquier entidad :

```ts
RespuestaAPI<Estudiante>   // datos será de tipo Estudiante
RespuestaAPI<Asignatura>   // datos será de tipo Asignatura
```

La función `obtenerRecurso<T>` propaga el genérico a su `Promise` de retorno. Esto hace que TypeScript conozca el tipo exacto de los datos recibidos antes de siquiera ejecutar el código. Esto permite detectar errores de acceso a propiedades en tiempo de compilación en lugar de en tiempo de ejecución.