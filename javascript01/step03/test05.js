/* 주제: 흐름 제어문 - 조건문 if ~ else if ~ else if ~ else
*/
"use strict"

var age;

age=11;

if (age < 8)
  console.log("유아");
  else {
    if (age>=8 && age<14 )
      console.log("어린이");
      else
        console.log("청소년 이상 입니다.");
    }

console.log("-----------------------");

//
age=7;

if (age < 8)
  console.log("유아");
  else                       // if~else는 한 문장이기 때문에 {}처리를 하지않아도 실행된다.
    if (age>=8 && age<14 )
      console.log("어린이");
      else
        console.log("청소년 이상 입니다.");


console.log("-----------------------");


age=65;

if (age < 8)
  console.log("유아");
  else                       // if~else는 한 문장이기 때문에 {}처리를 하지않아도 실행된다.
    if (age>=8 && age<14 )
      console.log("어린이");
    else
      if(age >=14 && age <20)
        console.log("청소년");
        else
          if(age >= 20 && age <65)
            console.log("성인");
          else
            console.log("노인");

console.log("-----------------------");

//실무
age=65;

if (age < 8)
  console.log("유아");
  else if(age >= 8 && age < 14)
    console.log("어린이");
  else if(age >= 14 && age < 20)
    console.log("청소년");
  else if(age >= 20 && age < 65)
    console.log("성인");
  else
    console.log("노인");

console.log("-----------------------");
