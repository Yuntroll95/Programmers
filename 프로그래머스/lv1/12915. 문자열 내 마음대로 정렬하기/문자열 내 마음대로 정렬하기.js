function solution(strings, n) {
  let newArr = strings.sort()
  newArr.sort(function(a,b){
    let nameA = a[n]
    let nameB = b[n]
    if(nameA < nameB){
      return -1
    }
    if(nameA > nameB){
      return  1
    }
    return 0;
  })
return newArr
}