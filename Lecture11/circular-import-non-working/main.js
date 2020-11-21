const lib1 = require('./lib1.js')
const lib2 = require('./lib2.js')

console.log(lib1)
console.log(lib2)

console.log(lib1.lib2)
console.log(lib2.lib1)

/*
 Any point of time pe hum aise kisi require pe pahuchte h jo require abhi tk khud
 resolve hua nahi h(jis require line ka cimpletion hua nahi h abhi tk. Jo in memory
 h abhi tk) to that will return an empty object.
 eg. lib1 ke require hote hote agr lib1 dubara require ho gya to waha empty object
 aa jata h.
*/

console.log(lib1.lib2.lib1)
console.log(lib2.lib1.lib2)