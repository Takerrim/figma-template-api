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

    if (response.status === 200) {
      const { document: config } = await response.json()
      console.log(config)
    
      normalize(config)
    
      return {
        status: response.status,
        config,
      }
    } else {
      return {
        status: response.status,
        config: null
      }
    }
  
  // await mkdir(path.resolve(__dirname, `../../dist/projects/${key}`), { recursive: true })
  // await writeFile(path.resolve(__dirname, `../../dist/projects/${key}/config.json`), JSON.stringify(config, null, 2))
}

module.exports = getFile
