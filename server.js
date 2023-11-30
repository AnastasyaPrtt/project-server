require('dotenv').config

const express = require('express')
const sequelize = require('./db')
const models = require('./models/index')
const cors = require('cors')
const path = require('path')
const router = require('./router/index')

const PORT = process.env.PORT || 5000
const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

async function startApp() {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`SERVISE WORKING ON ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}

startApp()
