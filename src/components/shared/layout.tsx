import { Header } from "~/components/shared/header";
import Navbar from "./navbar";
import Footer from "./footer";
import { cn } from "~/utils/cn";
import useWindowSize from "~/utils/useWindowSize";
import MobileNavbar from "./mobile-navbar";
import Loading from "./loading";

const Layout: React.FC<
  React.PropsWithChildren<{
    title?: string;
    className?: string;
    noFooter?: boolean;
    loading?: boolean;
  }>
> = ({ title, className, noFooter = false, loading = false, children }) => {
  const { isMobile } = useWindowSize();

  return (
    <main className="bg-bg-main text-text-100 relative flex min-h-screen flex-col items-center">
      <Header title={title} />
      <div className="absolute top-0">
        {isMobile ? <MobileNavbar /> : <Navbar />}
      </div>

      <div
        className={cn(
          "mt-14 flex h-full w-full flex-1 flex-col items-center justify-center overflow-x-hidden overflow-y-clip pb-20",
          className
        )}
      >
        {loading ? <Loading /> : <>{children}</>}
      </div>
      {!noFooter && !loading && <Footer />}
    </main>
  );
};

export default Layout;
