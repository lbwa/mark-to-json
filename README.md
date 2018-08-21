mark-to-json

> Parse markdown to JSON file

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
```
