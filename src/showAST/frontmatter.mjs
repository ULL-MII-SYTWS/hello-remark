import fs from 'node:fs/promises'
import {frontmatter} from 'micromark-extension-frontmatter'
import {fromMarkdown} from 'mdast-util-from-markdown'
import {frontmatterFromMarkdown, frontmatterToMarkdown} from 'mdast-util-frontmatter'
import {toMarkdown} from 'mdast-util-to-markdown'

const doc = await fs.readFile('frontmatter.md')

const tree = fromMarkdown(doc, {
  extensions: [frontmatter(['yaml', 'toml'])],
  mdastExtensions: [frontmatterFromMarkdown(['yaml', 'toml'])]
})

console.log(tree)

const out = toMarkdown(tree, {extensions: [frontmatterToMarkdown(['yaml', 'toml'])]})

console.log(JSON.stringify(out, null,2))