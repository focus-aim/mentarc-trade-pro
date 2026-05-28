import SiteNav from "@/components/SiteNav";
import { Building2, Mail } from "lucide-react";
import wechatQr from "@/assets/wechat-service-qr.png";
import imgExperience from "@/assets/about-experience.jpg";
import imgAiTech from "@/assets/about-ai-tech.jpg";
import imgEasyUse from "@/assets/about-easy-use.jpg";

type Section = {
  title: string;
  image: string;
  align: "left" | "right";
  points: { strong?: string; text: string }[];
};

const SECTIONS: Section[] = [
  {
    title: "30年外贸经验沉淀",
    image: imgExperience,
    align: "left",
    points: [
      { text: "30年积累", strong: "海量独家外贸课程 + 资料 + 实战经验" },
      { strong: "AI 萃取精华生成知识库", text: "，对话即可直接调用" },
    ],
  },
  {
    title: "先进 AI 技术助力订单转化",
    image: imgAiTech,
    align: "right",
    points: [
      { strong: "订单全流程专业指导", text: "，给到专业跟进建议" },
      { text: "接入时下", strong: "先进大模型 + 图片和视频生成技术" },
      { strong: "一键制作 / 优化产品详情", text: "，提高竞争力" },
      { text: "持续的", strong: "长记忆助力企业沉淀 AI 数字资产" },
    ],
  },
  {
    title: "使用 0 门槛，点开即用",
    image: imgEasyUse,
    align: "left",
    points: [
      { text: "封装", strong: "多项外贸常见任务 Skill" },
      { strong: "无需安装直接可用", text: "，将使用门槛降到最低" },
      { text: "持续学习和更新，打破信息壁垒" },
    ],
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-white text-[hsl(220,20%,14%)]">
      <SiteNav />

      {/* Hero */}
      <section className="relative pt-16 pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(217,60%,97%)] via-white to-[hsl(174,50%,97%)]" />
        <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-[hsl(217,100%,50%)]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full bg-[hsl(174,100%,62%)]/10 blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[hsl(217,100%,50%)]/15 bg-[hsl(217,100%,50%)]/5 mb-5">
            <Building2 className="w-3.5 h-3.5 text-[hsl(217,100%,45%)]" />
            <span className="text-xs font-medium text-[hsl(217,100%,45%)]">关于我们</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            提升外贸订单转化的
            <span className="bg-gradient-to-r from-[hsl(217,100%,50%)] to-[hsl(174,100%,42%)] bg-clip-text text-transparent">
              专业 AI 工具
            </span>
          </h1>
          <p className="mt-5 text-[hsl(220,10%,42%)] leading-relaxed text-base max-w-2xl mx-auto">
            贸探 Mentarc 是焦点科技于 2026 年推出的一款专注提升外贸订单转化的 AI 工具，
            将 30 年外贸行业积淀与前沿 AI 能力结合，让每一位外贸人都能更高效地拿下订单。
          </p>
        </div>
      </section>

      {/* Feature pills */}
      <section className="max-w-5xl mx-auto px-6 pb-16 space-y-6">
        {SECTIONS.map((s, i) => (
          <article
            key={s.title}
            className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[hsl(217,100%,97%)] via-white to-[hsl(174,60%,97%)] border border-white shadow-[0_8px_40px_-12px_hsl(217,100%,50%,0.15)] backdrop-blur-sm"
          >
            <div
              className={`flex flex-col ${
                s.align === "left" ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-6 md:gap-10 p-6 md:p-10`}
            >
              {/* Text side */}
              <div className="flex-1 w-full">
                <div className="inline-flex items-center px-4 py-2 rounded-2xl bg-gradient-to-r from-[hsl(217,100%,50%)] to-[hsl(217,100%,60%)] text-white text-lg font-semibold shadow-[0_6px_20px_-6px_hsl(217,100%,50%,0.5)] mb-5">
                  <span className="opacity-70 mr-2 text-sm font-mono">
                    0{i + 1}
                  </span>
                  {s.title}
                </div>
                <ul className="space-y-3">
                  {s.points.map((p, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-[15px] leading-relaxed text-[hsl(220,15%,25%)]"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[hsl(217,100%,50%)] shrink-0" />
                      <span>
                        {p.strong && p.text && !p.text.startsWith("，") ? (
                          <>
                            {p.text}
                            <strong className="font-semibold text-[hsl(220,20%,14%)]">
                              {p.strong}
                            </strong>
                          </>
                        ) : p.strong ? (
                          <>
                            <strong className="font-semibold text-[hsl(220,20%,14%)]">
                              {p.strong}
                            </strong>
                            {p.text}
                          </>
                        ) : (
                          p.text
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image side */}
              <div className="shrink-0 w-full md:w-[300px]">
                <div className="relative aspect-square rounded-3xl overflow-hidden bg-white/60 border border-white shadow-inner">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Contact */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-br from-[hsl(217,100%,98%)] via-white to-[hsl(174,60%,97%)] border border-[hsl(220,15%,92%)] rounded-[32px] p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
          <div className="shrink-0 bg-white p-3 rounded-2xl shadow-sm border border-[hsl(220,15%,92%)]">
            <img src={wechatQr} alt="企微客服二维码" className="w-44 h-44 object-contain" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(217,100%,96%)] text-[hsl(217,100%,45%)] text-xs font-medium mb-3">
              <Mail className="w-3.5 h-3.5" />
              联系我们
            </div>
            <h2 className="text-2xl font-bold mb-2">扫码添加企微客服</h2>
            <p className="text-[hsl(220,10%,42%)] leading-relaxed">
              产品咨询、试用申请、企业合作、定制方案，欢迎扫码联系我们专属顾问，
              将在 1 个工作日内回复。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
