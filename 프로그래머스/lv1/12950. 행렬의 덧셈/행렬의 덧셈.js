function solution(arr1, arr2) {
  for(i=0;i<arr1.length; i++){
    for(j=0; j<arr1[i].length; j++){
     arr1[i][j] = arr1[i][j] + arr2[i][j]
    }
  }
return arr1
}