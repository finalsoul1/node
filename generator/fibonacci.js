const infiniteFibonacci = (function* () {
  let [pre, cur] = [0, 1]

  while (true) {
    [pre, cur] = [cur, pre + cur]
    yield cur
  }
})()

for (const num of infiniteFibonacci) {
  if (num > 10000) break
  console.log(num)
}

//
const createInfiniteFibByGen = function* (max) {
  let [prev, curr] = [0, 1]

  while (true) {
    [prev, curr] = [curr, prev + curr]
    if (curr >= max) return
    yield curr
  }
}

for (const num of createInfiniteFibByGen(10000)) {
  console.log(num)
}

//
function* gen(n) {
  let res
  res = yield n

  console.log(res)
  res = yield res

  console.log(res)
  res = yield res

  console.log(res)
  res = yield res

  console.log(res)
  return res
}

const generatorObj = gen(0)

console.log(generatorObj.next())
console.log(generatorObj.next(1))
// console.log(generatorObj.next(2))
// console.log(generatorObj.next(3))

