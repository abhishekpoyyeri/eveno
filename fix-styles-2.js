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
  content = content.replace(/style="background-image: url\('([^']+)'\)"/g, "style={{ backgroundImage: \"url('$1')\" }}");
  content = content.replace(/style="width: (\d+)%"/g, "style={{ width: '$1%' }}");
  fs.writeFileSync(f, content);
});
console.log('Fixed backgrounds and widths in ' + files.length + ' files');
