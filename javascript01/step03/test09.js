/* 주제: 흐름 제어문 - switch와 default
*/
"use strict"

var level;

/*사원=워드
  개발자=워드+정처기
  팀장=워드+정처기+석사
*/

level ="경비원";

switch (level) {
  case "팀장":
    console.log("석사 학위자");
    break;
  case "개발자":
    console.log("정처기 자격증 소지자");
    break;
  case "사원":
    console.log("워드 자격증 소지자");
    break;
  default:
    console.log("자격증이 필요 없습니다.");
}
console.log("--------------------------------------");
