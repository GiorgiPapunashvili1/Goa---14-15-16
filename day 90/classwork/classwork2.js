const Map = new Map([
    ['color1', 'green'],
    ['color2', 'black'],
    ['color3', 'white']
    ['color4', 'red']
    ['color5', 'blue']
]);


if (Map.has('red')) {
    console.log('Map has red');
} else {
    console.log('map does not have red');
}
