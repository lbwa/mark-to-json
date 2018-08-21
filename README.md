# mark-to-json [![NpmVersion](https://img.shields.io/npm/v/mark-to-json.svg?style=flat-square)](https://www.npmjs.com/package/mark-to-json) [![NodeVersion](https://img.shields.io/node/v/mark-to-json.svg?style=flat-square)](https://www.npmjs.com/package/mark-to-json)

> Parse markdown to JSON file

## Installing

```bash
# npm
npm i mark-to-json --save

# yarn
yarn add mark-to-json
```

## Usage

```js
const Mtj = require('mark-to-json')

new Mtj({
  token: '---\ntitle: Hello world\n---\nThis is content.',
  dest: './writings/hello-world.json',
  extraHeader: {
    errno: 0
  },
  contentKey: 'content'
})

// You can find your json file at the './writings/hello-world.json' based on the current nodejs working path
```

The sample output file: [here]

[here]:https://github.com/lbwa/mark-to-json/tree/master/samples
