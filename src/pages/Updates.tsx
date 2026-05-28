import SiteNav from "@/components/SiteNav";
import { Sparkles } from "lucide-react";

interface ReleaseItem {
  version: string;
  date: string;
  tag: "新功能" | "优化" | "修复";
  title: string;
  highlights: string[];
}

const RELEASES: ReleaseItem[] = [
  {
    version: "v1.4.0",
    date: "2026-05-20",
    tag: "新功能",
    title: "AI 回答评价与反馈闭环",
    highlights: [
      "聊天结果新增点赞/点踩评价入口",
      "点踩弹窗支持标签选择与自由文本反馈",
      "反馈数据用于持续优化各专家输出质量",
    ],
  },
  {
    version: "v1.3.0",
    date: "2026-05-08",
    tag: "新功能",
    title: "培训专家上线 · 行业知识咨询",
    highlights: [
      "新增培训专家「Eva」",
      "支持市场趋势、产品机会、平台运营等 6 大主题咨询",
      "右侧能力模块面板，知识源可视化",
    ],
  },
  {
    version: "v1.2.0",
    date: "2026-04-22",
    tag: "新功能",
    title: "运营专家 · 产品详情页生成",
    highlights: [
      "产品资料一键生成英文详情页",
      "卖点拆解、SEO 关键词、图文素材组合输出",
      "支持下载与二次编辑",
    ],
  },
  {
    version: "v1.1.0",
    date: "2026-04-05",
    tag: "新功能",
    title: "业务专家 · 询盘分析体系",
    highlights: [
      "客户动机、行业动态、资质合规三大研判模块",
      "结构化卡片输出，配套回复模板",
      "支持跟进策略与背调链路",
    ],
  },
  {
    version: "v1.0.0",
    date: "2026-03-15",
    tag: "新功能",
    title: "贸探正式发布",
    highlights: [
      "AI 外贸专家团队首次亮相",
      "工作台 · 任务成果 · 团队管理基础能力上线",
      "贸力值体系与试用机制开放",
    ],
  },
];

const tagStyle: Record<ReleaseItem["tag"], string> = {
  新功能: "bg-[hsl(217,100%,96%)] text-[hsl(217,100%,45%)] border-[hsl(217,100%,88%)]",
  优化: "bg-[hsl(174,60%,95%)] text-[hsl(174,80%,30%)] border-[hsl(174,60%,85%)]",
  修复: "bg-[hsl(40,90%,95%)] text-[hsl(35,90%,40%)] border-[hsl(40,90%,85%)]",
};

const Updates = () => {
  return (
    <div className="min-h-screen bg-white text-[hsl(220,20%,14%)]">
      <SiteNav />

      <section className="relative pt-16 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(217,60%,97%)] via-white to-[hsl(174,50%,97%)]" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[hsl(217,100%,50%)]/15 bg-[hsl(217,100%,50%)]/5 mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[hsl(217,100%,45%)]" />
            <span className="text-xs font-medium text-[hsl(217,100%,45%)]">产品动态</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">版本更新历程</h1>
          <p className="mt-3 text-[hsl(220,10%,42%)]">
            记录贸探每一次迭代，让每位外贸人都能用上更聪明的 AI 专家。
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-24">
        <ol className="relative border-l border-[hsl(220,15%,90%)] ml-3">
          {RELEASES.map((r) => (
            <li key={r.version} className="mb-8 ml-6">
              <span className="absolute -left-[7px] mt-2 w-3.5 h-3.5 rounded-full bg-white border-2 border-[hsl(217,100%,50%)] shadow-sm" />
              <div className="bg-white/80 backdrop-blur-sm border border-[hsl(220,15%,92%)] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs text-[hsl(220,10%,50%)]">{r.date}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[11px] border ${tagStyle[r.tag]}`}>
                    {r.tag}
                  </span>
                </div>
                <h2 className="text-lg font-semibold mb-3">{r.title}</h2>
                <ul className="space-y-1.5 text-sm text-[hsl(220,10%,35%)]">
                  {r.highlights.map((h, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[hsl(217,100%,50%)] shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
};

export default Updates;
