import { useState } from "react";
import { Lightbulb, Target, Tag, ChevronDown, Globe2 } from "lucide-react";

interface KeywordTrendResultProps {
  onSendPrompt?: (text: string) => void;
}

const SectionCard = ({ icon: Icon, title, children }: {
  icon: typeof Lightbulb;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="rounded-xl border border-border bg-card p-4">
    <div className="flex items-center gap-1.5 mb-3">
      <Icon className="w-4 h-4 text-muted-foreground" />
      <h3 className="font-semibold text-foreground text-[15px]">{title}</h3>
    </div>
    <div>{children}</div>
  </section>
);

type TrendTone = "up" | "down" | "flat";
const TREND_CLS: Record<TrendTone, string> = {
  up: "text-destructive",
  down: "text-success",
  flat: "text-muted-foreground",
};

const CORE_KEYWORDS: {
  category: string;
  keywords: string;
  trend: string;
  tone: TrendTone;
  markets: string;
}[] = [
  {
    category: "智能自动售货机",
    keywords: "Smart Vending Machine, Intelligent Vending Machine",
    trend: "+15%",
    tone: "up",
    markets: "东南亚、北美、欧洲",
  },
  {
    category: "综合机",
    keywords: "Combo Vending Machine",
    trend: "-8%",
    tone: "down",
    markets: "欧洲",
  },
  {
    category: "升降机",
    keywords: "Elevator Vending Machine",
    trend: "无明显波动",
    tone: "flat",
    markets: "中东",
  },
  {
    category: "格子自取生鲜柜",
    keywords: "Smart Locker, Refrigerated Locker",
    trend: "+22%",
    tone: "up",
    markets: "东南亚、南美、北美、欧洲",
  },
];

const PURCHASE_INTENT: { category: string; keywords: string; markets: string }[] = [
  {
    category: "智能自动售货机",
    keywords:
      "Vending machine supplier Malaysia; Wholesale smart vending machine price; Buy intelligent vending machine Europe",
    markets: "东南亚、北美、欧洲",
  },
  {
    category: "格子自取生鲜柜",
    keywords:
      "Smart locker manufacturer Singapore; Cost of refrigerated locker system; Fresh food locker for apartment building",
    markets: "东南亚、欧洲、北美",
  },
];

const FAQ_PHRASES: { category: string; keywords: string; markets: string }[] = [
  {
    category: "智能自动售货机",
    keywords:
      "How smart vending machines improve ROI?; What is an elevator vending machine?; Best vending machine for small business",
    markets: "东南亚、北美、欧洲、中东",
  },
  {
    category: "格子自取生鲜柜",
    keywords:
      "Smart lockers for last-mile delivery; How to choose a refrigerated locker?; Benefits of fresh food lockers",
    markets: "东南亚、南美、欧洲、北美",
  },
];

const LAYOUT_STRATEGY: { title: string; desc: string }[] = [
  {
    title: "独立站优化",
    desc: "核心词、功能词融入 TDK；场景词、问题短语用于解决方案和 FAQ。",
  },
  {
    title: "B2B 平台与本地化",
    desc: "标题结合核心词、功能词、采购长尾词；多语言内容精准融入本地化关键词。",
  },
  {
    title: "社媒与广告",
    desc: "趋势词作社媒话题；常见问题制作图文 / 视频；精准投放高转化关键词。",
  },
];


const MARKET_ROWS: {
  market: string;
  language: string;
  focus: string;
  behavior: string;
}[] = [
  {
    market: "东南亚",
    language: "英语（含本地化后缀）",
    focus: "智能互联、移动支付、运营效率",
    behavior: "偏好技术先进、能提升效率的解决方案；重视品牌信誉和售后服务。",
  },
  {
    market: "南美",
    language: "西班牙语 / 葡萄牙语",
    focus: "价格优势、产品耐用、本地支持",
    behavior: "对价格敏感，重视本地化支付和物流；倾向于寻找有本地化经验的供应商。",
  },
  {
    market: "欧洲",
    language: "英语 / 德语 / 法语",
    focus: "环保节能、法规合规、设计美学",
    behavior: "注重产品品质与认证，对创新和可持续性有较高要求。",
  },
];

const KeywordTrendResult = (_props: KeywordTrendResultProps) => {
  const [reportOpen, setReportOpen] = useState(false);

  return (
    <div className="space-y-3 text-base leading-relaxed">
      {/* 模块 1：趋势概要 */}
      <SectionCard icon={Lightbulb} title="趋势概要">
        <div className="space-y-4">
          <div>
            <h4 className="text-[15px] font-semibold text-foreground mb-1.5">
              市场趋势概览
              <span className="ml-1.5 text-[12px] font-normal text-muted-foreground">
                Market Trend Overview
              </span>
            </h4>
          </div>

          <div>
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="inline-block w-1 h-3.5 rounded-full bg-primary" />
              <h5 className="text-[14px] font-semibold text-foreground">核心发现</h5>
            </div>
            <p className="text-[14px] text-foreground/85 leading-[1.75]">
              智能自动售货机市场呈现多元化趋势：<span className="font-medium text-foreground">东南亚</span>对智能化、无现金支付需求强劲，英语为主；
              <span className="font-medium text-foreground">南美</span>关注性价比、耐用性及本地化服务，西语 / 葡语是关键；
              <span className="font-medium text-foreground">欧洲</span>则强调环保节能、法规合规与设计美学。
            </p>
          </div>

          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <Globe2 className="w-3.5 h-3.5 text-primary" />
              <h5 className="text-[14px] font-semibold text-foreground">目标市场画像</h5>
            </div>
            <div className="overflow-hidden rounded-lg border border-border/60">
              <table className="w-full text-[12px] border-collapse">
                <thead>
                  <tr className="bg-muted/40 text-muted-foreground">
                    <th className="text-left font-medium px-3 py-2 w-[72px]">目标市场</th>
                    <th className="text-left font-medium px-3 py-2 w-[140px]">核心商业语言</th>
                    <th className="text-left font-medium px-3 py-2">市场主要关注点</th>
                    <th className="text-left font-medium px-3 py-2">采购行为特点</th>
                  </tr>
                </thead>
                <tbody>
                  {MARKET_ROWS.map((row, i) => (
                    <tr
                      key={row.market}
                      className={`border-t border-border/40 align-top ${i % 2 === 1 ? "bg-muted/15" : ""}`}
                    >
                      <td className="px-3 py-2 text-foreground font-semibold whitespace-nowrap">{row.market}</td>
                      <td className="px-3 py-2 text-foreground/85">{row.language}</td>
                      <td className="px-3 py-2 text-foreground/85">{row.focus}</td>
                      <td className="px-3 py-2 text-foreground/85 leading-[1.65]">{row.behavior}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* 模块 2：产品关键词分析报告（折叠） */}
      <section className="rounded-xl border border-border bg-card overflow-hidden">
        <button
          onClick={() => setReportOpen((v) => !v)}
          className="w-full flex items-center gap-2 px-4 py-3 hover:bg-muted/30 transition-colors"
        >
          <Target className="w-4 h-4 text-muted-foreground" />
          <h3 className="font-semibold text-foreground text-[15px]">产品关键词分析报告</h3>
          <span className="ml-2 text-[11px] text-muted-foreground">
            Top 趋势 + 长尾关键词
          </span>
          <ChevronDown
            className={`w-4 h-4 ml-auto text-muted-foreground transition-transform duration-200 ${reportOpen ? "rotate-180" : ""}`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-out ${reportOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="px-4 pb-4 pt-1 space-y-4 border-t border-border/60">
            {/* Top 趋势关键词 */}
            <div>
              <div className="flex items-center gap-1.5 mb-2 mt-3">
                <Target className="w-3.5 h-3.5 text-muted-foreground" />
                <h4 className="font-medium text-foreground text-[13px]">Top 趋势关键词</h4>
              </div>
              <div className="overflow-hidden rounded-lg border border-border/60">
                <table className="w-full text-[11.5px] border-collapse">
                  <thead>
                    <tr className="bg-muted/40 text-muted-foreground">
                      <th className="text-left font-medium px-2.5 py-1.5">关键词</th>
                      <th className="text-right font-medium px-2.5 py-1.5 w-[88px]">近30天趋势</th>
                      <th className="text-right font-medium px-2.5 py-1.5 w-[72px]">竞争度</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TOP_KEYWORDS.map((k, i) => (
                      <tr key={k.kw} className={`border-t border-border/40 ${i % 2 === 1 ? "bg-muted/15" : ""}`}>
                        <td className="px-2.5 py-1.5 text-foreground font-medium">{k.kw}</td>
                        <td className="px-2.5 py-1.5 text-right font-semibold text-destructive tabular-nums">{k.trend}</td>
                        <td className={`px-2.5 py-1.5 text-right font-semibold ${COMP_CLS[k.comp]}`}>{k.comp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[10px] text-muted-foreground pt-1.5">
                趋势 = 30 天搜索量环比 · 竞争度 = SEO / 广告投放强度
              </p>
            </div>

            {/* 长尾关键词 */}
            <div>
              <div className="flex items-center gap-1.5 mb-2">
                <Tag className="w-3.5 h-3.5 text-muted-foreground" />
                <h4 className="font-medium text-foreground text-[13px]">长尾关键词</h4>
              </div>
              <p className="text-[11.5px] text-foreground/80 leading-[1.7] mb-2">
                <span className="text-muted-foreground">趋势动因：</span>
                海外项目方倾向于直接搜索<span className="font-medium text-foreground">具体规格 + 应用场景 + 采购意图</span>词，反映询盘已进入选型与比价阶段。
              </p>
              <div className="overflow-hidden rounded-lg border border-border/60">
                <table className="w-full text-[11.5px] border-collapse">
                  <thead>
                    <tr className="bg-muted/40 text-muted-foreground">
                      <th className="text-left font-medium px-2.5 py-1.5">长尾关键词</th>
                      <th className="text-right font-medium px-2.5 py-1.5 w-[88px]">近30天趋势</th>
                    </tr>
                  </thead>
                  <tbody>
                    {LONGTAIL.map((k, i) => (
                      <tr key={k.kw} className={`border-t border-border/40 ${i % 2 === 1 ? "bg-muted/15" : ""}`}>
                        <td className="px-2.5 py-1.5 text-foreground font-medium">{k.kw}</td>
                        <td className="px-2.5 py-1.5 text-right font-semibold text-destructive tabular-nums">{k.trend}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeywordTrendResult;
