function solution(n) {
return Array.from({length: n}, (v, i) => i).filter((item)=> n % item === 1)[0]
}