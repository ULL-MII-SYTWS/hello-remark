import {visit} from 'unist-util-visit'
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'

/** @type {import('unified').Plugin<[], import('mdast').Root>} */
function myRemarkPluginToIncreaseHeadings() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type === 'heading') {
        node.depth++
      }
    })
  }
}

main()

async function main() {
  const file = await unified()
    .use(remarkParse) 
    .use(myRemarkPluginToIncreaseHeadings)
    .use(remarkRehype) 
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process('# Hello, Neptune!')

  console.log(String(file))
}