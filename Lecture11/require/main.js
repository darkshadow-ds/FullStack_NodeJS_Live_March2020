const lib1 = require('./lib1')

console.log('hello world')

if (typeof window !== 'undefined') {
    console.log('running in browser')
} else {
    console.log('running in node')
}

/*
# global,module and process these are three objects which exist in node but does not
exist in browser.
document and window exist in browser and does not exist in node.

# globalThis exist in both nodejs and browser.
In browser globalThis === window gives true.
In nodejs globalThis === global gives true.
globalThis is basically common way to access outermost scope.

# Javascript me hum jo cheeze export krte h usko bhi runtime pe badalna possible h
after it has been exported.
*/

console.log(lib1)

lib1.sayHello('John')

setTimeout(() => {
    console.log(lib1)
}, 2000)

