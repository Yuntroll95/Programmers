function solution(n) {
return [...(n + '')].reverse().map((item)=>Number(item))
}