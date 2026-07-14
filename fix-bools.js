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
  content = content.replace(/disabled=""/g, "disabled");
  content = content.replace(/selected=""/g, "defaultValue"); // select option shouldn't use selected in react, usually defaultValue on select, but for now we'll just remove selected="" or change it to defaultValue
  content = content.replace(/checked=""/g, "defaultChecked");
  content = content.replace(/required=""/g, "required");
  content = content.replace(/<option disabled defaultValue value="">/g, '<option disabled value="">');
  content = content.replace(/<option disabled selected value="">/g, '<option disabled value="">');
  content = content.replace(/<option disabled="" selected="" value="">/g, '<option disabled value="">');
  fs.writeFileSync(f, content);
});
console.log('Fixed boolean attributes in ' + files.length + ' files');
