function solution(s, n) {
  var answer = '';
  // 함수를 완성하세요.
  var cryptogram1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var cryptogram2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var str = s.split('');
  var array = [];

  for(var i=0; i<str.length; i++){
    array = str[i];
    if(str[i] == ' '){
      answer += str[i];
    } else {
      for(var j=0; j<cryptogram1.length; j++){
        if(array == cryptogram1[j]) answer += cryptogram1[(j+n)%26]; 
        else if(array == cryptogram2[j]) answer += cryptogram2[(j+n)%26]; 
      }
    }
  }
  return answer;
}