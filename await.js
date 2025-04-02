import fs from "fs/promises"

// creating a file using async
// async function bhaiFilePadh(fileName){
//     try {
//         await fs.writeFile(fileName,"HELLO AZHAR");
//         let fileData = await fs.readFile(fileName, "utf-8");
//         console.log(fileData);
//     } catch (error) {
//         console.log(error);
//     }
// }
// bhaiFilePadh("Azhar.txt");

// remove file => await fs.unlink(fileName)
// remove folder => await fs.(folderName)

// reading a file using async











// removing a file

async function dltFile(fileName) {
    try {
        await fs.unlink(fileName)
        console.log(fileName);
    } catch (error) {
        console.log(error);
    }
} dltFile("file1.txt")







// renaming a file














// creating a dir








//