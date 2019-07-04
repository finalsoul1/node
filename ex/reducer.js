const data = ["vote1", "vote2", "vote1", "vote2", "vote2"];
const reducer = (accumulator, value, index, array) => {
    if (accumulator[value]) {
        accumulator[value] = accumulator[value] + 1;
    } else {
        accumulator[value] = 1;
    }
    return accumulator;
};
const getVote = data.reduce(reducer, {}); // { vote1: 2, vote2: 3 } 
const getVote2 = data.reduce(reducer); // "vote1"

console.log(getVote, getVote2)

// flatten
const dataArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
const flatArrayReducer = (accumulator, value, index, array) => {
    return accumulator.concat(value)
}
const flattenedData = dataArray.reduce(flatArrayReducer, [])
console.log(flattenedData);

// flattenMap
const input = [{
        "title": "슈퍼맨",
        "year": "2005",
        "cast": ["장동건", "권상우", "이동욱", "차승원"]
    },
    {
        "title": "스타워즈",
        "year": "2013",
        "cast": ["차승원", "신해균", "장동건", "김수현"]
    },
    {
        "title": "고질라",
        'year': '1997',
        'cast': []
    }
]
const flatMapReducer = (accumulator, value, index, array) => {
    const key = "cast"
    if (value.hasOwnProperty(key) && Array.isArray(value[key])) {
        value[key].forEach(val => {
            if (accumulator.indexOf(val) === -1) {
                accumulator.push(val)
            }
        })
    }
    return accumulator
}
const flattenCastArray = input.reduce(flatMapReducer, [])
console.log(flattenCastArray);

// reduceRight
const dataNumber = [1, 2, 3, 4, "5"]
const sumData1 = dataNumber.reduce((accumulator, value) => {
    return accumulator + value
}, 0)
const sumData2 = dataNumber.reduceRight((accumulator, value) => {
    return accumulator + value
}, 0)
console.log(sumData1);
console.log(sumData2);

// functional programming using reduce
const increment = (input) => {
    return input + 1 
const decrement = (input) => {
    return input - 1
}
const double = (input) => {
    return input * 2
}
const halve = (input) => {
    return input / 2
}
const initial_value = 1
const pipeline = [
    increment, double, decrement, decrement, decrement, halve, double
]
const final_value2 = pipeline.reduce((accumulator, func) => {
    return func(accumulator)
}, initial_value)
console.log(final_value2);