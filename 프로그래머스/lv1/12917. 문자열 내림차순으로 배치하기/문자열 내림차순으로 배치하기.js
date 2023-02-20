function solution(s) {
const upper = [...s]
const small = [...s]
const array = []
array.push(...small.filter((item)=> item === item.toLowerCase()).sort().reverse())
array.push(...upper.filter((item)=> item === item.toUpperCase()).sort().reverse())
return array.join('')
}