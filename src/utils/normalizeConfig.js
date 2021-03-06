const { NODE_TYPES } = require('@/constants')

const toWebRgba = ({ r, g, b, a }) => ({
  r: Math.floor(r * 255),
  g: Math.floor(g * 255),
  b: Math.floor(b * 255),
  a,
})

module.exports = function normalize(node) {
  if (node.fills) {
    node.fills[0].color = toWebRgba(node.fills[0].color)
  }

  if (node.type === NODE_TYPES.PAGE) {
    node.children[0].type = 'ROOT_FRAME'
  }

  if (node.backgroundColor) {
    node.backgroundColor = toWebRgba(node.backgroundColor)
  }

  if (node.children) {
    node.children.forEach(child => {
      normalize(child)
    })
  }
}
