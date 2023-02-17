function solution(absolutes, signs) {
return signs.map((item, index)=> {
  if(item === true) return absolutes[index]
  else {return -absolutes[index]}
}).reduce((a,b) => a+b)
}