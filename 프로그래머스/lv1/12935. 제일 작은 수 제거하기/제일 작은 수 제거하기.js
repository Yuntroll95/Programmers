function solution (arr) {
  const array = [...arr]
  let number = 0
   number = array.sort((a,b) => a-b)[0]
  return arr.length === 1 ? [-1] : arr.filter((item) => item !== number)
}