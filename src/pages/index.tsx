import Link from "next/link";
import { useState } from "react";
import type { IconType } from "react-icons";
import { FaArrowsRotate } from "react-icons/fa6";
import Layout from "~/components/shared/layout";
import Button from "~/components/ui/button";
import { cn } from "~/utils/cn";
import { changeColor } from "~/utils/colorMode";

export default function Home() {
  const [phrase, setPhrase] = useState(
    "The quick brown fox jumps over the lazy dog."
  );
  return (
    <Layout>
      <Button name="color-mode-switch" onClick={changeColor}>
        Color
      </Button>
      <div className="rounded bg-highlight-light px-5 py-3 dark:bg-highlight-dark">
        <ToolbarButton
          Icon={FaArrowsRotate}
          onClick={() => setPhrase("Hi")}
          className="transition-all hover:rotate-12 hover:scale-110 active:rotate-180"
        />
      </div>
      <p className="transition-all hover:scale-150">{phrase}</p>
    </Layout>
  );
}

export const ToolbarButton: React.FC<
  React.PropsWithChildren<{
    Icon: IconType;
    onClick: () => void;
    linkClassName?: string;
    className?: string;
    href?: string;
  }>
> = ({ Icon, onClick, linkClassName = "", className = "", href = "" }) => {
  return (
    <Link
      href={href}
      className={cn("text-bg-main-light dark:text-bg-main-dark", linkClassName)}
      onClick={onClick}
    >
      <Icon size="1.5rem" className={cn(className)} />
    </Link>
  );
};
