import { useState } from "react";
import {
  Sparkles,
  MessageCircleHeart,
  BookOpen,
  Plus,
  Check,
  Wand2,
  X,
  Package,
  Target,
  Globe,
  FileUp,
  ShieldCheck,
  PenLine,
  TrendingUp,
  Users,
  Handshake,
  Megaphone,
  Lightbulb,
} from "lucide-react";
import { cn } from "@/lib/utils";
import operationAvatar from "@/assets/expert-operation.jpg";
import businessAvatar from "@/assets/expert-business.jpg";
import trainingAvatar from "@/assets/expert-training.jpg";

interface CompanyForm {
  mainProducts: string;
  targetMarket: string;
  website: string;
  docName: string;
  certifications: string;
}

interface PreferenceItem {
  id: string;
  title: string;
  source: string;
  detectedAt: string;
  isNew?: boolean;
}

interface ExpertSkillEntry {
  name: string;
  desc: string;
  updatedAt: string;
  isRecent?: boolean;
}

interface ExpertSkillBlock {
  expert: { name: string; role: string; avatar: string; tasks: number; tagline: string };
  skills: ExpertSkillEntry[];
}

const experts = [
  { name: "Allen", role: "业务专家", avatar: businessAvatar, tasks: 17, tagline: "询盘到成交全流程" },
  { name: "Bella", role: "运营专家", avatar: operationAvatar, tasks: 13, tagline: "选品·内容·转化" },
  { name: "Cici", role: "培训专家", avatar: trainingAvatar, tasks: 11, tagline: "市场·合规·风控" },
];

const initialCompanyForm: CompanyForm = {
  mainProducts: "双层不锈钢真空保温杯（12 款 SKU，含运动、商务、儿童系列）",
  targetMarket: "欧洲、北美、澳洲；DTC 品牌、垂直进口商",
  website: "https://www.example-trade.com",
  docName: "产品认证与合规资料.pdf",
  certifications: "FDA、LFGB、FCC、CE",
};

const initialPreferences: PreferenceItem[] = [
  {
    id: "p1",
    title: "回复风格更倾向克制专业，少用营销修辞",
    source: "归纳自近 8 次询盘回复",
    detectedAt: "今天",
    isNew: true,
  },
  {
    id: "p2",
    title: "详情图偏好居家实景叠加数据卖点",
    source: "归纳自 3 次详情页生成",
    detectedAt: "2 天前",
    isNew: true,
  },
  {
    id: "p3",
    title: "重点跟进欧洲、北美中大型采购方（≥1×40HQ）",
    source: "归纳自买家背调与跟进策略会话",
    detectedAt: "5 天前",
  },
  {
    id: "p4",
    title: "高频卖点：保温 12h、双层真空、防漏",
    source: "归纳自 12 次产品对话",
    detectedAt: "1 周前",
  },
];

interface InsightItem {
  headline: string;
  evidence: string;
  source: string;
}

// 专家实战经验：分两个子板块（精简，每组 2 条要点）
const expertExperienceGroups: {
  key: string;
  title: string;
  desc: string;
  items: string[];
}[] = [
  {
    key: "follow-up",
    title: "客户跟进技巧",
    desc: "1200+ 跟进会话沉淀",
    items: [
      "未回复客户 D+3 发「样品图 + 同类案例」，回复率提升 2 倍",
      "高意向客户走「样品 → 合同 → 试单」三步，2 周内锁单",
    ],
  },
  {
    key: "cases",
    title: "500+ 真实外贸案例",
    desc: "覆盖欧美、中东核心市场",
    items: [
      "德国 DTC · 保温杯 5000 pcs 首单，14 天锁单",
      "美亚卖家 · 试单 → 2×40HQ 复购，周期 45 天",
    ],
  },
];

// 团队经验技巧：一行文本 + 来自业务员
const teamSkillItems: { headline: string; author: string }[] = [
  { headline: "首封回复先抛澄清问题，再给方案", author: "Rita" },
  { headline: "报价用「标准 / 定制 / 品牌」三档组合", author: "Jason" },
  { headline: "详情页用使用场景替代技术参数", author: "Cody" },
  { headline: "差异化卖点放首屏，认证背书收尾", author: "Cody" },
];

