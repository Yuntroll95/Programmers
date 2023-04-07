function solution(sizes) {
  let array = []

  let bigArr = []
  let smallArr = []
  
  let big = 0
  let samll = 0
for(let i=0; i<sizes.length; i++){
bigArr.push(sizes[i].sort((a,b) => b-a)[0])
smallArr.push(sizes[i].sort((a,b) => b-a)[1])
}

big = bigArr.sort((a,b) => b-a)[0]
small = smallArr.sort((a,b) => b-a)[0]
  
  return big*small
}