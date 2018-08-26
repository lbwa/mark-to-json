# mark-to-json [![NpmVersion](https://img.shields.io/npm/v/mark-to-json.svg?style=flat-square)](https://www.npmjs.com/package/mark-to-json) [![NodeVersion](https://img.shields.io/node/v/mark-to-json.svg?style=flat-square)](https://www.npmjs.com/package/mark-to-json)

> Parse the markdown into a JSON static file, also support multiple-level directories.

## Installing

```bash
# npm
npm i mark-to-json --save

# yarn
yarn add mark-to-json
```

## Usage

| API | Required | default | Description |
| --- | -------- | ------- | ----------- |
| token | true | | Your markdown file content including yaml matter |
| dest | false | `./default.json` | Your JSON static file will be created at the place based on the current nodejs working path |
| extraHeader | false | `{}` | It will be mix in JSON file if you want to add some extra data to JSON static file |
| contentKey | false | `content` | It will be the key of markdown content part in JSON static file |
| filter | false || It can be used to change output schema ([sample][filter-sample]). |

[filter-sample]:./samples/index.ts

## Sample

```js
const Mtj = require('mark-to-json')

new Mtj({
  token: '---\ntitle: Hello world\n---\nThis is content.',
  dest: './writings/hello-world.json',
  extraHeader: {
    errno: 0
  },
  contentKey: 'content',

  // Only work with one parameter: schema
  filter (schema) {
    // do something
    // `return` is optional
  }
})

// You can find your json file at the './writings/hello-world.json' based on the current nodejs working path
```

The sample output file: [here]

[here]:https://github.com/lbwa/mark-to-json/tree/master/samples/nested

## Changelog

[Changelog](./CHANGELOG.md)
