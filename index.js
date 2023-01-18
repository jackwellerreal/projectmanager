const projectsDir = ''


const fs = require('fs-extra')
const prompt = require('prompt-sync')();
const { exec } = require("child_process");

const dirName = prompt('Enter project name: ');
const projectType = prompt('Enter a language: ');

const files = fs.readdirSync(projectsDir);

if (files.includes(dirName)) {
    console.log('\n\033[31mProject already exists\033[0m\n');
    console.log('Closing in 1 minute');
    setTimeout(() => {
        console.log('Closing');
    }, 60000);
} else if(dirName === '') {
    console.log('\n\033[31mPlease enter a project name\033[0m\n');
    console.log('Closing in 1 minute');
    setTimeout(() => {
        console.log('Closing');
    }, 60000);
} else if(dirName.includes(' ')) {
    console.log('\n\033[31mProject name cannot contain spaces\033[0m\n');
    console.log('Closing in 1 minute');
    setTimeout(() => {
        console.log('Closing');
    }, 60000);
} else {
    makeDir(dirName, projectType)
}

function makeDir(name, type) {
    fs.mkdir(`${projectsDir}\\${name}`, (err) => {
        if (err) {
            console.log(err);
        } else {
            if(type === 'js') {
                fs.copy(`${__dirname}/templates/js`, `${projectsDir}\\${name}`, function (err) {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log("\nTemplate added!\n");
                    }
                });
            } else if(type === 'py') {
                fs.copy(`${__dirname}/templates/py`, `${projectsDir}\\${name}`, function (err) {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log("\nTemplate added!\n");
                    }
                });
            } else if(type === 'html') {
                fs.copy(`${__dirname}/templates/html`, `${projectsDir}\\${name}`, function (err) {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log("\nTemplate added!\n");
                    }
                });
            } else if(type === 'express') {
                fs.copy(`${__dirname}/templates/express`, `${projectsDir}\\${name}`, function (err) {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log("\nTemplate added!");
                    }
                });
            } else {}
            console.log('\nDirectory created\n');
            openCode()
        }
    })
}

function openCode() {
    exec(`code ${projectsDir}\\${dirName}`, (err, stdout, stderr) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Opening VSCode\n');
            console.log('Closing in 1 minute');
            setTimeout(() => {
                console.log('Closing');
            }, 60000);
        }
    })
}