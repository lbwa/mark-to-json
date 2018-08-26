import reader = require('gray-matter')
import * as types from '../config/types'
import { stringify } from './utils'
import logger from './utils/logger'

const path = require('path')
const mkdirp = require('mkdirp')
const cws = require('fs').createWriteStream

class App {
  private __raw: reader.GrayMatterFile<string|Buffer>
  dest: string
  content: string
  schema: object
  constructor ({
    token,
    dest = `${process.cwd()}/default.json`,
    extraHeader = {},
    contentKey = 'content',
    filter
  }: types.options) {
    if (!token) {
      logger.error(`[fatal]`, 'Parser should have a token !')
      return
    }

    this.__raw = reader(token)
    this.dest = stringify(dest)
    this.content = this.__raw.content
    this.schema = Object.assign(this.__raw.data, extraHeader, {
      [contentKey]: this.content
    })

    if (filter && (typeof filter === 'function')) {
      const normalized = filter(this.schema)

      // 若 filter 存在返回值，那么使用该返回值，否则因为是传入的引用类型值，那么将使用原
      // this.schema
      if (normalized) this.schema = normalized
    }

    this.writeStream()
  }

  writeStream () {
    const normalizePath = path.resolve(process.cwd(), this.dest)

    mkdirp(path.dirname(this.dest), (e: Error) => {
      if (e) {
        console.error(e)
        return
      }

      const ws = cws(
        normalizePath
      )
      ws.on('close', () => {
        logger.info(`[Write]`, `create static JSON file ${this.dest}`)
      })
      ws.write(stringify(this.schema))
      ws.end()
    })
  }
}

module.exports = App
