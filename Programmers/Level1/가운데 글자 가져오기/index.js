function solution(s) {
  var answer = '';
  var division = s.length / 2;

  // 짝수인지 홀수인지 판단
  if (s.length % 2 === 0) {
    answer = s.slice(division - 1, division + 1);
  } else {
    answer = s.slice(division, division + 1);
  }
  return answer;
}

/* 
* slice(beginIndex, endIndex): 문자열의 일부를 추출하면서 새로운 문자열을 반환한다.
* splice(beginIndex, deleteCount, addItem): 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경한다.
* split(separator, limit): string 객체를 지정한 구분자를 이용하여 여러개의 문자열로 나눈다.
* substring(beginIndex, endIndex): string 객체의 시작 인덱스로부터 종료인덱스 전까지 문자열의 부분 문자열을 반환한다.
* substr(beginIndex, length): 문자열에서 특정 위치에서 시작하여 특정 문자 수 만큼의 문자들을 반환한다.
*/