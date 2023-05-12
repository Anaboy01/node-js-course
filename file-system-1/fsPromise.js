const { write } = require('fs')
const fsPromises = require('fs/promises')
const path = require('path')

const fsOperations = async () =>{


  try {
      const data =    await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'),{encoding: 'utf8'})

      console.log(data)

      //creating write.txt file in new-file folder and putting starter.txt contents in it
       await fsPromises.writeFile(path.join(__dirname, 'new-file', 'write.txt'), data);

      //  updating write.txt
      await fsPromises.appendFile(path.join(__dirname, 'new-file', 'write.txt'),'\n\nhello you have been updated') 

      //rename files
      await fsPromises.rename(path.join(__dirname, 'new-file', 'write.txt'), path.join(__dirname, 'files', 'new-write.txt'))

      // delete file
      const newData = fsPromises.unlink(path.join(__dirname, 'files', 'new-write.txt'))
      console.log(newData)
  } catch (error) {
      console.error(error)
  }
}

fsOperations();