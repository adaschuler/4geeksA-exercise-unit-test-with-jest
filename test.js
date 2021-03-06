// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const dollars = fromEuroToDollar(3.5)

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(dollars);
})

    

test("One dollar should be 106.58 yenes", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const yen = fromDollarToYen(3.5)

    // si 1 dolar son 106.58 yenes, entonces 3.5 dolares deberian ser = (3.5 * 106.58)
    const expectedyen = 3.5 * 106.58; 
    
    // hago mi comparacion (la prueba)
    expect(expectedyen).toBe(yen);
})

test("One yen should be 0.00625 pounds", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const pound = fromYenToPound(3.5)

    // si 1 yen son 0.00625 libras, entonces 3.5 yenes deberian ser = (3.5 * 0.00625)
    const expectedpound = 3.5 * 0.00625; 
    
    // hago mi comparacion (la prueba)
    expect(expectedpound).toBe(pound);
})