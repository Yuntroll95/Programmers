function solution(n) {
const a = '수박'
let answer = ''
if(n === 1){
 answer = '수'
}  else if(n === 0){
  answer = ''
} else if(n % 2 === 0){
  answer = a.repeat(n/2)
} else if(n%2 !== 0 && n !== 1){
   answer = a.repeat(n/2 + 1).slice(0,n)
}
  return answer
}