const router = require('express').Router()
const getFile = require('@/utils/getFile')

router.get('/get-projects', async (req, res) => {
  const { status, config } = await getFile('I4asTrhDaL0RwCo36vokxf')
  res.status(status).json(config)
})

module.exports = router
