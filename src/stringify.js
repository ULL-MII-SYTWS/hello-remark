import {remark} from 'remark'

main()

/* 
When you use remark-stringify manually you can pass options to use. 
Because remark-stringify is already used in remark, that’s not possible. 
To define options for remark-stringify, you can instead pass options to data
*/
async function main() {
  const file = await remark()
    .data('settings', {
      bullet: '+', 
      setext: true, 
      listItemIndent: 'one'
    })
    .process(`
# Moons of Neptune

- Naiad
- Thalassa
- Despine
- …`)

  console.log(String(file))
}