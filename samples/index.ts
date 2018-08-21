const Mtj = require('../lib/index')

const fs = require('fs')

new Mtj({
  token: fs.readFileSync('./samples/default.md', 'utf8'),
  dest: './samples/default.json',
  extraHeader: {
    errno: 0,
    to: 'samples/default'
  },
  contentKey: 'content'
})
