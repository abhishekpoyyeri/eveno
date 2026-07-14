const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('src/app');
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/onsubmit="return false;"/g, 'onSubmit={(e) => e.preventDefault()}');
  fs.writeFileSync(f, content);
});
console.log('Fixed onsubmit in ' + files.length + ' files');
