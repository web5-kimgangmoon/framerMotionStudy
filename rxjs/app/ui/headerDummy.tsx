import clsx from "clsx";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isOnNav, setIsOnNav] = useState(false);
  return (
    <div className="sticky top-0 left-0">
      <div className="relative" style={{ zIndex: 3 }}>
        <div className="border-b border-gray-300">
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
        </div>
        <div
          className="container px-6 py-4"
          onMouseEnter={() => {
            setIsOnNav(true);
          }}
          onMouseLeave={() => {
            setIsOnNav(false);
          }}
        >
          <nav>
            <ul className="flex justify-between">
              <MenuLink_li href="#" strong>
                모집중인 과정
              </MenuLink_li>
              <MenuLink_li href="#" strong>
                상담신청
              </MenuLink_li>
              <MenuLink_li href="#" strong>
                게임 부트캠프
              </MenuLink_li>
              <MenuLink_li href="#" strong>
                IT 부트캠프
              </MenuLink_li>
              <MenuLink_li href="#" strong>
                커뮤니티
              </MenuLink_li>
              <MenuLink_li href="#" strong>
                수강료 지원
              </MenuLink_li>
              <MenuLink_li href="#" strong>
                About us
              </MenuLink_li>
            </ul>
          </nav>
        </div>
      </div>
      <Bottom_dropdown isOnNav={isOnNav} setIsOnNav={setIsOnNav} />
    </div>
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
  strong,
}: {
  children: string;
  href: string;
  strong?: boolean;
}) => {
  return (
    <li className="w-32 text-center text-xl">
      <Link href={href} className={clsx(strong && "font-bold")}>
        {children}
      </Link>
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
