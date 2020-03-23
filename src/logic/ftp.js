function ftp_connect(){
    const fs = require('fs');
    const Client = require('ftp');

    const c = new Client(); // Create New connect object
    try {   
        c.connect({
            host:'192.168.0.20' // FTP-server IP 
        });

        c.on('ready', function() {
            c.cwd('/HTML/Main', function(err,currentDir){
                c.get('Rashodomer$', function(err, stream) {
                    if (err) throw err;
                    stream.once('close', function() { c.end(); });
                    stream.pipe(fs.createWriteStream('Rashodomer$.local-copy.txt'));
                });
            });
      });
    }catch (e){
        console.log(e);
    }  
}

export default ftp_connect