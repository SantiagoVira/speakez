import { FaICursor } from "react-icons/fa6";
import LengthRadioButton from "./length-radio-button";
import { useState } from "react";

export const LengthSelector: React.FC = () => {
  const [quoteLength, setQuoteLength] = useState<10 | 30 | 60>(10);

  return (
    <div className="group relative flex text-bg-main-light dark:text-bg-main-dark">
      <FaICursor size="1.5rem" className="z-0 transition-all hover:scale-110" />
      <div
        className="absolute left-1/2 z-10 mx-auto hidden -translate-x-1/2 translate-y-[21px] border-x-[5px] border-b-[5px] border-bg-main-dark border-x-transparent transition-all 
        group-hover:block dark:border-x-[5px] dark:border-b-[5px] dark:border-white dark:border-x-transparent"
      />
      <span
        className="bg-secondary absolute left-1/2 z-10 m-4 mx-auto
        hidden -translate-x-1/2 translate-y-[10px] rounded-md
        text-sm text-gray-100 transition-all group-hover:flex"
      >
        <LengthRadioButton
          groupName="length"
          title="10"
          onClick={() => setQuoteLength(10)}
          left
        />
        <LengthRadioButton
          groupName="length"
          title="30"
          onClick={() => setQuoteLength(30)}
        />
        <LengthRadioButton
          groupName="length"
          title="60"
          onClick={() => setQuoteLength(60)}
          right
        />
      </span>
    </div>
  );
};
