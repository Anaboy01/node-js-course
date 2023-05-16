const { listeners } = require('process');
const logEvents = require('./logEvents')

// logEvents('Event testing')
const EventEmitter = require('events')

class MyEmitter extends EventEmitter {}

// initialize events object
const myEmitter = new MyEmitter();

// add event listeners
myEmitter.on('log', (msg) => logEvents(msg))

setTimeout(() => {
      myEmitter.emit('log', 'event emitted')
}, 2000)