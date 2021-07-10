// function tradicional
function sumTwoNum(num1, num2) {
    return num1 + num2;
}

// function arrows
// no es necesario especificar el tipo var.
sumTwoNumArrows = (num1, num2) => {
    return num1 + num2;
}

// function arrows
// el return viene implicito (al no ir con llaves '{}').
// no es necesario especificar el tipo var.
sumTwoNumArrowsV2 = (num1, num2) => num1 + num2;


// function arrows
// el return viene implicito (al no ir con llaves '{}').
// no es necesario especificar el tipo var.
// en este caso en la llamada especificaremos por defecto los valores
// por defecto de ambas variable de la funcion arrows.
sumTwoNumArrowsV3 = (num1 = 1, num2 = 2) => num1 + num2;

// calls
console.log('function tradicional "sumTwoNum" : ', sumTwoNum(1, 2));
console.log('function tradicional anonimous: ', function(num1, num2) { return num1 + num2; }(1, 2));
console.log('function arrows "sumTwoNumArrows" : ', sumTwoNumArrows(1, 2));
console.log('function arrows "sumTwoNumArrowsV2" : ', sumTwoNumArrowsV2(1, 2));
console.log('function arrows "sumTwoNumArrowsV3" : ', sumTwoNumArrowsV3());
console.log('function arrows anonimous: ', ((num1, num2) => num1 + num2)(1, 2));