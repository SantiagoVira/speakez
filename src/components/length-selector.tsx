import { FaICursor } from "react-icons/fa6";

export const LengthSelector: React.FC = () => {
  return (
    <div className="group relative flex text-bg-main-light dark:text-bg-main-dark">
      <FaICursor size="1.5rem" className="z-0 transition-all hover:scale-110" />
      <div
        className="absolute left-1/2 z-10 mx-auto hidden -translate-x-1/2 translate-y-[21px] border-x-[5px] border-b-[5px] border-x-transparent border-b-gray-800 
        transition-all group-hover:block"
      />
      <span
        className="absolute left-1/2 z-10 m-4 mx-auto hidden w-[15rem] -translate-x-1/2 
        translate-y-[10px] rounded-md bg-gray-800 px-3 py-2 text-sm
        text-gray-100 transition-all group-hover:block"
      >
        {/* {children}
        {learnMore && (
          <div className="mt-2 flex w-full items-center justify-end">
            <Link
              className="flex items-center gap-2 border-b-[1px]"
              href={learnMore}
              aria-label="Learn more"
            >
              Learn more
              <BsArrowUpRight />
            </Link>
          </div>
        )} */}
        Hi
      </span>
    </div>
  );
};
