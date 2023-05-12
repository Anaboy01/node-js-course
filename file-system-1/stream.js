const fs = require('fs')
const path = require('path')

const rs = fs.createReadStream(path.join(__dirname, 'new-file', 'lorem.txt'), {encoding: 'utf8'});

const ws = fs.createWriteStream(path.join(__dirname, 'new-file', 'stream.txt'))

// rs.on('data', (chunkData) => {
//       ws.write(chunkData);
//       console.log('chunk data streamed successfully ')
// })

rs.pipe(ws)