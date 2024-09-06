import {read} from 'to-vfile'
import {remark} from 'remark'
import remarkToc from 'remark-toc'

main()

async function main() {
  const file = await remark()
    .use(remarkToc)
    .process(await read('index.md'))

  console.log(String(file))
}