const expertSkillBlocks: ExpertSkillBlock[] = [
  {
    expert: experts[0],
    skills: [
      { name: "询盘意图分级与回复", desc: "识别采购真伪，匹配多语种回复模版", updatedAt: "今天", isRecent: true },
      { name: "买家背景调查", desc: "结合海关数据与公开资料，定位决策人", updatedAt: "1 周前" },
      { name: "报价与议价策略", desc: "FOB / CIF / DDP 组合报价与让价建议", updatedAt: "2 周前" },
    ],
  },
  {
    expert: experts[1],
    skills: [
      { name: "高转化详情页生成", desc: "首图、卖点、信任背书全链路结构", updatedAt: "今天", isRecent: true },
      { name: "多平台营销素材", desc: "Alibaba、Amazon、TikTok 图文与脚本", updatedAt: "3 天前" },
      { name: "SEO 标题优化", desc: "结合搜索热词与买家提问重写标题", updatedAt: "2 周前" },
    ],
  },
  {
    expert: experts[2],
    skills: [
      { name: "目标市场行情解读", desc: "需求周期、价格带与重点采购展会", updatedAt: "昨天", isRecent: true },
      { name: "出口合规与认证", desc: "FDA、CE、LFGB 等认证要点答疑", updatedAt: "1 周前" },
    ],
  },
];

type TabKey = "company" | "preference" | "skills";

const focusChips = ["保温杯", "户外水壶", "运动水杯", "儿童学饮杯", "礼品杯", "商务杯"];
const marketChips = ["欧洲", "北美", "澳洲", "中东", "东南亚", "拉美"];

