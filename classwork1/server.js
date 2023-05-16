// const { listeners } = require('process');
// const logEvents = require('./logEvents')

// // // logEvents('Event testing')
// // const EventEmitter = require('events')

// // class MyEmitter extends EventEmitter {}

// // // initialize events object
// // const myEmitter = new MyEmitter();

// // // add event listeners
// // myEmitter.on('log', (msg) => logEvents(msg))

// // setTimeout(() => {
// //       myEmitter.emit('log', 'event emitted')
// // }, 2000)


// const { EventEmitter } = require('events');
// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();
// // Only do this once so we don't loop forever
// myEmitter.once('log', (msg) => {
//   if (event === 'event') {
//     // Insert a new listener in front
//     myEmitter.on('log', logEvents('money'));
//   }
// });
// myEmitter.on('event',logEvents);
// myEmitter.emit('event');
// // Prints:
// //   B
// //   A

const { set } = require("date-fns");
const logEvt = require("./logEvents");
const { EventEmitter } = require("node:events");

// const myEmitter = new EventEmitter();

// myEmitter.once("newListener", (event, listener) => {
//   if (event === "Events") {
//     setTimeout(() => {
//       listener("Events emitted");
//     }, 2000);
//   }
// });

// myEmitter.on("Events", logEvt)


// initialize event object

const myEmitter = new EventEmitter();
myEmitter.on('log', (msg) => logEvt(msg))

// console.log(myEmitter.listeners('log'))

// myEmitter.emit('log', 'emitted')

setTimeout(() => {
      myEmitter.emit('log', 'emitted') 
}, 3000)