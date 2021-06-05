/* console.log("Hello World") */
// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.


// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)


// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// declaramos una funcion con el mismo nombre "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}


// declaramos una funcion con el mismo nombre "fromDollarToYen"
const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a Yenes
    let valueInYen = valueInDollar * (106.58);
    // retornamos el valor
    return valueInYen;
}

// declaramos una funcion con el mismo nombre "fromYenToPound"
const fromYenToPound = function(valueInYen){
    // convertimos el valor a Libras
    let valueInPound = valueInYen * 0.00625;
    // retornamos el valor
    return valueInPound;
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };