import SiteNav from "@/components/SiteNav";
import { Building2, Target, Sparkles, Users, Mail } from "lucide-react";
import wechatQr from "@/assets/wechat-service-qr.png";

const VALUES = [
  {
    icon: Target,
    title: "专业可信",
    desc: "由资深外贸从业者与 AI 专家共同打磨，结果可落地、可复用。",
  },
  {
    icon: Sparkles,
    title: "持续进化",
    desc: "每周迭代，每个反馈都被认真对待，让 AI 更懂中国外贸人。",
  },
  {
    icon: Users,
    title: "用户为先",
    desc: "服务从小微到大型外贸团队，让每位业务都拥有 AI 专家团队。",
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
          <h1 className="text-4xl font-bold tracking-tight">让每位外贸人，都拥有自己的 AI 专家团队</h1>
          <p className="mt-4 text-[hsl(220,10%,42%)] leading-relaxed">
            贸探（Mentarc）是面向中国外贸行业的 AI
            专家协作平台。我们将业务、运营、培训三类外贸核心能力沉淀为可对话的 AI
            专家，帮助外贸人在客户分析、产品优化、市场判断等场景中，更快做出更专业的决策。
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-12">
        <div className="grid md:grid-cols-3 gap-4">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="bg-white/80 backdrop-blur-sm border border-[hsl(220,15%,92%)] rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-xl bg-[hsl(217,100%,96%)] text-[hsl(217,100%,45%)] flex items-center justify-center mb-3">
                <v.icon className="w-5 h-5" />
              </div>
              <div className="text-base font-semibold mb-1.5">{v.title}</div>
              <div className="text-sm text-[hsl(220,10%,42%)] leading-relaxed">{v.desc}</div>
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
