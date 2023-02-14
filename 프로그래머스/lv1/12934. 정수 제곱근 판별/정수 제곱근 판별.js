function solution(n) {
  const root = Math.sqrt(n)
if(Number.isInteger(root) === true){
  return Math.pow((root + 1), 2)
} else {return -1 }
}