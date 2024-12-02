import { EditorComponent, Remirror, useRemirror, useRemirrorContext } from '@remirror/react';
import { useState } from 'react';
import { RemirrorEventListener, RemirrorJSON } from 'remirror';
import {
  BlockquoteExtension,
  BoldExtension,
  BulletListExtension,
  CodeBlockExtension,
  HeadingExtension,
  ItalicExtension,
  MarkdownExtension,
  OrderedListExtension,
  UnderlineExtension,
} from 'remirror/extensions';

const SampleIngredientsButton = () => {
  const { setContent } = useRemirrorContext();

  const sampleIngredients: RemirrorJSON = {
    "content": [
      {
        "attrs": {
          "nodeIndent": null,
          "nodeLineHeight": null,
          "nodeTextAlignment": null,
          "style": ""
        },
        "content": [
          {
            "marks": [
              {
                "type": "bold"
              }
            ],
            "text": "Skillet",
            "type": "text"
          }
        ],
        "type": "paragraph"
      },
      {
        "content": [
          {
            "attrs": {
              "closed": false,
              "nested": false
            },
            "content": [
              {
                "attrs": {
                  "nodeIndent": null,
                  "nodeLineHeight": null,
                  "nodeTextAlignment": null,
                  "style": ""
                },
                "content": [
                  {
                    "text": "1 pound ground beef or 93% lean turkey (or vegan beef substitute)",
                    "type": "text"
                  }
                ],
                "type": "paragraph"
              }
            ],
            "type": "listItem"
          },
          {
            "attrs": {
              "closed": false,
              "nested": false
            },
            "content": [
              {
                "attrs": {
                  "nodeIndent": null,
                  "nodeLineHeight": null,
                  "nodeTextAlignment": null,
                  "style": ""
                },
                "content": [
                  {
                    "text": "1 (15 ounce) jar red enchilada sauce",
                    "type": "text"
                  }
                ],
                "type": "paragraph"
              }
            ],
            "type": "listItem"
          },
          {
            "attrs": {
              "closed": false,
              "nested": false
            },
            "content": [
              {
                "attrs": {
                  "nodeIndent": null,
                  "nodeLineHeight": null,
                  "nodeTextAlignment": null,
                  "style": ""
                },
                "content": [
                  {
                    "text": "3 corn or cassava tortillas, chopped into 1 inch pieces",
                    "type": "text"
                  }
                ],
                "type": "paragraph"
              }
            ],
            "type": "listItem"
          },
          {
            "attrs": {
              "closed": false,
              "nested": false
            },
            "content": [
              {
                "attrs": {
                  "nodeIndent": null,
                  "nodeLineHeight": null,
                  "nodeTextAlignment": null,
                  "style": ""
                },
                "content": [
                  {
                    "text": "3 cups chopped vegetables of choice (such as zucchini and bell pepper)",
                    "type": "text"
                  }
                ],
                "type": "paragraph"
              }
            ],
            "type": "listItem"
          },
          {
            "attrs": {
              "closed": false,
              "nested": false
            },
            "content": [
              {
                "attrs": {
                  "nodeIndent": null,
                  "nodeLineHeight": null,
                  "nodeTextAlignment": null,
                  "style": ""
                },
                "content": [
                  {
                    "text": "1/2 onion, diced",
                    "type": "text"
                  }
                ],
                "type": "paragraph"
              }
            ],
            "type": "listItem"
          },
          {
            "attrs": {
              "closed": false,
              "nested": false
            },
            "content": [
              {
                "attrs": {
                  "nodeIndent": null,
                  "nodeLineHeight": null,
                  "nodeTextAlignment": null,
                  "style": ""
                },
                "content": [
                  {
                    "text": "2 tablespoons olive oil",
                    "type": "text"
                  }
                ],
                "type": "paragraph"
              }
            ],
            "type": "listItem"
          },
          {
            "attrs": {
              "closed": false,
              "nested": false
            },
            "content": [
              {
                "attrs": {
                  "nodeIndent": null,
                  "nodeLineHeight": null,
                  "nodeTextAlignment": null,
                  "style": ""
                },
                "content": [
                  {
                    "text": "2 garlic cloves, chopped",
                    "type": "text"
                  }
                ],
                "type": "paragraph"
              }
            ],
            "type": "listItem"
          },
          {
            "attrs": {
              "closed": false,
              "nested": false
            },
            "content": [
              {
                "attrs": {
                  "nodeIndent": null,
                  "nodeLineHeight": null,
                  "nodeTextAlignment": null,
                  "style": ""
                },
                "content": [
                  {
                    "text": "salt, to taste",
                    "type": "text"
                  }
                ],
                "type": "paragraph"
              }
            ],
            "type": "listItem"
          }
        ],
        "type": "bulletList"
      },
      {
        "attrs": {
          "nodeIndent": null,
          "nodeLineHeight": null,
          "nodeTextAlignment": null,
          "style": ""
        },
        "type": "paragraph"
      },
      {
        "attrs": {
          "nodeIndent": 0,
          "nodeLineHeight": null,
          "nodeTextAlignment": "",
          "style": ""
        },
        "content": [
          {
            "marks": [
              {
                "type": "bold"
              }
            ],
            "text": "Spice Blend",
            "type": "text"
          }
        ],
        "type": "paragraph"
      },
      {
        "content": [
          {
            "attrs": {
              "closed": false,
              "nested": false
            },
            "content": [
              {
                "attrs": {
                  "nodeIndent": 0,
                  "nodeLineHeight": null,
                  "nodeTextAlignment": "",
                  "style": ""
                },
                "content": [
                  {
                    "text": "1/2 teaspoon cumin",
                    "type": "text"
                  }
                ],
                "type": "paragraph"
              }
            ],
            "type": "listItem"
          },
          {
            "attrs": {
              "closed": false,
              "nested": false
            },
            "content": [
              {
                "attrs": {
                  "nodeIndent": 0,
                  "nodeLineHeight": null,
                  "nodeTextAlignment": "",
                  "style": ""
                },
                "content": [
                  {
                    "text": "1/2 teaspoon smoked paprika",
                    "type": "text"
                  }
                ],
                "type": "paragraph"
              }
            ],
            "type": "listItem"
          },
          {
            "attrs": {
              "closed": false,
              "nested": false
            },
            "content": [
              {
                "attrs": {
                  "nodeIndent": 0,
                  "nodeLineHeight": null,
                  "nodeTextAlignment": "",
                  "style": ""
                },
                "content": [
                  {
                    "text": "1/2 teaspoon dried oregano",
                    "type": "text"
                  }
                ],
                "type": "paragraph"
              }
            ],
            "type": "listItem"
          },
          {
            "attrs": {
              "closed": false,
              "nested": false
            },
            "content": [
              {
                "attrs": {
                  "nodeIndent": 0,
                  "nodeLineHeight": null,
                  "nodeTextAlignment": "",
                  "style": ""
                },
                "content": [
                  {
                    "text": "1/4 teaspoon cayenne",
                    "type": "text"
                  }
                ],
                "type": "paragraph"
              }
            ],
            "type": "listItem"
          }
        ],
        "type": "bulletList"
      },
      {
        "attrs": {
          "nodeIndent": 0,
          "nodeLineHeight": null,
          "nodeTextAlignment": "",
          "style": ""
        },
        "type": "paragraph"
      },
      {
        "attrs": {
          "nodeIndent": 0,
          "nodeLineHeight": null,
          "nodeTextAlignment": "",
          "style": ""
        },
        "content": [
          {
            "marks": [
              {
                "type": "bold"
              }
            ],
            "text": "Toppings",
            "type": "text"
          }
        ],
        "type": "paragraph"
      },
      {
        "content": [
          {
            "attrs": {
              "closed": false,
              "nested": false
            },
            "content": [
              {
                "attrs": {
                  "nodeIndent": 0,
                  "nodeLineHeight": null,
                  "nodeTextAlignment": "",
                  "style": ""
                },
                "content": [
                  {
                    "text": "1 cup shredded Mexican cheese",
                    "type": "text"
                  }
                ],
                "type": "paragraph"
              }
            ],
            "type": "listItem"
          },
          {
            "attrs": {
              "closed": false,
              "nested": false
            },
            "content": [
              {
                "attrs": {
                  "nodeIndent": 0,
                  "nodeLineHeight": null,
                  "nodeTextAlignment": "",
                  "style": ""
                },
                "content": [
                  {
                    "text": "1/2 cup fresh cilantro, chopped",
                    "type": "text"
                  }
                ],
                "type": "paragraph"
              }
            ],
            "type": "listItem"
          }
        ],
        "type": "bulletList"
      }
    ],
    "type": "doc"
  }

  return <button onMouseDown={(event) => event.preventDefault()} onClick={() => setContent(sampleIngredients)}>
  Sample ingredients
</button>
  
}

