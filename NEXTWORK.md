## 완료된 작업

### slideToLoop, loop attribute, realIndex(리팩토링 필요)

- realIndex를 활용하여, slideToLoop가 동작한다.

- slideToLoop는 작동만 보면, slidePrev, slideNext처럼 단순히 translate 스타일을 변경시키는게 아니라 요소 자체의 순서도 바꿔가며 동작한다.

- 하드코딩이 아닌 라이브러리의 api를 제대로 이용할 수 있다면 렌더링에 필요한 요소의 수나 과한 메모리 사용을 줄이고 더 효율적인 코딩이 가능하다.

#### 해법

- Swiper 컴포넌트의 최상위 요소는 직접 클래스를 추가하거나 inline-style을 추가하면 됐기에 수월했다.

- wrapperClass 속성에서 wrapper의 클래스를 지정해줄 수 있었다. 상위 요소는 overflow:hidden 속성을 보유하고 있으므로 최상위에서 높이를 지정하면 pagination이나 navigation 등의 요소를 추가할 경우 반드시 슬라이드 내부의 영역에서 추가되어야 하지만, wrapper에서 지정하게 되면 최상위 요소의 높이는 추가요소가 늘어날때마다 늘어나게 된다.

- loop: index가 바뀔 때마다 wrapper 내부의 슬라이드들의 요소를 바꿔주며 마치 반복처럼 보이게 해준다.

- spaceBetween: 슬라이드간 간격

- slidePerView: wrapper에 보이는 슬라이드 수.

- initialSlide: 초기 인덱스 값.

- module: 슬라이드 외 추가하고 싶은 모듈(기능 혹은 컴포넌트)

- pagination:

  - clickable: 클릭시 슬라이드 인덱스 변경.

  - bulletClass: type이 bullet인 경우, 각 bullet들에 넣어줄 클래스명.
  - bulletActiveClass: 활성화된 index의 클래스.
  - renderBullet: type이 bullet인 경우, 렌더링 될 bullet 요소를 string으로 리턴하는 함수로 지정.(className)을 class에 추가해주어야만 현재 선택된 요소의 클래스가 추가됨.
  - type: 타입지정, custom, fraction, custom 등이 있음.
  - horizontalClass: 수평 방향의 pagination의 컨테이너의 클래스를 지정가능. 하나만 가능.
  - modifierClass: pagination의 컨테이너의 클래스를 지정가능. 하나만 가능. horizontalClass나 verticalClass와 함께 추가된다.

- speed: transition의 지속시간.

##### tailwind.config.ts

```js
import plugin from "tailwindcss/plugin";

export default{
    content:[
            "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme:{
            extend: {
      container: {
        center: true,
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    },
    plugins:[plugin(({addComponents})=>addComponents({
    ".pageWrapper":{
                  position: "relative !important",
          display: "flex",
          "justify-content": "center",
          gap: "0.75rem",
          padding: "2rem 0rem",
          "font-weight": "700",
          "user-select": "none",
    }
}))]
} satisfies config;

// satisfies는 as를 보완하기 위해 추가된 키워드.
```

## 미완료된 작업
