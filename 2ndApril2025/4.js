import fs from "fs"


fs.writeFile("one.txt", "Hello", (err) => { // 5
    if (err) {
        console.log(err)
    } else {
        console.log("1")
        console.log("file is created")
    }
})

fs.readFile("one.txt", "utf-8", (err, data) => {  // 2
    if (err) {
        console.log(err)
    } else {
        console.log("2")
        console.log(data)
    }
})

fs.rmdir("one.txt", (err) => {  /// 1 second
    if (err) {
        console.log(err)
    } else {
        console.log("3")
        console.log("file delete")
    }
})


// if you using fs module with arrow function 
// then it may not give proper results in order

// why ?

// console.log("1");
// console.log("2");
// console.log("3")

// console.log("1")

// setTimeout(() => {
//     console.log("2")  // writeFiLE SUHAIL.TXT
// }, 2000)

// setTimeout(() => {  // rmdir  SUHAIL.TXT
//     console.log("3")
// }, 1000)

// console.log("3")

// JS ==> first all sync code 
// then all async code 

// ASYNC AWAIT 