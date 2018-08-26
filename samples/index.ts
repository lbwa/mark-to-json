const Mtj = require('../lib/index')

const fs = require('fs')

type schema = {
  [key: string]: any
}

new Mtj({
  token: fs.readFileSync('./samples/default.md', 'utf8'),
  dest: './samples/nested/default.json',
  extraHeader: {
    errno: 0,
    to: 'samples/nested/default'
  },
  contentKey: 'content',
  filter (schema: schema): string | void {
    schema.date = formatDate(schema.date)
  }
})

function formatDate (date: Date | string): string {
  const convert = [
    null,
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC'
  ]

  if (date instanceof Date) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate().toLocaleString('zh', { minimumIntegerDigits: 2, useGrouping: false })

    return `${year} ${convert[month]} ${day}` // 2018 AUG 1
  }

  // string type
  const reg = /^[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}/
  const format = reg.exec(date)
  if (format[0]) {
    return format[0] // 2018-8-1
  } else {
    console.warn('[Format date]: Formatting failed !')
    return date
  }
}
