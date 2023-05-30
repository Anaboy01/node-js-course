const  { format } = require('date-fns');
const { v4: uuid } = require('uuid');


const fs = require('fs')
const fsPromises = require('fs/promises');
const path = require('path');
// const { error } = require('console');


const logEvents = async (message, logName) => {
      const dateTime = format(new Date(), 'yyy-MM-dd\t\tHH:mm:ss');
      const uid = uuid()
      const me = `${dateTime},\t\t ${uid},\t\t ${message}\n`


      try{
            if(!fs.existsSync(path.join(__dirname, '..','logs'))){
                 await fsPromises.mkdir(path.join(__dirname,'..', 'logs'));
            }

            await fsPromises.appendFile(path.join(__dirname,'..', 'logs', logName), me)
           
      }catch (error){
            console.log(error)
      }
      // console.log(dateTime, uid, message)

      // const me = `${format(new Date(),'yyy-MM-dd\t\tHH:mm:ss')}, ${uuid()}, ${message}`
  

      // console.log(me)

}

const logger = (req, res, next) => {
      console.log(`${req.method}\n${req.path}`)
      logEvents(`${req.method}\t${req.path}\t${req.headers.origin}`, 'reqLog.txt')
      next()
}

module.exports= {logEvents, logger}