# 경일게임아카데미 홈페이지 클론코딩(일부)

## 학습내용

### html 구조와 분류

html 구조에서 시각적인 구조와 분류적인 구조가 다를 경우, 분류적인 구조를 따르는 편이 좋다.

### position css

relative는 단순히 기준점으로 삼기 위함이 아니라, 퍼센테이지 단위 등 부모의 요소가 필요한 경우 absolute나 sticky에서 해당 속성을 지닌 부모요소를 기준으로 삼게 된다. 즉, relative 속성을 지닌 요소가 absolute나 sticky에 존재하지 않는다면 외부의 요소를 참조할 부모요소로 삼게 되므로 주의해야 한다.

### 반응형 고려

유사 내부 스크롤을 구현하고자 했을때, 높이가 낮은 요소를 움직이도록 만드는 편이 좋다. 길이가 긴 요소를 움직이고자 하면, 화면 크기에 따라 줄이거나 늘려야해 그 작은 결정 하나로 메모리가 쓸데없이 더 필요해진다.

### 방향성 틀림

가로스크롤을 활용할 필요가 없었다. sticky 포지션을 잘 이용했으면 됐는데 잘못된 방향으로 공부했다.

## 가로스크롤

- _주석_: 가로스크롤 관련 내용이 길어졌습니다. 따로 분류합니다.

- 링크: https://codesandbox.io/p/sandbox/framer-motion-horizontal-scroll-by-scrolling-vertically-5crke?file=%2Fsrc%2FSmoothScroll.js%3A8%2C23

### useScroll

- 기본은 전체 스크롤을 기준.
- 옵션으로 **target**, **container**, **axis**, **offset**이 존재한다.

- **target**: 스크롤의 진행상황과 스크롤한 길이가 저장되는 객체를 생성하기 위한 기준점이다. 지정하면 전체 스크롤이 아닌 해당 요소를 기준으로 스크롤과 관련된 값들을 계산한다.

- **container**: 스크롤이 존재하는 위치, 기본은 브라우저지만 내부요소를 지정할 수 있다.(공식문서 확실친 않음)

- **axis**: 기준으로 하는 축, 기본은 **"y"**지만, 가로스크롤을 원한다면 **"x"**로 바꿔주면 된다.

- **offset**: 스크롤의 기준점, 첫번째는 시작지점, 두번째는 끝지점이다. 기본은 **["start start", "end end"]**, 다양하게 텍스트로 표현하지만 기본적으로 0~1까지의 값을 받고 퍼센테이지로 작동한다.

### will-change

최적화 전에 미리 변경될 요소를 알려주는 속성(있으면 좋음, 다시말해 없어도 상관X)

### scrollWidth

요소의 가로스크롤(화면을 벗어난 전체 길이)다. border 길이는 포함되지 않는다.

### useTransform

useTransform(motionValue, motionValue의 기준값의 배열<항상 증가하거나 감소해야 한다>, 실제로 적용되는 값의 배열<기준값과 달리 순서과 관계없다. 실제로 적용되는 값이다>)

### resize-observer-polyfill

6년전 마지막 업데이트된 라이브러리, 현재는 많은 브라우저에서 ResizeObserver 인터페이스를 지원하여 사용할 필요가 없다.(필요없다)

### Resize

### 구조

useLayoutEffect: 렌더링 전에 미리 스크롤 값을 정해야 한다. useEffect는 렌더링 후.

onResize: view값이 변경될 때마다 ghost div가 주는 스크롤 길이를 재조정한다.

scroll-container: 고정된 위치를 자리잡고 있다.

ghost 클래스의 div: 스크롤 높이를 제공.(실제로 스크롤 되는듯이 만듬. 실제 가로스크롤 되는 요소들은 fixed로 포지션이 고정되어 있다.)(필요없음)

scrollYProgress: useScroll에서 제공해주는 속성, y스크롤의 진행정도를 나타냄. 0~1 사이로 이루어진다.

transform: (현재의 진행율, 경계값, [제일 처음의 transform값, 제일 오른쪽()])

physics: 애니메이션 효과

## 가로스크롤(예시참고 직접구현)(personal/horizontalScroll)

### css, html

#### 구조도

<컨테이너(relative)>
<틀(sticky), (overflow-hidden)>
<슬라이더(가로 혹은 세로로 화면을 벗어남)>
<프레임들><\/프레임들>
<\/슬라이더>
<\/틀>
<\/컨테이너>

#### 컨테이너의 위아래 패딩

- sticky로 고정된 세션의 top 속성의 길이[**컨테이너의 top-padding**]
- container 내에서 sticky로 고정시킬 섹션의 높이(height)[**(100vh - 섹션의 높이 - top 속성의 길이) = 컨테이너의 bottom-padding**]
- 컨테이너 위아래에 padding을 주어야 자연스럽게 마치 세로스크롤이 가로스크롤처럼 이동하는 느낌을 줄 수 있다.

### js

- **scrollRef**: 스크롤 길이를 계산하기 위한, 참조할 컨텐츠를 위한 훅.
- **containerRef**: 스크롤 길이를 컨텐츠에 맞추기 위해, height를 변경해야 하는 컨테이너를 참고하는 훅.
- **scrollRange**: 스크롤 길이를 저장하기 위한 상태.(직접 참조는 가능하지만, 그럴 경우 어차피 참조대상이 있는 경우를 매번 확인하는 조건문 필요)
- **viewportW**: 화면의 길이를 저장하기 위한 상태.(슬라이더 위치 조정에 필요)

- **scrollYProgress**: 0~1 사이의 값을 가짐.(타겟 속성을 containerRef로 함으로써 해당 구역 내에서만 가로스크롤처럼 동작하게 만들 수 있다)
- **첫번째 useLayoutEffect**: 렌더링이 끝나고 참조 훅이 참조를 마쳤을 때, 전체 화면 길이를 저장함. 이 작업은 화면이 그려지기 전에 끝나야하므로, useLayoutEffect 활용. 다만 useEffect로도 지장없이 돌아감.
- **두번째 useLayoutEffect**: 렌더링이 끝나고 가상 dom이 그려진 타이밍, scrollbar의 길이 때문에 window.innerWidth 대신 document.documentElement.clientWidth 활용.

- **transform**: 부드러운 애니메이션을 위해 동적으로 변하는 motionValue 객체를 제공해주는 framer-motion의 훅.(컨테이너의 border의 길이는 scrollWidth에 포함되어 있지 않으므로 직접 추가해주자.)
- **physics**: 애니메이션을 위한 객체, 지나친 관성을 지닌 애니메이션은 보여주고 싶은 컨텐츠의 요소를 벗어나게 만든다.

## swiper

https://swiperjs.com/react#useswiper

## 간단한 이벤트 설명

e.currentTarget은 이벤트를 트리거한 요소,
e.target은 이벤트가 발생한 요소를 가리킨다.

https://www.linkedin.com/pulse/lightning-web-components-exploring-contrast-between-gaurav-gupta

## 위에서 아래로 스크롤할 경우만 애니메이션
