See https://github.com/shuding/nextra/issues/2823

Thanks for nextra ❤️ !

It will be nice to extend nextra yaml parser so that in the page frontmatter we can use  an include directive like the one provided by  the package [yaml-include](https://www.npmjs.com/package/yaml-include)

With such feature we can avoid repetition and factorize yaml that is common to several pages.

```mdx
---
title: "Wednesday 2024/04/03"
videos: !!inc/file videos.yml
---

import Videos from '@/components/videos'

<Videos ids={ [frontmatter().video20240403.id] }></Videos>
```
Where `videos.yml`  has something like:

```yml
video20240403:
  url: "https://youtu.be/twroW5voFEo"
  id: "twroW5voFEo"
  date: "2024/04/03"
  comment: "Clase del 03/04/2024. Doubts and queries about lexer-generator. The FunctionObject class. Callable instances. First steps on the assign function"
```