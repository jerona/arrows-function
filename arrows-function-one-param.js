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


// function arrows
// el return viene implicito (al no ir con llaves '{}')
// no es necesario especificar el tipo var.
// al recibir la funcion un parametro unicamente, no hara falta el parentesis
// si no fuera por que se especifica un valor por defecto..., por tanto, hará falta
// que en ese caso especificaremos parametro por defecto para la variable de num1 esto dentro del parentesis.
sumPlus1ArrowsV4 = (num1 = 3) => num1 + 1;

console.log('function tradicional "sumTwoNum" : ', sumPlus1(3));
console.log('function tradicional anonimous: ', function(num1) { return num1 + 1; }(3));
console.log('function arrows "sumTwoNumArrows" : ', sumPlus1Arrows(3));
console.log('function arrows "sumTwoNumArrowsV2" : ', sumPlus1ArrowsV2(3));
console.log('function arrows "sumTwoNumArrowsV3" : ', sumPlus1ArrowsV3(3));
console.log('function arrows "sumTwoNumArrowsV4" : ', sumPlus1ArrowsV4());
console.log('function arrows anonimous: ', (num1 => num1 + 1)(3));