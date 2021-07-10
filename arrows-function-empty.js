// Diferente maneras de devolver un undefined.
// Forma tradicional y arrows.
//   
function returnEmptyTraditional() {
    return
}

returnEmptyArrowsV1 = () => {
    return
}

returnEmptyArrowsV2 = () =>

    console.log('tradictional - returnEmptyTraditional: ', returnEmptyTraditional());
console.log('arrows - returnEmptyArrowsV1: ', returnEmptyArrowsV1());
console.log('arrows - returnEmptyArrowsV2: ', returnEmptyArrowsV2());