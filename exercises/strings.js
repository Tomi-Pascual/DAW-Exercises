/* a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el
texto en mayúscula (utilizar toUpperCase).*/
var stringA = "javascript";
stringA = stringA.toUpperCase();
console.log(stringA);

/* b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con los primeros 5 caracteres guardando el resultado en una nueva
variable (utilizar substring).*/
var stringB = "javascript";
var substringB = stringB.substring(0, 5);
console.log(substringB);

/* c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con los últimos 3 caracteres guardando el resultado en una nueva variable
(utilizar substring). */
var stringC = "javascript";
var substringC = stringC.substring(stringC.length - 3);
console.log(substringC);

/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con la primera letra en mayúscula y las demás en minúscula. Guardar el
resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y
el operador +).*/
var stringD = "javascript";
var formattedStringD = stringD[0].toUpperCase() + stringD.substring(1).toLowerCase();
console.log(formattedStringD);

/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en
blanco. Encontrar la posición del primer espacio en blanco y guardarla en una
variable (utilizar indexOf).*/
var stringE = "hello world";
var firstSpaceIndex = stringE.indexOf(' ');
console.log(firstSpaceIndex);

/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y
algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para
generar un nuevo string que tenga la primera letra de ambas palabras en
mayúscula y las demás letras en minúscula (utilizar indexOf, substring,
toUpperCase, toLowerCase y el operador +). */
var stringF = "javascript programming";
var spaceIndex = stringF.indexOf(' ');
var firstWord = stringF.substring(0, spaceIndex);
var secondWord = stringF.substring(spaceIndex + 1);
var formattedStringF = firstWord[0].toUpperCase() + firstWord.substring(1).toLowerCase() + ' ' + secondWord[0].toUpperCase() + secondWord.substring(1).toLowerCase();
console.log(formattedStringF);