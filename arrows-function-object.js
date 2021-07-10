// Diferente maneras de devolver un objeto cualquiera.
// Forma tradicional y arrows.
//  
var objs = [{ id: 12345, width: 55 }, { id: 12344, width: 52 }];
var obj = { id: 12345, width: 55 };

function getObjTraditional() {
    return obj;
}

getObjArrowsV1 = () => {
    return obj;
}

getObjArrowsV2 = () => obj;

function getObjTraditionalByID(id) {
    return objs.filter(
        function(objFound) {
            return objFound.id === id
        }
    );
}

getObjByIDArrowsV3 = (id) => {
    return objs.filter(objFound => {
        return objFound.id === id
    });
}

getObjByIDArrowsV4 = (id) => objs.filter(objFound => objFound.id === id);

console.log('tradictional - getObjTraditional: ', getObjTraditional());
console.log('arrows - getObjArrowsV1: ', getObjArrowsV1());
console.log('arrows - getObjArrowsV2: ', getObjArrowsV2());

console.log('tradictional - getObjTraditionalByID: ', getObjTraditionalByID(12345));
console.log('arrows - getObjByIDArrowsV3: ', getObjByIDArrowsV3(12345));
console.log('arrows - getObjByIDArrowsV4: ', getObjByIDArrowsV4(12345));