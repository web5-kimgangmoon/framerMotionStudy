### slideToLoop, loop attribute, realIndex(리팩토링 필요)

- realIndex를 활용하여, slideToLoop가 동작한다.

- slideToLoop는 작동만 보면, slidePrev, slideNext처럼 단순히 translate 스타일을 변경시키는게 아니라 요소 자체의 순서도 바꿔가며 동작한다.

- 하드코딩이 아닌 라이브러리의 api를 제대로 이용할 수 있다면 렌더링에 필요한 요소의 수나 과한 메모리 사용을 줄이고 더 효율적인 코딩이 가능하다.
