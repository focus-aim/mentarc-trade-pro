import { useState } from "react";
import {
  Lightbulb,
  FileText,
  Copy,
  Check,
  TrendingUp,
  UserRound,
  ListChecks,
  Brain,
  Compass,
  AlertTriangle,
  Building2,
  Globe,
  CreditCard,
  ShieldCheck,
  Users,
  ShieldAlert,
  Mail,
  Zap,
  Sparkles,
} from "lucide-react";

export interface ChatQuote {
  moduleName: string;
  preview: string;
  fullContent: string;
}

interface InquiryResultMessageProps {
  onAction?: (action: string) => void;
  onQuote?: (quote: ChatQuote) => void;
  onSendPrompt?: (text: string) => void;
  expertAvatar?: string;
  onBackgroundCheck?: () => void;
}

// ============================================================
// Compact section card (tight padding for one-screen layout)
// ============================================================
const SectionCard = ({
  icon: Icon,
  title,
  accent = false,
  action,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  accent?: boolean;
  action?: React.ReactNode;
  children: React.ReactNode;
}) => (
  <section
    className={`rounded-xl border p-3.5 ${
      accent ? "border-primary/20 bg-primary/[0.03]" : "border-border bg-background/40"
    }`}
  >
    <div className="flex items-center gap-1.5 mb-2">
      <Icon className={`w-3.5 h-3.5 ${accent ? "text-primary" : "text-muted-foreground"}`} />
      <h3 className="font-medium text-foreground text-[12.5px]">{title}</h3>
      {action && <span className="ml-auto">{action}</span>}
    </div>
    <div>{children}</div>
  </section>
);

const KV = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div className="flex items-start gap-1.5 text-[12px] leading-[1.55]">
    <span className="text-muted-foreground shrink-0">{label}</span>
    <span className="text-foreground/85 flex-1">{value}</span>
  </div>
);

// ============================================================
// Main inquiry analysis report (compact, one-screen)
// ============================================================
const InquiryResultMessage = ({ expertAvatar, onBackgroundCheck }: InquiryResultMessageProps) => {
  return (
    <div className="space-y-5">
      {/* 业务专家指点 */}
      <SectionCard icon={Lightbulb} title="业务专家指点" accent>
        <div className="flex gap-2.5 items-start">
          {expertAvatar && (
            <div className="w-7 h-7 rounded-full overflow-hidden shrink-0">
              <img src={expertAvatar} alt="业务专家" className="w-full h-full object-cover object-top" />
            </div>
          )}
          <p className="text-foreground/85 text-[12.5px] leading-[1.65] flex-1">
            结合你当前主营的 <span className="text-primary font-medium">【产品类型】</span> 和主要市场 <span className="text-primary font-medium">【区域】</span>，这类询盘和你的业务匹配度较高。客户懂认证且时间紧迫，首封邮件先确认 <span className="text-primary font-medium">UL 认证 + 最快交期</span>，并主动询问<span className="text-primary font-medium">样品费能否抵扣大货</span>——美国中小买家很在意这一点。
          </p>
        </div>
      </SectionCard>

      {/* 买家速览 */}
      <SectionCard icon={UserRound} title="买家速览">
        <div className="space-y-1">
          <KV label="公司" value="TechSol US" />
          <KV label="地区" value="美国 · 加州" />
          <KV label="联系方式" value="john.carter@techsol.us" />
          <KV label="采购产品" value="5kW 混合逆变器 · UL1741,单相 / 240V,300 台(首批)" />
          <KV label="沟通阶段" value="需求沟通阶段(前期已收到两次该买家询价邮件)" />
        </div>
      </SectionCard>

      {/* AI 关键判断 */}
      <SectionCard icon={Brain} title="AI 关键判断">
        <div className="space-y-2.5">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="px-1 py-0 text-[10px] rounded border border-emerald-500/25 text-emerald-600 font-semibold">高</span>
              <p className="text-[11.5px] text-muted-foreground">询盘真实性</p>
            </div>
            <p className="mt-1 text-[12px] text-foreground/85 leading-[1.6]">
              邮件结构完整、产品/数量/认证/交期明确,无可疑链接,判定为真实买家询盘。
            </p>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="px-1 py-0 text-[10px] rounded border border-amber-500/30 text-amber-600 font-semibold">中</span>
              <p className="text-[11.5px] text-muted-foreground">订单交易风险</p>
            </div>
            <p className="mt-1 text-[12px] text-foreground/85 leading-[1.6]">
              美国近期对华关税与合规审查趋严,建议优先 T/T 30% 定金 + 见提单付余款,规避汇款与清关风险。
            </p>
          </div>
          <div>
            <p className="text-[11.5px] text-muted-foreground mb-1">其他必要提示</p>
            <ul className="space-y-1 text-[12px] text-foreground/85">
              <li className="leading-[1.6]"><span className="text-muted-foreground">· 采购能力:</span> 中型分销商 · 年采购约 $1.2M,复购意愿明确。</li>
              <li className="leading-[1.6]"><span className="text-muted-foreground">· 竞争态势:</span> 同步询价 3-5 家中国供应商,价格与交期为关键决胜点。</li>
              <li className="leading-[1.6]"><span className="text-muted-foreground">· 价格提示:</span> $380 低于常见价,确认是否接受替代方案或翻新机;样品运费未明说,警惕免费寄样要求。</li>
            </ul>
          </div>
        </div>
      </SectionCard>

      {/* 跟进策略要点 */}
      <SectionCard icon={Compass} title="跟进策略要点">
        <ol className="space-y-1 list-decimal pl-4 text-[12px] text-foreground/85 marker:text-muted-foreground">
          <li className="leading-[1.6]">确认 UL 认证 + 现货样品,给两个交期选项(标准 38 天 / 加急 28 天)。</li>
          <li className="leading-[1.6]">首封邮件不提降价,先巩固认证与交期价值。</li>
          <li className="leading-[1.6]">建议客户次日上午 10 点前回复(可定时发送)。</li>
        </ol>
      </SectionCard>
    </div>
  );
};

