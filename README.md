# youtube API를 이용한 여행 사이트
- 나는 여행을 좋아하기 때문에 여행 유튜버를 많이 봅니다.

## 작업 순서

1. node.js 설치 / 버전 확인 (설치 확인)
2. 기본 적인 작업 폴더 설정 -- npx create-react-app .


## 필요한 라이브러리 설치
- react를 설치 `npm create-react-app 폴더이름` : 폴더 생략시 '.'으로 대체
- react-router-dom 설치 `npm install react-router-dom` : 주소 설정 라이브러리
- axios 설치 `npm install axios` : api 라이브러리 설치   
- react icon 설치 : `npm install react-icons` : 리엑트에 필요한 아이콘 
- react-player 설치 : `npm install react-player` : 유튜브 영상 재생   
- sass 설치 : `npm install sass` : css 라이브러리   
- react-helmet-asyne 설치 `npm install react-helmet-async` : Node.js 환경에서 HTTP 헤더를 설정
- swiper 설치 `npm install swiper` : 이미지 슬라이드

## 사용 스택
- node.js 설치

## 프로젝트 실행

`import { BrowserRouter, Route, Routes } from 'react-router-dom'` :   
설치한 라이브러리를 import하여 Home.jsx를 연동함.   
`BrowserRouter` : 클라이언트 측 라우팅   
`Routes ,Route` : 컴포넌트 렌더링   

<br/>

````js
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
  </Routes>
</BrowserRouter>
````

해당 코드를 통해 `Home` 컴포넌트를 설정하였음.      
`/` paht는 사이트의 `main` 혹은 홈화면을 뜻함.


## 트러블 슈팅
-- npx create-react-app . 명령어 실행 시 에러발생 :   
검색 결과 npm 폴더가 자동으로 생성되지 않아 에러가 발생함.   
local folder에서 직접 npm 폴더 생성하여 해결.