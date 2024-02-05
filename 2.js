/*

    URL_params

 * Dada una URL con parámetros, crea una función que obtenga sus valores.
 * No se pueden usar operaciones del lenguaje que realicen esta tarea directamente.
 *
 * Ejemplo: En la url https://retosdeprogramacion.com?year=2023&challenge=0
 * los parámetros serían ["2023", "0"]
 */

function ImprimirValorParametros (url){
    url = url.split('?')[1].split('&');
    const array = url.map( value =>{
        return value.split("=")[1]
    });
    return array;
}

console.log(ImprimirValorParametros("https://retosdeprogramacion.com?year=2023&challenge=0"));