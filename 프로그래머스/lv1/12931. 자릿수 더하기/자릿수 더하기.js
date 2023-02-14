function solution(n)
{
  const string = n.toString()
const array = [...string]
const numberArray = array.map((item) => Number(item))
return numberArray.reduce((a,b)=> a+b)

}