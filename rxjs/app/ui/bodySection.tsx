import { useId, useLayoutEffect, useState } from "react";
import { ToggleBox_list } from "./toggleBox";
import AnimeWrapper_div from "./animeWrapper_div";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import clsx from "clsx";
import Link from "next/link";
import { ArrowUpRightIcon, FaceFrownIcon } from "@heroicons/react/24/outline";

export const BodyComp_7 = () => {
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
        <Title_section />
        <ToggleBox_section />
      </div>
    </div>
  );
};

const Title_section = ({}: {}) => {
  return (
    <section className="text-white font-bold text-center pb-48">
      <AnimeWrapper_div>
        <h1 className="text-3xl">우리는 결과로 말합니다.</h1>
        <h5 className="text-gray-500 text-sm pb-12 pt-4">순수 게임직종 취업</h5>
      </AnimeWrapper_div>
      <AnimeWrapper_div>
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
      </AnimeWrapper_div>
    </section>
  );
};

const ToggleBox_section = () => {
  return (
    <section>
      <AnimeWrapper_div className="text-white font-bold text-center flex justify-center flex-col pb-12">
        <h1 className="text-3xl">수료하면 이렇게 취업할 수 있어요.</h1>
      </AnimeWrapper_div>
      <AnimeWrapper_div className="flex gap-24 pb-5">
        <div
          className="w-[25rem] h-[17rem] flex items-center justify-center"
          style={{
            backgroundImage: "url('/block_sect09_img1.jpg')",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="text-xl text-purple-600 font-bold">
            생성형 AI를 활용한 게임 기획자 과정
          </h1>
        </div>
        <div
          className="w-[25rem] h-[17rem] flex items-center justify-center"
          style={{
            backgroundImage: "url('/block_sect09_img2.jpg')",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="text-xl text-indigo-600 font-bold">
            XR 기술을 활용한 게임 개발자 과정
          </h1>
        </div>
      </AnimeWrapper_div>
      <AnimeWrapper_div className="flex gap-24 pb-10">
        <div className="w-[25rem]">
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
            openIdx={0}
          />
        </div>
        <div className="w-[25rem]">
          <ToggleBox_list
            list={[
              {
                title: "게임 엔진 개발자",
                subTitle: "Game Engine Developer",
                content:
                  "게임 엔진 개발자는 게임 엔진 소프트웨어를 개발하거나 수정하여 게임의 기술적인 부분을 관리합니다.",
              },
              {
                title: "네트워크 프로그래머",
                subTitle: "Network Programmer",
                content:
                  "네트워크 프로그래머는 멀티플레이어 게임에서 플레이어 간의 연결과 상호 작용을 관리하고 게임 서버를 구축합니다.",
              },
              {
                title: "게임플레이 프로그래머",
                subTitle: "Gameplay Programmer",
                content:
                  "게임 플레이 프로그래머는 게임 내의 플레이어 상호 작용, 캐릭터 동작 및 게임 규칙을 프로그래밍합니다.",
              },
              {
                title: "UI/UX 프로그래머",
                subTitle: "UI/UX Programmer",
                content:
                  "UI/UX 프로그래머는 게임 사용자 인터페이스와 사용자 경험을 디자인하고 개발합니다. 플레이어가 게임을 쉽게 이해하고 상호 작용할 수 있도록 도와줍니다.",
              },
              {
                title: "인공지능 프로그래머",
                subTitle: "AI Programmer",
                content:
                  "인공지능 프로그래머는 게임 내의 인공지능을 개발하고 관리합니다. 이들은 적 대상의 행동, 캐릭터의 인공지능, 및 게임 세계 내의 상호 작용을 프로그래밍하여 게임의 현실적인 플레이 경험을 제공합니다.",
              },
            ]}
            openIdx={0}
          />
        </div>
      </AnimeWrapper_div>
    </section>
  );
};

export const BodyComp_8 = () => {
  const titleId = useId();
  return (
    <div
      className="flex justify-center py-20"
      style={{
        backgroundImage: "url(/block_sect04-bg.jpg)",
        backgroundRepeat: "no-repeat",
      }}
    >
      <section className="container text-white font-bold w-[60rem]">
        <div className="py-12 h-48 relative" id={titleId}>
          <AnimeWrapper_div className="h-full" isTarget_parent>
            <h1 className="text-4xl leading-[3rem]">
              2,500명의 <span className="text-purple-500">게임 개발자</span>
              <br />
              우리 경일의 졸업생입니다.
            </h1>
          </AnimeWrapper_div>
        </div>
        <Swiper
          modules={[Navigation]}
          style={{
            display: "flex",
            flexDirection: "column-reverse",
            width: "100%",
            overflow: "visible",
          }}
          slidesPerView={3}
          spaceBetween={30}
          navigation={{
            disabledClass: "disabled-button",
          }}
          wrapperClass="!h-[20rem]"
          onSwiper={(swiper) => {
            const target = document.getElementById(titleId);
            if (target) {
              target.append(swiper.navigation.nextEl, swiper.navigation.prevEl);
            }
            swiper.navigation.nextEl.classList =
              "after:content-['next'] pl-[1.1rem] pr-[0.9rem] flex items-center h-[2.5rem] cursor-pointer absolute top-[4.75rem] right-0 border border-white rounded-full text-sm";
            swiper.navigation.nextEl.style.fontFamily = "swiper-icons";

            swiper.navigation.prevEl.classList =
              "after:content-['prev'] pl-[0.9rem] pr-[1.1rem] flex items-center h-[2.5rem] cursor-pointer absolute top-[4.75rem] right-12 border border-white rounded-full text-sm";
            swiper.navigation.prevEl.style.fontFamily = "swiper-icons";
            if (swiper.activeIndex === 0) {
              swiper.navigation.prevEl.classList.add("disabled-button");
            }
            if (swiper.activeIndex === swiper.slides.length - 1) {
              swiper.navigation.nextEl.classList.add("disabled-button");
            }
          }}
        >
          {[
            ["인생에서 가장", "후회하지 않는 선택", "익명", "회사명"],
            ["test2", "테스트2", "익명", "회사명"],
            ["test3", "테스트3", "익명", "회사명"],
            ["test4", "테스트4", "익명", "회사명"],
            ["test5", "테스트5", "익명", "회사명"],
            ["test6", "테스트6", "익명", "회사명"],
            ["test7", "테스트7", "익명", "회사명"],
            ["test8", "테스트8", "익명", "회사명"],
          ].map((v, idx) => (
            <SwiperSlide className="bg-blue-300 rounded-md" key={idx}>
              <div className="flex flex-col items-center justify-center gap-5 w-full h-full text-center">
                <div className="text-[1.4rem] font-semibold">
                  {v[0]}
                  <br />
                  {v[1]}
                </div>
                <div className={"text-sm"}>
                  {v[2]}
                  <span className="before:inline-block before:content-[''] before:border-l before:border-white before:py-[0.3rem] before:pr-1 pl-1">
                    {v[3]}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <AnimeWrapper_div className="text-center">
          <h2 className="pt-12 pb-3 text-2xl">
            “이제 여러분의 미래를 바꿀 차례입니다”
            <br />
          </h2>
          <Link href={"#"} className="text-purple-500 text-sm">
            <h3 className="inline-block">졸업생 이야기 보러가기</h3>
            <ArrowUpRightIcon
              className="inline-block h-[0.8rem] pl-[0.1rem]"
              strokeWidth={2.5}
            />
          </Link>
        </AnimeWrapper_div>
      </section>
    </div>
  );
};

export const BodyComp_18 = () => {
  return (
    <div
      className="py-36"
      style={{
        backgroundImage: "url('block_sect08_bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="container flex flex-col items-center justify-center text-center text-white font-bold">
        <AnimeWrapper_div duration={0.5}>
          <h1 className="text-3xl pb-12">게임 개발자가 되고 싶다면?</h1>
        </AnimeWrapper_div>
        <ul className="flex gap-5">
          {[
            [
              "열정만 가지고 오세요!",
              "참여자의 80%가 비전공자이며 취업까지 과정은",
              "누구나가 도달 할 수 있도록 설계되었습니다.",
              "그렇다고 쉽진 않아요!",
            ],
            [
              "누구나 할 수 있습니다!",
              "코딩 경험이 없어도, 게임 제작의 경험이 없어도,",
              "사회적 배경에 관계 없이, 비용 걱정 없이",
            ],
          ].map((v, idx) => (
            <AnimeWrapper_div
              key={idx}
              delay={idx === 0 ? undefined : 0.1}
              duration={1}
            >
              <li
                className={clsx(
                  "rounded-md p-8 border h-full",
                  idx === 0
                    ? "border-purple-500 bg-purple-600/30"
                    : "border-indigo-500 bg-indigo-600/30"
                )}
              >
                <h2
                  className={clsx(
                    "pb-6 text-xl",
                    idx === 0 ? "text-purple-500" : "text-indigo-500"
                  )}
                >
                  {v[0]}
                </h2>
                <p className="pb-3">
                  {v[1]}
                  <br />
                  {v[2]}
                </p>
                {idx === 0 && (
                  <h5 className="flex justify-center items-start">
                    <span>그렇다고 쉽진 않아요!</span>
                    <FaceFrownIcon className="inline-block w-5" />
                  </h5>
                )}
              </li>
            </AnimeWrapper_div>
          ))}
        </ul>
      </section>
    </div>
  );
};
