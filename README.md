<!-- *NOTE* for write markdown -->

<!-- 
  ## => seciton
  <del>### => chapter in section </del>
  ### => contents in section(chapter)

  🚫#### 헤더는 사용하지 않음 -> 1., 2., 와 같은 리스트로 사용

  📌 섹션으로 구분하며 챕터는 구분하지 않음
  📌 단, 섹션의 하위에 사용되는 학습자료를 적어둠
    ## Section2. 풀스택 큰그림 이해하기
    > [1_understand_fullstack.ipynb](00_MATERIALS/1_understand_fullstack.ipynb "1_understand_fullstack.ipynb")
  📌 학습자료는 00_MATERIALS 폴더에 저장
  📌 이미지는 ref_images 폴더에 저장
  📌 강의 듣는 도중 이해가 되지 않는 기술에 대해서는 포스트 작성
  📌 듣는도중 의견이나 아이디어가 있으면 아래와 같은 comment 작성
    💡 (의견이나 생각) - (강의제목 시간)
    💡 frontend / backend 의 설명이 잘 되어 있음 - 프론트엔드와 백엔드 기본 구성 06:30
★☆☆ : Importance
-->

# Front-End

## Table of Contents
- [Front-End](#front-end)
  - [Table of Contents](#table-of-contents)
  - [Section1. 강의 준비](#section1-강의-준비)
    - [설치](#설치)
  - [Section2. 모던 웹 기본 기술 이해](#section2-모던-웹-기본-기술-이해)
    - [웹 기본 기술 이해와 정리](#웹-기본-기술-이해와-정리)
    - [HTML](#html)
      - [⭐️ 주요 META NAME(가장 일반적으로 많이 사용)](#️-주요-meta-name가장-일반적으로-많이-사용)
      - [호환성 관련 태그](#호환성-관련-태그)
      - [반응형 웹 관련 태그](#반응형-웹-관련-태그)
      - [LINK](#link)
      - [STYLE](#style)
      - [주요 body 내의 태그](#주요-body-내의-태그)
    
---

## Section1. 강의 준비
### 설치
> - 📕PDF
>     - [x] [00_Preparation.pdf](https://drive.google.com/file/d/1TJ0KkEzyqJiwDax4bvAxFS34ar49OVJQ/view?usp=drive_link "00_Preparation.pdf")

--- 

## Section2. 모던 웹 기본 기술 이해

> - 📁Folder
>     - [x] [01_head](Materials/01_head "01_head")
> - 📕PDF
>     - [x] [01_html정리.pdf](https://drive.google.com/file/d/1lXknhzfqBIp-l_rE3z46yaC3dlEURHw8/view?usp=drive_link "01_html정리.pdf")


### 웹 기본 기술 이해와 정리
1. HTML : Hyper Text Markup Language의 약자로 웹사이트를 만들기 위한 **기본적인 언어**
    <p style="text-align:;">
        <img width="400" height="" src="https://velog.velcdn.com/images/cow2533/post/991619f2-3d10-4d50-bf53-5b2d21186dfd/image.png">
    </p>

    - `<!DOCTYPE html>`: HTML5라는 신조어로 **문서를 선언**하는 태그 
    - `<html>...</html>`: HTML 문서의 **시작과 끝을 의미**하며 모든 HTML 태그들은 `<html>`태그 안쪽으로 입력
    - `<head>...</head>`: 웹사이트의 간단한 **요약정보를 담는 영역**이고 웹사이트에서 노출되지 않는 정보 
    - `<body>...</body>`: 웹사이트에서 눈에 보이는 **정보를 담는 영역**으로, 이미지나 텍스트 처럼 출력되는 정보
    - `<meta charset="UTF-8>`: character setting의 약자를 나타내는 문자코드로, 모든 문자를 웹 브라우저에서 **깨짐없이 표시**하겠다는 의미 
    - `<tittle>...</tittle>`: 웹사이트 탭에 나타나는 **제목을 적는 태그**

2. CSS 언어 
    - Cascading Style Sheets의 약자로 HTML 문서의 **스타일을 지정**하는 언어
    <p style="text-align:;">
        <img width="500" height="" src="MD_image/css-basic.png">
    </p>

    - CSS 언어 적용하기
        1. 적용할 태그에 style 속성으로 넣기(해당 태그에만 적용)
        2. HTML 문서 `<head>`에 `<style>...</style>` 태그로 넣기(전체 문서에 적용)
        3. HTML 문서 `<head>`안에 CSS 파일로 링크하기(전체 문서에 적용)
            **<u>Example</u>**
            ```html
            <head>
                <link rel="stylesheet" href="style.css">
            </head>
            ```

3. javascript - ES6
    - 웹사이트에 **동적인 기능을 추가**하는 언어

### HTML
> - 📕PDF
>     - [x] [01_html정리.pdf](https://drive.google.com/file/d/1lXknhzfqBIp-l_rE3z46yaC3dlEURHw8/view?usp=drive_link "01_html정리.pdf")
> - 🧪실슬파일
>     - [x] [html](https://codesandbox.io/p/sandbox/html-jgdr7 "Go to url")
>     - [x] [html_tag](https://codesandbox.io/p/sandbox/htmltag-ueveh?file=%2Fsrc%2Findex.js%3A1%2C1-2%2C1 "Go to url")


#### ⭐️ 주요 META NAME(가장 일반적으로 많이 사용)


```html
<meta name="desription" content="웹사이트 설명">  
<meta name="keywords" content="키워드1, 키워드2, 키워드3">
<meta name="author" content="작성자">
```

- `desription`: 웹사이트 설명
- `keywords`: 해당 페이지가 어떤 키워드로 검색되는지
- `author`: 웹사이트 작성자

#### 호환성 관련 태그 
```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```
- 인터넷 익스플로러(ID)에서 최신 표준 모드로 렌더린 되도록 하는 설정

#### 반응형 웹 관련 태그
```html
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" >
```
- viewport: 웹사이트가 보여지는 화면의 크기를 설정하는 태그

|     속성      | 설명                                         | 주요값                                                        |
| :-----------: | -------------------------------------------- | ------------------------------------------------------------- |
|     width     | 초기 뷰포트 너비 설정                        | **device-width** 또는 양의 정수(디바이스 너비 또는 특정 너비) |
| user-scalable | 사용자가 뷰포트 크기를 조정할 수 있는지 여부 | **yes** 또는 **no**(조정 가능 또는 불가능)                    |
| initial-scale | 디바이스 너비와 뷰포트 너비 비율 설정        | 0.0과 10.0사이 수(주로 1.0을 많이 사용함)                     |
| maximum-scale | 최대 확대/축소 비율 설정                     | 0.0과 10.0사이 수(주로 1.0을 많이 사용함)                     |
| minimum-scale | 최소 확대/축소 비율 설정                     | 0.0과 10.0사이 수(주로 1.0을 많이 사용함)                     |

#### LINK
```html
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="favicon.ico">
```

| 속성  | 설명                                  | 주요값                                       |
| :---: | ------------------------------------- | -------------------------------------------- |
|  rel  | html 문서와 외부 데이터와의 관계 표시 | **stylesheet**(스타일시트), **icon**(아이콘) |
| href  | 외부 데이터의 경로                    | 파일 경로(상대 경로 또는 절대 경로로 설정)   |

#### STYLE
```html
<style>
    body {
        background-color: #f0f0f0;
        color: #333;
        font-family: Arial, sans-serif;
    }
```

#### 주요 body 내의 태그

1. `<h1> ~ <h6>`: 제목 태그로, `<h1>`이 가장 큰 제목
    > 현업에서는 웹브라우저 호환성을 위해, 태그에 표현 서식이 들어 있는 경우 모두 삭제하고 CSS style을 별도로 적용

2. `<p>`: 문단 태그로, 문단을 구분하는 태그

3. `<a>`: 링크 태그로, 다른 페이지로 이동하는 링크를 생성하는 태그
    ```html
    <a href="https://www.naver.com" target="_blank">네이버</a>
    ```

    - `href`: 링크 주소
    - `target`: 링크를 클릭했을 때 새 창으로 열지 여부
        - `_blank`: 새 창으로 열기
        - `_self`: 현재 창에서 열기(기본값)
        - `_parent`: 부모 프레임에서 열기
        - `_top`: 전체 창에서 열기


4. `<ol>, <ul>, <li>`: 리스트 태그로, 순서가 있는 리스트와 순서가 없는 리스트를 생성하는 태그
    ```html
    <ol>
        <li>1번</li>
        <li>2번</li>
        <li>3번</li>
    </ol>
    <ul>
        <li>1번</li>
        <li>2번</li>
        <li>3번</li>
    </ul>
    ```

    - `<ol>`: 순서가 있는 리스트
    - `<ul>`: 순서가 없는 리스트

5. `<img>`: 이미지 태그로, 이미지를 삽입하는 태그
    ```html
    <img src="https://example.com/image.jpg" alt="이미지 설명" width="300" height="200">
    ```
    | 속성  | 설명        | 주요값                                |
    | :---: | ----------- | ------------------------------------- |
    |  src  | 이미지 경로 | 상대경로 또는 절대경로로 설정         |
    |  alt  | 이미지 설명 | 이미지가 로드되지 않을 때 대체 텍스트 |

    > alt는 웹접근성을 높이는 필수 속성처럼 다루는 것이 좋음(구글 SEO 문서에서도 강조)

6. `<div>`: 블록 레벨 태그로, 구역을 나누는 태그
    - division의 약자로, html 문서의 특정 부분을 지정하는데 사용(화면에 표시가 달라지는 부분은 아님)
    - `div` 태그는 CS 또는 javascript와 함께 사용하여 레이아웃을 구성하는 데 많이 사용됨
    ```html
    <div>
        <h1>제목</h1>
        <p>내용</p>
    </div>
    ```

7. `<table>`: 테이블 태그로, 표를 생성하는 태그
    ```html
    <table>
        <thead>
            <tr>
                <th>제목1</th>
                <th>제목2</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>내용1</td>
                <td>내용2</td>
            </tr>
            <tr>
                <td>내용3</td>
                <td>내용4</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>합계1</td>
                <td>합계2</td>
            </tr>
        </tfoot>
    </table>
    ```

    - `<thead>`: 테이블의 제목 부분
    - `<th>`: 테이블의 제목 셀
    - `<tbody>`: 테이블의 본문 부분
    - `<tr>`: 테이블의 행(row)
    - `<td>`: 테이블의 데이터 셀
    - `<tfoot>`: 테이블의 마지막 행

    <br>

    > thead나 tfoot은 생략 가능하거나 한번만 나와야하며, tfoot은 thead보다 뒤에 위치
    > tr과 td로만 구성해도 문제없음

8. `<form>`: 폼 태그로, 사용자 입력을 받는 폼을 생성하는 태그, `<input>` 태그와 함께 사용
    |  속성  | 설명                     | 주요값                                                                             |
    | :----: | ------------------------ | ---------------------------------------------------------------------------------- |
    | action | 폼 제출 시 이동할 URL    | URL                                                                                |
    | method | 폼 제출 방식             | **GET** 또는 **POST**                                                              |
    | target | 폼 제출 시 이동할 프레임 | **_blank**(새 창), **_self**(현재 창), **_parent**(부모 프레임), **_top**(전체 창) |


