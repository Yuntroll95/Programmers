function solution(arr) {
 const result = arr.reduce((a,b) => (a+b))
return result / arr.length
}