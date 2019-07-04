const os = require('nodejs/builtInObject/global/os')

console.log('arch: ', os.arch())
console.log('platform: ', os.platform())
console.log('type: ', os.type())
console.log('uptime: ', os.uptime())
console.log('hostname: ', os.hostname())
console.log('release: ', os.release())

console.log('homedir: ', os.homedir())
console.log('tmpdir: ', os.tmpdir())

console.log('cpus: ', os.cpus())
console.log('cpus length: ', os.cpus().length)

console.log('freemem: ', os.freemem())
console.log('totalmem: ', os.totalmem())
