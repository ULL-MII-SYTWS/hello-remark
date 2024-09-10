import {remark} from 'remark'
import remarkMentions from 'remark-mentions'

const markdown = "Hello @crguezl!";

const file = await remark()
  .use(remarkMentions, {
    usernameLink: (username) => `https://github.com/${username}`, // This is optional
  })
  .process(markdown)

console.log(String(file))