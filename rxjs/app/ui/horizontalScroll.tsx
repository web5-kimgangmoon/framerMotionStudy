import React, { RefObject, useRef, useState } from "react";
import { useInView } from "framer-motion";
import clsx from "clsx";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import calcBoundaryMove from "../(lib)/calcBoundaryMove";
import Link from "next/link";

const SmoothScroll = () => {
  const containerRef = useRef<null | HTMLDivElement>(null);
  const topScrollRef = useRef<null | HTMLElement>(null);
  const bottomScrollRef = useRef<null | HTMLElement>(null);

  const lengthRulerRef = useRef<null | HTMLDivElement>(null);
  const isTopView = useInView(topScrollRef, {
    margin: `${
      lengthRulerRef.current ? -lengthRulerRef.current.scrollWidth : 0
    }px 0px 0px 0px`,
  });

  return (
    <div
      className={clsx(
        "pt-[5rem] pb-[10rem] transition-colors",
        isTopView ? "bg-purple-900" : "bg-indigo-900"
      )}
    >
      <div
        className={clsx(
          "transition-colors flex relative",
          isTopView ? "bg-purple-900" : "bg-indigo-900"
        )}
        ref={containerRef}
      >
        <Left_section
          isTopView={isTopView}
          containerRef={containerRef}
          bottomScrollRef={bottomScrollRef}
          lengthRulerRef={lengthRulerRef}
        />
        <Right_section
          bottomScrollRef={bottomScrollRef}
          topScrollRef={topScrollRef}
        />
      </div>

      <div className={clsx("ghost", "w-[5rem] h-0")} ref={lengthRulerRef} />
    </div>
  );
};

const Left_section = ({
  isTopView,
  containerRef,
  bottomScrollRef,
  lengthRulerRef,
}: {
  isTopView: boolean;
  containerRef: RefObject<HTMLElement | null>;
  bottomScrollRef: RefObject<HTMLElement | null>;
  lengthRulerRef: RefObject<HTMLDivElement | null>;
}) => {
  return (
    <section
      className={clsx(
        "sticky top-[5rem] left-0 transition-colors h-max w-[50%]",
        isTopView ? "bg-purple-900" : "bg-indigo-900"
      )}
    >
      <div className="relative flex h-[48rem] pt-[6rem] pb-[2.5rem] text-white">
        <div className="flex h-full flex-col">
          <button
            className={clsx(
              "block bg-purple-700 font-bold shadow px-3 grow",
              isTopView || "opacity-75"
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
              isTopView && "opacity-75"
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
          <h2 className="font-bold text-2xl pb-3">
            {isTopView
              ? "게임 기획자는 뭘 배우나요?"
              : "게임 프로그래밍은 뭘 배우나요?"}
          </h2>
          <Left_section_scrollBottom isTopView={isTopView} />
          <Left_section_scrollTop isTopView={isTopView} />
        </div>
      </div>
    </section>
  );
};

const Left_section_scrollTop = ({ isTopView }: { isTopView: boolean }) => {
  const slider = useRef<null | SwiperRef>(null);
  const [slideIdx, setSlideIDx] = useState(0);
  return (
    <section hidden={!isTopView}>
      <div
        className="py-8 flex gap-3 justify-center font-bold"
        onClick={(e) => {
          e.currentTarget.childNodes.forEach((v, idx) => {
            if (v === e.target) {
              {
                const slideLength = slider.current!.swiper.slides.length / 3;
                const next = calcBoundaryMove(
                  slider.current!.swiper.activeIndex,
                  idx + slideLength,
                  slideLength,
                  slideLength * 2 - 1
                );
                slider.current!.swiper.slideTo(next[0], next[1] * 300);
                setSlideIDx(idx);
              }
            }
          });
        }}
      >
        {[
          "RPG",
          "슈퍼마리오",
          "세븐나이츠2",
          "용과같이8",
          "다크소울3",
          "오딘",
        ].map((v, idx) => (
          <button
            className={clsx({
              "opacity-50": slideIdx !== idx,
            })}
            key={idx}
          >
            {v}
          </button>
        ))}
      </div>
      <Slider slider={slider} />
    </section>
  );
};

const Slider = ({ slider }: { slider: RefObject<null | SwiperRef> }) => {
  return (
    <Swiper
      className="rounded-xl"
      style={{ width: 486, height: 250 }}
      spaceBetween={0}
      slidesPerView={1}
      ref={slider}
      initialSlide={6}
      onSlideChangeTransitionEnd={(swiper) => {
        if (swiper.activeIndex < 6) swiper.slideTo(swiper.activeIndex + 6, 0);
        if (swiper.activeIndex > 11) swiper.slideTo(swiper.activeIndex - 6, 0);
      }}
    >
      <SwiperSlide className="bg-red-900">slide1</SwiperSlide>
      <SwiperSlide className="bg-red-800">slide2</SwiperSlide>
      <SwiperSlide className="bg-red-700">slide3</SwiperSlide>
      <SwiperSlide className="bg-red-600">slide4</SwiperSlide>
      <SwiperSlide className="bg-red-500">slide5</SwiperSlide>
      <SwiperSlide className="bg-red-400">slide6</SwiperSlide>
      <SwiperSlide className="bg-red-900">slide1</SwiperSlide>
      <SwiperSlide className="bg-red-800">slide2</SwiperSlide>
      <SwiperSlide className="bg-red-700">slide3</SwiperSlide>
      <SwiperSlide className="bg-red-600">slide4</SwiperSlide>
      <SwiperSlide className="bg-red-500">slide5</SwiperSlide>
      <SwiperSlide className="bg-red-400">slide6</SwiperSlide>
      <SwiperSlide className="bg-red-900">slide1</SwiperSlide>
      <SwiperSlide className="bg-red-800">slide2</SwiperSlide>
      <SwiperSlide className="bg-red-700">slide3</SwiperSlide>
      <SwiperSlide className="bg-red-600">slide4</SwiperSlide>
      <SwiperSlide className="bg-red-500">slide5</SwiperSlide>
      <SwiperSlide className="bg-red-400">slide6</SwiperSlide>
    </Swiper>
  );
};

const Left_section_scrollBottom = ({ isTopView }: { isTopView: boolean }) => {
  return (
    <section hidden={isTopView}>
      <ul className="py-8 flex gap-3 justify-center font-bold">
        {[
          ["Slime Rancher", "#"],
          ["니어오토마타", "#"],
          ["마리오카트", "#"],
          ["산나비", "#"],
          ["쿠키런킹덤", "#"],
          ["핵앤슬러쉬", "#"],
        ].map((v, idx) => (
          <li key={idx}>
            <Link href={v[1]}>{v[0]}</Link>
          </li>
        ))}
      </ul>
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
  topScrollRef,
}: {
  bottomScrollRef: RefObject<HTMLElement | null>;
  topScrollRef: RefObject<HTMLElement | null>;
}) => {
  return (
    <section className="flex border-yellow-300 flex-col grow items-center w-[50%]">
      <article className="pt-[6rem]" ref={topScrollRef}>
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
      <article className="pt-[11rem] pb-[2.5rem]" ref={bottomScrollRef}>
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
    <li className="px-4 text-white pb-12 last:pb-0">
      <strong className="inline-flex items-center justify-center border border-white p-2 rounded-full h-6 w-6">
        {idx}
      </strong>
      <strong className="pl-4 text-xl">{children}</strong>
    </li>
  );
};

export default SmoothScroll;
