const express = require('express');
const router = express.Router()
const path = require('path')


app.get('^/$|index(.html)?', (req, res) => {
      // res.sendFile('./views/index.html', {root: __dirname});
      res.sendFile(path.join(__dirname, 'views', 'index.html'));
    
})
app.get('/test(.html)?', (req, res) => {
      // res.sendFile('./views/index.html', {root: __dirname});
      res.sendFile(path.join(__dirname, 'views', 'index.html'));
    
})

module.exports = router
