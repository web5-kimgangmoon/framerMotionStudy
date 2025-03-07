# 경일게임아카데미 홈페이지 클론코딩(일부)

## 학습내용

### html 구조와 분류

html 구조에서 시각적인 구조와 분류적인 구조가 다를 경우, 분류적인 구조를 따르는 편이 좋다.

## 가로스크롤

- _주석_: 가로스크롤 관련 내용이 길어졌습니다. 따로 분류합니다.

- 링크: https://codesandbox.io/p/sandbox/framer-motion-horizontal-scroll-by-scrolling-vertically-5crke?file=%2Fsrc%2FSmoothScroll.js%3A8%2C23

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
