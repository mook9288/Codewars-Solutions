function solution(s){
  var arr = s.split('');
  var sumY = 0, sumP = 0;
  
  for(var i=0; i<arr.length; i++){
    if (arr[i] == 'y' || arr[i] == 'Y') {
      sumY++;
    } else if (arr[i] == 'p' || arr[i] == 'P') {
      sumP++;
    }
  }
  return (sumY === sumP) ? true : false;
}