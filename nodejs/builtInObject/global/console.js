const string = 'abc'
const number = 1
const boolean = true

const obj = {
  outside: {
    inside: {
      key: 'value'
    }
  }
}

console.time('전체시간')
console.error('에러 메세지는 console.error에 담아주세요')
console.dir(obj, { color: false, depth: 2 })
console.dir(obj, { color: true, depth: 1 })
console.dir(obj)

console.time('시간 측정')
for (let i = 0; i < 100000; i++) {
  continue
}
console.timeEnd('시간 측정')

function b() {
  console.trace('에러위치추적')
}
function a() {
  b()
}
a()

console.timeEnd('전체 시간')
