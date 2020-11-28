const { NODE_TYPES } = require('@/constants')

/**
 * Remove project node and page node
 * @param {Record<string, any>} config 
 */
function restructureConfig (node) {
  let restructuredConfig = { ...node }

  if (node.type = NODE_TYPES.PROJECT) {
    restructuredConfig = {
      name: node.name,
      children: node.children
    }
  } else if (node.children[0].type === NODE_TYPES.PAGE) {
    restructuredConfig.children = restructuredConfig.children[0].children
  }

  return restructuredConfig
}

module.exports = restructureConfig
