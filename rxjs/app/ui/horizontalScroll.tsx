import React, { RefObject, useRef } from "react";
import { useInView } from "framer-motion";
import clsx from "clsx";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import calcBoundaryMove from "../(lib)/calcBoundaryMove";

const SmoothScroll = () => {
  const containerRef = useRef<null | HTMLDivElement>(null);
  const bottomScrollRef = useRef<null | HTMLElement>(null);

  const lengthRulerRef = useRef<null | HTMLDivElement>(null);
  const isBottomView = useInView(bottomScrollRef);

  return (
    <div
      className={clsx(
        "pt-[5rem] pb-[10rem] transition-colors",
        isBottomView ? "bg-indigo-900" : "bg-purple-900"
      )}
    >
      <div
        className={clsx(
          " transition-colors flex justify-between relative",
          isBottomView ? "bg-indigo-900" : "bg-purple-900"
        )}
        ref={containerRef}
      >
        <Left_section
          isBottomView={isBottomView}
          containerRef={containerRef}
          bottomScrollRef={bottomScrollRef}
          lengthRulerRef={lengthRulerRef}
        />
        <Right_section bottomScrollRef={bottomScrollRef} />
      </div>

      <div className={clsx("ghost", "w-[5rem] h-0")} ref={lengthRulerRef} />
    </div>
  );
};

const Left_section = ({
  isBottomView,
  containerRef,
  bottomScrollRef,
  lengthRulerRef,
}: {
  isBottomView: boolean;
  containerRef: RefObject<HTMLElement | null>;
  bottomScrollRef: RefObject<HTMLElement | null>;
  lengthRulerRef: RefObject<HTMLDivElement | null>;
}) => {
  return (
    <section
      className={clsx(
        "sticky top-[5rem] left-0 transition-colors h-max",
        isBottomView ? "bg-indigo-900" : "bg-purple-900"
      )}
    >
      <div className="relative flex h-[48rem] pt-[6rem] pb-[2.5rem] text-white">
        <div className="flex h-full flex-col">
          <button
            className={clsx(
              "block bg-purple-700 font-bold shadow px-3 grow",
              isBottomView && "opacity-75"
            )}
            style={{ writingMode: "vertical-lr" }}
            onClick={() => {
              window.scrollTo({
                top:
                  containerRef.current!.offsetTop -
                  lengthRulerRef.current!.scrollWidth,
                behavior: "smooth",
              });
            }}
          >
            게 임 기 획
          </button>
          <button
            className={clsx(
              "block bg-indigo-700 font-bold shadow px-3 grow",
              isBottomView || "opacity-75"
            )}
            style={{ writingMode: "vertical-lr" }}
            onClick={() => {
              window.scrollTo({
                top:
                  containerRef.current!.offsetTop +
                  bottomScrollRef.current!.offsetTop,
                behavior: "smooth",
              });
            }}
          >
            게 임 프 로 그 래 밍
          </button>
        </div>
        <div className="pl-60">
          <h1 className="font-bold text-4xl leading-[1.6] pb-20">
            실전 커리큘럼부터
            <br />
            나를 위한 맞춤형 관리까지
            <br />
            모든 준비가 되어있습니다.
          </h1>
          <h2 className="font-bold text-2xl pb-10">
            {isBottomView
              ? "게임 프로그래밍은 뭘 배우나요?"
              : "게임 기획자는 뭘 배우나요?"}
          </h2>
          <Left_section_scrollBottom isBottomView={isBottomView} />
          <Left_section_scrollTop isBottomView={isBottomView} />
        </div>
      </div>
    </section>
  );
};

