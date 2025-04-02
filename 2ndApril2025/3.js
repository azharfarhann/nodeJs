// FS File System

// by default in nodejs 
/// there is a package which is installed in nodejs
// npm i fs // dont do


import fs from "fs"

// it accepts 3 params
// 1st ==> file name
// 2nd => human readable format
// 3rd => arrow function for data and error

// Reading file
fs.readFile("./suhail.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err)
    } else {
        // console.log(data)
    }
})


// creating a folder 

// fs.mkdir("ishwari", (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("Folder created successfully")
//     }
// })



// fs.writeFile("data.txt", "Hello I am Content of file", (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("file created and data added successfully")
//     }
// })


// fs.rmdir("ishwari", (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("folder deleted successfully")
//     }
// })


// fs.rename("azhar111.txt", "suhail.txt", (err) => {
//     if (err) {
//         console.log(err)
//     }
// })

// update content from a file 

// let updatedContent = "Hello I am updated content";
// let fileName = "suhail.txt"

// fs.appendFile(fileName, updatedContent, (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("done")
//     }
// })


// create a function which creates a folder 
// by taking folder name as parameter 

// function mkdir(folderName) {
//     fs.mkdir(folderName, (err) => {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log("Folder created done")
//         }
//     })
// } 

fs.readFile("suhail.txt", "utf-8", (err, fileContent) => {
    if (err) {
        console.log(err)
    } else {
        // console.log(fileContent)
        console.log(fileContent)
    }
})