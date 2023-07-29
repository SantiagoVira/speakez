import Link from "next/link";
import { useState } from "react";
import type { IconType } from "react-icons";
import { BsInfo, BsPlayFill } from "react-icons/bs";
import { FaArrowsRotate, FaICursor } from "react-icons/fa6";
import { CgDarkMode } from "react-icons/cg";
import Layout from "~/components/shared/layout";
import { cn } from "~/utils/cn";
import { changeColor } from "~/utils/colorMode";
import { TbWorldCog } from "react-icons/tb";
import { LengthSelector } from "~/components/length-selector";

export default function Home() {
  const [phrase, setPhrase] = useState(
    "The quick brown fox jumps over the lazy dog."
  );
  return (
    <Layout>
      <div className="flex gap-2 rounded bg-highlight-light px-4 py-2 dark:bg-highlight-dark">
        <ToolbarButton Icon={BsInfo} href="/info" />
        <ToolbarButton Icon={CgDarkMode} onClick={changeColor} />
        <ToolbarButton
          Icon={FaArrowsRotate}
          onClick={() => setPhrase("Hi")}
          className="hover:rotate-12 active:rotate-180"
        />
        <ToolbarButton Icon={BsPlayFill} onClick={changeColor} />
        <ToolbarButton Icon={FaICursor} onClick={changeColor} />
        <LengthSelector />
      </div>
      <p>{phrase}</p>
    </Layout>
  );
}

export const ToolbarButton: React.FC<
  React.PropsWithChildren<{
    Icon: IconType;
    onClick?: () => void;
    linkClassName?: string;
    className?: string;
    href?: string;
  }>
> = ({
  Icon,
  onClick = () => 0,
  linkClassName = "",
  className = "",
  href = "",
}) => {
  return (
    <Link
      href={href}
      className={cn("text-bg-main-light dark:text-bg-main-dark", linkClassName)}
      onClick={onClick}
    >
      <Icon
        size="1.5rem"
        className={cn("transition-all hover:scale-110", className)}
      />
    </Link>
  );
};
