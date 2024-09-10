## Help command line

```sh
➜  showAST git:(main) ✗ npx remark --help
Usage: remark [options] [path | glob ...]

  Command line interface to inspect and change markdown files with remark

Options:

  -h  --help                              output usage information
  -v  --version                           output version number
  -o  --output [path]                     specify output location
  -r  --rc-path <path>                    specify configuration file
  -i  --ignore-path <path>                specify ignore file
  -s  --setting <settings>                specify settings
  -e  --ext <extensions>                  specify extensions
  -u  --use <plugins>                     use plugins
  -w  --watch                             watch for changes and reprocess
  -q  --quiet                             output only warnings and errors
  -S  --silent                            output only errors
  -f  --frail                             exit with 1 on warnings
  -t  --tree                              specify input and output as syntax tree
      --report <reporter>                 specify reporter
      --file-path <path>                  specify path to process as
      --ignore-path-resolve-from dir|cwd  resolve patterns in `ignore-path` from its directory or cwd
      --ignore-pattern <globs>            specify ignore patterns
      --silently-ignore                   do not fail when given ignored files
      --tree-in                           specify input as syntax tree
      --tree-out                          output syntax tree
      --inspect                           output formatted syntax tree
      --[no-]stdout                       specify writing to stdout (on by default)
      --[no-]color                        specify color in report (on by default)
      --[no-]config                       search for configuration files (on by default)
      --[no-]ignore                       search for ignore files (on by default)

Examples:

  # Process `input.md`
  $ remark input.md -o output.md

  # Pipe
  $ remark < input.md > output.md

  # Rewrite all applicable files
  $ remark . -o
  ```
## Show AST using the command line

```sh
➜  showAST git:(main) ✗ npx remark --tree-out  example.md 
{
  "type": "root",
  "children": [
    {
      "type": "heading",
      "depth": 1,
      "children": [
        {
          "type": "text",
          "value": "Sample Markdown",
          "position": {
            "start": {
              "line": 1,
              "column": 3,
              "offset": 2
            },
            "end": {
              "line": 1,
              "column": 18,
              "offset": 17
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
          "column": 18,
          "offset": 17
        }
      }
    },
    {
      "type": "paragraph",
      "children": [
        {
          "type": "text",
          "value": "This is a ",
          "position": {
            "start": {
              "line": 3,
              "column": 1,
              "offset": 19
            },
            "end": {
              "line": 3,
              "column": 11,
              "offset": 29
            }
          }
        },
        {
          "type": "strong",
          "children": [
            {
              "type": "text",
              "value": "simple",
              "position": {
                "start": {
                  "line": 3,
                  "column": 13,
                  "offset": 31
                },
                "end": {
                  "line": 3,
                  "column": 19,
                  "offset": 37
                }
              }
            }
          ],
          "position": {
            "start": {
              "line": 3,
              "column": 11,
              "offset": 29
            },
            "end": {
              "line": 3,
              "column": 21,
              "offset": 39
            }
          }
        },
        {
          "type": "text",
          "value": " Markdown document.",
          "position": {
            "start": {
              "line": 3,
              "column": 21,
              "offset": 39
            },
            "end": {
              "line": 3,
              "column": 40,
              "offset": 58
            }
          }
        }
      ],
      "position": {
        "start": {
          "line": 3,
          "column": 1,
          "offset": 19
        },
        "end": {
          "line": 3,
          "column": 40,
          "offset": 58
        }
      }
    },
    {
      "type": "list",
      "ordered": false,
      "start": null,
      "spread": false,
      "children": [
        {
          "type": "listItem",
          "spread": false,
          "checked": null,
          "children": [
            {
              "type": "paragraph",
              "children": [
                {
                  "type": "text",
                  "value": "Item 1",
                  "position": {
                    "start": {
                      "line": 5,
                      "column": 3,
                      "offset": 62
                    },
                    "end": {
                      "line": 5,
                      "column": 9,
                      "offset": 68
                    }
                  }
                }
              ],
              "position": {
                "start": {
                  "line": 5,
                  "column": 3,
                  "offset": 62
                },
                "end": {
                  "line": 5,
                  "column": 9,
                  "offset": 68
                }
              }
            }
          ],
          "position": {
            "start": {
              "line": 5,
              "column": 1,
              "offset": 60
            },
            "end": {
              "line": 5,
              "column": 9,
              "offset": 68
            }
          }
        },
        {
          "type": "listItem",
          "spread": false,
          "checked": null,
          "children": [
            {
              "type": "paragraph",
              "children": [
                {
                  "type": "text",
                  "value": "Item 2",
                  "position": {
                    "start": {
                      "line": 6,
                      "column": 3,
                      "offset": 71
                    },
                    "end": {
                      "line": 6,
                      "column": 9,
                      "offset": 77
                    }
                  }
                }
              ],
              "position": {
                "start": {
                  "line": 6,
                  "column": 3,
                  "offset": 71
                },
                "end": {
                  "line": 6,
                  "column": 9,
                  "offset": 77
                }
              }
            }
          ],
          "position": {
            "start": {
              "line": 6,
              "column": 1,
              "offset": 69
            },
            "end": {
              "line": 6,
              "column": 9,
              "offset": 77
            }
          }
        }
      ],
      "position": {
        "start": {
          "line": 5,
          "column": 1,
          "offset": 60
        },
        "end": {
          "line": 6,
          "column": 9,
          "offset": 77
        }
      }
    },
    {
      "type": "heading",
      "depth": 2,
      "children": [
        {
          "type": "text",
          "value": "Subheading",
          "position": {
            "start": {
              "line": 8,
              "column": 4,
              "offset": 82
            },
            "end": {
              "line": 8,
              "column": 14,
              "offset": 92
            }
          }
        }
      ],
      "position": {
        "start": {
          "line": 8,
          "column": 1,
          "offset": 79
        },
        "end": {
          "line": 8,
          "column": 14,
          "offset": 92
        }
      }
    },
    {
      "type": "paragraph",
      "children": [
        {
          "type": "text",
          "value": "More content here.",
          "position": {
            "start": {
              "line": 10,
              "column": 1,
              "offset": 94
            },
            "end": {
              "line": 10,
              "column": 19,
              "offset": 112
            }
          }
        }
      ],
      "position": {
        "start": {
          "line": 10,
          "column": 1,
          "offset": 94
        },
        "end": {
          "line": 10,
          "column": 19,
          "offset": 112
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
      "line": 11,
      "column": 1,
      "offset": 113
    }
  }
}
example.md
  5:3  warning  Incorrect list-item indent: add 2 spaces  list-item-indent  remark-lint
  6:3  warning  Incorrect list-item indent: add 2 spaces  list-item-indent  remark-lint

⚠ 2 warnings
```


## References

- mdast specification: https://github.com/syntax-tree/mdast
- [remark-parse](https://github.com/remarkjs/remark/tree/HEAD/packages/remark-parse#readme)
- https://github.com/syntax-tree/mdast-util-from-markdown
- https://github.com/syntax-tree/mdast-util-frontmatter
- https://astexplorer.net/#/gist/4aec8b44695d364fb0d57b7b1034700b/9e48301bb44a698bd2a4384c9e479848afc7f1f4
- https://github.com/syntax-tree/mdast-util-math