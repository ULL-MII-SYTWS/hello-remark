import {visit} from 'unist-util-visit'
import {unified} from 'unified'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'

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

const input = `
# Hi

## Table of contents

## Hello

*Some* ~more~ _things_.`

main(input).then(markdown => {
  console.log(`
First Example:
input:
------------------
${input}
------------------
output:
------------------
${markdown}
------------------`)
})

async function main(input) {
  const file = await remark()
    .use(remarkGfm)
    .use(myRemarkPluginToIncreaseHeadings)
    .use(remarkToc)
    .process(input)

  return (String(file))
}

const example = `
# Hello, Neptune!

Oh planets!

## Hello Moons of Neptune 

Ah moons!

### Hello Satellites

Oh satellites!
`
async function toHTML(example) {
  const file = await unified()
    .use(remarkParse) 
    .use(myRemarkPluginToIncreaseHeadings)
    .use(remarkRehype) 
    .use(rehypeSanitize)
    .use(rehypeStringify) 
    .process(example)

  return String(file)
}

toHTML(example).then(html => {
  console.log(`
Second Example:
input:
------------------
${example}
------------------
output:
------------------
${html}
------------------`)
})