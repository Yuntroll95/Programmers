function solution(arr){
  let newArray = []
  for(i=0; i<arr.length; i++){
    if(arr[i] !== arr[i+1]){
      newArray.push(arr[i])
    }
  }
return newArray
}