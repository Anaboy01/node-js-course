
const express = require('express')
const app = express()

const path = require('path')
const cors = require('cors')

const {logger} = require('./middleware/logEvents')
const errorHandler = require('./middleware/errorHandler')



const PORT = process.env.PORT || 3500


// syntax for creating custom middleware

app.use(logger)

//built in middleware to handle url encoded data :
// Content-type application/x-www-form-urlencoded

app.use(express.urlencoded({extended: false}))

// built-in middleware for json data

app.use(express.json());

//server static files

app.use(express.static('./Public'))
app.use('/subdir', require('./routes/subdir'))





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
app.use(cors(corsOptions))

app.get('^/$|index(.html)?', (req, res) => {
      // res.sendFile('./views/index.html', {root: __dirname});
      res.sendFile(path.join(__dirname, 'views', 'index.html'));
    
})

app.get('/new-page(.html)?', (req, res) => {
    
      res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
})

app.get('/old-page(.html)?', (req, res) => {
      // res.redirect(path.join(__dirname, 'views', 'new-page.html'))// 302 code
      res.redirect(301, path.join(__dirname, 'views', 'new-page.html'))
})

// catch all routes to get error 404 page

app.all('*',(req, res) => {
      res.status(404);
      if(req.accepts('html')){
           res.sendFile(path.join(__dirname, 'views', '404.html'));
      }else if(req.accepts('json')){
            res.join({Error: '404 not found'})
      }else{
            res.type('txt').send('404 not found');
      }
      // res.status(404)

})

app.get('/', (req, res, next) => {
      console.log('attempted a request');
      next()
}, (err, res, next) => {
      console.log ('second request attempted')
      next()
}, (req, res) => {
      console.log('final request')
      res.send('hello world')
})

// const a = (req, res, next) => {
//       console.log('attempted a request');
//       next()
// }

// const b =(err, res, next) => {
//       console.log ('second request attempted')
//       next()
// }
// const c = (req, res) => {
//       console.log('final request')
//       res.send('hello world')
// }

//       app.get('/', [a,b,c])
      
app.use(errorHandler)

app.listen(PORT, () => console.log(`server is listening on ${PORT}`))