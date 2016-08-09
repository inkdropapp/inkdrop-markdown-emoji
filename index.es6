import emoji from 'markdown-it-emoji'
import { CompositeDisposable } from 'inkdrop'

module.exports = {
  configDefaults: {},

  activate () {
    const { MDEPreview } = inkdrop.components.classes
    return MDEPreview.renderer.use(emoji)
  },

  deactivate () {
  }

}
