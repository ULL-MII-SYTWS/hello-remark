import {read} from 'to-vfile'
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'

import path from 'path';
const __dirname = path.join(path.dirname(decodeURI(new URL(import.meta.url).pathname))).replace(/^\\([A-Z]:\\)/, "$1");    

main()

async function main() {
  const contents = await read(path.join(__dirname, 'example.md'))
  const file = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(contents)

  console.log(String(file))
}