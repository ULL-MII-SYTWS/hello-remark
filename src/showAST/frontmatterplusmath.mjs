import fs from 'node:fs/promises'
import {frontmatter} from 'micromark-extension-frontmatter'
import {fromMarkdown} from 'mdast-util-from-markdown'
import {frontmatterFromMarkdown, frontmatterToMarkdown} from 'mdast-util-frontmatter'
import {toMarkdown} from 'mdast-util-to-markdown'
import {math} from 'micromark-extension-math'
import {mathFromMarkdown, mathToMarkdown} from 'mdast-util-math'

const doc = await fs.readFile('frontmatterplusmath.md')

const tree = fromMarkdown(doc, {
  extensions: [
    math(), 
    frontmatter(['yaml', 'toml']), 
  ],
  mdastExtensions: [
    frontmatterFromMarkdown(['yaml', 'toml']), 
    mathFromMarkdown()
  ]
})

console.log(JSON.stringify(tree, null, 2))