const AIProfileDetail = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("company");
  const [company, setCompany] = useState<CompanyForm>(initialCompanyForm);
  const [companyEditing, setCompanyEditing] = useState(false);
  const [draft, setDraft] = useState<CompanyForm>(initialCompanyForm);
  const [preferences, setPreferences] = useState<PreferenceItem[]>(initialPreferences);

  const newPreferenceCount = preferences.filter((p) => p.isNew).length;

  const startEditCompany = () => {
    setDraft(company);
    setCompanyEditing(true);
  };
  const cancelEditCompany = () => setCompanyEditing(false);
  const saveCompany = () => {
    setCompany(draft);
    setCompanyEditing(false);
  };

  const dismissPreference = (id: string) =>
    setPreferences((prev) => prev.filter((p) => p.id !== id));
  const adoptPreference = (id: string) =>
    setPreferences((prev) => prev.map((p) => (p.id === id ? { ...p, isNew: false } : p)));

  const tabs: { key: TabKey; label: string; badge?: number }[] = [
    { key: "company", label: "企业知识" },
    { key: "preference", label: "团队经验", badge: newPreferenceCount },
    { key: "skills", label: "AI 技能" },
  ];

  return (
    <main className="flex-1 h-screen overflow-y-auto scrollbar-thin bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-12 sm:px-10 lg:px-14">
        {/* Eyebrow + display headline */}
        <section className="opacity-0 animate-fade-up" style={{ animationDelay: "60ms" }}>
          <p className="text-[11px] font-semibold tracking-[0.18em] text-muted-foreground/80">专属专家进化历程</p>
          <h1 className="mt-3 text-[28px] font-bold leading-[1.1] tracking-tight text-foreground sm:text-[32px]">
            AI团队档案
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            档案承载企业一手资料、AI 在协作中沉淀的偏好，以及三位专家的专业能力图谱。
          </p>
        </section>

        {/* Hero band */}
        <section
          className="relative mt-10 overflow-hidden rounded-[28px] border border-border/60 bg-gradient-to-br from-accent/60 via-card to-secondary/40 px-6 py-5 shadow-sm sm:px-8 sm:py-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "140ms" }}
        >
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/8 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-secondary/40 blur-3xl" />

          <div className="relative flex flex-col items-start gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex shrink-0 -space-x-3">
                {experts.map((e, i) => (
                  <div
                    key={e.name}
                    className="relative h-12 w-12 overflow-hidden rounded-full border-[3px] border-card shadow-sm transition-transform hover:z-10 hover:scale-105"
                    style={{ zIndex: 3 - i }}
                    title={`${e.name} · ${e.role}`}
                  >
                    <img src={e.avatar} alt={e.name} className="h-full w-full object-cover object-top" loading="lazy" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-[15px] font-bold text-foreground">
                  3 位在职 AI 专家 · 已协作 <span className="text-primary">23</span> 天
                </p>
                <p className="mt-1 text-[12.5px] text-muted-foreground">
                  累计承接 41 项任务 · 沉淀 12 条专属偏好 · 同步 7 项行业更新
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {experts.map((e) => (
                <span
                  key={e.name}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/80 px-3 py-1.5 text-[12px] font-medium text-foreground/85 backdrop-blur-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-success" />
                  {e.name} · {e.tasks} 任务
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="mt-10 opacity-0 animate-fade-up" style={{ animationDelay: "200ms" }}>
          <div className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-card/70 p-1 backdrop-blur-sm">
            {tabs.map((tab) => {
              const active = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={cn(
                    "relative inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[13px] font-semibold transition-all",
                    active
                      ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {tab.label}
                  {tab.badge && tab.badge > 0 ? (
                    <span
                      className={cn(
                        "inline-flex h-4 min-w-[16px] items-center justify-center rounded-full px-1 text-[10px] font-bold",
                        active
                          ? "bg-primary-foreground/20 text-primary-foreground"
                          : "bg-primary/12 text-primary"
                      )}
                    >
                      +{tab.badge}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        </section>

        {/* Module 1: 企业知识库 — 复用初始化表单视觉与交互 */}
        {activeTab === "company" && (
          <section className="mt-6 opacity-0 animate-fade-up" style={{ animationDelay: "220ms" }}>
            <ModuleHeader
              icon={BookOpen}
              title="企业知识库"
              sub="沉淀企业知识,让 AI 真正懂你,并在每次生成中持续应用"
              actions={
                !companyEditing ? (
                  <button
                    onClick={startEditCompany}
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-accent transition-colors"
                  >
                    <PenLine className="h-3.5 w-3.5" />
                    编辑
                  </button>
                ) : (
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                    编辑中
                  </span>
                )
              }
            />

            <div className="relative mt-4 overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-card/85 via-card/75 to-primary/5 p-5 shadow-sm backdrop-blur-md sm:p-6">
              <div aria-hidden className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
              <div aria-hidden className="pointer-events-none absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-secondary/15 blur-3xl" />

              <div className="relative space-y-2.5">
                <FormRow
                  icon={Package}
                  label="主营产品"
                  required
                  value={companyEditing ? draft.mainProducts : company.mainProducts}
                  placeholder="说说你卖什么，比如 不锈钢保温杯"
                  disabled={!companyEditing}
                  onChange={(v) => setDraft({ ...draft, mainProducts: v })}
                  chips={companyEditing ? focusChips : undefined}
                  onChipToggle={(chip) => {
                    const current = draft.mainProducts;
                    if (current.includes(chip)) {
                      setDraft({ ...draft, mainProducts: current.split(/[、,，\s]+/).filter((r) => r && r !== chip).join("、") });
                    } else {
                      setDraft({ ...draft, mainProducts: current ? `${current}、${chip}` : chip });
                    }
                  }}
                />

                <FormRow
                  icon={Target}
                  label="目标市场与买家画像"
                  required
                  value={companyEditing ? draft.targetMarket : company.targetMarket}
                  placeholder="覆盖区域 / 买家类型"
                  disabled={!companyEditing}
                  onChange={(v) => setDraft({ ...draft, targetMarket: v })}
                  chips={companyEditing ? marketChips : undefined}
                  onChipToggle={(chip) => {
                    const current = draft.targetMarket;
                    if (current.includes(chip)) {
                      setDraft({ ...draft, targetMarket: current.split(/[、,，\s]+/).filter((r) => r && r !== chip).join("、") });
                    } else {
                      setDraft({ ...draft, targetMarket: current ? `${current}、${chip}` : chip });
                    }
                  }}
                />

                <FormRow
                  icon={Globe}
                  label="企业官网"
                  optional
                  value={companyEditing ? draft.website : company.website}
                  placeholder="贴上网址，AI 自动抓取分析"
                  disabled={!companyEditing}
                  onChange={(v) => setDraft({ ...draft, website: v })}
                />

                <FormRow
                  icon={ShieldCheck}
                  label="资质与认证"
                  optional
                  value={companyEditing ? draft.certifications : company.certifications}
                  placeholder="例如 FDA、CE、LFGB"
                  disabled={!companyEditing}
                  onChange={(v) => setDraft({ ...draft, certifications: v })}
                />

                <label
                  className={cn(
                    "group flex items-center gap-2 rounded-2xl border border-dashed border-border/60 bg-background/40 px-3.5 py-2.5 transition-all duration-200",
                    companyEditing ? "cursor-pointer hover:border-primary/40 hover:bg-primary/5" : "pointer-events-none opacity-90"
                  )}
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                    <FileUp className="h-3.5 w-3.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10.5px] font-medium text-muted-foreground">
                      产品资料 <span className="text-muted-foreground/70">· 选填</span>
                    </div>
                    <div className="truncate text-[13px] text-foreground/80">
                      {(companyEditing ? draft.docName : company.docName) || "拖拽或点击上传 PDF / Word / Excel"}
                    </div>
                  </div>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) setDraft({ ...draft, docName: file.name });
                    }}
                  />
                </label>
              </div>

              {companyEditing && (
                <div className="relative mt-5 flex items-center gap-2">
                  <button
                    onClick={saveCompany}
                    className="group relative inline-flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-[hsl(217,100%,58%)] px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 hover:scale-[1.005] active:scale-[0.99]"
                  >
                    <span aria-hidden className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    <Sparkles className="h-4 w-4" />
                    保存并重新对齐
                  </button>
                  <button
                    onClick={cancelEditCompany}
                    className="inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-background/70 px-5 py-2.5 text-sm font-medium text-foreground hover:bg-accent transition-colors"
                  >
                    取消
                  </button>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Module 2: 团队经验 */}
        {activeTab === "preference" && (
          <section className="mt-6 opacity-0 animate-fade-up" style={{ animationDelay: "220ms" }}>
            <ModuleHeader
              icon={MessageCircleHeart}
              title="团队经验"
              sub="AI 从历史会话中沉淀的市场认知与团队打法"
              actions={
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                  <Sparkles className="h-3 w-3" />
                  本周持续学习中
                </span>
              }
            />

            {/* 左右两栏：实战经验 + 团队技巧 */}
            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              {/* 左：专家实战经验 — 平台预置 */}
              <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] shadow-sm transition-all hover:shadow-md">
                <div aria-hidden className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/8 blur-3xl" />
                <header className="relative flex items-center justify-between gap-3 border-b border-border/40 px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-[13.5px] font-bold text-foreground">专家实战经验</h3>
                        <span className="inline-flex items-center gap-0.5 rounded-full bg-success/10 px-1.5 py-0.5 text-[10px] font-semibold text-success">
                          <Check className="h-2.5 w-2.5" />
                          已加载
                        </span>
                      </div>
                      <p className="mt-0.5 text-[10.5px] text-muted-foreground">平台预置 · 持续更新</p>
                    </div>
                  </div>
                </header>

                <div className="relative flex-1 space-y-4 px-4 py-4">
                  {expertExperienceGroups.map((g) => (
                    <section key={g.key}>
                      <div className="flex items-baseline justify-between gap-2">
                        <h4 className="text-[12.5px] font-bold text-foreground">{g.title}</h4>
                        <span className="text-[10.5px] text-muted-foreground/70">{g.desc}</span>
                      </div>
                      <ul className="mt-2 space-y-1.5">
                        {g.items.map((it) => (
                          <li
                            key={it}
                            className="flex items-start gap-2 text-[12px] leading-relaxed text-foreground/85"
                          >
                            <span aria-hidden className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-primary/50" />
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </div>

              {/* 右：团队经验技巧 — 可新增 */}
              <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-secondary/[0.10] shadow-sm transition-all hover:shadow-md">
                <div aria-hidden className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-secondary/30 blur-3xl" />
                <header className="relative flex items-center justify-between gap-3 border-b border-border/40 px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-secondary/40 text-foreground/70">
                      <Lightbulb className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-[13.5px] font-bold text-foreground">团队经验技巧</h3>
                        <span className="inline-flex items-center gap-0.5 rounded-full bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
                          <Plus className="h-2.5 w-2.5" />
                          可新增
                        </span>
                      </div>
                      <p className="mt-0.5 text-[10.5px] text-muted-foreground">来自团队业务员沉淀</p>
                    </div>
                  </div>
                  <button className="inline-flex shrink-0 items-center gap-1 rounded-full border border-border/60 bg-background/70 px-2.5 py-1 text-[11px] font-semibold text-foreground hover:border-primary/30 hover:bg-accent transition-colors">
                    <Plus className="h-3 w-3" />
                    新增
                  </button>
                </header>

                <ul className="relative flex-1 space-y-2.5 px-4 py-4">
                  {teamSkillItems.map((it) => (
                    <li
                      key={`team-${it.headline}`}
                      className="flex items-baseline justify-between gap-3 text-[12px] leading-relaxed"
                    >
                      <span className="min-w-0 flex-1 text-foreground/85">{it.headline}</span>
                      <span className="shrink-0 whitespace-nowrap text-[10.5px] text-muted-foreground/70">
                        来自 {it.author}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Module 3: AI 专家技能 — 行业能力图谱 */}
        {activeTab === "skills" && (
          <section className="mt-6 opacity-0 animate-fade-up" style={{ animationDelay: "220ms" }}>
            <ModuleHeader
              icon={Wand2}
              title="AI 专家技能"
              sub="每位专家当前已具备的核心能力"
              actions={
                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                  本周新增 3 项技能
                </span>
              }
            />

            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {expertSkillBlocks.map(({ expert, skills }) => (
                <article
                  key={expert.name}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card p-4 shadow-sm transition-all hover:border-primary/25 hover:shadow-md"
                >
                  <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/5 blur-2xl" />

                  <header className="relative flex items-center gap-3 border-b border-border/40 pb-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-card shadow-sm">
                      <img src={expert.avatar} alt={expert.name} className="h-full w-full object-cover object-top" loading="lazy" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[13px] font-bold text-foreground truncate">{expert.name}</p>
                      <p className="mt-0.5 text-[11px] text-muted-foreground truncate">{expert.role}</p>
                    </div>
                    <span className="shrink-0 rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
                      {skills.length} 项
                    </span>
                  </header>

                  <ul className="relative mt-3 space-y-2">
                    {skills.map((s) => (
                      <li key={s.name} className="rounded-xl border border-border/40 bg-background/50 px-3 py-2.5 transition-colors group-hover:bg-background/70">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-[12.5px] font-semibold text-foreground leading-snug">{s.name}</p>
                          {s.isRecent && (
                            <span className="shrink-0 rounded-md bg-primary/10 px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-primary">
                              NEW
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-[11.5px] leading-relaxed text-muted-foreground">{s.desc}</p>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

const FormRow = ({
  icon: Icon,
  label,
  required,
  optional,
  value,
  placeholder,
  disabled,
  onChange,
  chips,
  onChipToggle,
}: {
  icon: typeof Package;
  label: string;
  required?: boolean;
  optional?: boolean;
  value: string;
  placeholder: string;
  disabled?: boolean;
  onChange: (v: string) => void;
  chips?: string[];
  onChipToggle?: (chip: string) => void;
}) => (
  <div className="group rounded-2xl border border-border/50 bg-background/70 px-3.5 py-2.5 transition-all duration-200 focus-within:border-primary/50 focus-within:bg-background focus-within:shadow-md focus-within:shadow-primary/10">
    <div className="flex items-center gap-2">
      <div className={cn(
        "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg",
        required ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
      )}>
        <Icon className="h-3.5 w-3.5" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1 text-[10.5px] font-medium text-muted-foreground">
          <span>{label}</span>
          {required && <span className="text-destructive">*</span>}
          {optional && <span className="text-muted-foreground/70">· 选填</span>}
        </div>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          placeholder={placeholder}
          className="w-full bg-transparent text-[13px] font-medium text-foreground placeholder:text-muted-foreground/60 placeholder:font-normal focus:outline-none disabled:opacity-90"
        />
      </div>
    </div>
    {chips && onChipToggle && (
      <div className="mt-2 flex flex-wrap gap-1.5 pl-9">
        {chips.map((chip) => {
          const active = value.includes(chip);
          return (
            <button
              key={chip}
              type="button"
              onClick={() => onChipToggle(chip)}
              className={cn(
                "rounded-full border px-2 py-0.5 text-[11px] font-medium transition-all",
                active
                  ? "border-primary/40 bg-primary/10 text-primary"
                  : "border-border bg-background/60 text-muted-foreground hover:border-primary/30 hover:text-foreground"
              )}
            >
              {active && <span className="mr-0.5">✓</span>}{chip}
            </button>
          );
        })}
      </div>
    )}
  </div>
);

const ModuleHeader = ({
  icon: Icon,
  title,
  sub,
  actions,
}: {
  icon: typeof BookOpen;
  title: string;
  sub: string;
  actions?: React.ReactNode;
}) => (
  <div className="flex items-end justify-between gap-3">
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/60 bg-card text-foreground/70">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <h2 className="text-[17px] font-bold tracking-tight text-foreground">{title}</h2>
        <p className="mt-0.5 text-[12px] text-muted-foreground">{sub}</p>
      </div>
    </div>
    {actions && <div className="flex items-center gap-2">{actions}</div>}
  </div>
);

export default AIProfileDetail;
