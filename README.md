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