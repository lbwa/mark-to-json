import reader = require('gray-matter')
import * as types from '../config/types'
import { createDir, stringify } from './utils'
import logger from './utils/logger'

const path = require('path')
const cws = require('fs').createWriteStream

class App {
  __raw: reader.GrayMatterFile<string|Buffer>
  dest: string
  content: string
  schema: object
  constructor ({
    token,
    dest = `${process.cwd()}/default.json`,
    extraHeader = {},
    contentKey = 'content'
  }: types.options) {
    if (!token) {
      logger.error(`[fatal]`, 'Parser should have a token !')
      return
    }

    this.__raw = reader(token)
    this.dest = stringify(dest)
    logger.info('dest :', dest)
    this.content = this.__raw.content
    this.schema = Object.assign(this.__raw.data, extraHeader, {
      [contentKey]: this.content
    })
    this.writeStream()
  }

  writeStream () {
    const normalizePath = path.resolve(process.cwd(), this.dest)

    createDir(normalizePath)

    const ws = cws(
      normalizePath
    )
    ws.on('close', () => {
      logger.info(`[Write]`, `create static JSON file ${this.dest}`)
    })
    ws.write(stringify(this.schema))
    ws.end()
  }
}

module.exports = App
