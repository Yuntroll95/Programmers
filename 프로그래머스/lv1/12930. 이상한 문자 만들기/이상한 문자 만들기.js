function solution(s) {
return s.split(' ').map((item) => {
  let a= []
    for(i=0;i<item.length;i++){
  if(i % 2 === 0 ){

    a.push(item.charAt(i).toUpperCase())
    
  } else if(i === 0){

        a.push(item.charAt(i).toUpperCase())
  }else {

     a.push(item.charAt(i).toLowerCase())
  }

}
return a.join().replaceAll(',','')
}).join().replaceAll(',',' ')
}