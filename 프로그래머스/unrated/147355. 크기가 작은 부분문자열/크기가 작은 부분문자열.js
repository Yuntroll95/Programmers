function solution(t, p) {

const splitIntoChunk = (str, chunk) => {
  // 빈 배열 생성
  const result = [];
  for (let i = 0; i < str.length-chunk.length+1; i++){
    let tempArray;
    // slice() 메서드를 사용하여 특정 길이만큼 문자열을 분리함
    tempArray = str.slice(i, i + chunk.length)
    result.push(Number(tempArray))
  } 
  return result;
}
return splitIntoChunk(t,p).filter((el) => el <= Number(p)).length
}