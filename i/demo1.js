const execFile = require('child_process').execFile;
//Not working
// const child = execFile('ls', ['--version'], (error, stdout, stderr) => {
//     if (error) {
//         console.error('stderr', stderr);
//         throw error;
//     }
//     console.log('stdout', stdout);
// });
const mk = execFile('mkdir', [''] , (error, stdout, stderr) =>{
    if (error) {
      console.log(error.stack);
      console.log('Error code: '+error.code);
      console.log('Signal received: '+error.signal);
    }
    console.log('Child Process STDOUT: '+stdout);
    console.log('Child Process STDERR: '+stderr);
  });
  
