function solution(s){
 return (s.toUpperCase().split('P').length-1) === (s.toUpperCase().split('Y').length-1)  ? true : false 

}