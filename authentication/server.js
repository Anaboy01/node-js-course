
const express = require('express')
const app = express()

const path = require('path')
const cors = require('cors')
const corsOptions = require('./config/corsOption')

const {logger} = require('./middleware/logEvents')
const errorHandler = require('./middleware/errorHandler')




const PORT = process.env.PORT || 5000


// syntax for creating custom middleware

app.use(logger)

//built in middleware to handle url encoded data :
// Content-type application/x-www-form-urlencoded

app.use(express.urlencoded({extended: false}))

// built-in middleware for json data

app.use(express.json());

//server static files

app.use('/', express.static(path.join(__dirname, './Public')))
// app.use('/subdir', express.static(path.join(__dirname, './Public')))
app.use('/', require('./routes/root'))
// app.use('/subdir', require('./routes/subdir'))
app.use('/students', require('./routes/api/students'))

// register route

app.use('/register', require('./routes/register'));
// Authentication route
app.use('/authentication', require('./routes/authentication'));








app.use(cors(corsOptions))



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