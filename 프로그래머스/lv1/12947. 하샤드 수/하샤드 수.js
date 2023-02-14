function solution(x) {
const a = [...x + ''].map((item)=> Number(item)).reduce((a,b) => a + b)
return x % a === 0 
}