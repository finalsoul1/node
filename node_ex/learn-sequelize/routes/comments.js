const express = require('express')
const { User, Comment } = require('../models')

const router = express.Router()

router.get('/:id', async (req, res, next) => {
  try {
    const comments = await Comment.findAll({
      include: {
        model: User,
        where: { id: req.params.id },
      },
    })
    console.log(comments)
    res.json(comments)
  } catch (e) {
    console.error(e)
    next(e)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const { id, comment } = req.body
    const result = await Comment.create({
      commenter: id,
      comment,
    })
    console.log(result)
    res.status(201).json(result)
  } catch (e) {
    console.error(e)
    next(e)
  }
})

router.patch('/:id', async (req, res, next) => {
  try {
    const result = Comment.update(
      { comment: req.body.comment },
      { where: { id: req.params.id } },
    )
    res.json(result)
  } catch (e) {
    console.error(e)
    next(e)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const result = await Comment.destroy({ where: { id: req.params.id } })
    console.log(result)
    res.json(result)
  } catch (e) {
    console.error(e)
  }
})

module.exports = router
