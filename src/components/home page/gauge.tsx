import dynamic from "next/dynamic";
const GaugeChart = dynamic(() => import("react-gauge-chart"), { ssr: false });

const Gauge: React.FC<{ amount: number; total: number; id: string }> = ({
  amount,
  total,
  id,
}) => {
  return (
    <div className="flex w-3/5 flex-col items-center">
      <GaugeChart
        id={id}
        percent={amount / total}
        colors={["#F47C38", "black"]}
        arcsLength={[amount / total, 1 - amount / total]}
        cornerRadius={1}
        needleColor="transparent"
        needleBaseColor="transparent"
        hideText
        className="my-3"
      />
      <p className="text-3xl font-bold">{amount}</p>
    </div>
  );
};

export default Gauge;
