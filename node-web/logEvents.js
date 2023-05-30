const  { format } = require('date-fns');
const { v4: uuid } = require('uuid');


const fs = require('fs')
const fsPromises = require('fs/promises');
const path = require('path');
const { error } = require('console');


const logEvents = async (message, logName) => {
      const dateTime = format(new Date(), 'yyy-MM-dd\t\tHH:mm:ss');
      const uid = uuid()
      const me = `${dateTime},\t\t ${uid},\t\t ${message}`


// try{  await fsPromises.mkdir('logs').then(()=> {
//       console.log('Directory created successfully') })

//       await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventlogs.txt'),'\n\nhello you have been updated') 

//       console.log('done')
      
 
// } catch{
//       console.log('failed to create directory');
// }

      try{
            if(!fs.existsSync(path.join(__dirname, 'logs'))){
                 await fs.mkdir(path.join(__dirname, 'logs'), (err) => {
                  if (err) throw err
                 })
            }

            await fsPromises.appendFile(path.join(__dirname, 'logs', logName), me)
           
      }catch (error){
            console.log(error)
      }
      // console.log(dateTime, uid, message)

      // const me = `${format(new Date(),'yyy-MM-dd\t\tHH:mm:ss')}, ${uuid()}, ${message}`
  

      console.log(me)

}

module.exports= logEvents