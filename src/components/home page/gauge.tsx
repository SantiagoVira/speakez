import dynamic from "next/dynamic";
const GaugeChart = dynamic(() => import("react-gauge-chart"), { ssr: false });

import { useIsDark } from "~/utils/colorMode";

const Gauge: React.FC<{ amount: number; total: number; id: string }> = ({
  amount,
  total,
  id,
}) => {
  const { isDark } = useIsDark();

  return (
    <div className="flex w-3/5 flex-col items-center">
      <GaugeChart
        id={id}
        percent={amount / total}
        nrOfLevels={1}
        colors={[isDark ? "#FDE9CE" : "#F47C38"]}
        hideText
        className="my-3"
      />
      <p className="text-3xl font-bold">{amount}</p>
    </div>
  );
};

export default Gauge;
