function solution(s) {
return s.search(/[a-zA-Z]/g) === -1 && (s.length === 4 || s.length === 6)
}