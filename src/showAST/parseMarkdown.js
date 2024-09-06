import fs from 'fs';
import { remark } from 'remark';
import remarkParse from 'remark-parse';

const filePath = process.argv[2] || './example.md';

const markdownContent = fs.readFileSync(filePath, 'utf-8');

const ast = remark()
    .use(remarkParse, {  
        gfm: true,           // Enable GitHub Flavored Markdown
        position: false
    })
    .parse(markdownContent);

console.log(JSON.stringify(ast, null, 2));
