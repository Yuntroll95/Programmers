process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0])
    const b = Number(n[1]);
    const first = '*'.repeat(a) + '\n'
const second = first.repeat(b)
console.log(second.replace(/\\n/gi,'</br>'))

});