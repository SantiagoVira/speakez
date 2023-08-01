import { cn } from "~/utils/cn";
import Gauge from "./gauge";
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
      <ResultBox size={2}></ResultBox> <ResultBox size={2}></ResultBox>
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
