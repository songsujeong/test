
"use strict"


var a=10; //0000 1010
var b=12; //0000 1100

console.log("a & b = " , a & b); //0000 1000
console.log("a | b = " , a | b); //0000 1110
console.log("a ^ b = " , a ^ b); //0000 0110
console.log("~a = " , ~a); //1111 0101

console.log("------------------------------");


var pixel = 0x34f588;
var mask = 0x00ff00;
console.log((pixel & mask ).toString(16));


console.log("------------------------------");


var pixel = 0x34f588;//00110100 11110101 10001000
var mask = 0xaa0000; //10101010 00000000 00000000
console.log((pixel | mask ).toString(16)); //10111110 11110101 10001000



console.log("------------------------------");


var pixel = 0x34f588; //00110100 11110101 10001000
var mask = 0x34f588;
console.log((pixel ^ mask).toString(16));
console.log("------------------------------");
