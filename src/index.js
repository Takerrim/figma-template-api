require('dotenv').config()
require('module-alias/register')

const cors = require('cors')
const app = require('express')()

const projectRoutes = require('@/routes')

const PORT = process.env.PORT || 3000

app.use(cors())

app.use('/api/v1', projectRoutes)

app.listen(PORT, () => {
  console.log(`Server is successfully started on port ${PORT}`)
})

