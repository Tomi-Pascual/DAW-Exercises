var words = ["apple", "banana", "cherry", "date", "elderberry"];

// a. Recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
for (let i = 0; i < words.length; i++) {
    alert(words[i]);
}

// b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
for (let i = 0; i < words.length; i++) {
    let capitalizedWord = words[i][0].toUpperCase() + words[i].substring(1);
    alert(capitalizedWord);
}

// c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array
// del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de
// la variable sentence. Al final mostrar una única alerta con la cadena completa.
var sentence = "";
for (let i = 0; i < words.length; i++) {
    sentence += words[i] + " ";
}
alert(sentence.trim());

// d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con
// el número de la repetición, es decir que al final de la ejecución del bucle for
// debería haber 10 elementos dentro del array, desde el número 0 hasta al número
// 9. Mostrar por la consola del navegador el array final (utilizar console.log).
var numberArray = [];
for (let i = 0; i < 10; i++) {
    numberArray.push(i);
}
console.log(numberArray);