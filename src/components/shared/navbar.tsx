import Tab from "./tab";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./logo";
import { Fragment } from "react";
import { cn } from "~/utils/cn";
import { useTabs } from "./tabs";

export interface ITab {
  name: string;
  href: string;
}

const Navbar: React.FC = () => {
  const router = useRouter();
  const mainTabs = useTabs();

  return (
    <div className="flex h-14 w-screen items-center justify-between px-20 pb-1 pt-4">
      <div className="flex flex-1 items-center justify-start">
        <Link
          href="/"
          className="flex items-center justify-center rounded-full p-[0.3625rem] transition hover:-translate-y-0.5 hover:fill-white/80"
          aria-label="Home"
        >
          <Logo size="2.25rem" inherit />
        </Link>
      </div>

      <div
        className={cn(
          "flex h-full items-center justify-center rounded-full px-4",
          mainTabs.length
            ? router.pathname === "/"
              ? "bg-black/20"
              : "bg-black/40"
            : "bg-transparent"
        )}
      >
        {mainTabs.map((tab, i) => (
          <Fragment key={i}>
            <Tab {...tab} />
            {i != mainTabs.length - 1 && (
              <div className="mx-3 h-2/3 w-0 border-l-[1px] border-text-300/40" />
            )}
          </Fragment>
        ))}
      </div>
      <div className="flex h-full flex-1 items-center justify-end"></div>
    </div>
  );
};

export default Navbar;
