
import fs from "fs/promises"
// function read(a) {
//     fs.readFile(a, "utf-8", (err, data) => {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(data)
//         }
//     })

// }

// read("github.txt")



async function hello(azhar,content) {
    try {
        
        await fs.writeFile(azhar,content) 
        let data = await fs.readFile(azhar, "utf-8");
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

hello("ali.txt","Hello I am azhar")



