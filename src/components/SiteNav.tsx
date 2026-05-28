import { useNavigate, useLocation } from "react-router-dom";
import mentarcLogoFull from "@/assets/mentarc-logo-full.png";

const SiteNav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const linkCls = (path: string) =>
    `transition-colors ${
      pathname === path
        ? "text-[hsl(217,100%,50%)] font-medium"
        : "text-[hsl(220,10%,35%)] hover:text-[hsl(217,100%,50%)]"
    }`;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-[hsl(220,15%,94%)]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => navigate("/")} className="flex items-center">
          <img src={mentarcLogoFull} alt="Mentarc 贸探" className="h-12 object-contain" />
        </button>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 text-sm">
            <button onClick={() => navigate("/updates")} className={linkCls("/updates")}>
              产品动态
            </button>
            <button onClick={() => navigate("/about")} className={linkCls("/about")}>
              关于我们
            </button>
          </div>
          <button
            onClick={() => navigate("/app")}
            className="px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[hsl(217,100%,50%)] hover:bg-[hsl(217,100%,45%)] hover:shadow-lg hover:shadow-[hsl(217,100%,50%)]/20 transition-all active:scale-[0.97]"
          >
            登录
          </button>
        </div>
      </div>
    </nav>
  );
};

export default SiteNav;
