import React, { RefObject, useRef } from "react";
import { useInView } from "framer-motion";
import clsx from "clsx";

const SmoothScroll = () => {
  const containerRef = useRef<null | HTMLDivElement>(null);
  const bottomScrollRef = useRef<null | HTMLElement>(null);

  const lengthRulerRef = useRef<null | HTMLDivElement>(null);
  const isBottomView = useInView(bottomScrollRef);

  return (
    <div
      className={clsx(
        "pt-[5rem] pb-[10rem] transition-colors flex",
        isBottomView ? "bg-fuchsia-900" : "bg-purple-900"
      )}
    >
      <div
        className={clsx(
          "flex relative transition-colors",
          isBottomView ? "bg-fuchsia-900" : "bg-purple-900"
        )}
        ref={containerRef}
      >
        <div>
          <Left_section
            isBottomView={isBottomView}
            containerRef={containerRef}
            bottomScrollRef={bottomScrollRef}
            lengthRulerRef={lengthRulerRef}
          />
        </div>
        <div>
          <Right_section bottomScrollRef={bottomScrollRef} />
        </div>
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
        "sticky top-[5rem] left-0 transition-colors",
        isBottomView ? "bg-fuchsia-900" : "bg-purple-900"
      )}
    >
      <div className="relative flex h-[60rem]">
        <div className="text-white h-full pt-[6rem] pb-[11rem]">
          <div className="inline-flex h-full flex-col">
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
                "block bg-fuchsia-700 font-bold shadow px-3 grow",
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
          <div className="inline-block"></div>
        </div>
      </div>
    </section>
  );
};

const Right_section = ({
  bottomScrollRef,
}: {
  bottomScrollRef: RefObject<HTMLElement | null>;
}) => {
  return (
    <section className="flex border-yellow-300 flex-col gap-32">
      <article className="w-[700px] pt-[6rem]">
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
      <article className="w-[700px] pt-[11rem]" ref={bottomScrollRef}>
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
    <li className="px-4 pb-8 text-white h-16">
      <strong className="inline-flex items-center justify-center border border-white p-2 rounded-full h-6 w-6">
        {idx}
      </strong>
      <strong className="pl-4 text-xl">{children}</strong>
    </li>
  );
};

export default SmoothScroll;
