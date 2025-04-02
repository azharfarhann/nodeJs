import fs from "fs";

// Enhanced function to create a folder
async function fol(folderName) {
    try {
        if (!fs.existsSync(folderName)) {
            await fs.mkdir(folderName);
            console.log("Created a folder");
        } else {
            console.log("Folder already exists");
        }
    } catch (error) {
        console.log(error);
    }
}
fol("folder1");

// Function to create a file inside a folder
async function createFile(folderName, fileName, content) {
    try {
        const filePath = \`\${folderName}/\${fileName}\`;
        await fs.writeFile(filePath, content);
        console.log(\`File \${fileName} created in \${folderName}\`);
    } catch (error) {
        console.log(error);
    }
}

// Function to read a file
async function readFile(fileName) {
    try {
        const data = await fs.readFile(fileName, "utf-8");
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

// Function to delete a file
async function deleteFile(fileName) {
    try {
        await fs.unlink(fileName);
        console.log(\`File \${fileName} deleted\`);
    } catch (error) {
        console.log(error);
    }
}

// Function to delete a folder
async function deleteFolder(folderName) {
    try {
        await fs.rmdir(folderName);
        console.log(\`Folder \${folderName} deleted\`);
    } catch (error) {
        console.log(error);
    }
}
