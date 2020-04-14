// case1
function repeatStr(n, s) {
  return s.repeat(n);
}

// case2
/**
 * String.prototype.repeat()
 * repeat() 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환.
 * IE에서는 호환하지 않음...
 */
function repeatStr2(n, s) {
  var str = '';
  for (var i = 0; i < n; i++) {
    str += s;
  }
  return str;
}