function solution(array, commands) {
  var answer = [];
  var arr = '';
  for(var i = 0; i < commands.length; i++) {
    arr = array.slice(commands[i][0] - 1, commands[i][1]);
    arr.sort(function(a,b){return a-b;});
    answer.push(arr[commands[i][2] - 1]);
  }
  return answer;
}
