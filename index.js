const emoji = require('remark-gemoji-to-emoji')
const gemoji = require('remark-gemoji')

module.exports = {
  activate () {
    const MDEPreview = inkdrop.components.classes.MDEPreview
    return MDEPreview.remarkPlugins.push(gemoji, emoji)
  },
  deactivate () {
    MDEPreview.remarkPlugins = MDEPreview.remarkPlugins.filter(function (plugin) {
      return plugin !== emoji && plugin !== gemoji
    })
  }
}
