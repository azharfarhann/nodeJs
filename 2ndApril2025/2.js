// Callbacks 
/*


A callback is simply a function passed as an argument to another function, to be called later.
*/


function sayHello(fname, secondFunction) {
    console.log(`Hello ${fname}`)
    secondFunction()
}

function sayBye() {
    console.log("Bye")
}

sayHello("Suhail", sayBye)

