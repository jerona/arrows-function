    var peoples = [
        { name: 'Pepe', id: '00000001A', workingIn: 'OFICINA' },
        { name: 'Juan', id: '00000002B', workingIn: 'CASA' },
        { name: 'Jose', id: '00000003C', workingIn: 'DESPACHO' },
        { name: 'Samuel', id: '00000004D', workingIn: 'CASA' }
    ];

    // function tradicional
    function peopleByWorkingIn(workingIn, workingIn2) {
        return peoples.filter(
            function(people) {
                return people.workingIn === workingIn || people.workingIn === workingIn2;
            }
        );
    }

    // function tradictional with arrow function (en la llamada del filter)
    function peopleByWorkingInArrow(workingIn, workingIn2) {
        return peoples.filter(
            (people) => {
                return people.workingIn === workingIn || people.workingIn === workingIn2
            }
        )
    }

    // function arrow function (two arrows, el propio método en si y la parte de dentro del filter).
    // en la llamada del filter al ser siempre un parámetro se puede quitar el parentesis.
    // 2 return (1 implicito dentro del filter (es decir, sin especificar el return hace el correspondiente return))
    peopleByWorkingInArrowV2 = (workingIn, workingIn2) => {
        return peoples.filter(
            people => people.workingIn === workingIn || people.workingIn === workingIn2 // arrow function con 1 return implicito
        );
    }

    // function arrow function (two arrows, el propio método en si y la parte de dentro del filter).
    // No hace falta ningún return, al no disponer de llaves viene implicito el return
    // tanto para el arrow empleado dentro del filter como el arror de la propia creacion de la función.
    // 2 return (2 implicito)
    peopleByWorkingInArrowV3 = (workingIn, workingIn2) => // return implicito (no dispone de llave)
        peoples.filter(
            people => people.workingIn === workingIn || people.workingIn === workingIn2 // return implicito (no dispone de llave)
        );

    // EMPLEADOS QUE TRABAJEN EN OFICINA O DESPACHO
    // Todos las funciones devuelven lo mismo
    console.log('Tradicional: ', peopleByWorkingIn('OFICINA', 'DESPACHO'));
    console.log('Arrow      - 2 return (0 implicito): ', peopleByWorkingInArrow('OFICINA', 'DESPACHO'));
    console.log('ArrowV2    - 2 return (1 implicito): ', peopleByWorkingInArrowV2('OFICINA', 'DESPACHO'));
    console.log('ArrowV3    - 2 return (2 implicito): ', peopleByWorkingInArrowV3('OFICINA', 'DESPACHO'));