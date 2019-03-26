/**
 * Write a function called repeatStr which repeats the given string string exactly n times.
 *  repeatStr(6, "I") // "IIIIII"
 *  repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
 * 
 * 주어진 문자열을 정확히 n번 반복하는 repeatStr라는 함수를 쓰십시오.
 */
function repeatStr (n, s) {
  return s.repeat(n);
}

function repeatStr(n, s) {
  var str = '';
  for (var i = 0; i < n; i++) {
    str += s;
  }
  return str;
}




/**
 * String.prototype.repeat()
 * repeat() 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환.
 * IE에서는 호환하지 않음...
 */