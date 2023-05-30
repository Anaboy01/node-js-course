
const express = require('express')
const app = express()

const path = require('path')


const PORT = process.env.PORT || 3500

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

app.get('/*',(req, res) => {
      res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
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
      


app.listen(PORT, () => console.log(`server is listening on ${PORT}`))