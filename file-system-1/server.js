/***
 * with file system we can  read write update and delete files
 * read file usually take 2 or 3 param. first param is to specify directory, secon param can be a call function
 */

const { error } = require('console');
const fs = require('fs');
const path = require('path')



// fs.readFile('./files/starter.txt', 'utf8',(error, data) => {
//       if(error) throw error
//       console.log(data)
//       // console.log(data.toString())
// })

fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8',(error, data) => {
      if(error) throw error
      console.log(data)
      // console.log(data.toString())
})

process.on('uncaughtException', (error) => {
      console.error(`'error proccisng data: ' ${error}`);
      process.exit(1)
})


// writing a file

fs.writeFile(path.join(__dirname, 'files', 'idan.txt'), 'Idan no dey loose point',(err) => {
      if(err) throw err;
      console.log('idan file don complete')

      fs.appendFile(path.join(__dirname, 'files', 'idan.txt'), '\n\n idon no dey upgrade, na upgrade dey idan', (err) => {
            if (err) throw err;
            console.log('file update complete')

            fs.rename(
                  path.join(__dirname, 'files', 'idan.txt'),
                  path.join(__dirname, 'files', 'super-idan.txt'),
                  (err) => {
                        if(err) throw err;
                        console.log('idan don decide to change to super')
                  }

            )
      })
})

fs.appendFile(path.join(__dirname, 'files', 'jnrIdan.js'), "console.log('Hello')",
      (err) => {
            if (err) throw err
            console.log('functional idan have been created')
      },

      fs.rename(
            path.join(__dirname, 'files', 'jnrIdan.js'),
            path.join(__dirname, 'files', 'index.js'),
            (err) => {
                  if(err) throw err;
                  console.log('idan don give up')
            },

            

      )
)

fs.unlink( path.join(__dirname, 'files', 'index.js'), (err) =>{
      if (err) throw err;
      console.log('file gone')
})