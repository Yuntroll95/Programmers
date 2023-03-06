function solution(d, budget) {
let answer = 0
let count = 0
d.sort((a,b)=> a-b)
for(i=0; i<d.length; i++){
  answer = answer + d[i]
  if(answer <= budget){
    count++
  }
}
  return count
}