import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import { useCallback, useEffect, useId, useState } from "react";

import { motion } from "motion/react";

export const ToggleBox_list = ({
  list,
  openIdx,
}: {
  list: { title: string; subTitle?: string; content: string }[];
  openIdx?: number;
}) => {
  const [onIdx, setOnIdx] = useState(openIdx ? openIdx : -1);
  const selectIdx = useCallback(
    (idx: number) => {
      if (onIdx === idx) setOnIdx(-1);
      else setOnIdx(idx);
    },
    [onIdx]
  );
  return (
    <div className="flex flex-col gap-2">
      {list.map((v, idx) => (
        <ToggleBox
          title={v["title"]}
          subTitle={v["subTitle"]}
          content={v["content"]}
          key={idx}
          isOn={idx === onIdx}
          onClick={() => selectIdx(idx)}
        />
      ))}
    </div>
  );
};

export const ToggleBox = ({
  title,
  content,
  subTitle,
  onClick,
  isOn,
}: {
  title: string;
  content: string;
  subTitle?: string;
  onClick: () => void;
  isOn: boolean;
}) => {
  const [height, setHeight] = useState(0);
  const target = useId();

  useEffect(() => {
    const targetElem = document.getElementById(target);
    if (targetElem) {
      targetElem.style.display = "block";
      setHeight(targetElem.scrollHeight + 40);
      targetElem.style.display = "";
    }
  }, []);

  return (
    <div className={clsx(isOn && "bg-white border border-white rounded-lg")}>
      <button
        className={clsx(
          "w-full p-4 flex justify-between",
          isOn ? "text-indigo-500" : "text-white border border-white rounded-lg"
        )}
        onClick={onClick}
      >
        <strong className="">
          <span>{title}</span>
          <span className="text-sm opacity-60" hidden={subTitle ? false : true}>
            {subTitle}
          </span>
        </strong>
        <ChevronUpIcon
          width={24}
          className={clsx("text-gray-300", isOn || "hidden")}
        />
        <ChevronDownIcon
          width={24}
          className={clsx("text-gray-300", isOn && "hidden")}
        />
      </button>
      <motion.div
        initial={{
          height: "0px",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          paddingTop: "0px",
          paddingBottom: "0px",
          overflow: "hidden",
        }}
        animate={{
          height: isOn ? height : "0px",
          paddingTop: isOn ? "20px" : "0px",
          paddingBottom: isOn ? "20px" : "0px",
        }}
        transition={{
          duration: 0.4,
        }}
        className="text-gray-600 text-sm"
      >
        <span className={clsx(isOn || "hidden")} id={target}>
          {content}
        </span>
      </motion.div>
    </div>
  );
};
