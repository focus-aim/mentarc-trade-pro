import SiteNav from "@/components/SiteNav";
import { Building2, BookOpen, Sparkles, Zap, Mail, Check } from "lucide-react";
import wechatQr from "@/assets/wechat-service-qr.png";

const FEATURES = [
  {
    icon: BookOpen,
    title: "30年外贸经验沉淀",
    points: [
      "30年积累海量独家外贸课程、资料与实战经验",
      "AI 萃取精华生成知识库，对话即可直接调用",
    ],
  },
  {
    icon: Sparkles,
    title: "先进 AI 技术助力订单转化",
    points: [
      "订单全流程专业指导，给到可执行的跟进建议",
      "接入时下先进大模型 + 图片和视频生成技术",
      "一键制作 / 优化产品详情，提高竞争力",
      "持续的长记忆助力企业沉淀 AI 数字资产",
    ],
  },
  {
    icon: Zap,
    title: "使用 0 门槛，点开即用",
    points: [
      "封装多项外贸常见任务 Skill，开箱即用",
      "持续学习和更新，打破信息壁垒",
    ],
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-white text-[hsl(220,20%,14%)]">
      <SiteNav />

      <section className="relative pt-16 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(217,60%,97%)] via-white to-[hsl(174,50%,97%)]" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[hsl(217,100%,50%)]/15 bg-[hsl(217,100%,50%)]/5 mb-5">
            <Building2 className="w-3.5 h-3.5 text-[hsl(217,100%,45%)]" />
            <span className="text-xs font-medium text-[hsl(217,100%,45%)]">关于我们</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">提升外贸订单转化的专业 AI 工具</h1>
          <p className="mt-4 text-[hsl(220,10%,42%)] leading-relaxed text-base">
            贸探 Mentarc 是焦点科技于 2026 年推出的一款专注提升外贸订单转化的 AI
            工具，将 30 年外贸行业积淀与前沿 AI 能力结合，让每一位外贸人都能更高效地拿下订单。
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-12">
        <div className="grid md:grid-cols-3 gap-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="bg-white/80 backdrop-blur-sm border border-[hsl(220,15%,92%)] rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="w-10 h-10 rounded-xl bg-[hsl(217,100%,96%)] text-[hsl(217,100%,45%)] flex items-center justify-center mb-3">
                <f.icon className="w-5 h-5" />
              </div>
              <div className="text-base font-semibold mb-3">{f.title}</div>
              <ul className="space-y-2">
                {f.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2 text-sm text-[hsl(220,10%,42%)] leading-relaxed"
                  >
                    <Check className="w-3.5 h-3.5 mt-1 shrink-0 text-[hsl(217,100%,45%)]" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-br from-[hsl(217,100%,98%)] via-white to-[hsl(174,60%,97%)] border border-[hsl(220,15%,92%)] rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
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
              产品咨询、试用申请、企业合作、定制方案，欢迎扫码联系我们专属顾问，将在 1
              个工作日内回复。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
