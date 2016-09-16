const emoji = require('remark-gemoji-to-emoji')

module.exports = {
  activate () {
    const MDEPreview = inkdrop.components.classes.MDEPreview
    return MDEPreview.remarkPlugins.push(emoji)
  },
  deactivate () {
    MDEPreview.remarkPlugins = MDEPreview.remarkPlugins.filter(function (plugin) {
      return plugin !== emoji
    })
  }
}
