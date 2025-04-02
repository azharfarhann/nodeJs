// import { read } from "fs"
import { read } from "fs";
import fs from "fs/promises";
import { blob } from "stream/consumers";

// create a func which creates a folder by taking folder name as parameter

//  function fldr(folderName) {
//  fs.mkdir(folderName,  (err) => {
//     if(err) {
//         console.log(err);
//     } else{
//          console.log("created a folder");
//     }
// })
// } fldr ("folderName")

// create a function by taking folderName as a parameter to delete a file

// function rmdir(folderName) {
//     fs.rmdir(folderName, (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("folder removed done");
//         }
//     })
// }

// rmdir ("THS")

// create a function which creates a folder by taking folderName as a parameter

// function mkdir(folderName) {
//     fs.mkdir(folderName , (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("folder created done");
//         }
//     })
// }
// mkdir ("ths")

// create a function by taking readFile as a parameter to read a file

// function  readFile(fileName) {
//     fs.readFile(fileName , "utf-8" , (err, data) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(data);
//         }
//     })

// }
// readFile("azhar1.txt")

/////////////////////////////////////////////////////////////////////////////

//   create a async func which creates a folder
// async function hello(farhan) {
//     try {
//         await fs.mkdir (farhan);
//         console.log("created folder called fol1");
//     } catch (error) {
//         console.log("there is an error", error);
//     }
// } hello ("fol1");
/*
Create a async function which does this:
Create a folder
Create a file inside that folder
Write content to the file
Read the content from the file
Delete the file
Delete the folder
*/
async function hello(farhan , content) {
    try {
         await fs.writeFile(farhan, content);
        let data = await fs.readFile(farhan, "utf-8");
        console.log(data);
        await fs.unlink(farhan);
        console.log("deleted aA.txt file");
        await fs.rmdir("fol1");
        console.log(" delted fol1");
    } catch (error) {
        console.log(error);
    }
} hello ("aA.txt", "hello this is aA.txt  azharfile");


//   create a async func which creates a write content to the file

// async function hello(farhan, content) {
//   try {
//      await fs.writeFile(farhan, content);
//     console.log("created");
//   } catch (error) {
//     console.log(error);
//   }
// }
// hello("bB.txt", "hello this bB.txt file");

//   create a async func which read content from the file
//   create a async func which deletes the file
// async function dlt(file) {
//     try {
//         await fs.unlink(file);
//         console.log("file deleted");
//     } catch (error) {
//         console.log(error);
//     }
// } 
// dlt("3.js");
// /home/azhar/
//  create a async func which append the folder
// async function append(farhan) {
//     try {
//       await fs.readFile
//     } catch (error) {
//         console.log(error);
//     }
// } 
// append ("read.js")