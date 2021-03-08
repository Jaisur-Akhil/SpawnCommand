const { exec } = require('child_process');
//Working
const removeFolder = exec('rmdir demo', function (error, stdout, stderr) {
    //rmdir filename
    if (error) {
      console.log(error.stack);
      console.log('Error code: '+error.code);
      console.log('Signal received: '+error.signal);
    }
    console.log('Child Process STDOUT: '+stdout);
    console.log('Child Process STDERR: '+stderr);
  });
  
  removeFolder.on('exit', function (code) {
    console.log('Child process exited with exit code '+code);
  });
  
  