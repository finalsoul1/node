const express = require('express')
const path = require('path')
const session = require('express-session')
const db = require('./db.js')
const route = require('./route.js')

const passport = require('passport')
const passportConfig = require('./passport')

const app = express()

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'html'))

app.use(session({
  secret: '비밀코드',
  resave: true,
  saveUninitialized: false
})) // 세션활성화
app.use(passport.initialize()) // passport 구동
app.use(passport.session()) // 세션연결

db()
passportConfig()

app.use(express.static(path.join(__dirname, 'html')))
app.use('/', route)

app.listen(8080, () => {
  console.log('Express App on port 8080~~~!~!')
})