const SampleInstructionsButton = () => {
  const { setContent } = useRemirrorContext();

  const sampleInstructions: RemirrorJSON = {
    "content": [
      {
        "attrs": {
          "nodeIndent": 0,
          "nodeLineHeight": null,
          "nodeTextAlignment": "",
          "style": ""
        },
        "content": [
          {
            "marks": [
              {
                "type": "bold"
              }
            ],
            "text": "Step 1",
            "type": "text"
          }
        ],
        "type": "paragraph"
      },
      {
        "attrs": {
          "nodeIndent": 0,
          "nodeLineHeight": null,
          "nodeTextAlignment": "",
          "style": ""
        },
        "content": [
          {
            "text": "Chop the vegetables into pieces, about 1 inch in size. Set aside.",
            "type": "text"
          }
        ],
        "type": "paragraph"
      },
      {
        "attrs": {
          "nodeIndent": 0,
          "nodeLineHeight": null,
          "nodeTextAlignment": "",
          "style": ""
        },
        "type": "paragraph"
      },
      {
        "attrs": {
          "nodeIndent": 0,
          "nodeLineHeight": null,
          "nodeTextAlignment": "",
          "style": ""
        },
        "content": [
          {
            "marks": [
              {
                "type": "bold"
              }
            ],
            "text": "Step 2",
            "type": "text"
          }
        ],
        "type": "paragraph"
      },
      {
        "attrs": {
          "nodeIndent": 0,
          "nodeLineHeight": null,
          "nodeTextAlignment": "",
          "style": ""
        },
        "content": [
          {
            "text": "Heat the olive oil in a large frying pan over medium-high heat. Add the garlic and onion and cook for 2 minutes.",
            "type": "text"
          }
        ],
        "type": "paragraph"
      },
      {
        "attrs": {
          "nodeIndent": 0,
          "nodeLineHeight": null,
          "nodeTextAlignment": "",
          "style": ""
        },
        "type": "paragraph"
      },
      {
        "attrs": {
          "nodeIndent": 0,
          "nodeLineHeight": null,
          "nodeTextAlignment": "",
          "style": ""
        },
        "content": [
          {
            "marks": [
              {
                "type": "bold"
              }
            ],
            "text": "Step 3",
            "type": "text"
          }
        ],
        "type": "paragraph"
      },
      {
        "attrs": {
          "nodeIndent": 0,
          "nodeLineHeight": null,
          "nodeTextAlignment": "",
          "style": ""
        },
        "content": [
          {
            "text": "Add the ground meat and the spice blend to the pan. Cook for 5 minutes, breaking up the meat into smaller pieces with the side of a spatula while it cooks. Note: You can optionally drain the cooked meat juices (but add in splash of water during the next step).",
            "type": "text"
          }
        ],
        "type": "paragraph"
      },
      {
        "attrs": {
          "nodeIndent": 0,
          "nodeLineHeight": null,
          "nodeTextAlignment": "",
          "style": ""
        },
        "type": "paragraph"
      },
      {
        "attrs": {
          "nodeIndent": 0,
          "nodeLineHeight": null,
          "nodeTextAlignment": "",
          "style": ""
        },
        "content": [
          {
            "marks": [
              {
                "type": "bold"
              }
            ],
            "text": "Step 4",
            "type": "text"
          }
        ],
        "type": "paragraph"
      },
      {
        "attrs": {
          "nodeIndent": 0,
          "nodeLineHeight": null,
          "nodeTextAlignment": "",
          "style": ""
        },
        "content": [
          {
            "text": "Add the chopped vegetables, enchilada sauce and chopped tortillas to the pan. Stir to combine everything. Cover and cook for an additional 5 minutes.",
            "type": "text"
          }
        ],
        "type": "paragraph"
      },
      {
        "attrs": {
          "nodeIndent": 0,
          "nodeLineHeight": null,
          "nodeTextAlignment": "",
          "style": ""
        },
        "type": "paragraph"
      },
      {
        "attrs": {
          "nodeIndent": 0,
          "nodeLineHeight": null,
          "nodeTextAlignment": "",
          "style": ""
        },
        "content": [
          {
            "marks": [
              {
                "type": "bold"
              }
            ],
            "text": "Step 5",
            "type": "text"
          }
        ],
        "type": "paragraph"
      },
      {
        "attrs": {
          "nodeIndent": 0,
          "nodeLineHeight": null,
          "nodeTextAlignment": "",
          "style": ""
        },
        "content": [
          {
            "text": "Uncover the pan and scatter the cheese and cilantro all over the top. Cover with the lid and cook an additional 1 minute, or until the cheese has melted. Taste and adjust seasonings as desired.",
            "type": "text"
          }
        ],
        "type": "paragraph"
      },
      {
        "attrs": {
          "nodeIndent": 0,
          "nodeLineHeight": null,
          "nodeTextAlignment": "",
          "style": ""
        },
        "type": "paragraph"
      },
      {
        "attrs": {
          "nodeIndent": 0,
          "nodeLineHeight": null,
          "nodeTextAlignment": "",
          "style": ""
        },
        "content": [
          {
            "marks": [
              {
                "type": "bold"
              }
            ],
            "text": "Serve",
            "type": "text"
          }
        ],
        "type": "paragraph"
      },
      {
        "attrs": {
          "nodeIndent": 0,
          "nodeLineHeight": null,
          "nodeTextAlignment": "",
          "style": ""
        },
        "content": [
          {
            "text": "Divide onto plates and enjoy. This is great topped with avocado and sour cream.",
            "type": "text"
          }
        ],
        "type": "paragraph"
      }
    ],
    "type": "doc"
  }

  return <button onMouseDown={(event) => event.preventDefault()} onClick={() => setContent(sampleInstructions)}>
  Sample instructions
</button>
  
}

