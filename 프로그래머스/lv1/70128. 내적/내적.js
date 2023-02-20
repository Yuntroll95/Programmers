function solution(a, b) {
const array = [...a,...b]
let newArray = []
const length = array.length / 2
for(i=0; i < length; i++){
newArray.push(array[i]*array[length+i])
}

  return newArray.reduce((a,b)=>a+b)
}