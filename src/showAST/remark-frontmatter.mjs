import remarkFrontmatter from 'remark-frontmatter'
import remarkParse from 'remark-parse'
import remarkStringify from 'remark-stringify'
import {unified} from 'unified'
import {read} from 'to-vfile'

const file = await unified()
  .use(remarkParse)
  .use(remarkStringify)
  .use(remarkFrontmatter, ['yaml', 'toml'])
  .use(function () {
    return function (tree) {
      console.log(JSON.stringify(tree, null,2))
    }
  })
  .process(await read('remark-frontmatter-example.md'))

//console.log(`------`);
//console.log(String(file))