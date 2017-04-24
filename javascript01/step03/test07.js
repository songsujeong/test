/* 주제: 흐름 제어문 - switch ~ case
*/
"use strict"

var level;

/*사원=워드
  개발자=워드+정처기
  팀장=워드+정처기+석사
*/

level ="팀장";

if(level == "사원")
  console.log("워드 자격증 소지자");

if(level == "개발자"){
  console.log("워드 자격증 소지자");
  console.log("정처기 자격증 소지자");
}
if(level == "팀장"){
  console.log("워드 자격증 소지자");
  console.log("정처기 자격증 소지자");
  console.log("석사 학위자");
}
console.log("-----------------------------------");

//switch문 사용(간단한 내용만 가능)
level = "팀장";

switch (level) {
  case "팀장":
    console.log("석사 학위자");
  case "개발자":
    console.log("정처기 자격증 소지자");
  case "사원":
    console.log("워드 자격증 소지자");

}