const Left_section_scrollTop = ({
  isBottomView,
}: {
  isBottomView: boolean;
}) => {
  const slide = useRef<null | SwiperRef>(null);
  return (
    <section hidden={isBottomView}>
      <div>
        <button
          className="p-3 bg-blue-300"
          onClick={() => {
            const boundNum = calcBoundaryMove(
              slide.current!.swiper.activeIndex,
              0,
              5
            );
            const current = slide.current!.swiper.activeIndex;
            if (boundNum !== -1) {
              slide.current!.swiper.slideTo(
                boundNum,
                Math.abs(boundNum - current) * 100
              );
              boundNum === 0
                ? slide.current!.swiper.translateTo(-0.2, 100, true, true)
                : slide.current!.swiper.translateTo(1.2, 100, true, true);

              // slide.current!.swiper.slideTo(
              //   0,
              //   Math.abs(boundNum - current) * 100
              // );
            } else {
              slide.current!.swiper.slideTo(0, Math.abs(0 - current) * 100);
            }
          }}
        >
          RPG
        </button>
        <button
          className="p-3 bg-blue-300"
          onClick={() => {
            console.log(slide.current!.swiper.activeIndex);
            console.log(slide.current!.swiper.slides.length);
            slide.current!.swiper.slideTo(1, 1000);
          }}
        >
          슈퍼마리오
        </button>
        <button
          className="p-3 bg-blue-300"
          onClick={() => slide.current!.swiper.slideTo(2, 1000)}
        >
          세븐나이츠2
        </button>
        <button
          className="p-3 bg-blue-300"
          onClick={() => slide.current!.swiper.slideTo(3, 1000)}
        >
          용과같이8
        </button>
        <button
          className="p-3 bg-blue-300"
          onClick={() => slide.current!.swiper.slideTo(4, 1000)}
        >
          다크소울3
        </button>
        <button
          className="p-3 bg-blue-300"
          onClick={() => slide.current!.swiper.slideTo(5, 1000)}
        >
          오딘
        </button>
      </div>
      <Swiper
        style={{ width: 486, height: 250 }}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        ref={slide}
      >
        <SwiperSlide className="bg-red-900">slide1</SwiperSlide>
        <SwiperSlide className="bg-red-800">slide2</SwiperSlide>
        <SwiperSlide className="bg-red-700">slide3</SwiperSlide>
        <SwiperSlide className="bg-red-600">slide4</SwiperSlide>
        <SwiperSlide className="bg-red-500">slide5</SwiperSlide>
        <SwiperSlide className="bg-red-400">slide6</SwiperSlide>
      </Swiper>
    </section>
  );
};

const Left_section_scrollBottom = ({
  isBottomView,
}: {
  isBottomView: boolean;
}) => {
  return (
    <section hidden={!isBottomView}>
      <iframe
        width="486"
        height="250"
        src="https://www.youtube.com/embed/D2sa1Y1z_DU?si=j_Ff365v0M2yUXXw"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </section>
  );
};

const Right_section = ({
  bottomScrollRef,
}: {
  bottomScrollRef: RefObject<HTMLElement | null>;
}) => {
  return (
    <section className="flex border-yellow-300 flex-col gap-32 grow items-center">
      <article className="pt-[6rem]">
        <ul>
          {[
            "게임 기획 직무의 이해",
            "생성형 AI와 게임 기획 기초",
            "AI를 활용한 게임 콘셉트 기획",
            "AI를 활용한 게임 스토리텔링",
            "AI를 활용한 게임 지표 분석과 BM 기획",
            "AI를 활용한 게임개발 업무",
            "게임 시스템 설계",
            "야하하 게임 엔진 활용",
            "게임 유저 인터페이스 설계",
            "AI를 활용한 게임 캐릭터 설계",
            "게임 퀘스트 설계",
            "AI를 활용한 게임 레벨 디자인",
            "유니티 엔진 기초",
            "유니티 엔진 활용",
            "프로젝트 발표회",
            "생성형 AI를 활용한 게임 서비스 운영",
            "미니 게임 프로젝트",
            "XR게임 개발 프로젝트",
            "취업 준비",
          ].map((value, idx) => {
            return (
              <Li_item idx={idx + 1} key={idx}>
                {value}
              </Li_item>
            );
          })}
        </ul>
      </article>
      <article className="pt-[11rem]" ref={bottomScrollRef}>
        <ul>
          {[
            "XR 게임 개발자의 이해",
            "프로그래밍 언어 활용 기술",
            "객체지향 프로그래밍과 데이터구조",
            "알고리즘 디자인과 디자인 패턴 기초",
            "객체지향 기반 컨텐츠 프로그래밍",
            "UnityEngine3D 입문 및 스크립팅 기초",
            "UnityEngine3D 응용 프로그래밍",
            "UnityEngine3D 인터랙티브 프로그래밍",
            "XR 애플리케이션 개발",
            "UnityEngine3D 네트워크 프로그래밍",
            "UnityEngine3D 네트워크 게임 구현",
            "UnityEngine Reactive 프로그래밍",
            "프로젝트 관리 개선",
            "프로젝트 서비스 운영",
            "미니게임 프로젝트",
            "XR 게임 개발 프로젝트",
            "취업 준비",
          ].map((value, idx) => {
            return (
              <Li_item idx={idx + 1} key={idx}>
                {value}
              </Li_item>
            );
          })}
        </ul>
      </article>
    </section>
  );
};

const Li_item = ({ idx, children }: { idx: number; children: string }) => {
  return (
    <li className="px-4 pb-10 text-white">
      <strong className="inline-flex items-center justify-center border border-white p-2 rounded-full h-6 w-6">
        {idx}
      </strong>
      <strong className="pl-4 text-xl">{children}</strong>
    </li>
  );
};

export default SmoothScroll;
