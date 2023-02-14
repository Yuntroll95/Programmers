function solution(a, b) {
  let big = 0
  let small = 0  
  let array = [a,b]
  if(a > b){
    big = a;
    small = b;
  } else if(a < b){
    big = b;
    small = a;
  }
  for(let i = 1; i<big-small; i++){
    array.push(small + i)
  }
return a === b ? a : array.reduce((a,b)=>(a+b))
}