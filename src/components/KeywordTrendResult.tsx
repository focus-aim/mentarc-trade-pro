import { TrendingUp, Lightbulb, Target, Tag } from "lucide-react";

interface KeywordTrendResultProps {
  onSendPrompt?: (text: string) => void;
}

const SectionCard = ({ icon: Icon, title, children }: {
  icon: typeof Lightbulb;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="rounded-xl border border-border bg-background/40 p-3.5">
    <div className="flex items-center gap-1.5 mb-2">
      <Icon className="w-3.5 h-3.5 text-muted-foreground" />
      <h3 className="font-medium text-foreground text-[12.5px]">{title}</h3>
    </div>
    <div>{children}</div>
  </section>
);

type Comp = "极高" | "高" | "适中" | "低";
const COMP_CLS: Record<Comp, string> = {
  "极高": "text-destructive",
  "高": "text-destructive/80",
  "适中": "text-primary",
  "低": "text-success",
};

const TOP_KEYWORDS: { kw: string; trend: string; comp: Comp }[] = [
  { kw: "integrated solar street light 100W", trend: "+86%", comp: "适中" },
  { kw: "all in one solar street light 200W", trend: "+72%", comp: "高" },
  { kw: "solar street light for rural project", trend: "+58%", comp: "低" },
  { kw: "high lumen solar street light outdoor", trend: "+44%", comp: "高" },
  { kw: "solar street light with motion sensor", trend: "+39%", comp: "适中" },
  { kw: "LiFePO4 solar street light supplier", trend: "+33%", comp: "低" },
];

const LONGTAIL: { kw: string; trend: string }[] = [
  { kw: "integrated solar street light 100W price list", trend: "+112%" },
  { kw: "200W all in one solar street light for highway", trend: "+95%" },
  { kw: "solar street light bulk order Africa project", trend: "+78%" },
  { kw: "solar street light IP66 5 years warranty", trend: "+64%" },
  { kw: "remote control solar street light wholesale", trend: "+51%" },
  { kw: "solar street light OEM factory China", trend: "+42%" },
];

const KeywordTrendResult = (_props: KeywordTrendResultProps) => {
  return (
    <div className="space-y-3 text-[13px] leading-relaxed">
      {/* Header */}
      <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border border-primary/15 bg-gradient-to-r from-primary/[0.06] to-transparent">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/12 text-primary">
          <TrendingUp className="h-3.5 w-3.5" />
        </div>
        <p className="text-[13.5px] font-bold text-foreground leading-tight">
          热点关键词分析报告
        </p>
      </div>

      {/* 一、趋势概要 */}
      <SectionCard icon={Lightbulb} title="一、趋势概要">
        <div className="space-y-2 text-[12px] leading-[1.7]">
          <p className="text-foreground/85">
            基于近 30 天海外主流采购平台及搜索引擎数据：
          </p>
          <p className="text-foreground/85">
            <span className="text-muted-foreground">品类热度：</span>
            整体搜索量环比上涨 <span className="font-semibold text-destructive">22%</span>，主要增量来自<span className="font-medium text-foreground">东南亚及非洲基建项目</span>。
          </p>
          <p className="text-foreground/85">
            <span className="text-muted-foreground">核心痛点：</span>
            采购商搜索词中，带有 <span className="font-medium text-foreground">"Integrated（一体化）"</span> 和特定瓦数 <span className="font-medium text-foreground">"100W / 200W"</span> 的长尾词上涨趋势最明显。
          </p>
          <p className="text-foreground/85">
            <span className="text-muted-foreground">买家画像：</span>
            以<span className="font-medium text-foreground">海外工程承包商、市政照明项目方、本地分销商</span>为主，关注<span className="font-medium text-foreground">一体化结构、长质保、批量交付能力</span>，对单价敏感但更看重整体项目交付稳定性。
          </p>
        </div>
      </SectionCard>

      {/* 二、Top 趋势关键词 */}
      <SectionCard icon={Target} title="二、Top 趋势关键词">
        <div className="space-y-1.5">
          {TOP_KEYWORDS.map((k) => (
            <div key={k.kw} className="flex items-center gap-2 text-[11.5px] leading-snug">
              <span className="font-medium text-foreground flex-1 truncate">{k.kw}</span>
              <span className="shrink-0 text-[11px] font-semibold text-destructive tabular-nums w-12 text-right">{k.trend}</span>
              <span className={`shrink-0 text-[11px] font-semibold w-10 text-right ${COMP_CLS[k.comp]}`}>{k.comp}</span>
            </div>
          ))}
          <p className="text-[10px] text-muted-foreground pt-1 border-t border-border/40 mt-2">
            趋势 = 30 天搜索量环比 · 竞争度 = SEO / 广告投放强度
          </p>
        </div>
      </SectionCard>

      {/* 三、长尾关键词 */}
      <SectionCard icon={Tag} title="三、长尾关键词">
        <p className="text-[11.5px] text-foreground/80 leading-[1.7] mb-2">
          <span className="text-muted-foreground">趋势动因：</span>
          海外项目方倾向于直接搜索<span className="font-medium text-foreground">具体规格 + 应用场景 + 采购意图</span>词，反映询盘已进入选型与比价阶段。
        </p>
        <div className="space-y-1.5">
          {LONGTAIL.map((k) => (
            <div key={k.kw} className="flex items-center gap-2 text-[11.5px] leading-snug">
              <span className="font-medium text-foreground flex-1 truncate">{k.kw}</span>
              <span className="shrink-0 text-[11px] font-semibold text-destructive tabular-nums w-12 text-right">{k.trend}</span>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
};

export default KeywordTrendResult;
