/**
 * You get an array of numbers, return the sum of all of the positives ones.
 * Example [1,-4,7,12] => 1 + 7 + 12 = 20
 * Note: if there is nothing to sum, the sum is default to 0.
 * 
 * 숫자의 집합을 구하면 모든 긍정적인 숫자의 합을 돌려주게 된다.
 * 예제 [1,-4,7,12] => 1 + 7 + 12 = 20
 * 참고: 합할 것이 없으면 합계는 기본값인 0이다.
 */
function positiveSum(arr) {
  var sum=0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}