# Laboratorio de Módulos JavaScript

## Datos del Estudiante
- Nombre: Roberto Alonso Reyna Arvizu.
- Fecha: 10/21/2026.
- Tiempo de desarrollo: 90 minutos.

## 1. Comparativa CommonJS vs ES6

| Característica | CommonJS | ES6 Modules |
|---|---|---|
| Sintaxis de importación | `require('./calculadora.cjs')` | `import { sumar } from './calculadora.js'` |
| Sintaxis de exportación | `module.exports` y `exports` | `export` y `export default` |
| Carga (síncrona/asíncrona) | `require()` es síncrono. | Las importaciones estáticas se analizan antes de ejecutar el módulo; `import()` es asíncrono y devuelve una promesa. |
| Se puede usar en Node.js | Sí. Utiliza `.cjs` o archivos `.js` configurados como CommonJS. | Sí. Utiliza `"type": "module"` en `package.json` o la extensión `.mjs`. |
| Se puede usar en el navegador | No de forma nativa. Requiere herramientas de adaptación. | Sí. Utiliza `<script type="module">`. |
| Importación dinámica | `require(ruta)` | `import(ruta)`, que devuelve una promesa. |
| Alcance del módulo (*scope*) | Cada archivo tiene su propio alcance; las funciones y variables deben exportarse para compartirse. | Cada módulo tiene su propio alcance; utiliza `export` e `import` para compartir funciones y variables. |
| Cacheo de módulos (sí/no) | Sí. Node.js almacena los módulos cargados en caché. | Sí. Los módulos cargados se registran y sus instancias se reutilizan según el entorno. |



## 2. Análisis de Errores
[Error 1: No se podia hacer la primer verificacion (node index.cjs). La causa erea que no existia potencia y raiz en module exports, por lo que no se podian encontrar en el archivo de index a la hora de llamarlos. Se tuvo que agregar potencia y raiz en module exports.]

[Error 2: A la hora de abrir el archivo index.html, no se puede abrir directo usando los archivos de js debido a que existe dentro de wsl, al presionar los botones, no ocurre nada. Se soluciono instalando npx serve para abrirlo como servidor.]

[Error 3: Un error en la consola mencionaba que habia error debido a que existia una funcion duplicada en conversor.js. Se soluciono borrando las exportaciones en el bloque de exportacion agrupada que ya existian previamente existian como export function]


## 3. Respuestas a Reflexión
¿Por qué CommonJS es síncrono y ES6 modules puede ser asíncrono?

    - CommonJS necesita cargar sus modulos en orden uno por uno, mientras ES6 puede cargar sus modulos fuera de orden.

¿Qué ventajas tiene usar "type": "module" en Node.js?

    - Nos permite usar el syntax de import, quiere decir, que permite usar los archivos js como ESM.

¿Cómo afecta el hoisting a las importaciones ES6?

    - Hoisting aparta memoria para variables, funciones y declaraciones antes que se ejecute el codigo, por ende, quiere decir que las importaciones seran ejecutadas y guardadas en memoria antes que se ejecute el codigo principal.

¿En qué casos usarías import default vs import named?

    - Puedes tener un default, pero muchos named, y como named siempre tendra el mismo nombre, es mas limpio de leer para otros desarrolladores.

¿Por qué los navegadores requieren type="module" en los scripts?

    - Para decirle al navegador que use el parsing de ESM, sin este, usa el parsing original, y puede causar errores.

## 4. Conclusiones
Podemos definir la importancia de los modulos en tres secciones diferentes, Organizacion, mantenimiento y reutilizacion o independencia.
Tener modulos en js es similar a tener librerias en C. Al nosotros separar las funcionalidades del sistema, e implementarlo por medio de importaciones, se nos facilita el el encontrar detalles dentro de nuestra codebase. Podemos definir donde existe una funcionalidad del codigo sin tener que explorar todo el codebase, ya que cada archivo tiene una funcion especifica e identificable, reduciendo la complejidad del codigo.

En el caso del mantenimiento, gracias a que la complejidad es reducida, dentro de un equipo de desarrolladores, es facil el poder encontrar y modificar o actualizar codigo sin la necesidad del autor original. En muchas ocasiones, codigo desordenado puede llegar a ser mucho mas destructivo para el funcionamiento a largo plazo de una aplicacion que codigo desactualizado, ya que los desarrolladores necesitan invertir tiempo en simplemente entender lo que estan viendo. Con los modulos, este problema se reduce, ya que son como piezas de un rompecabezas.

Una función implementada en un módulo puede utilizarse desde otros archivos mediante mecanismos de exportación e importación. Así, no se necesita copiar y pegar el mismo código cada vez que requieras esa funcionalidad. Además, los módulos establecen interfaces explícitas: permiten decidir qué funciones o valores estarán disponibles para otros archivos y cuáles permanecerán internos. Esto ayuda a ocultar detalles de implementación que otros módulos no necesitan conocer.

## 5. Referencias
    - https://lenguajejs.com/nodejs/fundamentos/commonjs-vs-esm/
    - https://stackoverflow.com/questions/61401475/why-is-type-module-in-package-json-file
    - https://enzodiazdev.medium.com/qué-es-el-hoisting-y-por-qué-no-debería-importarte-b36d6861eb19
    - https://stackoverflow.com/questions/46913851/why-and-when-to-use-default-export-over-named-exports-in-es6-modules 
