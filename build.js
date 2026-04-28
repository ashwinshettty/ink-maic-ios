const fs = require('fs');
const path = require('path');

if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}
fs.copyFileSync('index.html', path.join('dist', 'index.html'));
console.log('Build completed successfully!');
