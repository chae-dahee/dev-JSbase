// //변수 데이터 타입 명시
// let stdId: number = 1111;
// let stdName: string = "dah";
// let completed: boolean = false;
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// // 함수 데이터 타입 명시 > 매개변수, 리턴 타입
// function Plus(a: number, b: number): number {
//   return a + b;
// }
// //열거형 enum
// enum GenderType {
//   Male,
//   Female,
//   GenderNeutral = "nue",
// }
// //interface
// interface Std {
//   stdId: number;
//   stdName?: string;
//   gender?: "male" | "female";
//   completed?: boolean;
//   setName(name: string): void;
//   //   getName?: () => void;
// }
// class MyStudent implements Std {
//   stdId: number = 1111;
//   stdName: string = "dah";
//   gender?: "male" | "female" = "male";
//   completed: boolean = false;
//   setName(name: string): void {
//     this.stdName = name;
//     console.log("이름설정 : " + this.stdName);
//   }
// }
// const myInstance = new MyStudent();
// myInstance.setName("닿");
// function getInfo(id: number): Std {
//   return {
//     stdId: id,
//     stdName: "dah",
//     gender: "female",
//     completed: false,
//     setName(name: string): void {
//       console.log(this.stdName);
//     },
//   };
// }
// console.log(getInfo(2222));
// let std = { stdId: 3333, stdName: "chae", gender: "male", completed: true };
// function setInfo(student: Std): void {
//   console.log(student);
// }
// setInfo(std);
// //객체 타입 지정
// const user :{name : string, age : number} = {
//   name: "dah",
//   age: 11,
// };
// type numOrStr = number | string;
// let numStr: numOrStr = 100; //'100' 동일
// let item: number;
// function convertToString(val: numOrStr): string {
//   if (typeof val === "string") item = 0;
//   else item = val;
//   return String(item);
// }
// function convertToNum(val: numOrStr): number {
//   return Number(val);
// }
// console.log(convertToString(numStr));
// console.log(convertToNum(numStr));
// //Array 타입
// let numbers: number[] = [1, 2, 3, 4, 5];
// let fruits : string[] = ['apple', 'orange', 'banana'];
// numbers.forEach((val)=>console.log(val));
// fruits.forEach((val)=>console.log(val));
// let mixedArray: (number | string)[] = [1, "two", 3, "four"];
// mixedArray.forEach((val)=>console.log(val));
// //읽기전용
// let readOnlyArray: ReadonlyArray<number> = [1, 2, 3];
// //튜플
// let greeting: [number, string, boolean] = [1, "hi", true];
// greeting.forEach((val)=>console.log(val));
//spread 연산자
var aArr = [1, 2, 3];
var bArr = [4, 5, 6];
var cArr = __spreadArray(__spreadArray([], aArr, true), bArr, true);
cArr.forEach(function (val) { return console.log(val); });
