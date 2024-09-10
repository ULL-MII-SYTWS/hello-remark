const matter = require('gray-matter');
const green = require('ansi-green');

const file = matter([
`
---js
{
  reverse: function(str) {
    return str.split(",").reverse().join(",");
  }
}
---
This is content
`
]);

console.log(green('/* javascript front-matter */'));
console.log(file);
/* javascript front-matter
{
  content: 'This is content',
  data: { reverse: [Function: reverse] },
  isEmpty: false,
  excerpt: ''
}
*/

console.log();
console.log(green('/* example after calling a function from front-matter */'));
file.data.baz = file.data.reverse('x,y,z');
console.log(file); 
/* example after calling a function from front-matter 
{
  content: 'This is content',
  data: { reverse: [Function: reverse], baz: 'z,y,x' },
  isEmpty: false,
  excerpt: ''
}
*/