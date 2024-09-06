import  {remark}  from 'remark';
import sources from 'remark-sources';
const input = '```js (index.js)\n```'; // (path to file in round brackets)
const options = {};
const output = remark().use(sources, options).processSync(input).toString();
console.log(output);