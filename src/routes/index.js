const router = require('express').Router()
const getFile = require('@/utils/getFile')

router.get('/get-projects', async (req, res) => {
  const project = await getFile('I4asTrhDaL0RwCo36vokxf')
  res.json(project)
})

module.exports = router
