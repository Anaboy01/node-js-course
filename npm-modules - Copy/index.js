const  { format } = require('date-fns');
const { v4: uuid } = require('uuid');

const dateTime = format(new Date(), 'yyy-MM-dd\t\tHH:mm:ss')
console.log(dateTime);

console.log(uuid())