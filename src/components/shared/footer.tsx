import Link from "next/link";
import { BsDiscord, BsGithub, BsInstagram } from "react-icons/bs";
import { useState } from "react";
import type { IconType } from "react-icons";
import { cn } from "~/utils/cn";

const Footer: React.FC = () => {
  const [hoverLbl, setHoverLbl] = useState("");
  return (
    <div className="flex h-44 w-screen flex-col items-center justify-center gap-3 px-10 shadow md:h-32 md:flex-row md:justify-between">
      <div className="align-center flex justify-between gap-4">
        <SocialIcon
          label="Instagram"
          link="https://www.instagram.com/kreanto_org/"
          hoverLbl={hoverLbl}
          setHoverLbl={setHoverLbl}
          Icon={BsInstagram}
        />
        <SocialIcon
          label="Github"
          link="https://github.com/kreanto-org/kreanto"
          hoverLbl={hoverLbl}
          setHoverLbl={setHoverLbl}
          Icon={BsGithub}
        />
        <SocialIcon
          label="Discord"
          link="https://discord.gg/hJVysPaaDb"
          hoverLbl={hoverLbl}
          setHoverLbl={setHoverLbl}
          Icon={BsDiscord}
        />
      </div>
    </div>
  );
};

export default Footer;

const SocialIcon: React.FC<{
  label: string;
  link: string;
  hoverLbl: string;
  setHoverLbl: React.Dispatch<React.SetStateAction<string>>;
  Icon: IconType;
}> = ({ label, link, hoverLbl, setHoverLbl, Icon }) => (
  <Link
    href={link}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    onMouseEnter={() => setHoverLbl(label)}
    onMouseLeave={() => setHoverLbl("")}
  >
    <Icon
      size="2rem"
      // color={hoverLbl === label ? "#ffffff" : "rgb(255,255,255,"}
      className={cn(
        "text-highlight opacity-20 transition-all",
        (hoverLbl === label || hoverLbl === "") && "opacity-100"
      )}
    />
  </Link>
);
