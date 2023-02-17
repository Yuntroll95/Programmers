function solution(seoul) {
  let a = 0
  seoul.map((data, index)=>{
    if(data === 'Kim')
      return a = index
  })
  return `김서방은 ${a}에 있다`
}