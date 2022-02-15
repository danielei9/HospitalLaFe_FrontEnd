import  exec from 'child_process'
module.exports =  function execPython() {
//const { exec } = require('child_process');

exec('python C:/Users/dbs99/Desktop/Proyectos Buchu/HospitalLaFe_FrontEnd/Python/hospiPython.py', (error, stdout, stderr) => {
    if (error) {
      console.error(`error: ${error.message}`);
      return;
    }
  
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
  
    console.log(`stdout:\n${stdout}`);
  });
}