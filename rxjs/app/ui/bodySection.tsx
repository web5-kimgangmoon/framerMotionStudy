import { useRef, useState } from "react";
import { ToggleBox_list } from "./toggleBox";
import { motion } from "motion/react";

export const TestComp = () => {
  const ref = useRef<null | HTMLDivElement>(null);
  const [isRunAnime, setIsRunAnime] = useState(false);
  return (
    <motion.div
      className="w-[30rem] relative"
      initial={{ transform: "translate3d(0px, 30px, 0px)", opacity: 0 }}
      animate={{
        transform: isRunAnime
          ? "translate3d(0px, 0px, 0px)"
          : "translate3d(0px, 30px, 0px)",
        opacity: isRunAnime ? 1 : 0,
      }}
      onViewportEnter={() => {
        const boundary = window.scrollY + window.innerHeight + 30;
        if (
          boundary > ref.current!.offsetTop &&
          window.scrollY < ref.current!.offsetTop + ref.current!.scrollHeight
        )
          setIsRunAnime(true);
        else setIsRunAnime(false);
      }}
      onViewportLeave={() => {
        const boundary = window.scrollY;
        if (
          boundary > ref.current!.offsetTop + ref.current!.scrollHeight &&
          !isRunAnime
        )
          setIsRunAnime(true);
        if (
          boundary < ref.current!.offsetTop + ref.current!.scrollHeight &&
          isRunAnime
        )
          setIsRunAnime(false);
      }}
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
    </motion.div>
  );
};
