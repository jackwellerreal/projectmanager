const projectsDir = ''


const fs = require('fs-extra')
const prompt = require('prompt-sync')();
const { exec } = require("child_process");

const dirName = prompt('Enter project name: ');
const projectType = prompt('Enter a language: ');

const files = fs.readdirSync(projectsDir);

if (files.includes(dirName)) {
    console.log('\n\033[31mProject already exists\033[0m\n');
} else if(dirName === '') {
    console.log('\n\033[31mPlease enter a project name\033[0m\n');
} else {
    makeDir(dirName, projectType)
}

function makeDir(name, type) {
    fs.mkdir(`${projectsDir}\\${name}`, (err) => {
        if (err) {
            console.log(err);
        } else {
            if(type === 'js') {
                fs.copy('./templates/js', `${projectsDir}\\${name}`, function (err) {
                    if (err) {
                      console.error(err);
                    } else {
                      console.log("\nTemplate added!\n");
                    }
                });
            } else if(type === 'py') {
                fs.copy('./templates/py', `${projectsDir}\\${name}`, function (err) {
                    if (err) {
                      console.error(err);
                    } else {
                      console.log("\nTemplate added!\n");
                    }
                });
            } else if(type === 'html') {
                fs.copy('./templates/html', `${projectsDir}\\${name}`, function (err) {
                    if (err) {
                      console.error(err);
                    } else {
                      console.log("\nTemplate added!\n");
                    }
                });
            } else if(type === 'express') {
                fs.copy('./templates/express', `${projectsDir}\\${name}`, function (err) {
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
        }
    })
}