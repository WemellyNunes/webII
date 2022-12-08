const fs = require('fs')
let msg = 'Os arquivos do diretorio atual: '

fs.promises.readdir(process.cwd()).then(filenames => {
    console.log(msg)
    for (let filename of filenames) {
        console.log(filename)
    }
}).catch(err => {
    console.log(err)
})