function solution(strings, n) {
    var answer = strings;
    answer.sort(function(a, b){
        var num1 = a[n];
        var num2 = b[n];
        if(num1 === num2){
            return (a > b) - (a < b);
        } else {
            return (num1 > num2) - (num1 < num2);
        }
    })
    return answer;
}
