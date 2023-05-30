const whitelist= ['https://www.abutoodullsite.com', 'http://127.0.0.1:3000', 'http://localhost:3500']

corsOptions = {
      origin: (origin, callback)=> {
            if(whitelist.indexOf(origin) !== -1 || !origin){
                  callback(null, true)
            }else{
                  callback(new Error('not allow by CORS'))
            }
      }, 
      optionSuccessStatus: 200
}

module.exports = corsOptions