# 원티드 프리온보딩 인턴십 프론트엔드 미션 - Week 4(final)

## 🔨 이름: 이재호

## 🔨 프로젝트 배포 주소

[프로젝트 보러가기](https://wanted-internship-w4.vercel.app/)

## 🔨 프로젝트 로컬 실행 방법

### 1. Git clone 및 폴더 이동

[원티드 프리온보딩 인턴십 프론트엔드 미션 - Week 4(final)](https://github.com/JaydenLee1116/wanted-internship-w4)로 이동하여 `clone` 합니다.

```shell
# Code - HTTPS clone 예시
git clone https://github.com/JaydenLee1116/wanted-internship-w4.git
# 폴더 이동
cd wanted-internship-w4
```

### 2. 패키지 설치 및 실행

```shell
# 패키지 설치
npm install
# 실행
npm start
```

> 🔑 참고: 로컬에서 개발 모드로 실행 시, MSW를 사용하여 `http://localhost:8080`에서 API를 제공합니다. 따로 서버를 실행할 필요없이 위의 과정대로 `npm start`를 실행하시면 됩니다.

## 🔨 프로젝트 데모 및 주요 기능

<img src='./public/wanted-internship-w4-jayden-demo.gif' width='80%'>

- 로딩 후 주어진 JSON 데이터에 대한 차트를 볼 수 있습니다.
- 각 데이터의 ID(구 이름) 버튼을 클릭하여 그 구역에 해당하는 데이터를 강조해서 볼 수 있습니다.
- 각 데이터에 마우스 오버 시, 해당 데이터의 상세 수치를 볼 수 있습니다.
- 각 데이터의 막대 그래프를 클릭하여 그 구역에 해당하는 데이터를 강조해서 볼 수 있습니다.

## 🔨 프로젝트 구조 및 기술 스택

### 1. 폴더 구조

주요 폴더 구조는 다음과 같습니다.

```
📦
├─ package.json
├─ public
├─ cypress
└─ src
   ├─ index.tsx
   ├─ index.css
   ├─ App.tsx
   ├─ api
   ├─ components
   │  ├─ Chart
   │  └─ common
   │     └─ Chips
   ├─ constants
   ├─ mocks
   ├─ pages
   │  ├─ ChartPage
   │  └─ ErrorPage
   ├─ routes
   ├─ services
   │  └─ useGetData
   ├─ styles
   ├─ types
   └─ utils
```

### 2. 사용한 라이브러리

- Front: TypeScript, React, tanstack-query, styled-components, msw, Recharts
- Test: Jest, React Testing Library, Cypress
- Etc: Prettier, ESLint, husky, lint-staged
- Back: Node.js, Express => [백엔드 저장소](https://github.com/JaydenLee1116/wanted-internship-w4-server)

## 🔨 프로젝트 구현 고민 사항

### 1. 응답받은 데이터의 구조가 다른 경우, 재활용성을 높이기 위해 유틸 함수를 만들어서 데이터를 가공하였습니다.

미션에서 주어진 데이터의 경우, 객체의 배열 형태가 아닌 이중 객체 구조로만 되어있어 배열의 메서드를 사용하기가 어려웠습니다. 데이터를 보존하면서 배열 메서드를 사용하기 위해 데이터의 구조를 변경하는 유틸 함수를 만들어서 재활용성을 높였습니다.

- [getArrayWithKeyFromObject.ts](https://github.com/JaydenLee1116/wanted-internship-w4/blob/main/src/utils/getArrayWithKeyFromObject.ts)
- [getArrayWithSplittedValue.ts](https://github.com/JaydenLee1116/wanted-internship-w4/blob/main/src/utils/getArrayWithSplittedValue.ts)
- [getDeduplicatedArray.ts](https://github.com/JaydenLee1116/wanted-internship-w4/blob/main/src/utils/getDeduplicatedArray.ts)

### 2. 작은 컴포넌트의 단위 테스트부터 App 단위의 E2E 테스트 코드를 작성하여 개발의 안정성을 높일 수 있었습니다.

Recharts와 같은 외부 라이브러리에 대한 테스팅과 storybook이 아닌 스타일에 대한 테스팅을 어떻게 해야할지 고민이 많았습니다.

- style에 대한 테스팅의 경우, cypress를 사용하여 유저의 액션에 따른 style 변화를 테스팅했습니다.
  - [spec.cy.ts](https://github.com/JaydenLee1116/wanted-internship-w4/blob/main/cypress/e2e/spec.cy.ts)
- Recharts 라이브러리를 사용한 Chart 컴포넌트의 경우, 해당 컴포넌트의 렌더링 여부를 테스팅했습니다.
  - [Chart.test.ts](https://github.com/JaydenLee1116/wanted-internship-w4/blob/main/src/components/Chart/Chart.test.tsx)
- 작은 단위의 컴포넌트 또한 해당 컴포넌트의 렌더링 여부, 기능 동작 여부에 대한 테스트 코드를 작성했습니다.
  - [Chips.test.ts](https://github.com/JaydenLee1116/wanted-internship-w4/blob/main/src/components/common/Chips/Chips.test.tsx)

### 3. MSW를 사용하여 로컬에서 개발 모드로 실행 시, 서버를 따로 실행하지 않고도 API를 제공받아 개발을 진행할 수 있었습니다.

MSW를 사용하여 로컬에서 개발 모드로 실행 시, 서버를 따로 실행하지 않고도 API를 제공받아 개발을 진행할 수 있었습니다.

> (추가) 이후 간단한 express 서버를 배포하여 실제 서버에서도 API를 제공받을 수 있도록 하였습니다.

### 4. Recharts를 사용하여 차트를 구현하였습니다.

JS 진영에서 대표적인 차트 라이브러리인 `d3`와 `chart.js` 그리고 컴포넌트 형태로 차트를 그릴 수 있는 `Recharts`, 3가지를 고민하였습니다. 최종적으로 `Recharts`를 사용하게 된 이유는 다음과 같습니다.

1. `d3`와 `chart.js`는 라이브러리의 크기가 크고, `Recharts`에 비해 커스터마이징이 어려웠습니다.
2. `Recharts`는 컴포넌트 형태로 제공되어, 리액트와의 호환성이 좋았습니다.
3. [npm trends 비교](https://npmtrends.com/chart.js-vs-d3-vs-recharts)에서 `Recharts`가 가장 낮은 다운로드 수를 보이지만, React에서만 사용할 수 있다는 점을 감안했을 때 충분히 커뮤니티가 활성화되어있을 것이라 판단하였습니다.

`Chart` 컴포넌트를 따로 두고 차트와 관련된 렌더링은 `Chart` 컴포넌트에서 담당하도록 하였습니다.

- [Chart/index.ts](https://github.com/JaydenLee1116/wanted-internship-w4/blob/main/src/components/Chart/index.tsx)

## 🔨 프로젝트 회고

아쉬운 점부터 회고해보자면 유틸함수 구현 시 reduce로만 구현하지 못한 점, Chart 컴포넌트에 대한 테스팅 진행 시 렌더링 유무에서 나아가 유저 액션에 대한 테스트를 진행하지 못한 점, 그리고 d3와 같이 좀더 커스터마이징이 가능한 라이브러리를 사용하지 못한 점 등이 아쉬웠던 것 같습니다.

하지만 작은 유틸함수로 데이터 구조를 변경하는 과정에서 데이터의 불변성을 유지하면서 데이터를 가공하는 방법을 고민할 수 있었고 가장 중점을 뒀었던 테스트 코드를 다양하게 작성해보면서 테스트 코드에 대한 이해도를 높일 수 있었습니다. 마지막으로, 이번 미션을 통해 `Recharts`와 같은 라이브러리를 사용하면서 그 안에서 조금 더 커스터마이징하게 차트를 그릴 수 있는 방법을 고민해볼 수 있었습니다.

감사합니다. 🥳
