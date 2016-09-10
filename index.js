'use babel'

import emoji from 'markdown-it-emoji'

module.exports = {
  configDefaults: {},

  activate () {
    const { MDEPreview } = inkdrop.components.classes
    return MDEPreview.renderer.use(emoji)
  },

  deactivate () {
  }

}
