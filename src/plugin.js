import {visit} from 'unist-util-visit'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm' // GitHub Flavored Markdown
import remarkToc from 'remark-toc'

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

