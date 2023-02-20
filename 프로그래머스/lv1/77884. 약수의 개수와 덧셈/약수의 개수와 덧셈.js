function solution(left, right) {
const array = [left, right]
let newArray = []

for(i=1;i<right-left;i++){
  array.push(left+i)  
}

for (i=0; i<array.length; i++){
if( Number.isInteger(Math.sqrt(array[i]))  === false){
newArray.push(array[i])
} else {newArray.push(-array[i])}
}
return newArray.reduce((a,b) => a+b)
}