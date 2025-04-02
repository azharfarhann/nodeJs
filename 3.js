// FS file system

// by default in nodeJs
//there is a package which is installed in nodejs
// npm i fs // dont do /// no need to install it

import fs from "fs"

// it accepts 3 parameters
// 1st ==> file name
// 2nd => human readable format
// 3rd => arrow function and error

// for reading a file the function is
// fs.readFile("./azhar.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err);
    

//     }else {
//         console.log(data);
//     }
// })

// creating a folder

// fs.mkdir("azhar", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("folder created sucessfully");
//     }
// })

// creating and adding file content

// fs.writeFile("data1.txt", "Hello azhar", (err) => {
//     if (err){
//         console.log(err);
//     } else {
//         console.log("file and content created sucessfully");
//     }
// })

// removing a folder

// fs.rmdir("azhar", (err) =>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("folder deleted ");
//     }
// })

// reanme a folder

// fs.rename("azhar.txt" , "farhan.txt" , (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("file renamed ");
//     }
// })


// update content from a file

// let updatedContent = "Hello  i am updated content"
// let fileName = "azhar1.txt"

// fs.appendFile(fileName, updatedContent , (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Done updated & created a file");
//     }
// })

