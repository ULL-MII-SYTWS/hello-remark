```sh
➜  hello-remark git:(main) ✗ node src/html/example.js
<h1>Hello &#x26; World</h1>
<blockquote>
<p>A block quote.</p>
</blockquote>
<ul>
<li>Some <em>emphasis</em>, <strong>importance</strong>, and <code>code</code>.</li>
</ul>
```


```sh
➜  showAST git:(main) ✗ node example.mjs                      
{
  "type": "root",
  "children": [
    {
      "type": "paragraph",
      "children": [
        {
          "type": "inlineMath",
          "value": "a^2",
          "data": {
            "hName": "code",
            "hProperties": {
              "className": [
                "language-math",
                "math-inline"
              ]
            },
            "hChildren": [
              {
                "type": "text",
                "value": "a^2"
              }
            ]
          },
          "position": {
            "start": {
              "line": 1,
              "column": 1,
              "offset": 0
            },
            "end": {
              "line": 1,
              "column": 6,
              "offset": 5
            }
          }
        }
      ],
      "position": {
        "start": {
          "line": 1,
          "column": 1,
          "offset": 0
        },
        "end": {
          "line": 1,
          "column": 6,
          "offset": 5
        }
      }
    }
  ],
  "position": {
    "start": {
      "line": 1,
      "column": 1,
      "offset": 0
    },
    "end": {
      "line": 1,
      "column": 6,
      "offset": 5
    }
  }
}
```