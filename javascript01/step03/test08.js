/* 주제: 흐름 제어문 - switch와 break
*/
"use strict"

var level;

/*사원=워드
  개발자=워드+정처기
  팀장=워드+정처기+석사
*/

level ="팀장";

switch (level) {
  case "팀장":
    console.log("석사 학위자");
    // break;
  case "개발자":
    console.log("정처기 자격증 소지자");
    break;
  case "사원":
    console.log("워드 자격증 소지자");
    break;
}
console.log("--------------------------------------");
