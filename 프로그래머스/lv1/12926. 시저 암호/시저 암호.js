function solution(s, n) {
const upper = Array.from({length:26}, (v,i)=> String.fromCharCode(i+65))
const lower = Array.from({length:26}, (v,i)=> String.fromCharCode(i+65).toLowerCase())
let answer = ''
for(i=0; i<s.length; i++){
if(s.charAt(i) === ' '){
  answer += ' '
}
  else if(upper.indexOf(s.charAt(i)) !== -1){

if(25 - upper.indexOf(s.charAt(i)) < n ||  upper.indexOf(s.charAt(i)) === 25){
  answer += upper[n-1-(25 - upper.indexOf(s.charAt(i)))]

} else {
answer += upper[upper.indexOf(s.charAt(i))+n]

}
  } else if(lower.indexOf(s.charAt(i)) !== -1){
  if(25 - lower.indexOf(s.charAt(i)) < n || lower.indexOf(s.charAt(i)) === 25){
    answer += lower[n-1-(25 - lower.indexOf(s.charAt(i)))]

} else {

  answer += lower[lower.indexOf(s.charAt(i))+n]
}
  }

}
  return answer
}