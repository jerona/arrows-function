// function tradicional
function sumPlus1(num1) {
    return num1 + 1;
}

// function arrows
// no es necesario especificar el tipo var.
sumPlus1Arrows = (num1) => {
    return num1 + 1;
}

// function arrows
// el return no es necesario ya que viene implicito (al no ir con llaves '{}')
// por lo que devolverá siempre un valor.
// no es necesario especificar el tipo var.
sumPlus1ArrowsV2 = (num1) => num1 + 1;


// function arrows
// el return viene implicito (al no ir con llaves '{}')
// no es necesario especificar el tipo var.
// al recibir la funcion un parametro unicamente, no hara falta el parentesis.
sumPlus1ArrowsV3 = num1 => num1 + 1;

console.log('function tradicional "sumTwoNum" : ', sumPlus1(1));
console.log('function tradicional anonimous: ', function(num1) { return num1 + 1; }(1));
console.log('function arrows "sumTwoNumArrows" : ', sumPlus1Arrows(2));
console.log('function arrows "sumTwoNumArrowsV2" : ', sumPlus1ArrowsV2(3));
console.log('function arrows anonimous: ', (num1 => num1 + 1)(5));