export default InquiryResultMessage;

// ============================================================
// Email card with copy button (used by InquiryFollowUpResult)
// ============================================================
const EmailCard = ({
  badge,
  badgeTone,
  title,
  desc,
  email,
}: {
  badge: string;
  badgeTone: "primary" | "muted";
  title: string;
  desc: string;
  email: string;
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const isPrimary = badgeTone === "primary";
  return (
    <div className={`rounded-xl overflow-hidden border ${isPrimary ? "border-primary/25 bg-primary/[0.03]" : "border-border bg-card/40"}`}>
      <div className={`px-3.5 py-2.5 border-b flex items-start gap-2 ${isPrimary ? "border-primary/15" : "border-border bg-muted/30"}`}>
        <span
          className={`shrink-0 inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10.5px] font-bold ${
            isPrimary
              ? "bg-primary/15 text-primary border border-primary/25"
              : "bg-muted text-muted-foreground border border-border"
          }`}
        >
          {isPrimary ? <Zap className="w-3 h-3" /> : <ShieldCheck className="w-3 h-3" />}
          {badge}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[13px] font-semibold text-foreground leading-tight">{title}</p>
          <p className="text-[11.5px] text-muted-foreground mt-0.5 leading-[1.55]">{desc}</p>
        </div>
        <button
          onClick={handleCopy}
          className="shrink-0 p-1 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/[0.08] transition-colors"
          title={copied ? "已复制" : "复制邮件"}
        >
          {copied ? <Check className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>
      <pre className="px-3.5 py-3 whitespace-pre-wrap text-[12px] text-foreground/85 leading-[1.75] font-sans max-h-[280px] overflow-y-auto scrollbar-thin">
        {email}
      </pre>
    </div>
  );
};

// ============================================================
// Follow-up result — now ALWAYS renders BOTH email versions
// (active + conservative) side-by-side for comparison.
// ============================================================
export const InquiryFollowUpResult = () => {
  const activeEmail = `Hi John,

距离上次报价已过 5 天,想跟进一下进度。

为帮你尽快推进项目,这边可以即时支持:
1) UL1741 证书 + SGS 报告原件,需要随时发你;
2) 300 台标准 / 加急两档交期已为你预留 7 天确认窗;
3) 样品现货可在 3 个工作日内空运,样品费 + 运费 100% 抵大货。

如果你这两天有内部评审,我可以同步准备一份简短的 PPT 配合你的会议。
方便告诉我目前的进展、或还有哪些信息缺口吗?

Best,
[Your Name]`;

  const conservativeEmail = `Hi John,

跟进一下我们 9 月 12 日的报价。理解你应该正在多家比对,
不催促,只是想了解你这边的节奏是否有变化:

· 项目上线时间是否仍按 7 月计划?
· UL1741 / 价格 / 交期 三项中,是否有特定环节让你犹豫?
· 是否需要我提供同型号的客户案例 / 安装视频?

如果方便,任何反馈我都希望听到——哪怕暂时搁置,
也帮我了解一下原因,后续才能更好地配合你。

Best,
[Your Name]`;

  return (
    <div className="space-y-2.5">
      {/* 跟进诊断 */}
      <SectionCard icon={Compass} title="跟进诊断" accent>
        <div className="space-y-1.5">
          <KV
            label="当前阶段"
            value={<>报价已发,买家处于 <span className="text-primary font-medium">比价评估</span> 阶段,成交意向中等。</>}
          />
          <KV
            label="卡点诊断"
            value="买家暂未形成明确选择,核心顾虑可能集中在价格、交期或方案匹配度。"
          />
          <KV
            label="跟进策略"
            value={<>结合你以往的跟进策略偏好,优先 <span className="text-primary font-medium">确认采购进度</span> 与 <span className="text-primary font-medium">真实需求变化</span>,推动买家给出明确反馈。</>}
          />
        </div>
      </SectionCard>

      {/* 实战话术 */}
      <SectionCard icon={Mail} title="实战话术">
        <p className="text-[12px] text-muted-foreground leading-[1.6] mb-2">
          已生成两版跟进话术,可对比后择优发送:
        </p>
      </SectionCard>

      <EmailCard
        badge="进度推动版"
        badgeTone="primary"
        title="主动给资料 + 预留确认窗,推动买家表态"
        desc="适合买家未明确反馈、但项目尚在窗口期。先给信息,再要进展。"
        email={activeEmail}
      />
      <EmailCard
        badge="温和探询版"
        badgeTone="muted"
        title="不催促,挖掘真实卡点与节奏变化"
        desc="适合长决策周期或买家已转冷,通过开放式问题探明真实顾虑。"
        email={conservativeEmail}
      />
    </div>
  );
};


// ============================================================
// Buyer Background Check Report — triggered by 「深度背调」
// ============================================================
export const BuyerBackgroundReport = () => {
  return (
    <div className="space-y-2.5">
      {/* 画像概述 */}
      <SectionCard icon={Lightbulb} title="画像概述" accent>
        <p className="text-foreground/85 text-[12.5px] leading-[1.65]">
          这是一家具有 <span className="text-primary font-medium">15 年</span> 历史的成熟型进口商,其产品线定价处于市场<span className="text-primary font-medium">中高段位</span>。这类客户的供应链通常相对稳定,他们对价格的敏感度排在第二位,第一诉求是 <span className="text-primary font-medium">"品质的一致性"</span> 和 <span className="text-primary font-medium">"交期的绝对保障"</span>。如果对方主动询盘,大概率是原有供应商出现了质量波动或产能瓶颈。
        </p>
      </SectionCard>

      {/* 公司概况 */}
      <SectionCard icon={Building2} title="公司概况">
        <div className="grid grid-cols-2 gap-x-3 gap-y-1">
          <KV label="公司名" value="TechSol US LLC" />
          <KV label="注册地" value="Austin, Texas, USA" />
          <KV label="成立时间" value="2010 年(约 15 年)" />
          <KV label="规模" value="员工 80–120 人" />
          <KV label="组织形式" value="独立进口商 · 私人控股" />
          <KV label="官网" value={<span className="text-primary">techsol.us</span>} />
        </div>
      </SectionCard>

      {/* 核心管理层 */}
      <SectionCard icon={Users} title="核心管理层">
        <div className="space-y-1.5">
          <div className="flex items-start gap-2 text-[12px]">
            <span className="shrink-0 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-primary/10 text-primary">CEO</span>
            <p className="flex-1 text-foreground/85 leading-[1.6]">
              <span className="font-medium text-foreground">Sarah Wong</span> · 创始人 · 行业 20 年 · LinkedIn 活跃
            </p>
          </div>
          <div className="flex items-start gap-2 text-[12px]">
            <span className="shrink-0 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-muted text-muted-foreground">采购</span>
            <p className="flex-1 text-foreground/85 leading-[1.6]">
              <span className="font-medium text-foreground">John Carter</span> · Procurement Manager · 在职 6 年
            </p>
          </div>
          <div className="flex items-start gap-2 text-[12px]">
            <span className="shrink-0 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-muted text-muted-foreground">技术</span>
            <p className="flex-1 text-foreground/85 leading-[1.6]">
              <span className="font-medium text-foreground">Mark Liu</span> · CTO · 决定认证与兼容性
            </p>
          </div>
        </div>
      </SectionCard>

      {/* 主营业务与核心产品 */}
      <SectionCard icon={ShieldCheck} title="主营业务与核心产品">
        <div className="space-y-1">
          <KV label="主营" value="家用光伏 / 储能系统集成与零售" />
          <KV label="核心 SKU" value="混合逆变器、储能电池柜、家用并网套件" />
          <KV label="定价段位" value="中高端(高于市场均价 15–25%)" />
          <KV label="覆盖区域" value="美国西部 7 州 · 经销商 60+" />
        </div>
      </SectionCard>

      {/* 市场表现 */}
      <SectionCard icon={Globe} title="市场表现">
        <div className="space-y-1">
          <KV label="主销渠道" value="官网 D2C + Amazon US + 区域光伏经销网络" />
          <KV label="社媒影响" value="LinkedIn 8.4k followers · YouTube 安装教程 32k 订阅" />
          <KV label="客户口碑" value="Google 4.7 ★(820 条)· Trustpilot 4.5 ★" />
          <KV label="行业奖项" value="2023 SEIA Top Installer (Texas Region)" />
        </div>
      </SectionCard>

      {/* 风险提示 */}
      <SectionCard icon={ShieldAlert} title="风险提示">
        <div className="space-y-1">
          <div className="flex gap-1.5 items-start text-[11.5px] text-foreground/85">
            <AlertTriangle className="w-3 h-3 text-amber-500 shrink-0 mt-0.5" />
            <p className="leading-[1.55]">2022 年曾因供应商品质波动诉讼 1 起,对来料一致性极度敏感。</p>
          </div>
          <div className="flex gap-1.5 items-start text-[11.5px] text-foreground/85">
            <AlertTriangle className="w-3 h-3 text-amber-500 shrink-0 mt-0.5" />
            <p className="leading-[1.55]">美国对华关税 + UL 复检趋严,首单建议预留合规与清关缓冲期。</p>
          </div>
          <div className="flex gap-1.5 items-start text-[11.5px] text-foreground/85">
            <Sparkles className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
            <p className="leading-[1.55]">付款记录良好,首单顺利后年化复购潜力可达 $1.2M+。</p>
          </div>
        </div>
      </SectionCard>

      {/* 财务与贸易数据 */}
      <SectionCard icon={CreditCard} title="财务与贸易数据">
        <div className="grid grid-cols-2 gap-x-3 gap-y-1">
          <KV label="年营收" value="$25–35M(估算)" />
          <KV label="D&B 评级" value={<span className="px-1 py-0 text-[10px] rounded border border-emerald-500/25 text-emerald-600 font-medium">3A2 · 良好</span>} />
          <KV label="付款记录" value="T/T 30/70 准时,无拖欠" />
          <KV label="近 12 月进口" value="逆变器 / 储能柜 18 票" />
          <KV label="主要来源" value="中国(12)· 越南(3)· 韩国(3)" />
          <KV label="单票金额" value="$120k–$480k" />
        </div>
      </SectionCard>

      {/* 参考资料 */}
      <SectionCard icon={FileText} title="参考资料">
        <ul className="space-y-1 text-[12px]">
          <li className="leading-[1.6]"><span className="text-muted-foreground">· 官网:</span> <span className="text-primary">techsol.us/about</span></li>
          <li className="leading-[1.6]"><span className="text-muted-foreground">· 进口数据:</span> ImportYeti / Panjiva 提单记录</li>
          <li className="leading-[1.6]"><span className="text-muted-foreground">· 信用报告:</span> Dun &amp; Bradstreet (D-U-N-S 96-xxx-xxxx)</li>
          <li className="leading-[1.6]"><span className="text-muted-foreground">· 公开诉讼:</span> PACER / CourtListener 检索</li>
          <li className="leading-[1.6]"><span className="text-muted-foreground">· 社媒:</span> LinkedIn 公司主页 / YouTube 频道</li>
        </ul>
      </SectionCard>
    </div>
  );
};

