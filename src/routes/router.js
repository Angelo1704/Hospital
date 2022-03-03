const express = require('express')
const physicianRouter = require('./physicianRouter')
const router = express.Router()

router.get('/', (req, res) => {
  res.send("It's Working")
})

router.use('/physician', physicianRouter)

module.exports = router
