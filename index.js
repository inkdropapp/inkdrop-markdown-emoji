const emoji = require('remark-gemoji-to-emoji')
const gemoji = require('remark-gemoji')

module.exports = {
  activate () {
    const { MDEPreview } = inkdrop.components.classes
    if (MDEPreview) {
      return MDEPreview.remarkPlugins.push(gemoji, emoji)
    }
  },
  deactivate () {
    const { MDEPreview } = inkdrop.components.classes
    if (MDEPreview) {
      MDEPreview.remarkPlugins = MDEPreview.remarkPlugins.filter(function (plugin) {
        return plugin !== emoji && plugin !== gemoji
      })
    }
  }
}
