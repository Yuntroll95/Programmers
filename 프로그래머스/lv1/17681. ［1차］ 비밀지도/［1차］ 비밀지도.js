function solution(n, arr1, arr2) {
  let newArr = []

  // 먼저 이진수를 n 의 갯수에 맞춰서 변환하는 함수
  // 일단 이진수로 변환
  // 문제는 n의 길이만큼이여야 함
  // 그래서 갯수가 부족하면 앞에 0을 넣어야함!
  // 갯수 넘으면 앞에서 부터 자르기
  

// 이진수를 길이에 맞게 변환해주는 함수
const changeString = (arr) => arr.map((item) => {
  let newItem = item.toString(2).length
  if(newItem < n){
    return `${'0'.repeat(n-newItem)}${item.toString(2)}`
  } else if(newItem > n){
    return item.toString(2).substring(n-newItem,n)
  }
  else if(newItem === n){
    return item.toString(2)
  }
})



// 이제 2중 loop
for(let i = 0; i < n; i++){
  for(let j = 0; j < n; j++){
    if(changeString(arr1)[i][j] === '0' && changeString(arr2)[i][j] === '0'){
newArr.push(' ')
    } else {
newArr.push('#')
    }
  }
}

const splitIntoChunk = (arr, chunk) => {
  // 빈 배열 생성
  const result = [];
  while(arr.length > 0) {
    let tempArray;
    // splice() 메서드를 사용하여 특정 길이만큼 배열을 분리함
    tempArray = arr.splice(0, chunk);
    // 빈 배열에 특정 길이만큼 분리된 배열을 추가
    result.push(tempArray);
  }
    
  return result;
}
return splitIntoChunk(newArr, n).map((item) => item.join().replaceAll(',',''))
}