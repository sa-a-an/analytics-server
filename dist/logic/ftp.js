"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ftp_connect() {
  var fs = require('fs');

  var Client = require('ftp');

  var c = new Client(); // Create New connect object

  try {
    c.connect({
      host: '192.168.0.20' // FTP-server IP 

    });
    c.on('ready', function () {
      c.cwd('/HTML/Main', function (err, currentDir) {
        c.get('Rashodomer$', function (err, stream) {
          if (err) throw err;
          stream.once('close', function () {
            c.end();
          });
          stream.pipe(fs.createWriteStream('Rashodomer$.local-copy.txt'));
        });
      });
    });
  } catch (e) {
    console.log(e);
  }
}

var _default = ftp_connect;
exports["default"] = _default;