const RemirrorEditor = () => {
  const { manager } = useRemirror({
    extensions: () => [
      new MarkdownExtension({}),
      new HeadingExtension({}),
      new BlockquoteExtension({}),
      new CodeBlockExtension({}),
      new BulletListExtension({}),
      new OrderedListExtension({}),
      new BoldExtension({}),
      new ItalicExtension({}),
      new UnderlineExtension(),
    ],
  });

  const [content, setContent] = useState({
    type: 'doc',
    content: [
      {
        type: 'paragraph',
        content: [{ type: 'text', text: 'Start editing...' }],
      },
    ],
  });

  const handleEditorChange: RemirrorEventListener<Remirror.Extensions> = ({ state }) => {
    setContent(state.toJSON());
  };

  const copy = () => {
    navigator.clipboard.writeText(JSON.stringify(content, null, 2));
  }

  return (
    <div>
      <Remirror initialContent={content} manager={manager} onChange={handleEditorChange}>
        <EditorComponent />

        <SampleIngredientsButton />

        <SampleInstructionsButton />
      </Remirror>

      <button onClick={copy} style={{ marginTop: '20px' }}>
        Copy JSON
      </button>

      <pre style={{ marginTop: '20px' }}>
        {JSON.stringify(content, null, 2)}
      </pre>
    </div>
  );
};

export default RemirrorEditor;