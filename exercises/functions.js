// a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
// Ejecutar la función y guardar el resultado en una variable, mostrando el valor de
// dicha variable en la consola del navegador.
function suma(a, b) {
    return a + b;
}
var resultado = suma(5, 3);
console.log(resultado);

// b. A la función suma anterior, agregarle una validación para controlar si alguno de
// los parámetros no es un número, mostrar una alerta aclarando que uno de los
// parámetros tiene error y retornar el valor NaN como resultado.
function sumaValidada(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert("Uno de los parámetros tiene error");
        return NaN;
    }
    return a + b;
}
var resultadoValidado = sumaValidada(5, '3');
console.log(resultadoValidado);

// c. Crear una función validate integer que reciba un número como parámetro y
// devuelva verdadero si es un número entero.
function validateInteger(num) {
    return Number.isInteger(num);
}
console.log(validateInteger(5)); // true
console.log(validateInteger(5.5)); // false

// d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los
// números sean enteros. En caso que haya decimales mostrar un alerta con el
// error y retorna el número convertido a entero (redondeado).
function sumaValidadaYRedondeada(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert("Uno de los parámetros tiene error");
        return NaN;
    }
    if (!validateInteger(a)) {
        alert(`El número ${a} no es entero. Será redondeado.`);
        a = Math.round(a);
    }
    if (!validateInteger(b)) {
        alert(`El número ${b} no es entero. Será redondeado.`);
        b = Math.round(b);
    }
    return a + b;
}
var resultadoRedondeado = sumaValidadaYRedondeada(5.7, 3.3);
console.log(resultadoRedondeado);

// e. Convertir la validación del ejercicio 6d) en una función separada y llamarla
// dentro de la función suma probando que todo siga funcionando igual.
function validarYRedondear(num) {
    if (!validateInteger(num)) {
        alert(`El número ${num} no es entero. Será redondeado.`);
        return Math.round(num);
    }
    return num;
}

function sumaConValidacionSeparada(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert("Uno de los parámetros tiene error");
        return NaN;
    }
    a = validarYRedondear(a);
    b = validarYRedondear(b);
    return a + b;
}
var resultadoFinal = sumaConValidacionSeparada(5.7, 3.3);
console.log(resultadoFinal);