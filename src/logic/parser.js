function parser(file){
    const fs = require('fs');

    let FileData = fs.readFileSync(file,'utf-8');

    console.log(FileData);
}

export default parser;