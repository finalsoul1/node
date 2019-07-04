const fetch = require('node-fetch')

function getUser(genObj, username) {
  fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(user => genObj.next(user.name))
}

const g = (function* () {
  let user

  user = yield getUser(g, 'jeresig')
  console.log(user)

  user = yield getUser(g, 'ahejlsberg')
  console.log(user)

  user = yield getUser(g, 'ungmo2')
  console.log(user)
})()
