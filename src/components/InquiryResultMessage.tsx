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
  <div
    className={`rounded-lg overflow-hidden border ${
      accent ? "border-primary/20 bg-primary/[0.03]" : "border-border"
    }`}
  >
    <div
      className={`px-3 py-1.5 flex items-center gap-1.5 border-b ${
        accent ? "border-primary/10" : "border-border bg-muted/30"
      }`}
    >
      <Icon className="w-3.5 h-3.5 text-primary" />
      <span className="font-semibold text-foreground text-[12.5px]">{title}</span>
      {action && <span className="ml-auto">{action}</span>}
    </div>
    <div className="px-3 py-2">{children}</div>
  </div>
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
    <div className="space-y-2.5">
      {/* 业务专家指点 — 紧凑横排 */}
      <SectionCard icon={Lightbulb} title="业务专家指点" accent>
        <div className="flex gap-2.5 items-start">
          {expertAvatar && (
            <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
              <img src={expertAvatar} alt="业务专家" className="w-full h-full object-cover object-top" />
            </div>
          )}
          <p className="text-foreground/85 text-[12.5px] leading-[1.6] flex-1">
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
          <KV label="采购产品" value="5kW 混合逆变器 · UL1741，单相 / 240V，300 台（首批）" />
          <KV label="沟通阶段" value="需求沟通阶段（前期已收到两次该买家询价邮件）" />
        </div>
      </SectionCard>

      {/* AI 关键判断 — 三子项 */}
      <SectionCard icon={Brain} title="AI 关键判断">
        <div className="space-y-1.5">
          <div className="rounded-md border border-emerald-500/20 bg-emerald-500/5 px-2 py-1.5">
            <div className="flex items-center justify-between">
              <p className="text-[10px] text-muted-foreground">询盘真实性</p>
              <span className="px-1 py-0 text-[10px] rounded border border-emerald-500/25 bg-emerald-500/10 text-emerald-600 font-semibold">高</span>
            </div>
            <p className="mt-1 text-[11px] text-foreground/80 leading-[1.5]">
              邮件结构完整、产品/数量/认证/交期明确，无可疑链接，判定为真实买家询盘。
            </p>
          </div>
          <div className="rounded-md border border-amber-500/20 bg-amber-500/5 px-2 py-1.5">
            <div className="flex items-center justify-between">
              <p className="text-[10px] text-muted-foreground">订单交易风险</p>
              <span className="px-1 py-0 text-[10px] rounded border border-amber-500/25 bg-amber-500/10 text-amber-600 font-semibold">中</span>
            </div>
            <p className="mt-1 text-[11px] text-foreground/80 leading-[1.5]">
              美国近期对华关税与合规审查趋严，建议优先 T/T 30% 定金 + 见提单付余款，规避汇款与清关风险。
            </p>
          </div>
          <div className="rounded-md border border-border bg-muted/20 px-2 py-1.5">
            <p className="text-[10px] text-muted-foreground mb-1">其他必要提示</p>
            <div className="space-y-1">
              <div className="flex gap-1.5 items-start text-[11.5px] text-foreground/85">
                <AlertTriangle className="w-3 h-3 text-amber-500 shrink-0 mt-0.5" />
                <p className="leading-[1.55]"><span className="text-muted-foreground">采购能力：</span>中型分销商 · 年采购约 $1.2M，复购意愿明确。</p>
              </div>
              <div className="flex gap-1.5 items-start text-[11.5px] text-foreground/85">
                <AlertTriangle className="w-3 h-3 text-amber-500 shrink-0 mt-0.5" />
                <p className="leading-[1.55]"><span className="text-muted-foreground">竞争态势：</span>同步询价 3-5 家中国供应商，价格与交期为关键决胜点。</p>
              </div>
              <div className="flex gap-1.5 items-start text-[11.5px] text-foreground/85">
                <AlertTriangle className="w-3 h-3 text-amber-500 shrink-0 mt-0.5" />
                <p className="leading-[1.55]">$380 低于常见价，确认是否接受替代方案或翻新机；样品运费未明说，警惕免费寄样要求。</p>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* 跟进策略要点 — 紧凑列表 */}
      <SectionCard icon={Compass} title="跟进策略要点">
        <div className="space-y-1">
          {[
            "确认 UL 认证 + 现货样品，给两个交期选项（标准 38 天 / 加急 28 天）。",
            "首封邮件不提降价，先巩固认证与交期价值。",
            "建议客户次日上午 10 点前回复（可定时发送）。",
          ].map((p, i) => (
            <div key={i} className="flex gap-2 text-[12px]">
              <span className="shrink-0 w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-semibold mt-0.5">
                {i + 1}
              </span>
              <p className="flex-1 text-foreground/85 leading-[1.55]">{p}</p>
            </div>
          ))}
        </div>
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
  const activeEmail = `Subject: Re: 5kW Hybrid Inverter (UL1741) — Cert, Lead Time & Sample Plan

Dear John,

Thanks for the detailed inquiry. This is [Your Name] from [Your Company]. We are a UL1741-certified manufacturer of residential hybrid inverters and have been supplying US distributors for 5+ years.

To address your priorities directly:

1) UL1741 certification
   — Please find attached the UL1741 certificate and the latest SGS test report.
   — Model: HBR-5K-US (5kW hybrid, 48V battery, US split-phase 120/240V).

2) Lead time — two options for 300 units
   — Standard production: 35–38 days ex-works, in line with your July on-shelf target.
   — Expedited production: 26–28 days ex-works (+3% fee), buffer for shipping & customs.

3) Sample plan
   — We can air-ship 1–2 samples within 3 working days from stock.
   — Sample fee + air freight are 100% deductible from your bulk PO.

4) Indicative bulk price
   — FOB Ningbo, 300 units: USD [X.XX] / unit, EXW available on request.
   — Payment: 30% T/T deposit, 70% before shipment; LC at sight also acceptable.

To lock the July timeline, could you confirm:
- Preferred sample shipping address and courier account (if any)?
- Whether you'd like the standard or expedited production slot reserved?

Happy to jump on a 20-min call at your convenience (EST).

Best regards,
[Your Name]
[Your Company]`;

  const conservativeEmail = `Subject: Re: 5kW Hybrid Inverter (UL1741) — A Few Quick Questions Before Quotation

Dear John,

Thank you for reaching out. This is [Your Name] from [Your Company]. We manufacture UL1741-certified 5kW hybrid inverters for the US residential market.

Before sending the formal quotation and sample plan, could you please confirm:

1) UL1741 scope: do you require the standard UL1741 or UL1741-SA (rule 21 compliant)?
2) Target delivery: is the July deadline based on warehouse arrival or shipment date?
3) Sample logistics: do you prefer us to use your courier account (DHL / FedEx) or quote door-to-door?

On samples — we can air-ship 1–2 units from stock within 3 working days. Sample fee + freight are deductible from your first bulk order.

Once the above is confirmed, I will send:
- Full UL1741 certificate + SGS test report
- Two lead-time options (standard / expedited) for 300 units
- Indicative FOB price and payment terms

Looking forward to your reply.

Best regards,
[Your Name]
[Your Company]`;

  return (
    <div className="space-y-3">
      {/* Header summary */}
      <SectionCard icon={Mail} title="询盘回复邮件 · 两版对比" accent>
        <p className="text-[12.5px] text-foreground/85 leading-[1.7]">
          已为本次询盘生成两版邮件方案，您可对比后择优发送：
          <span className="text-primary font-medium">主动报价版</span> 直接给认证 + 双交期 + 样品政策；
          <span className="text-foreground font-medium">保守追问版</span> 先用 3 个关键问题收敛需求，再给报价。
        </p>
      </SectionCard>

      {/* Two emails stacked */}
      <EmailCard
        badge="主动报价版"
        badgeTone="primary"
        title="锁认证 + 双交期 + 样品抵货款"
        desc="适合需求清晰、抓单效率优先；客户可一次拿到所有关键信息。"
        email={activeEmail}
      />
      <EmailCard
        badge="保守追问版"
        badgeTone="muted"
        title="先收敛需求，再给结构化报价"
        desc="适合品类级询盘或目标价偏低的场景，避免一次报散被压价。"
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
      {/* 公司概览 */}
      <SectionCard icon={Building2} title="公司概览" accent>
        <div className="grid grid-cols-2 gap-x-3 gap-y-1">
          <KV label="公司名" value="TechSol US LLC" />
          <KV label="注册地" value="Austin, Texas, USA" />
          <KV label="成立时间" value="2018 年（约 7 年）" />
          <KV label="规模" value="员工 25–50 人" />
          <KV label="年营收" value="约 $8–12M（估算）" />
          <KV label="主营业务" value="家用光伏 / 储能系统集成与零售" />
        </div>
      </SectionCard>

      {/* 在线业务足迹 */}
      <SectionCard icon={Globe} title="在线业务足迹">
        <div className="space-y-1">
          <KV label="官网" value={<span className="text-primary">techsol.us</span>} />
          <KV label="主销渠道" value="官网 D2C + Amazon US + 区域光伏经销网络" />
          <KV label="社媒" value="LinkedIn 1.2k followers · YouTube 安装教程 8k 订阅" />
          <KV label="客户口碑" value="Google 4.6 ★（172 条评论）· Trustpilot 4.4 ★" />
        </div>
      </SectionCard>

      {/* 采购历史 + 信用 — 双栏 */}
      <div className="grid grid-cols-2 gap-2.5">
        <SectionCard icon={ShieldCheck} title="采购 / 进口记录">
          <div className="space-y-1">
            <KV label="近 12 月" value="逆变器 / 储能柜 6 票" />
            <KV label="主要来源" value="中国（4 票）· 越南（1 票）· 韩国（1 票）" />
            <KV label="单票金额" value="$80k–$220k 不等" />
            <KV
              label="活跃度"
              value={
                <span className="px-1 py-0 text-[10px] rounded border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 font-medium">
                  活跃 · 持续采购
                </span>
              }
            />
          </div>
        </SectionCard>

        <SectionCard icon={CreditCard} title="信用与履约">
          <div className="space-y-1">
            <KV
              label="D&B 评级"
              value={
                <span className="px-1 py-0 text-[10px] rounded border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 font-medium">
                  3A2 · 良好
                </span>
              }
            />
            <KV label="付款记录" value="同业反馈：T/T 30/70 准时，无拖欠" />
            <KV label="诉讼记录" value="未检索到买卖合同纠纷" />
            <KV label="退货争议" value="2 起，均为质量问题，已和解" />
          </div>
        </SectionCard>
      </div>

      {/* 决策链 */}
      <SectionCard icon={Users} title="决策链路与关键人">
        <div className="space-y-1.5">
          <div className="flex items-start gap-2 text-[12px]">
            <span className="shrink-0 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-primary/10 text-primary">决策人</span>
            <p className="flex-1 text-foreground/85 leading-[1.6]">
              <span className="font-medium text-foreground">John Carter</span> · Procurement Manager · 在职 3 年 · LinkedIn 活跃
            </p>
          </div>
          <div className="flex items-start gap-2 text-[12px]">
            <span className="shrink-0 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-muted text-muted-foreground">影响人</span>
            <p className="flex-1 text-foreground/85 leading-[1.6]">
              <span className="font-medium text-foreground">Mark Liu</span> · 技术总监（决定认证 / 兼容性）
            </p>
          </div>
          <div className="flex items-start gap-2 text-[12px]">
            <span className="shrink-0 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-muted text-muted-foreground">最终拍板</span>
            <p className="flex-1 text-foreground/85 leading-[1.6]">
              <span className="font-medium text-foreground">Sarah Wong</span> · CEO（金额 &gt; $100k 需其签字）
            </p>
          </div>
        </div>
      </SectionCard>

      {/* 风险与合作建议 */}
      <SectionCard icon={ShieldAlert} title="风险提示与合作建议">
        <div className="space-y-1">
          <div className="flex gap-1.5 items-start text-[11.5px] text-foreground/85 rounded bg-amber-500/[0.06] border border-amber-500/15 px-2 py-1">
            <AlertTriangle className="w-3 h-3 text-amber-500 shrink-0 mt-0.5" />
            <p className="leading-[1.55]">中小规模 + 价格敏感，建议首单要求 30% 定金，避免账期。</p>
          </div>
          <div className="flex gap-1.5 items-start text-[11.5px] text-foreground/85 rounded bg-amber-500/[0.06] border border-amber-500/15 px-2 py-1">
            <AlertTriangle className="w-3 h-3 text-amber-500 shrink-0 mt-0.5" />
            <p className="leading-[1.55]">曾因质量退货 2 起，QC 报告与第三方验货建议主动提供。</p>
          </div>
          <div className="flex gap-1.5 items-start text-[11.5px] text-foreground/85 rounded bg-emerald-500/[0.06] border border-emerald-500/15 px-2 py-1">
            <Sparkles className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
            <p className="leading-[1.55]">活跃采购 + 良好口碑，若首单顺利，年化复购潜力 $300k+。</p>
          </div>
        </div>
      </SectionCard>
    </div>
  );
};

