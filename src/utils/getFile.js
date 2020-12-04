const fetch = require('node-fetch')
// const { writeFile, mkdir } = require('fs').promises
// const path = require('path')
const normalize = require('./normalizeConfig')

async function getFile (key) {
  const response = await fetch(`https://api.figma.com/v1/files/${key}`, {
    method: 'GET',
    headers: {
      'X-Figma-Token': process.env.FIGMA_ACCESS_TOKEN,
    },
  })

  const { document: config } = await response.json()

  normalize(config)

  return config

  // await mkdir(path.resolve(__dirname, `../../dist/projects/${key}`), { recursive: true })
  // await writeFile(path.resolve(__dirname, `../../dist/projects/${key}/config.json`), JSON.stringify(config, null, 2))
}

module.exports = getFile
