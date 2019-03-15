const { markdownRenderer } = require('inkdrop')
const emoji = require('remark-gemoji-to-emoji')
const gemoji = require('remark-gemoji')

module.exports = {
  activate () {
    if (markdownRenderer) {
      return markdownRenderer.remarkPlugins.push(gemoji, emoji)
    }
  },
  deactivate () {
    if (markdownRenderer) {
      markdownRenderer.remarkPlugins = markdownRenderer.remarkPlugins.filter(function (plugin) {
        return plugin !== emoji && plugin !== gemoji
      })
    }
  }
}
