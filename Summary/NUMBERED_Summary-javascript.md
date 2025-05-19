# 2 Javascript(Vanilla JS)

## 2.1 Table of Contents
- [2 Javascript(Vanilla JS)](#2-javascriptvanilla-js)
  - [2.1 Table of Contents](#21-table-of-contents)
  - [2.2 Section9. Javascript(Vanilla JS) 기본 지식과 변수/조건문](#22-section9-javascriptvanilla-js-기본-지식과-변수조건문)
    - [2.2.1 Javascript 기본](#221-javascript-기본)
      - [2.2.1.1 변수](#2211-변수)
      - [2.2.1.2 데이터 타입](#2212-데이터-타입)
        - [2.2.1.2.1 Number](#22121-number)
        - [2.2.1.2.2 Boolean](#22122-boolean)
        - [2.2.1.2.3 null과 undefined](#22123-null과-undefined)
        - [2.2.1.2.4 object](#22124-object)
        - [2.2.1.2.5 Symbol](#22125-symbol)
        - [2.2.1.2.6 데이터 타입 변환](#22126-데이터-타입-변환)
        - [2.2.1.2.7 주요 연산자](#22127-주요-연산자)
      - [2.2.1.3 조건문](#2213-조건문)
        - [2.2.1.3.1 if문](#22131-if문)
        - [2.2.1.3.2 switch/case 문](#22132-switchcase-문)
      - [2.2.1.4 함수](#2214-함수)
        - [2.2.1.4.1 함수 선언](#22141-함수-선언)
        - [2.2.1.4.2 ES6 화살표 함수Arrow function](#22142-es6-화살표-함수arrow-function)
  - [2.3 Section10. Javascript(Vanilla JS) 함수와 객체](#23-section10-javascriptvanilla-js-함수와-객체)
    - [2.3.1 객체 선언기법 이해](#231-객체-선언기법-이해)
      - [2.3.1.1 객체](#2311-객체)
        - [2.3.1.1.1 객체 생성 방법](#23111-객체-생성-방법)
        - [2.3.1.1.2 객체 리터럴 사용시 주의사항](#23112-객체-리터럴-사용시-주의사항)
        - [2.3.1.1.3 getter / setter](#23113-getter--setter)
      - [2.3.1.2 ⭐️ES6 클래스](#2312-️es6-클래스)
        - [2.3.1.2.1 정의](#23121-정의)
        - [2.3.1.2.2 상속](#23122-상속)
        - [2.3.1.2.3 `hasOwnProperty()` 사용법](#23123-hasownproperty-사용법)
  - [2.4 Section11. Javascript(Vanilla JS) 반복문/배열](#24-section11-javascriptvanilla-js-반복문배열)
    - [2.4.1 for문](#241-for문)
      - [2.4.1.1 배열과 for문](#2411-배열과-for문)
      - [2.4.1.2 객체와 for문](#2412-객체와-for문)
        - [2.4.1.2.1 `for ..in` : 객체의 키를 반복](#24121-for-in--객체의-키를-반복)
        - [2.4.1.2.2 객체(딕셔너리)의 키와 값을 반복](#24122-객체딕셔너리의-키와-값을-반복)
    - [2.4.2 while문](#242-while문)
    - [2.4.3 break와 continue](#243-break와-continue)
    - [2.4.4 javascript 배열](#244-javascript-배열)
      - [2.4.4.1 CRUD](#2441-crud)
        - [2.4.4.1.1 배열 생성(CREATE)](#24411-배열-생성create)
        - [2.4.4.1.2 배열 읽기(READ)](#24412-배열-읽기read)
        - [2.4.4.1.3 배열 수정(UPDATE)](#24413-배열-수정update)
        - [2.4.4.1.4 배열 삭제(DELETE)](#24414-배열-삭제delete)
      - [2.4.4.2 다양한 배열 관련 기능(함수)](#2442-다양한-배열-관련-기능함수)
        - [2.4.4.2.1 `push()` - 배열의 끝에 요소 추가](#24421-push---배열의-끝에-요소-추가)
        - [2.4.4.2.2 `pop()` - 끝의 아이템을 반환 후 배열에서 삭제](#24422-pop---끝의-아이템을-반환-후-배열에서-삭제)
        - [2.4.4.2.3 `shift()` - 배열의 첫번째 아이템을 반환 후 삭제](#24423-shift---배열의-첫번째-아이템을-반환-후-삭제)
        - [2.4.4.2.4 `concat()` - 배열 합치기](#24424-concat---배열-합치기)
        - [2.4.4.2.5 `join(item)` - 배열을 문자열로 변환](#24425-joinitem---배열을-문자열로-변환)
        - [2.4.4.2.6 `reverse()` - 배열의 순서 뒤집기](#24426-reverse---배열의-순서-뒤집기)
        - [2.4.4.2.7 `slice(start, end)` - 배열의 일부를 잘라내기](#24427-slicestart-end---배열의-일부를-잘라내기)
        - [2.4.4.2.8 `forEach()` - 배열의 각 요소에 대해 함수를 실행](#24428-foreach---배열의-각-요소에-대해-함수를-실행)
        - [2.4.4.2.9 `map()` - 배열의 각 요소에 대해 함수를 실행하고 새로운 배열 반환](#24429-map---배열의-각-요소에-대해-함수를-실행하고-새로운-배열-반환)
        - [2.4.4.2.10 `indexOf()` - 배열에서 특정 요소의 인덱스 찾기](#244210-indexof---배열에서-특정-요소의-인덱스-찾기)
        - [2.4.4.2.11 `findIndex()` - 배열에서 특정 요소의 인덱스 찾기](#244211-findindex---배열에서-특정-요소의-인덱스-찾기)
        - [2.4.4.2.12 `find()` - 배열에서 특정 요소 찾기](#244212-find---배열에서-특정-요소-찾기)
        - [2.4.4.2.13 `filter()` - 배열에서 특정 조건을 만족하는 요소들로 새로운 배열 생성](#244213-filter---배열에서-특정-조건을-만족하는-요소들로-새로운-배열-생성)
  - [2.5 Section11. Javascript(Vanilla JS) 중급](#25-section11-javascriptvanilla-js-중급)
    - [2.5.1 삼항 연산자](#251-삼항-연산자)
    - [2.5.2 함수의 기본 인자(파라미터) 값 설정 - 디폴트값 설정](#252-함수의-기본-인자파라미터-값-설정---디폴트값-설정)
    - [2.5.3 구조 분해 할당(비구조화 할당) 문법](#253-구조-분해-할당비구조화-할당-문법)
    - [2.5.4 배열 분해 할당](#254-배열-분해-할당)
    - [2.5.5 유용한 구조 분해 할당 문법 활용 팁](#255-유용한-구조-분해-할당-문법-활용-팁)
      - [2.5.5.1 변수값 교환](#2551-변수값-교환)
      - [2.5.5.2 함수 리턴 시 여러 데이터 넘겨주기](#2552-함수-리턴-시-여러-데이터-넘겨주기)
      - [2.5.5.3 문자열 분리해서 각각의 변수에 대입](#2553-문자열-분리해서-각각의-변수에-대입)
    - [2.5.6 Rest 파라미터](#256-rest-파라미터)
    - [2.5.7 Spread 연산자](#257-spread-연산자)
    - [2.5.8 호이스팅(Hoisting) 이슈와 해결방법](#258-호이스팅hoisting-이슈와-해결방법)
      - [2.5.8.1 var 키워드](#2581-var-키워드)
      - [2.5.8.2 해결방안](#2582-해결방안)
    - [2.5.9 scope](#259-scope)
      - [2.5.9.1 `let`과 `const`의 블록 스코프](#2591-let과-const의-블록-스코프)
      - [2.5.9.2 var 키워드와 함수 스코프](#2592-var-키워드와-함수-스코프)
      - [2.5.9.3 전역변수와 지역변수](#2593-전역변수와-지역변수)
  
<hr>

## 2.2 Section9. Javascript(Vanilla JS) 기본 지식과 변수/조건문
> - 📕PDF
>     - [x] [17_js_start](https://drive.google.com/file/d/1jGURRlNtfe6Cl_WjrvUsClppfyKtggpW/view?usp=sharing "17_js_start.pdf")
>     - [x] [18_js_basic](https://drive.google.com/file/d/18aN1dtpsAF6EohbSIL0wABJDd2urWIU3/view?usp=sharing "18_js_basic.pdf")
<!-- > - 🧪실습파일
>  - [x] [css_inheritance](https://codesandbox.io/p/sandbox/cssinheritance-uhyym?file=%2Fsrc%2Findex.js%3A1%2C1-2%2C1 "Go to url") -->

### 2.2.1 Javascript 기본
#### 2.2.1.1 변수
```javascript
// 변수 선언
let a = 1; // 변수 선언
const b = 2; // 상수 선언
var c = 3; // 전역 스코프
```
> - `let` : 두번 이상 선언 불가능, 재할당 가능

#### 2.2.1.2 데이터 타입
##### 2.2.1.2.1 Number
- 정수/부동소숫점을 통째로 `Number` 데이터 타입으로 처리


##### 2.2.1.2.2 Boolean
- `true` 또는 `false`로 표현

```javascript
let isTrue = true;
let isFalse = false;
```

##### 2.2.1.2.3 null과 undefined
- `null` : 의도적으로 비어있음을 표현
- `undefined` : 변수가 선언되었지만 값이 할당되지 않음
- <u>null과 undefined</u> 는 **다른 데이터 타입으로 취급**됨

```javascript
let a = null; // 의도적으로 비어있음
let b; // 값이 할당되지 않음

console.log(typeof a, a); // object null
console.log(typeof b); // undefined
```

##### 2.2.1.2.4 object
- 객체 타입을 나타내는 데이터 타입

##### 2.2.1.2.5 Symbol
- ES6에서 추가된 데이터 타입으로, 고유한 식별자를 생성하는데 사용
- 주로 객체의 프로퍼티 키로 사용됨

```javascript
let sym1 = Symbol('description');
let sym2 = Symbol('description');
console.log(sym1 === sym2); // false
```

> == : 값만 비교
> === : 값과 타입 모두 비교

##### 2.2.1.2.6 데이터 타입 변환
1. `Number()` : 숫자형으로 변환
2. `parseInt()` : 정수형으로 변환
3. `parseFloat()` : 부동소수점형으로 변환
4. `String()` : 문자열로 변환
5. `Boolean()` : 불리언형으로 변환

##### 2.2.1.2.7 주요 연산자
1. 동등 연산자(`==`) vs 일치 연산자(`===`)
- `==, !=` : 관대한 연산자, 기본적으로 값만 같은지 확인
- `===, !==` : 엄격한 연산자, 값과 타입 모두 같은지 확인
```javascript
console.log(1 == '1'); // true
console.log(1 === '1'); // false
```

2. ++ 연산자
- `변수++` : 변수에서 먼저 값을 꺼내고, 그 다음에 1을 더함
- `++변수` : 변수 값에 1을 더한 값을 꺼냄
```javascript
let a = 1;
let b = 1;
console.log(a++); // 1
console.log(++b); // 2
```

3. 대입 연산자
- `=` : 변수에 값을 대입
- `+=` : 변수에 값을 더한 후 대입
```javascript
let a = 1;
let b = 2;
a += b;
console.log(a); // 3
```

4. 논리 연산자
- `&&` : AND 연산자, 둘 다 true일 때 true
- `||` : OR 연산자, 둘 중 하나라도 true일 때 true
- `!` : NOT 연산자, true를 false로, false를 true로 변환
```javascript
let a = true;
let b = false;
console.log(a && b); // false
console.log(a || b); // true
console.log(!a); // false
```

5. 문자열 연산자
- `+` : 문자열을 연결
- `+=` : 문자열을 연결한 후 대입
```javascript
let a = 'Hello';
let b = 'World';
console.log(a + ' ' + b); // Hello World
a += ' ' + b;
console.log(a); // Hello World
```

#### 2.2.1.3 조건문
##### 2.2.1.3.1 if문
```javascript
if (조건) {
    // 조건이 true일 때 실행할 코드
} else if (조건) {
    // 조건이 true일 때 실행할 코드
} else {
    // 모든 조건이 false일 때 실행할 코드
}
```

##### 2.2.1.3.2 switch/case 문
```javascript
switch (변수) {
    case 값1:
        // 변수와 값1이 같을 때 실행할 코드
        break;
    case 값2:
        // 변수와 값2가 같을 때 실행할 코드
        break;
    default:
        // 모든 case가 false일 때 실행할 코드
}
```
> **case 문에서 break를 사용하지 않으면, 다음 case 문 및 default 문이 실행됨**

#### 2.2.1.4 함수
##### 2.2.1.4.1 함수 선언

```javascript
function 함수이름(매개변수) {
    // 함수 내용
    return 반환값;
}
```

##### 2.2.1.4.2 ES6 화살표 함수<sup>Arrow function</sup>
```javascript
let func = (매개변수) => expression;
```

<hr>

## 2.3 Section10. Javascript(Vanilla JS) 함수와 객체
### 2.3.1 객체 선언기법 이해
> - 📕PDF
>  - [x] [19_js_basic_object](https://drive.google.com/file/d/1lZ_UwbNSmmqMojCcFnu6jO7K7Xj28TMb/view?usp=sharing "19_js_basic_object.pdf")

#### 2.3.1.1 객체
- 객체 생성방법 
    - 객체 리터럴
    - new Object()로 생성
    - 생성자 함수로 생성하는 방식
- 객체이름 선언시에는 보통 `const` 사용

##### 2.3.1.1.1 객체 생성 방법

1. 객체 리터럴

    ```javascript
    const obj = {
    key1: 1,
    key2: 2,
    key3: 3,
    get_data: function () {
        return this.key1 + this.key2 + this.key3;
    },
    };

    console.log(obj.get_data());
    ```

2. new Object()로 생성
    ```javascript
    const obj = new Object();
    obj.key1 = 1;
    obj.key2 = 2;
    obj.key3 = 3;
    obj.get_data = function () {
        return this.key1 + this.key2 + this.key3;
    };
    console.log(obj.get_data());
    ```

3. 생성자 함수로 생성하는 방식
    ```javascript
    function Obj(key1, key2, key3) {
        this.key1 = key1;
        this.key2 = key2;
        this.get_data = function () {
            return this.key1 + this.key2;
        };
    }

    const obj = new Obj(1, 2);
    console.log(obj.get_data());
    ```

##### 2.3.1.1.2 객체 리터럴 사용시 주의사항

1. `this` 키워드
- 객체 내부에서 자기 자신을 가리키는 키워드

2. arrow function 안에서 `this`는 사용 불가

##### 2.3.1.1.3 getter / setter
1. 사용방법
    - getter는 선언시 인자가 없어야하고, setter는 인자가 반드시 하나 이상 있어야 함

    ```javascript
    const obj = {
    key1: 1,
    key2: 2,

    get data() {
        return this.key1 + this.key2;
    },
    set data(value) {
        this.key1 = value;
    },
    };
    ```

#### 2.3.1.2 ⭐️ES6 클래스

##### 2.3.1.2.1 정의
- `constructor` 에 속성값 추가(python의 `__init__`과 유사)

```javascript
class ClassName {
    constructor(key1, key2) {
        this.key1 = key1;
        this.key2 = key2;
    }
    get_data() {
        return this.key1 + this.key2;
    }
}
const obj = new ClassName(1, 2);
console.log(obj.get_data());  // 3
```

##### 2.3.1.2.2 상속

- `extends` 키워드를 사용하여 부모 클래스를 상속받음
- `super()` 키워드를 사용하여 부모 클래스의 생성자를 호출함(constructor 안에서 호출해야 함)

```javascript
class Parent {
    constructor(key1, key2) {
        this.key1 = key1;
        this.key2 = key2;
    }
    get_data() {
        return this.key1 + this.key2;
    }
}
class Child extends Parent {
    constructor(key1, key2, key3) {
        super(key1, key2);
        this.key3 = key3;
    }
    get_data() {
        return super.get_data() + this.key3;
    }
}
```

##### 2.3.1.2.3 `hasOwnProperty()` 사용법
- 프로퍼티가 객체에서 정의된 것인지 확인하는 메소드

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  get_message() {
    return `Hello, I am ${this.name}`;
  }
}

Animal.prototype.age = 10;

const animal = new Animal("Dog");
console.log(animal.hasOwnProperty("name")); // true
console.log(animal.hasOwnProperty("age")); // false
```

<hr>

## 2.4 Section11. Javascript(Vanilla JS) 반복문/배열

### 2.4.1 for문
> - 📕PDF
>  - [x] [20_js_repeat.pdf](https://drive.google.com/file/d/1vGCoMuHOXQ1skmTWM8qXoCpv7wr280Ar/view?usp=sharing "20_js_repeat.pdf")

```javascript
for (초기문; 조건문; 증감문) {
    // 반복할 코드
}
```

- 초기문 : let i=0;
- 조건문 : i<10;
- 증감문 : i++;

```javascript
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

#### 2.4.1.1 배열과 for문
1. `length` 사용

    ```javascript
    const arr = ['first', 'second', 'third'];
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }  // => first second third
    ```

2. `for ..of` 사용
    ```javascript
    const arr = ['first', 'second', 'third'];
    for (const item of arr) {
        console.log(item);
    }  // => first second third
    ```

#### 2.4.1.2 객체와 for문
##### 2.4.1.2.1 `for ..in` : 객체의 키를 반복
```javascript
const obj = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
};
for (const key in obj) {
    console.log(key, obj[key]);
}  // => key1 value1 key2 value2 key3 value3
```

##### 2.4.1.2.2 객체(딕셔너리)의 키와 값을 반복
- `Object.entries()` : 객체의 키와 값을 배열로 반환
- `Object.keys()` : 객체의 키를 배열로 반환
- `Object.values()` : 객체의 값을 배열로 반환

```javascript
const obj = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
};
console.log(Object.entries(obj)); // => [['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']]
console.log(Object.keys(obj)); // => ['key1', 'key2', 'key3']
console.log(Object.values(obj)); // => ['value1', 'value2', 'value3']
```

### 2.4.2 while문
```javascript
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
```

### 2.4.3 break와 continue
- `break` : 반복문을 종료
- `continue` : 현재 반복을 건너뛰고 다음 반복으로 넘어감

```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // 5에서 반복문 종료
    }
    console.log(i);
}
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // 5에서 반복 건너뛰고 다음 반복으로 넘어감
    }
    console.log(i);
}
```

### 2.4.4 javascript 배열
> - 📕PDF
>  - [x] [20_js_array.pdf](https://drive.google.com/file/d/1O2pKEpFRg3psbb80xuqn_C4vb4ouVFwo/view?usp=sharing "20_js_array.pdf")

#### 2.4.4.1 CRUD
##### 2.4.4.1.1 배열 생성(CREATE)
```javascript
// 배열 생성(일반적)
const arr = [1, 2, 'string', true, null];

// 배열의 길이  
arr.length; 

// 아래와 같이 배열을 생성할 수 있음 - 배열 안의 각 인덱스에 직접 할당
const arr2 = new Array();
arr2[1] = 1;
arr2[2] = 2;
console.log(arr2); // [empty, 1, 2]
```

##### 2.4.4.1.2 배열 읽기(READ)
```javascript 
consolg.log(arr[0], arr[arr.length - 1]);
```

##### 2.4.4.1.3 배열 수정(UPDATE)
```javascript   
arr[0] = 100;
```

##### 2.4.4.1.4 배열 삭제(DELETE)
- `splice(삭제할 인덱스, 삭제할 개수)`
```javascript
const data = [1, 2, 3, "kang", "hwan"];
console.log(data);  // [ 1, 2, 3, 'kang', 'hwan' ]
data.splice(3, 100);
console.log(data);  // [ 1, 2, 3 ]
```

#### 2.4.4.2 다양한 배열 관련 기능(함수)
##### 2.4.4.2.1 `push()` - 배열의 끝에 요소 추가  
```javascript
const arr = [1, 2, 3];
arr.push(4); // [1, 2, 3, 4]
```
##### 2.4.4.2.2 `pop()` - 끝의 아이템을 반환 후 배열에서 삭제
```javascript
const arr = [1, 2, 3];
arr.pop(); // [1, 2]
```

##### 2.4.4.2.3 `shift()` - 배열의 첫번째 아이템을 반환 후 삭제
```javascript
const arr = [1, 2, 3];
arr.shift(); // [2, 3]
```

##### 2.4.4.2.4 `concat()` - 배열 합치기
```javascript 
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2); // [1, 2, 3, 4, 5, 6]
```

##### 2.4.4.2.5 `join(item)` - 배열을 문자열로 변환
```javascript
const arr = [1, 2, 3];
const str = arr.join(", "); // "1, 2, 3"
```

##### 2.4.4.2.6 `reverse()` - 배열의 순서 뒤집기
```javascript
const arr = [1, 2, 3];
arr.reverse(); // [3, 2, 1]
```

##### 2.4.4.2.7 `slice(start, end)` - 배열의 일부를 잘라내기
```javascript
const arr = [1, 2, 3, 4, 5];
arr.slice(1, 3); // [2, 3]
```

##### 2.4.4.2.8 `forEach()` - 배열의 각 요소에 대해 함수를 실행
```javascript   
const arr = ['first', 'second', 'third'];
arr.forEach((item, index) => {
    console.log(item, index);
});
// first 0 second 1 third 2 
```

##### 2.4.4.2.9 `map()` - 배열의 각 요소에 대해 함수를 실행하고 새로운 배열 반환
```javascript
const arr = [1, 2, 3];
const newArr = arr.map(item => item * 2);

console.log(newArr); // [2, 4, 6]
```

##### 2.4.4.2.10 `indexOf()` - 배열에서 특정 요소의 인덱스 찾기
```javascript
const arr = ['first', 'second', 'third'];   
arr.indexOf('second'); // 1
```

##### 2.4.4.2.11 `findIndex()` - 배열에서 특정 요소의 인덱스 찾기
```javascript
const myArray = [
  {
    name: "John",
    age: 25,
  },
  {
    name: "Jane",
    age: 30,
  },
];

console.log(myArray.indexOf("John")); // -1
console.log(myArray.findIndex((item) => item.name === "John")); // 0
```

##### 2.4.4.2.12 `find()` - 배열에서 특정 요소 찾기
```javascript
console.log(myArray.find((item) => item.name === "John")); // { name: 'John', age: 25 }
```

##### 2.4.4.2.13 `filter()` - 배열에서 특정 조건을 만족하는 요소들로 새로운 배열 생성
```javascript
const arr = [1, 2, 3, 4, 5];
let odd = arr.filter((item) => item % 2 === 1); // [1, 3, 5]
let even = arr.filter((item) => item % 2 === 0); // [2, 4]
```

<hr>

## 2.5 Section11. Javascript(Vanilla JS) 중급
> - 📕PDF
>  - [x] [22_js_plus.pdf](https://drive.google.com/file/d/13TjITewVzKFLAPAtr0UwmPHF8uuW46bg/view?usp=drive_link "22_js_plus.pdf")
>  - [x] [23_js_process.pdf](https://drive.google.com/file/d/15xJyjI0b3blxga6Ccy4xHu-mPaNgpfC1/view?usp=drive_link "23_js_process.pdf")

### 2.5.1 삼항 연산자
- 문법 : `condition ? true : false`

```javascript
let a = 1;
let b = 2;
let result = a > b ? "a가 b보다 큽니다." : "b가 a보다 큽니다.";
console.log(result); // b가 a보다 큽니다.
```

### 2.5.2 함수의 기본 인자(파라미터) 값 설정 - 디폴트값 설정
- ES6에서 추가된 기능으로, 함수의 인자에 기본값을 설정할 수 있음

```javascript
function add(a, b = 0) {
    return a + b;
}
console.log(add(1)); // 1
console.log(add(1, 2)); // 3
```

### 2.5.3 구조 분해 할당(비구조화 할당) 문법

```javascript
const data = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

let { key1, key2, key3 } = data;
console.log(key1, key2, key3); // Output: value1 value2 value3

// Using destructuring assignment to extract values from an object
let { key1: newKey1, key2: newKey2, key3: newKey3 } = data; 
console.log(newKey1, newKey2, newKey3); // Output: value1 value2 value3
```

### 2.5.4 배열 분해 할당

```javascript       
const arr = [1, 2, 3, 4, 5];
let [first, second, ...rest] = arr;
console.log(first, second, rest); // Output: 1 2 [3, 4, 5]  
```

### 2.5.5 유용한 구조 분해 할당 문법 활용 팁
#### 2.5.5.1 변수값 교환
```javascript   
[a, b] = [b, a];
```

#### 2.5.5.2 함수 리턴 시 여러 데이터 넘겨주기
```javascript
function getData() {
    return [1, 2, 3];
}
let [a, b, c] = getData();
```

#### 2.5.5.3 문자열 분리해서 각각의 변수에 대입
```javascript
const str = "Cha KangHwan";
const [firstName, lastName] = str.split(" ");   
```

### 2.5.6 Rest 파라미터
- Rest 파라미터는 함수의 인자 개수가 정해지지 않았을 때 사용
- `...`을 사용하여 나머지 인자를 배열로 받을 수 있음

```javascript
function add(...rest) {
    ...
}
```

### 2.5.7 Spread 연산자
- Spread 연산자는 배열이나 객체를 펼쳐서 새로운 배열이나 객체를 생성할 때 사용

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
```

> `concat`과는 다르게, 배열의 중간에도 넣을 수 있음

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [0, ...arr1, 7, ...arr2]; // [0, 1, 2, 3, 7, 4, 5, 6]
```

### 2.5.8 호이스팅(Hoisting) 이슈와 해결방법
> - 📕PDF
>  - [x] [23_js_process.pdf](https://drive.google.com/file/d/15xJyjI0b3blxga6Ccy4xHu-mPaNgpfC1/view?usp=drive_link "23_js_process.pdf")

- 호이스팅(hoisting)은 자바스크립트의 실행 컨텍스트에서 변수와 함수의 선언이 해당 스코프의 최상단으로 끌어올려지는 현상
    > **즉, 변수 선언전에 변수를 사용해도 에러가 발생하지 않음**

#### 2.5.8.1 var 키워드
- `var` 키워드로 선언된 변수는 호이스팅이 발생함 
    - `let`과는 다르게, 변수를 선언하기 전에 사용할 수 있음
    - **코드 오류가 발생**할 수 있기 때문에, `let`과 `const`를 사용하는 것이 좋음

- 내부적으로 **javascript**는 **함수와 변수 선언 부분만 분리**해서 최상단으로 끌어올림

    ```javascript
    console.log(a); // undefined
    var a = 1;
    ```

#### 2.5.8.2 해결방안
1. `let`과 `const` 사용(`var` 사용 지양)

2. 함수 선언의 경우 *함수 선언문*이 아닌, **함수 표현식**으로 사용할 것
```javascript   
// 함수 선언문 🚫
function func() {
    console.log("Hello");
}
```
```javascript
// 함수 표현식 🟢
const func = function() {
    console.log("Hello");
}
```

### 2.5.9 scope
- 변수 또는 함수가 유효한 범위
    1. Global scope : 전역 범위
    2. Function scope : 함수 범위
    3. Block scope : 블록 범위

#### 2.5.9.1 `let`과 `const`의 블록 스코프
- `let`과 `const`로 선언된 변수는 블록 스코프를 가짐
- 즉, 해당 변수가 선언된 블록({}) 내에서만 유효함

```javascript
{
  let a = 1;
  {
    console.log(a); // 블록 안의 블록에서는 유효함
  }
}

console.log(a);  // ReferenceError: a is not defined
```

#### 2.5.9.2 var 키워드와 함수 스코프
- 함수 안은 `var` 로 선언된 변수는 함수 스코프를 가짐
- **블록 안의 `var`로 선언된 변수는 함수 밖에서도 사용 가능함**

#### 2.5.9.3 전역변수와 지역변수 
- 동일한 이름을 가진 변수를 전역과 지역에서 선언할 경우, **지역변수가 우선시** 됨





[🔝 돌아가기](#table-of-contents)