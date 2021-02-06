function solution(phone_number) {
  var answer = '';
  var masking = phone_number.substring(0,  phone_number.length - 4);
  var number = phone_number.substring(phone_number.length - 4)

  for (var i = 0; i < masking.length - 4; i++) {
    answer += "*"
  }

  return answer + number;
}
