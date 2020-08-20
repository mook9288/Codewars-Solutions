function solution(seoul) {
  var answer = '';
  // 배열 형태로 받은 seoul의 길이(배열의 개수?)를 알아낸다.
  for (var i = 0; i < seoul.length; i++){
    // 배열 중 "Kim"과 같은 자리가 있는지 알아낸다.
    if (seoul[i] === "Kim") {
      // 알아낸 후, answer에 저장한다.
      return answer = '김서방은 ' + i + '에 있다';
      //할 일 끝났으니 조건을 끝내고 다음으로 넘어간다.
      break;
    }
  }
  return answer;
}

/* 
* 배열에서 찾아야..for문으로 밖에 생각을 안했는데..
* while도 이용할 수도 있고
* indexOf()는 종종 사용은 해봤는데 생각 안났음..
* findIndex()는 처음 보는거 같고.. ie지원이 안되네?
*/