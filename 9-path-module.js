const path = require('path');
// path.sep = "\"
console.log(path.sep);

const filePath = path.join('/content/', 'subfolder', 'test.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base); //returns test.txt (the last (base) file in filePath)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);