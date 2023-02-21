function solution(price, money, count) {
  let sum = 0
for(i=1; i<count+1; i++){
  sum += price*i
}
return money - sum > 0 ? 0 : -(money-sum)
}