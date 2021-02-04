function solution(s) {
  var answer = parseInt(s);
  if(s.length == 4 || s.length == 6){
    if(answer == s){
      return true;
    }
    return false;
  }
  return false;
}