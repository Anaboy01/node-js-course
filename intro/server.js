// Difference between vanilla and node js
/**
 * - node runs on server and not on browser
 * - the console is on the terminal window and not on the browser console
 * - we can also run our our node js from our terminal console
 * - node is built on Chrome v8 engine
 * - Global objects instead of window object
 * - Global is smaller and have some of the properties in window
 * - we are going to explore core modules in this node js journey
 * - we use common js impor to import the common core modules (require is used in place of import)
 * - node doesnt have some js Api functions
 * - 
 */

// const os = require('os');



// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);

// const path = require('path')

// console.log(path.dirname(__dirname))
// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

// console.log(path.parse(__filename))
// const math = require('./math')


// const add = math.add(50, 30)
// const sub = math.sub(50, 30)
// const division = math.division(50, 30)
// const multiply = math.multiply(50, 30)
// console.log(add, sub, division, multiply)

const mine = require('./mine')
const uber = require('./uber')

uber.uberReady();
const fuelStatus = uber.fuelLimit( 'werey dey form rich boy','u no get fuel for your motor')



console.log(mine())
console.log(fuelStatus)
