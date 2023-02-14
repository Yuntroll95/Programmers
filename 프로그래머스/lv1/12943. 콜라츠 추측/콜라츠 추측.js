function solution(num) {
  let array = []
  let number = num

const a = (num) => {
  if(num === 1){
      return array;
  } else if(num % 2 === 0){
     number = num / 2;
     array.push(number);
    return a(number)
  } else if (num % 2 === 1){
     number = num * 3 + 1;
     array.push(number);
    return a(number)
  }
}
a(num)
  return array.length > 500 ? -1 : array.length
}