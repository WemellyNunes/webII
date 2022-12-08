const fs = require('fs');

fs.stat(__filename, (err, stats) => {
    if (err) {
        console.log(err)
    } else {
        console.log('É um arquivo: ', stats.isFile() ? 'sim' : 'não')
        console.log('É um diretorio: ', stats.isDirectory() ? 'sim' : 'não')
    }
})

let subDiretorios = process.cwd().split('\\')
console.log(subDiretorios)