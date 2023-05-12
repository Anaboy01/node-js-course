// const { error } = require('console')
const fs = require('fs')
const path = require('path')

if (!fs.existsSync(path.join(__dirname, 'files', 'directory'))){
      fs.mkdir(path.join(__dirname, 'files', 'directory'), () => {
            if (err) throw err;
            console.log('kante palmpay')
      
      })
} else{
      console.log('idan no dey appear twice');
}


if (fs.existsSync(path.join(__dirname, 'files', 'folder'))){
fs.rmdir(path.join(__dirname, 'files', 'folder'), () => {
      if (err) throw err;
      console.log('kante palmpay')

})

}
