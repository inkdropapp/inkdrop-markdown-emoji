import { markdownRenderer } from 'inkdrop'
import remarkGemoji from 'remark-gemoji'

module.exports = {
  activate() {
    if (markdownRenderer) {
      return markdownRenderer.remarkPlugins.push(remarkGemoji)
    }
  },
  deactivate() {
    if (markdownRenderer) {
      markdownRenderer.remarkPlugins = markdownRenderer.remarkPlugins.filter(
        plugin => {
          return plugin !== remarkGemoji
        }
      )
    }
  }
}
