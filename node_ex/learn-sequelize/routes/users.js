var express = require('express')
var User = require('../models').User

var router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll()
    res.json(users)
  } catch (e) {
    console.error(e)
    next(e)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const { name, age, married } = req.body
    const result = await User.create({
      name,
      age,
      married,
    })
    console.log(result)
    res.status(201).json(result)
  } catch (e) {
    console.error(e)
    next(e)
  }
})

module.exports = router
