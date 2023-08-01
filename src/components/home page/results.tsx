import { cn } from "~/utils/cn";
import Gauge from "./gauge";
import { BarList, DonutChart } from "@tremor/react";

const data = [
  {
    name: "PR",
    value: 456,
  },
  {
    name: "BL",
    value: 351,
  },
  {
    name: "SR",
    value: 271,
  },
  {
    name: "IN",
    value: 191,
  },
];

const fillers = [
  {
    word: "Uh",
    count: 1,
  },

  {
    word: "Actually",
    count: 2,
  },
  {
    word: "Basically",
    count: 2,
  },
];

const Results: React.FC = () => {
  return (
    <div className="text-highlight mt-4 grid w-full grid-cols-4 grid-rows-2 gap-3 px-10">
      <ResultBox className="flex flex-col items-center justify-center">
        <p className="text-center text-2xl font-medium">WPM</p>
        <Gauge id="WPM" amount={51} total={120} />
      </ResultBox>
      <ResultBox className="flex flex-col items-center">
        <p className="text-center text-2xl font-medium">ACC</p>
        <Gauge id="WPM" amount={62} total={120} />
      </ResultBox>
      <ResultBox className="flex flex-col items-center">
        <p className="text-center text-2xl font-medium">Stutters</p>
        <p className="text-[5rem] font-bold">14</p>
      </ResultBox>
      <ResultBox className="flex flex-col items-center">
        <p className="text-center text-2xl font-medium">Hard-Onset</p>
        <p className="text-[5rem] font-bold">10</p>
      </ResultBox>
      <ResultBox size={2} className="tremor-barList-bar:fill-red-500">
        <p className="text-center text-2xl font-medium">Data</p>
        <BarList data={data} className="mt-2" />
      </ResultBox>{" "}
      <ResultBox size={2}>
        <p className="text-center text-2xl font-medium">Filler Words</p>
        <DonutChart
          data={fillers}
          index="word"
          category="count"
          colors={["orange", "orange", "orange", "orange", "orange", "orange"]}
          label="5 fillers"
        />
        {/* <div className="flex h-full flex-1 flex-col items-start justify-center">
          {fillers.map(({ word, count }, i) => (
            <p key={i} className="text-black">
              {word}: {count}
            </p>
          ))}
        </div> */}
      </ResultBox>
    </div>
  );
};

const ResultBox: React.FC<
  React.PropsWithChildren<{ size?: number; className?: string }>
> = ({ size = 1, className, children }) => {
  return (
    <div
      className={cn(
        `col-span-${size} w-full items-center justify-center rounded border-2 border-highlight-light px-4 py-6 dark:border-highlight-dark`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Results;
