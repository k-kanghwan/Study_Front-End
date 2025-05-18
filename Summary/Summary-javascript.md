# Javascript(Vanilla JS)

## Table of Contents
- [Javascript(Vanilla JS)](#javascriptvanilla-js)
  - [Table of Contents](#table-of-contents)
  - [Section9. Javascript(Vanilla JS) 기본 지식과 변수/조건문](#section9-javascriptvanilla-js-기본-지식과-변수조건문)
    - [Javascript 기본](#javascript-기본)
      - [변수](#변수)
      - [데이터 타입](#데이터-타입)
        - [Number](#number)
        - [Boolean](#boolean)
        - [null과 undefined](#null과-undefined)
        - [object](#object)
        - [Symbol](#symbol)
        - [데이터 타입 변환](#데이터-타입-변환)
        - [주요 연산자](#주요-연산자)
      - [조건문](#조건문)
        - [if문](#if문)
        - [switch/case 문](#switchcase-문)
      - [함수](#함수)
        - [함수 선언](#함수-선언)
        - [ES6 화살표 함수Arrow function](#es6-화살표-함수arrow-function)
  - [Section10. Javascript(Vanilla JS) 함수와 객체](#section10-javascriptvanilla-js-함수와-객체)
    - [객체 선언기법 이해](#객체-선언기법-이해)
      - [객체](#객체)
        - [객체 생성 방법](#객체-생성-방법)
        - [객체 리터럴 사용시 주의사항](#객체-리터럴-사용시-주의사항)
        - [getter / setter](#getter--setter)
      - [⭐️ES6 클래스](#️es6-클래스)
        - [정의](#정의)
        - [상속](#상속)
        - [`hasOwnProperty()` 사용법](#hasownproperty-사용법)
  - [Section11. Javascript(Vanilla JS) 반복문/배열](#section11-javascriptvanilla-js-반복문배열)
    - [for문](#for문)
      - [배열과 for문](#배열과-for문)
      - [객체와 for문](#객체와-for문)
        - [`for ..in` : 객체의 키를 반복](#for-in--객체의-키를-반복)
        - [객체(딕셔너리)의 키와 값을 반복](#객체딕셔너리의-키와-값을-반복)
    - [while문](#while문)
    - [break와 continue](#break와-continue)
    - [javascript 배열](#javascript-배열)
      - [CRUD](#crud)
        - [배열 생성(CREATE)](#배열-생성create)
        - [배열 읽기(READ)](#배열-읽기read)
        - [배열 수정(UPDATE)](#배열-수정update)
        - [배열 삭제(DELETE)](#배열-삭제delete)
      - [다양한 배열 관련 기능(함수)](#다양한-배열-관련-기능함수)
        - [`push()` - 배열의 끝에 요소 추가](#push---배열의-끝에-요소-추가)
        - [`pop()` - 끝의 아이템을 반환 후 배열에서 삭제](#pop---끝의-아이템을-반환-후-배열에서-삭제)
        - [`shift()` - 배열의 첫번째 아이템을 반환 후 삭제](#shift---배열의-첫번째-아이템을-반환-후-삭제)
        - [`concat()` - 배열 합치기](#concat---배열-합치기)
        - [`join(item)` - 배열을 문자열로 변환](#joinitem---배열을-문자열로-변환)
        - [`reverse()` - 배열의 순서 뒤집기](#reverse---배열의-순서-뒤집기)
        - [`slice(start, end)` - 배열의 일부를 잘라내기](#slicestart-end---배열의-일부를-잘라내기)
        - [`forEach()` - 배열의 각 요소에 대해 함수를 실행](#foreach---배열의-각-요소에-대해-함수를-실행)
        - [`map()` - 배열의 각 요소에 대해 함수를 실행하고 새로운 배열 반환](#map---배열의-각-요소에-대해-함수를-실행하고-새로운-배열-반환)
        - [`indexOf()` - 배열에서 특정 요소의 인덱스 찾기](#indexof---배열에서-특정-요소의-인덱스-찾기)
        - [`findIndex()` - 배열에서 특정 요소의 인덱스 찾기](#findindex---배열에서-특정-요소의-인덱스-찾기)
        - [`find()` - 배열에서 특정 요소 찾기](#find---배열에서-특정-요소-찾기)
        - [`filter()` - 배열에서 특정 조건을 만족하는 요소들로 새로운 배열 생성](#filter---배열에서-특정-조건을-만족하는-요소들로-새로운-배열-생성)
  - [Section11. Javascript(Vanilla JS) 중급](#section11-javascriptvanilla-js-중급)
    - [삼항 연산자](#삼항-연산자)
    - [함수의 기본 인자(파라미터) 값 설정 - 디폴트값 설정](#함수의-기본-인자파라미터-값-설정---디폴트값-설정)
    - [구조 분해 할당(비구조화 할당) 문법](#구조-분해-할당비구조화-할당-문법)
    - [배열 분해 할당](#배열-분해-할당)
    - [유용한 구조 분해 할당 문법 활용 팁](#유용한-구조-분해-할당-문법-활용-팁)
      - [변수값 교환](#변수값-교환)
      - [함수 리턴 시 여러 데이터 넘겨주기](#함수-리턴-시-여러-데이터-넘겨주기)
      - [문자열 분리해서 각각의 변수에 대입](#문자열-분리해서-각각의-변수에-대입)
    - [Rest 파라미터](#rest-파라미터)
    - [Spread 연산자](#spread-연산자)
  
<hr>

## Section9. Javascript(Vanilla JS) 기본 지식과 변수/조건문
> - 📕PDF
>     - [x] [17_js_start](https://drive.google.com/file/d/1jGURRlNtfe6Cl_WjrvUsClppfyKtggpW/view?usp=sharing "17_js_start.pdf")
>     - [x] [18_js_basic](https://drive.google.com/file/d/18aN1dtpsAF6EohbSIL0wABJDd2urWIU3/view?usp=sharing "18_js_basic.pdf")
<!-- > - 🧪실습파일
>  - [x] [css_inheritance](https://codesandbox.io/p/sandbox/cssinheritance-uhyym?file=%2Fsrc%2Findex.js%3A1%2C1-2%2C1 "Go to url") -->

### Javascript 기본
#### 변수
```javascript
// 변수 선언
let a = 1; // 변수 선언
const b = 2; // 상수 선언
var c = 3; // 전역 스코프
```
> - `let` : 두번 이상 선언 불가능, 재할당 가능

#### 데이터 타입
##### Number
- 정수/부동소숫점을 통째로 `Number` 데이터 타입으로 처리


##### Boolean
- `true` 또는 `false`로 표현

```javascript
let isTrue = true;
let isFalse = false;
```

##### null과 undefined
- `null` : 의도적으로 비어있음을 표현
- `undefined` : 변수가 선언되었지만 값이 할당되지 않음
- <u>null과 undefined</u> 는 **다른 데이터 타입으로 취급**됨

```javascript
let a = null; // 의도적으로 비어있음
let b; // 값이 할당되지 않음

console.log(typeof a, a); // object null
console.log(typeof b); // undefined
```

##### object
- 객체 타입을 나타내는 데이터 타입

##### Symbol
- ES6에서 추가된 데이터 타입으로, 고유한 식별자를 생성하는데 사용
- 주로 객체의 프로퍼티 키로 사용됨

```javascript
let sym1 = Symbol('description');
let sym2 = Symbol('description');
console.log(sym1 === sym2); // false
```

> == : 값만 비교
> === : 값과 타입 모두 비교

##### 데이터 타입 변환
1. `Number()` : 숫자형으로 변환
2. `parseInt()` : 정수형으로 변환
3. `parseFloat()` : 부동소수점형으로 변환
4. `String()` : 문자열로 변환
5. `Boolean()` : 불리언형으로 변환

##### 주요 연산자
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

#### 조건문
##### if문
```javascript
if (조건) {
    // 조건이 true일 때 실행할 코드
} else if (조건) {
    // 조건이 true일 때 실행할 코드
} else {
    // 모든 조건이 false일 때 실행할 코드
}
```

##### switch/case 문
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

#### 함수
##### 함수 선언

```javascript
function 함수이름(매개변수) {
    // 함수 내용
    return 반환값;
}
```

##### ES6 화살표 함수<sup>Arrow function</sup>
```javascript
let func = (매개변수) => expression;
```

<hr>

## Section10. Javascript(Vanilla JS) 함수와 객체
### 객체 선언기법 이해
> - 📕PDF
>  - [x] [19_js_basic_object](https://drive.google.com/file/d/1lZ_UwbNSmmqMojCcFnu6jO7K7Xj28TMb/view?usp=sharing "19_js_basic_object.pdf")

#### 객체
- 객체 생성방법 
    - 객체 리터럴
    - new Object()로 생성
    - 생성자 함수로 생성하는 방식
- 객체이름 선언시에는 보통 `const` 사용

##### 객체 생성 방법

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

##### 객체 리터럴 사용시 주의사항

1. `this` 키워드
- 객체 내부에서 자기 자신을 가리키는 키워드

2. arrow function 안에서 `this`는 사용 불가

##### getter / setter
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

#### ⭐️ES6 클래스

##### 정의
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

##### 상속

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

##### `hasOwnProperty()` 사용법
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

## Section11. Javascript(Vanilla JS) 반복문/배열

### for문
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

#### 배열과 for문
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

#### 객체와 for문
##### `for ..in` : 객체의 키를 반복
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

##### 객체(딕셔너리)의 키와 값을 반복
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

### while문
```javascript
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
```

### break와 continue
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

### javascript 배열
> - 📕PDF
>  - [x] [20_js_array.pdf](https://drive.google.com/file/d/1O2pKEpFRg3psbb80xuqn_C4vb4ouVFwo/view?usp=sharing "20_js_array.pdf")

#### CRUD
##### 배열 생성(CREATE)
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

##### 배열 읽기(READ)
```javascript 
consolg.log(arr[0], arr[arr.length - 1]);
```

##### 배열 수정(UPDATE)
```javascript   
arr[0] = 100;
```

##### 배열 삭제(DELETE)
- `splice(삭제할 인덱스, 삭제할 개수)`
```javascript
const data = [1, 2, 3, "kang", "hwan"];
console.log(data);  // [ 1, 2, 3, 'kang', 'hwan' ]
data.splice(3, 100);
console.log(data);  // [ 1, 2, 3 ]
```

#### 다양한 배열 관련 기능(함수)
##### `push()` - 배열의 끝에 요소 추가  
```javascript
const arr = [1, 2, 3];
arr.push(4); // [1, 2, 3, 4]
```
##### `pop()` - 끝의 아이템을 반환 후 배열에서 삭제
```javascript
const arr = [1, 2, 3];
arr.pop(); // [1, 2]
```

##### `shift()` - 배열의 첫번째 아이템을 반환 후 삭제
```javascript
const arr = [1, 2, 3];
arr.shift(); // [2, 3]
```

##### `concat()` - 배열 합치기
```javascript 
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2); // [1, 2, 3, 4, 5, 6]
```

##### `join(item)` - 배열을 문자열로 변환
```javascript
const arr = [1, 2, 3];
const str = arr.join(", "); // "1, 2, 3"
```

##### `reverse()` - 배열의 순서 뒤집기
```javascript
const arr = [1, 2, 3];
arr.reverse(); // [3, 2, 1]
```

##### `slice(start, end)` - 배열의 일부를 잘라내기
```javascript
const arr = [1, 2, 3, 4, 5];
arr.slice(1, 3); // [2, 3]
```

##### `forEach()` - 배열의 각 요소에 대해 함수를 실행
```javascript   
const arr = ['first', 'second', 'third'];
arr.forEach((item, index) => {
    console.log(item, index);
});
// first 0 second 1 third 2 
```

##### `map()` - 배열의 각 요소에 대해 함수를 실행하고 새로운 배열 반환
```javascript
const arr = [1, 2, 3];
const newArr = arr.map(item => item * 2);

console.log(newArr); // [2, 4, 6]
```

##### `indexOf()` - 배열에서 특정 요소의 인덱스 찾기
```javascript
const arr = ['first', 'second', 'third'];   
arr.indexOf('second'); // 1
```

##### `findIndex()` - 배열에서 특정 요소의 인덱스 찾기
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

##### `find()` - 배열에서 특정 요소 찾기
```javascript
console.log(myArray.find((item) => item.name === "John")); // { name: 'John', age: 25 }
```

##### `filter()` - 배열에서 특정 조건을 만족하는 요소들로 새로운 배열 생성
```javascript
const arr = [1, 2, 3, 4, 5];
let odd = arr.filter((item) => item % 2 === 1); // [1, 3, 5]
let even = arr.filter((item) => item % 2 === 0); // [2, 4]
```

<hr>

## Section11. Javascript(Vanilla JS) 중급
> - 📕PDF
>  - [x] [21_js_plus.pdf](https://drive.google.com/file/d/13TjITewVzKFLAPAtr0UwmPHF8uuW46bg/view?usp=drive_link "21_js_plus.pdf")

### 삼항 연산자
- 문법 : `condition ? true : false`

```javascript
let a = 1;
let b = 2;
let result = a > b ? "a가 b보다 큽니다." : "b가 a보다 큽니다.";
console.log(result); // b가 a보다 큽니다.
```

### 함수의 기본 인자(파라미터) 값 설정 - 디폴트값 설정
- ES6에서 추가된 기능으로, 함수의 인자에 기본값을 설정할 수 있음

```javascript
function add(a, b = 0) {
    return a + b;
}
console.log(add(1)); // 1
console.log(add(1, 2)); // 3
```

### 구조 분해 할당(비구조화 할당) 문법

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

### 배열 분해 할당

```javascript       
const arr = [1, 2, 3, 4, 5];
let [first, second, ...rest] = arr;
console.log(first, second, rest); // Output: 1 2 [3, 4, 5]  
```

### 유용한 구조 분해 할당 문법 활용 팁
#### 변수값 교환
```javascript   
[a, b] = [b, a];
```

#### 함수 리턴 시 여러 데이터 넘겨주기
```javascript
function getData() {
    return [1, 2, 3];
}
let [a, b, c] = getData();
```

#### 문자열 분리해서 각각의 변수에 대입
```javascript
const str = "Cha KangHwan";
const [firstName, lastName] = str.split(" ");   
```

### Rest 파라미터
- Rest 파라미터는 함수의 인자 개수가 정해지지 않았을 때 사용
- `...`을 사용하여 나머지 인자를 배열로 받을 수 있음

```javascript
function add(...rest) {
    ...
}
```

### Spread 연산자
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



[🔝 돌아가기](#table-of-contents)