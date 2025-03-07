import clsx from "clsx";
import { inertia, motion, useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isOnNav, setIsOnNav] = useState(false);
  const [isScrollDown, setIsScrollDown] = useState(false);
  const { scrollY } = useScroll();
  const menus: [string, string[][]][] = [
    [
      "모집중인 과정",
      [
        ["#", "모집강좌"],
        ["#", "모집절차"],
        ["#", "합격자조회"],
      ],
    ],
    [
      "상담신청",
      [
        ["#", "상담신청하기"],
        ["#", "국비지원자격조회"],
      ],
    ],
    [
      "게임 부트캠프",
      [
        ["#", "전체 교육 과정"],
        ["#", "게임 기획"],
        ["#", "게임 프로그래밍"],
        ["#", "언리얼 엔진"],
        ["#", "온라인캠프"],
        ["#", "게임원화 * 그래픽"],
      ],
    ],
    [
      "IT 부트캠프",
      [
        ["#", "전체 교육 과정"],
        ["#", "풀스택 개발자"],
        ["#", "DevOps"],
        ["#", "가상증강"],
        ["#", "웹 개발"],
      ],
    ],
    [
      "커뮤니티",
      [
        ["#", "취업자 인터뷰"],
        ["#", "취업현황"],
        ["#", "포트폴리오"],
        ["#", "Youtube"],
      ],
    ],
    [
      "수강료 지원",
      [
        ["#", "국민내일배움카드"],
        ["#", "국민취업지원제도"],
        ["#", "K-디지털"],
      ],
    ],
    [
      "About us",
      [
        ["#", "회사소개"],
        ["#", "교직원 소개"],
        ["#", "공지사항"],
        ["#", "찾아오시는 길"],
      ],
    ],
  ];
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous)
      latest - previous > 0 ? setIsScrollDown(true) : setIsScrollDown(false);
  });
  return (
    <motion.header
      className="block fixed top-0 left-0 w-full bg-white z-10"
      animate={{ translateY: isScrollDown ? "-100%" : "0%" }}
      transition={{ damping: undefined }}
    >
      <div className="container flex justify-between">
        <div className="py-3">
          <div className="text-sm text-gray-500">
            <strong>전화상담문의</strong>
          </div>
          <div className="text-3xl text-violet-600">
            <strong>02-479-4050</strong>
          </div>
        </div>
        <div className="p-4">
          <strong className="text-4xl">경일게임IT아카데미</strong>
        </div>
        <UtubeLink_btn></UtubeLink_btn>
      </div>
      <div
        className={clsx(
          "border-t border-gray-300 h-20 relative",
          "after:border-gray-300 after:absolute after:bottom-0 after:left-0 after:index-10 after:w-full",
          isOnNav && "after:border-b",
          !isOnNav && "after:transition-all after:transition after:delay-300"
        )}
      >
        <motion.div
          className="absolute w-full bg-white top-0 left-0 overflow-hidden"
          initial={{
            height: "5rem",
          }}
          animate={{
            height: isOnNav ? "auto" : "5rem",
          }}
          transition={{ duration: "0.3" }}
        >
          <nav className="container">
            <motion.ul
              className="flex justify-between px-6 py-4"
              onHoverStart={() => {
                setIsOnNav(true);
              }}
              onHoverEnd={() => {
                setIsOnNav(false);
              }}
            >
              {menus.map((value, idx) => (
                <MenuLink_li href="#" strong key={idx} list={value[1]}>
                  {value[0]}
                </MenuLink_li>
              ))}
            </motion.ul>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
};

const UtubeLink_btn = () => {
  return (
    <div className="py-3">
      <button className="flex rounded-md bg-violet-600 px-4 py-2">
        <div className="text-white whitespace-nowrap">
          <div>
            <strong className="text-sm">경일게임IT 아카데미</strong>
          </div>
          <div className="text text-[1.1rem]">
            <strong>유튜브 </strong>
            <span>바로가기</span>
          </div>
        </div>
      </button>
    </div>
  );
};

const MenuLink_li = ({
  children,
  href,
  list,
  strong,
}: {
  children: string;
  href: string;
  list: string[][];
  strong?: boolean;
}) => {
  return (
    <li className="w-32 text-center text-xl hover:text-purple-400 hover:transition-color hover:duration-300">
      <div className="w-full h-12 flex items-center justify-center">
        <Link href={href} className={clsx(strong && "font-bold")}>
          {children}
        </Link>
      </div>
      <ul className={clsx("pt-8 pb-12", "text-sm font-bold", "text-gray-500")}>
        {list.map((value, idx) => {
          return (
            <li key={idx} className="py-2">
              <Link
                href={value[0]}
                className="hover:text-purple-400 hover:underline hover:decoration hover:transition-color hover:duration-500"
              >
                {value[1]}
              </Link>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

const Bottom_dropdown = ({
  isOnNav,
  setIsOnNav,
}: {
  isOnNav: boolean;
  setIsOnNav: (setIs: boolean) => void;
}) => {
  return (
    <div className="relative">
      <motion.div
        className="absolute top-0 left-0 border-gray-300 w-full bg-white overflow-hidden"
        initial={{
          height: "0px",
          // translateY: "-100%",
          borderTopWidth: "0px",
          zIndex: 2,
        }}
        transition={{
          // translateY: { damping: null, duration: 0.1 },

          height: { damping: null, duration: 0.1 },
          delay: 0.1,
        }}
        animate={{
          height: isOnNav ? "auto" : "0px",
          // translateY: isOnNav ? "0%" : "-100%",
          borderTopWidth: isOnNav ? "1px" : "0px",
        }}
      >
        <div
          className="container px-6 pt-12 pb-32"
          onMouseEnter={() => {
            setIsOnNav(true);
          }}
          onMouseLeave={() => {
            setIsOnNav(false);
          }}
        >
          <motion.nav
            initial={{ opacity: 1 }}
            animate={isOnNav ? { opacity: 1 } : { opacity: 0 }}
          >
            <ul className="flex justify-between">ss</ul>
          </motion.nav>
          {/* <motion.nav
              className={clsx("absolute top-0 left-0 w-full h-full", isOnNav && "opacity-")}
              initial={{ opacity: 1 }}
              // animate={isOnNav ? { opacity: 1 } : { opacity: 0 }}
              transition={{
                // delay: isOnNav ? 0.1 : 0,
                damping: null,
              }}
            >
              ㅇㅇ
            </motion.nav> */}
        </div>
      </motion.div>
    </div>
  );
};

const SubMenuLink_li = ({
  children,
  href,
  strong,
}: {
  children: string;
  href: string;
  strong?: boolean;
}) => {
  return (
    <li className="w-32 text-center">
      <Link href={href} className={clsx(strong && "font-bold")}>
        <div></div>
        <div></div>
        <div></div>
        {children}
      </Link>
    </li>
  );
};

export default Header;
