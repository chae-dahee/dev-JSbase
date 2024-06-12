//일급객체의 개념
// 일급객체는 함수의 실제 매개변수가 될 수 있다.
// > bar
function foo(arg) {
  arg();
}
function bar() {
  console.log("bar");
}
foo(bar);

// 일급객체는 함수의 반환값이 될 수 있다.
// > barrrr
function foo(arg) {
  return arg;
}
function bar() {
  console.log("barrrrr");
}
foo(bar)();

// 일급객체는 할당명령문의 대상이 될 수 있다. (변수 등에 할당 가능)
// 일급객체는 동일비교의 대상이 될 수 있다. (값으로 표현 가능)
// > 1
const foo = function (arg) {
  return console.log(arg);
}
foo(1);

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
//매개변수의 개념
// 기본값 매개변수 default fuction parameter
// > undefined > 1
function foo(arg=1) {
  console.log(arg);
}
foo();

// 나머지 매개변수 Rest parameter
// > arg = 1, rest = [2,3,4]
function foo(arg, ...rest) {
  console.log(arg);
  console.log(rest);
}
foo(1, 2, 3, 4);

// arguments 객체
// > [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 , length: 4, callee : f foo(), __proto__ : {}}
function foo(arg) {
  console.log(arguments);
}
foo(1, 2, 3, 4);

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// 함수 생성 방법
// 함수 선언문
// > foo
function foo() {
  console.log("foo");
}
foo();

// 함수 표현식
// > foo2
const foo = function() {
  console.log("foo2");
}
foo();

// Function 생성자 함수
// > foo3
const foo = new Function('console.log("foo3")')
foo();

// 화살표 함수 표현식
// > foo4
const foo = () => {
  console.log("foo4");
};
foo();

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
//함수 형태
// IIFE 즉시 실행 함수
// > foo
(function foo() {
  console.log("foo");
})()

// 재귀함수
// > foo foo
function foo(arg) {
  if (arg === 3) return;
  console.log("foo");
  foo(arg + 1);
}
foo(1);

// 중첩함수
// > 1
function foo(arg) {
  function bar() {
    console.log(arg);
  }
  bar();
}
foo(1);

// 콜백함수
// > 1
function foo(arg) {
  arg();
}
foo(() => {
  console.log(1);
});
