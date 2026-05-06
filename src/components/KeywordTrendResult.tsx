import { TrendingUp, Flame, Lightbulb, Target, Tag } from "lucide-react";

interface KeywordTrendResultProps {
  onSendPrompt?: (text: string) => void;
}

const SectionCard = ({ icon: Icon, title, subtitle, children, action }: {
  icon: typeof Flame;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}) => (
  <div className="rounded-xl border border-border/70 bg-card/70 backdrop-blur-sm overflow-hidden">
    <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-border/60 bg-gradient-to-r from-primary/[0.04] to-transparent">
      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/10 text-primary">
        <Icon className="h-3.5 w-3.5" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[12.5px] font-bold text-foreground leading-tight">{title}</p>
        {subtitle && <p className="text-[10.5px] text-muted-foreground mt-0.5 truncate">{subtitle}</p>}
      </div>
      {action}
    </div>
    <div className="p-3.5">{children}</div>
  </div>
);

const CORE_INSIGHTS: { dim: string; conclusion: string }[] = [
  { dim: "场景迁移", conclusion: "应急搜索占比升至 58%，飓风/野火季提前是主因" },
  { dim: "搜索意图", conclusion: "\"for fridge/CPAP/gate opener\" 词群 +38%，用户直接问设备匹配" },
  { dim: "竞争格局", conclusion: "\"vs gas generator\" 增长快且竞品少，是对比内容蓝海" },
  { dim: "价格带", conclusion: "\"under $300\" 搜索涨但退货率高，实际价值带在 $400-$600" },
];

type Comp = "低" | "中" | "高" | "低→中";
const COMP_CLS: Record<Comp, string> = {
  "低": "text-success",
  "中": "text-primary",
  "高": "text-destructive",
  "低→中": "text-primary",
};

const TOP_KEYWORDS: { kw: string; trend: string; comp: Comp; region: string }[] = [
  { kw: "solar generator for home backup", trend: "+89%", comp: "中", region: "全美 · 东南部飓风区更高" },
  { kw: "emergency power backup for fridge", trend: "+61%", comp: "中", region: "全美 · 德州/佛州突出" },
  { kw: "portable power station with LiFePO4", trend: "+73%", comp: "低→中", region: "加州 · 东北部" },
  { kw: "best power station for CPAP machine", trend: "+52%", comp: "低", region: "老龄化州（佛州、宾州）" },
  { kw: "portable power station vs gas generator", trend: "+41%", comp: "低", region: "全美" },
  { kw: "power station under $300", trend: "+28%", comp: "高", region: "中西部价格敏感区" },
];

const LONGTAIL: { tier: string; tone: string; items: string[] }[] = [
  {
    tier: "家庭应急",
    tone: "text-destructive",
    items: [
      "backup power for garage door opener",
      "solar generator for sump pump",
      "emergency battery for refrigerator",
    ],
  },
  {
    tier: "医疗设备",
    tone: "text-destructive",
    items: [
      "power station for CPAP machine overnight",
      "battery backup for nebulizer",
    ],
  },
  {
    tier: "露营户外",
    tone: "text-primary",
    items: [
      "quiet generator for tent camping",
      "portable power for van life",
      "solar generator for RV AC",
    ],
  },
  {
    tier: "工作工具",
    tone: "text-primary",
    items: [
      "off-grid power for construction tools",
      "power station for laptop and monitor",
    ],
  },
  {
    tier: "日常便携",
    tone: "text-muted-foreground",
    items: [
      "lightweight power station for tailgating",
      "power bank for drone charging",
    ],
  },
];

const KeywordTrendResult = (_props: KeywordTrendResultProps) => {
  return (
    <div className="space-y-3 text-[13px] leading-relaxed">
      {/* Header — 仅标题 */}
      <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border border-primary/15 bg-gradient-to-r from-primary/[0.06] to-transparent">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/12 text-primary">
          <TrendingUp className="h-3.5 w-3.5" />
        </div>
        <p className="text-[13.5px] font-bold text-foreground leading-tight">
          热点关键词分析报告
        </p>
      </div>

      {/* 一、概述 — 纯文字总结 */}
      <SectionCard icon={Lightbulb} title="一、概述">
        <p className="text-[11.5px] text-foreground/85 leading-relaxed">
          产品 <span className="font-semibold text-foreground">便携式储能电源（200Wh-2000Wh）</span>，市场 <span className="font-semibold text-foreground">美国</span>，周期 <span className="font-semibold text-foreground">近 30 天</span>（飓风季 + 露营旺季）。家庭应急（<span className="font-semibold text-destructive">+45%</span>）首次超过露营（+12%），需求从"户外娱乐"转向"家电备电"；"vs 燃油发电机"对比词 <span className="font-semibold text-destructive">+41%</span>，决策期内容缺口明显。
        </p>
      </SectionCard>

      {/* 二、核心洞察 */}
      <SectionCard icon={Lightbulb} title="二、核心洞察">
        <div className="space-y-1.5">
          {CORE_INSIGHTS.map((it) => (
            <div key={it.dim} className="text-[11.5px] leading-snug">
              <span className="font-semibold text-foreground">{it.dim}</span>
              <span className="text-foreground/80"> — {it.conclusion}</span>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* 三、Top 趋势关键词 */}
      <SectionCard icon={Target} title="三、Top 趋势关键词">
        <div className="space-y-1.5">
          {TOP_KEYWORDS.map((k) => (
            <div key={k.kw} className="text-[11.5px] leading-snug">
              <div className="flex items-center gap-2">
                <span className="font-medium text-foreground flex-1 truncate">{k.kw}</span>
                <span className="shrink-0 text-[11px] font-semibold text-destructive tabular-nums">{k.trend}</span>
                <span className={`shrink-0 text-[11px] font-semibold w-8 text-right ${COMP_CLS[k.comp]}`}>{k.comp}</span>
              </div>
              <p className="text-[10.5px] text-muted-foreground truncate">{k.region}</p>
            </div>
          ))}
          <p className="text-[10px] text-muted-foreground pt-1 border-t border-border/40 mt-2">
            趋势 = 30 天搜索量同比 · 竞争 = SEO 投放强度
          </p>
        </div>
      </SectionCard>

      {/* 四、长尾场景词 */}
      <SectionCard icon={Tag} title="四、长尾场景词">
        <div className="space-y-2">
          {LONGTAIL.map((g) => (
            <div key={g.tier} className="text-[11.5px] leading-snug">
              <span className={`font-semibold ${g.tone}`}>{g.tier}：</span>
              <span className="text-foreground/80">{g.items.join("、")}</span>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
};

export default KeywordTrendResult;

