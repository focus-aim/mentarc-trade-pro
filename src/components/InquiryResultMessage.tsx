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
  ChevronDown,
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

      {/* 询盘概要 */}
      <SectionCard icon={UserRound} title="询盘概要">
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

      {/* 询盘回复模板 */}
      <ReplyTemplateBlock />

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
    <div className="space-y-3">
      {/* 评估概要 */}
      <SectionCard icon={Lightbulb} title="评估概要" accent>
        <p className="text-[12.5px] text-foreground/85 leading-[1.7]">
          这是一家具有 <span className="text-primary font-medium">15 年历史</span>的成熟型进口商，其产品线定价处于<span className="text-primary font-medium">市场中高段位</span>。这类客户的供应链通常相对稳定，他们对价格的敏感度排在第二位，第一诉求是 <span className="text-primary font-medium">"品质的一致性"</span> 和 <span className="text-primary font-medium">"交期的绝对保障"</span>。如果对方主动询盘，大概率是原有供应商出现了质量波动或产能瓶颈。
        </p>
      </SectionCard>

      {/* 详细背调报告 — 单一外边框 */}
      <section className="rounded-xl border border-border bg-background/40 p-4 space-y-4">
        <div className="flex items-center gap-1.5 pb-2 border-b border-border/60">
          <FileText className="w-3.5 h-3.5 text-muted-foreground" />
          <h3 className="font-medium text-foreground text-[12.5px]">详细背调报告</h3>
        </div>

        {/* 公司概况 */}
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <Building2 className="w-3.5 h-3.5 text-muted-foreground" />
            <h4 className="font-medium text-foreground text-[12.5px]">公司概况</h4>
          </div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-1">
            <KV label="公司名" value="TechSol US LLC" />
            <KV label="注册地" value="Austin, Texas, USA" />
            <KV label="成立时间" value="2010 年（约 15 年）" />
            <KV label="员工规模" value="80–120 人" />
            <KV label="组织形式" value="独立法人 · 私有制 LLC" />
            <KV label="经营状态" value={<span className="text-emerald-600">活跃 · 良好</span>} />
          </div>
        </div>

        {/* 核心管理层 */}
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <Users className="w-3.5 h-3.5 text-muted-foreground" />
            <h4 className="font-medium text-foreground text-[12.5px]">核心管理层</h4>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-start gap-2 text-[12px]">
              <span className="shrink-0 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-primary/10 text-primary">CEO</span>
              <p className="flex-1 text-foreground/85 leading-[1.6]">
                <span className="font-medium text-foreground">Sarah Wong</span> · 创始人 · 在职 15 年，主导战略与大额订单签批
              </p>
            </div>
            <div className="flex items-start gap-2 text-[12px]">
              <span className="shrink-0 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-muted text-muted-foreground">采购</span>
              <p className="flex-1 text-foreground/85 leading-[1.6]">
                <span className="font-medium text-foreground">John Carter</span> · Procurement Manager · 在职 6 年，对接中国工厂
              </p>
            </div>
            <div className="flex items-start gap-2 text-[12px]">
              <span className="shrink-0 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-muted text-muted-foreground">技术</span>
              <p className="flex-1 text-foreground/85 leading-[1.6]">
                <span className="font-medium text-foreground">Mark Liu</span> · 技术总监 · 决定认证、兼容性与样品验收
              </p>
            </div>
          </div>
        </div>

        {/* 主营业务与核心产品 */}
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <Globe className="w-3.5 h-3.5 text-muted-foreground" />
            <h4 className="font-medium text-foreground text-[12.5px]">主营业务与核心产品</h4>
          </div>
          <div className="space-y-1">
            <KV label="主营业务" value="家用光伏 / 储能系统集成、安装与零售" />
            <KV label="核心品类" value="混合逆变器、储能电池柜、智能能源管理网关" />
            <KV label="价格定位" value="市场中高段位，主推 5–10kW 家用方案" />
            <KV label="销售渠道" value="官网 D2C · Amazon US · 加州 / 德州区域经销网络" />
            <KV label="终端客户" value="北美中产家庭 · 中小型商业屋顶项目" />
          </div>
        </div>

        {/* 市场表现 */}
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <TrendingUp className="w-3.5 h-3.5 text-muted-foreground" />
            <h4 className="font-medium text-foreground text-[12.5px]">市场表现</h4>
          </div>
          <div className="space-y-1">
            <KV label="市场地位" value="美国西部区域 Top 30 家用储能集成商" />
            <KV label="客户口碑" value="Google 4.6 ★（172 条）· Trustpilot 4.4 ★ · 安装好评率 92%" />
            <KV label="品牌声量" value="LinkedIn 1.2k followers · YouTube 安装教程 8k 订阅" />
            <KV label="增长趋势" value="近 3 年营收 CAGR 约 18%，受 IRA 法案利好" />
          </div>
        </div>

        {/* 风险提示 */}
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <ShieldAlert className="w-3.5 h-3.5 text-muted-foreground" />
            <h4 className="font-medium text-foreground text-[12.5px]">风险提示</h4>
          </div>
          <div className="space-y-1.5">
            <div className="flex gap-1.5 items-start text-[11.5px] text-foreground/85 rounded bg-amber-500/[0.06] border border-amber-500/15 px-2 py-1">
              <AlertTriangle className="w-3 h-3 text-amber-500 shrink-0 mt-0.5" />
              <p className="leading-[1.55]">质量一致性敏感，曾因产品质量发起 2 起退货，建议主动提供 QC 报告与第三方验货。</p>
            </div>
            <div className="flex gap-1.5 items-start text-[11.5px] text-foreground/85 rounded bg-amber-500/[0.06] border border-amber-500/15 px-2 py-1">
              <AlertTriangle className="w-3 h-3 text-amber-500 shrink-0 mt-0.5" />
              <p className="leading-[1.55]">受美国对华关税与 UL 合规审查影响，建议明确 HS 编码与认证范围。</p>
            </div>
            <div className="flex gap-1.5 items-start text-[11.5px] text-foreground/85 rounded bg-emerald-500/[0.06] border border-emerald-500/15 px-2 py-1">
              <Sparkles className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
              <p className="leading-[1.55]">付款记录良好，无诉讼，首单可走 T/T 30/70，长期合作潜力 $300k+/年。</p>
            </div>
          </div>
        </div>

        {/* 财务与贸易数据 */}
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <CreditCard className="w-3.5 h-3.5 text-muted-foreground" />
            <h4 className="font-medium text-foreground text-[12.5px]">财务与贸易数据</h4>
          </div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-1">
            <KV label="估算年营收" value="$15–22M（2024）" />
            <KV label="D&B 评级" value={<span className="text-emerald-600">3A2 · 良好</span>} />
            <KV label="近 12 月进口" value="逆变器 / 储能柜 6 票" />
            <KV label="主要来源国" value="中国 4 票 · 越南 1 票 · 韩国 1 票" />
            <KV label="单票金额" value="$80k – $220k" />
            <KV label="付款方式" value="T/T 30/70 为主，偶用 LC at sight" />
          </div>
        </div>

        {/* 参考资料 */}
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <FileText className="w-3.5 h-3.5 text-muted-foreground" />
            <h4 className="font-medium text-foreground text-[12.5px]">参考资料</h4>
          </div>
          <ul className="space-y-1 text-[12px] text-foreground/85">
            <li className="leading-[1.6]">· 官网：<span className="text-primary">techsol.us</span></li>
            <li className="leading-[1.6]">· 美国海关 ImportGenius 进口提单（2024.04 – 2025.03）</li>
            <li className="leading-[1.6]">· Dun &amp; Bradstreet 企业信用档案</li>
            <li className="leading-[1.6]">· LinkedIn 公司主页与关键人公开资料</li>
            <li className="leading-[1.6]">· Google Reviews / Trustpilot 终端客户评价</li>
          </ul>
        </div>
      </section>
    </div>
  );
};
