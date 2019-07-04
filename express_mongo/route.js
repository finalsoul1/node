const express = require('express')
const router = express.Router()
const User = require('./user.js')
router.get('/', (req, res) => {
  res.render('main')
})
router.get('/about', (req, res) => {
  res.render('about')
})
router.get('/:name', (req, res) => {
  User.find({
      name: req.params.name
    },
    (err, user) => {
      res.render('main', {
        user: user
      })
    }
  )
})

const passport = require('passport')

router.post('/login', passport.authenticate('local', {
  failureRedirect: '/'
}), (req, res) => {
  res.redirect('/')
})

router.get(
  '/auth/facebook',
  passport.authenticate('facebook', {
    authType: 'rerequest',
    scope: ['public_profile', 'email']
  })
)
router.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', {
    failureRedirect: '/'
  }),
  function (req, res) {
    res.redirect('/')
  }
)

module.exports = router