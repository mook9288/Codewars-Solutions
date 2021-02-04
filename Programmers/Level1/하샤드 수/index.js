function solution(x) {
  var str = String(x);
  var intX = str.split('');
  var sum = 0;
  for(var i=0; i<intX.length; i++){
  	sum += Number(intX[i]);
  }
  return (x%sum == 0) ? true : false;
}