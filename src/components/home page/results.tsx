import { cn } from "~/utils/cn";

const Results: React.FC = () => {
  return (
    <div className="text-highlight mt-4 grid w-full grid-cols-4 grid-rows-2 gap-3 px-10">
      <ResultBox className="flex flex-col items-center">
        <p className="text-2xl font-medium">WPM</p>
      </ResultBox>
      <ResultBox className="flex flex-col items-center">
        <p className="text-2xl font-medium">ACC</p>
      </ResultBox>
      <ResultBox className="flex flex-col items-center">
        <p className="text-2xl font-medium">Stutters</p>
        <p className="text-6xl font-bold">14</p>
      </ResultBox>
      <ResultBox className="flex flex-col items-center">
        <p className="text-2xl font-medium">Hard-Onset</p>
        <p className="text-6xl font-bold">10</p>
      </ResultBox>
      <ResultBox size={2} />
      <ResultBox size={2} />
    </div>
  );
};

const ResultBox: React.FC<
  React.PropsWithChildren<{ size?: number; className?: string }>
> = ({ size = 1, className, children }) => {
  return (
    <div
      className={cn(
        `col-span-${size} w-full rounded border-2 border-highlight-light px-4 py-6 dark:border-highlight-dark`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Results;
