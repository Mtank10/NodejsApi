const fs=require('fs');

const readStream=fs.createReadStream('./docs/blog2.txt',{encoding:'utf-8'});
const writeStream=fs.createWriteStream('./docs/blog3.txt',{encoding:'utf-8'});

// readStream.on('data',(chunk)=>{
//     console.log(chunk);
//     writeStream.write(chunk);
// });

readStream.pipe(writeStream);