import { useCallback, useRef, useState } from "react";
import { ToggleBox_list } from "./toggleBox";
import { motion } from "motion/react";
import { mkOnViewportEnter, mkOnViewportLeave } from "../(lib)/viewPortControl";
import { upAnime_animate, upAnime_initial } from "../(lib)/upAnime";

export const TestComp = () => {
  const [runAnimeIdx, setRunAnimeIdx] = useState(-1);
  return (
    <div
      className="w-full min-h-[40rem] pt-24 pb-12"
      style={{
        backgroundColor: "#010101",
        backgroundPosition: "center 0",
        backgroundRepeat: "no-repeat",
        backgroundImage: "url('./block_sect09_bg.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div className="container flex items-center flex-col">
        <Title_section
          title_isRunAnime={runAnimeIdx > -1}
          title_setIsRunAnime={(toggle) => {
            setRunAnimeIdx(toggle ? 0 : -1);
          }}
          content_isRunAnime={runAnimeIdx > 0}
          content_setIsRunAnime={(toggle) => {
            setRunAnimeIdx(toggle ? 1 : 0);
          }}
        />
        <ToggleBox_section
          isRunAnime={runAnimeIdx > 1}
          setIsRunAnime={(toggle) => {
            setRunAnimeIdx(toggle ? 2 : 1);
          }}
        />
      </div>
    </div>
  );
};

const Title_section = ({
  title_isRunAnime,
  title_setIsRunAnime,
  content_isRunAnime,
  content_setIsRunAnime,
}: {
  title_isRunAnime: boolean;
  title_setIsRunAnime: (toggle: boolean) => void;
  content_isRunAnime: boolean;
  content_setIsRunAnime: (toggle: boolean) => void;
}) => {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const title_onViewportEnter = useCallback(
    mkOnViewportEnter(titleRef, title_setIsRunAnime),
    [titleRef]
  );
  const title_onViewportLeave = useCallback(
    mkOnViewportLeave(titleRef, title_setIsRunAnime),
    [titleRef]
  );

  const content_onViewportEnter = useCallback(
    mkOnViewportEnter(contentRef, content_setIsRunAnime),
    [contentRef]
  );
  const content_onViewportLeave = useCallback(
    mkOnViewportLeave(contentRef, content_setIsRunAnime),
    [contentRef]
  );

  return (
    <section className="text-white font-bold text-center pb-48">
      <motion.div
        initial={upAnime_initial}
        animate={upAnime_animate(title_isRunAnime)}
        onViewportEnter={title_onViewportEnter}
        onViewportLeave={() => title_onViewportLeave(title_isRunAnime)}
        ref={titleRef}
      >
        <h1 className="text-3xl">우리는 결과로 말합니다.</h1>
        <h5 className="text-gray-500 text-sm pb-12 pt-4">순수 게임직종 취업</h5>
      </motion.div>
      <motion.div
        initial={upAnime_initial}
        animate={upAnime_animate(content_isRunAnime)}
        onViewportEnter={content_onViewportEnter}
        onViewportLeave={() => content_onViewportLeave(content_isRunAnime)}
        ref={contentRef}
      >
        <div className="leading-10 flex gap-12">
          {[
            ["비전공자", "80", "2022년 재학생 통계"],
            ["수료율", "91", "(2022년 합산)"],
            ["취업률", "88", "HRD.Net 응용SW엔지니어링", "(2023년 합산)"],
          ].map((v, idx) => (
            <div key={idx} className="grow w-48">
              <span className="text-purple-600">
                {v[0]}
                <br />
              </span>
              <span className="text-5xl">
                {v[1]}
                <span className="text-2xl">%</span>
                <br />
              </span>
              <p className="font-thin text-sm">
                {v[2]}
                {v[3] && <br />}
                {v[3] && v[3]}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const ToggleBox_section = ({
  isRunAnime,
  setIsRunAnime,
}: {
  isRunAnime: boolean;
  setIsRunAnime: (toggle: boolean) => void;
}) => {
  const ref = useRef<null | HTMLElement>(null);

  const onViewportEnter = useCallback(mkOnViewportEnter(ref, setIsRunAnime), [
    ref,
  ]);
  const onViewportLeave = useCallback(mkOnViewportLeave(ref, setIsRunAnime), [
    ref,
  ]);
  return (
    <motion.section
      className="w-[30rem] relative"
      initial={upAnime_initial}
      animate={upAnime_animate(isRunAnime)}
      onViewportEnter={onViewportEnter}
      onViewportLeave={() => onViewportLeave(isRunAnime)}
      ref={ref}
    >
      <ToggleBox_list
        list={[
          {
            title: "콘텐츠 기획자",
            subTitle: "Game Designer",
            content:
              "콘텐츠 기획자는 게임의 내용과 플레이 경험을 디자인하며, 게임 스토리, 레벨 디자인, 임무 및 퍼즐을 개발합니다.",
          },
          {
            title: "레벨 디자인",
            subTitle: "Level Designer",
            content:
              "레벨 디자이너는 플레이어가 게임 내에서 탐험하고 상호 작용하는 환경과 레벨을 설계합니다. 레벨 디자이너는 게임 내 스테이지와 장소를 만듭니다.",
          },
          {
            title: "시스템 기획자",
            subTitle: "System Designer",
            content:
              "시스템 기획자는 게임 내의 시스템 및 메카니즘을 디자인하고 조정하여 게임의 균형과 플레이 경험을 개선합니다.",
          },
          {
            title: "게임QA",
            subTitle: "Quality Assurance",
            content:
              "게임 QA는 게임을 테스트하고 버그를 찾아내고 보고하여 게임의 품질을 향상시키는 역할을 합니다.",
          },
          {
            title: "전투 기획자",
            subTitle: "Combat Designer",
            content:
              "전투 기획자는 게임 내 전투 시스템과 균형을 설계하며, 캐릭터의 능력과 무기를 조정합니다.",
          },
          {
            title: "사업, 마케팅 기획",
            subTitle: "Business/Marketing Planner",
            content:
              "사업 및 마케팅 기획자는 게임의 비즈니스 전략을 개발하고 마케팅 활동을 계획하여 게임의 성공을 돕는 역할을 합니다.",
          },
        ]}
      />
    </motion.section>
  );
};
