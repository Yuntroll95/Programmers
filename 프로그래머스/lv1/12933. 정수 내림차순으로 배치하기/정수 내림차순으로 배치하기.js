function solution(n) {
const answer = [...n+''].map((el)=>(Number(el))).sort((a,b) => b-a).join('')
return parseInt(answer)
}