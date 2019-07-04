const fs = require('fs')

console.log('시작')

async function read () {
  await fs.readFile('./readme2.txt', (err, data) => {
    if(err) {
      throw err
    }
    console.log('1번', data.toString())
  })

  await fs.readFile('./readme2.txt', (err, data) => {
    if(err) {
      throw err
    }
    console.log('2번', data.toString())
  })

  await fs.readFile('./readme2.txt', (err, data) => {
    if(err) {
      throw err
    }
    console.log('3번', data.toString())
  })

  await console.log('끝')
}

read()

