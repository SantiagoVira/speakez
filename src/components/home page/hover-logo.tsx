import Image from "next/image";

const HoverLogo: React.FC = () => {
  return (
    <div className="w- group relative h-32 w-32">
      <Image
        src="/SpeakEZ-01.svg"
        width={100}
        alt="logo"
        height={100}
        className="absolute group-hover:hidden"
      />
      <Image
        src="/SpeakEZ-02.svg"
        width={100}
        alt="logo"
        height={100}
        className="absolute hidden group-hover:flex"
      />
    </div>
  );
};

export default HoverLogo;
