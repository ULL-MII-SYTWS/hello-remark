import fs from 'node:fs/promises'
import {math} from 'micromark-extension-math'
import {fromMarkdown} from 'mdast-util-from-markdown'
import {mathFromMarkdown, mathToMarkdown} from 'mdast-util-math'

const doc = await fs.readFile('example-math.md')
const tree = fromMarkdown(doc, { 
  extensions: [math()],
  mdastExtensions: [mathFromMarkdown()] 
})

console.log(JSON.stringify(tree, null, 2))