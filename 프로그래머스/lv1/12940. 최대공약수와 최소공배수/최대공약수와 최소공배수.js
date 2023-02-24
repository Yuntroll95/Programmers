function solution(n, m) {
  let small = 0
  let big = 0
    if(n>m){
      small = m
      big = n
    } else { 
      small = n
      big = m
    }
  
  let sum = 0
  let num = 1

  for(i=big; i>0; i--){
    if(small%i === 0 && big%i=== 0 ){
    return [i,i*(big/i)*(small/i)]
    } 

  }

}