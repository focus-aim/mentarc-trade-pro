import { useState } from "react";
import {
  Compass,
  CalendarClock,
  MessageSquareText,
  ListChecks,
  Copy,
  Check,
  Mail,
  Phone,
  AlertCircle,
} from "lucide-react";

const KV = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div className="flex items-start gap-1.5 text-[12px] leading-[1.55]">
    <span className="text-muted-foreground shrink-0">{label}</span>
    <span className="text-foreground/85 flex-1">{value}</span>
  </div>
);

const SectionCard = ({
  icon: Icon,
  title,
  accent = false,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  accent?: boolean;
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
    </div>
    <div>{children}</div>
  </section>
);

const ScriptCard = ({
  channel,
  title,
  desc,
  body,
  icon: Icon,
}: {
  channel: string;
  title: string;
  desc: string;
  body: string;
  icon: React.ComponentType<{ className?: string }>;
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(body);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="rounded-lg border border-border bg-card/40 overflow-hidden">
      <div className="flex items-start gap-2 px-3 py-2 border-b border-border/60 bg-muted/30">
        <span className="shrink-0 inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10.5px] font-bold bg-primary/10 text-primary border border-primary/20">
          <Icon className="w-3 h-3" />
          {channel}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[12.5px] font-semibold text-foreground leading-tight">{title}</p>
          <p className="text-[11px] text-muted-foreground mt-0.5 leading-[1.5]">{desc}</p>
        </div>
        <button
          onClick={handleCopy}
          className="shrink-0 p-1 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/[0.08] transition-colors"
          title={copied ? "已复制" : "复制话术"}
        >
          {copied ? <Check className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>
      <pre className="px-3 py-2.5 whitespace-pre-wrap text-[12px] text-foreground/85 leading-[1.7] font-sans">
        {body}
      </pre>
    </div>
  );
};

const FollowupStrategyResult = () => {
  const cadence = [
    { day: "D+0", action: "首封回复 · 锁认证 + 双交期 + 样品政策", channel: "Email" },
    { day: "D+2", action: "未回复则发短跟进，问样品收件信息 / 课题优先级", channel: "Email" },
    { day: "D+5", action: "LinkedIn 添加 John Carter，附产品视频 / 工厂介绍", channel: "LinkedIn" },
    { day: "D+8", action: "电话 / WhatsApp 触达，约 20 分钟视频会议", channel: "Phone" },
    { day: "D+14", action: "若仍未推进，发「项目机会延期」信号促成报价", channel: "Email" },
  ];

  const emailScript = `Subject: Re: 5kW Hybrid Inverter (UL1741) — Cert, Lead Time & Sample Plan

Dear John,

Thanks for the detailed inquiry. We are a UL1741-certified manufacturer of 5kW residential hybrid inverters with 5+ years of US distributor experience.

Quick answers to your priorities:
1) UL1741 cert + SGS test report attached (model HBR-5K-US, 120/240V split-phase)
2) Lead time options for 300 units:
   — Standard 35-38 days ex-works
   — Expedited 26-28 days ex-works (+3%)
3) Samples: 1-2 units air-shipped from stock in 3 days; sample fee + freight 100% deductible from bulk PO

To lock the July timeline, could you confirm preferred sample shipping address and which production slot you'd like reserved?

Happy to jump on a 20-min call at your convenience (EST).

Best regards,
[Your Name]`;

  const linkedinScript = `Hi John, I'm [Your Name] from [Your Company]. We just exchanged emails on the 5kW UL1741 hybrid inverter project for TechSol.

Adding you here so you can get a feel of our factory & US install cases — feel free to ping me if any spec / timing question comes up before the formal quote review.

Looking forward to supporting your July rollout.`;

  const phoneScript = `开场:  Hi John, this is [Your Name] from [Your Company]. Do you have 2 minutes? I'm following up on the 5kW UL1741 inverter inquiry — wanted to make sure our quote answers exactly what you need before your internal review.

确认:  Just to confirm — is the July deadline for warehouse arrival or shipment? And on UL1741, is it standard or SA (rule 21) you require?

承诺:  Got it. I'll send a revised offer within 24 hours with two lead-time options and a sample air-shipping plan. Anything else I should include?`;

  const nextActions = [
    { priority: "P0", title: "今日内发送首封回复邮件", desc: "套用主动报价版话术，附 UL1741 + SGS 报告 PDF。" },
    { priority: "P0", title: "准备 1-2 台样品并预约空运", desc: "确认现货库存，预留 3 天空运窗口。" },
    { priority: "P1", title: "建立买家档案", desc: "在 CRM 中登记 John Carter / Mark Liu / Sarah Wong 决策链。" },
    { priority: "P1", title: "整理 2 份美国安装案例", desc: "用作 LinkedIn / 第二封跟进邮件的信任背书素材。" },
    { priority: "P2", title: "设置 D+2 / D+5 / D+8 提醒", desc: "未回复时按节奏自动触发后续动作。" },
  ];

  return (
    <div className="space-y-3">
      {/* 策略概要 */}
      <SectionCard icon={Compass} title="跟进策略概要" accent>
        <p className="text-[12.5px] text-foreground/85 leading-[1.7]">
          买家处于<span className="text-primary font-medium">需求沟通阶段</span>，决策窗口约 <span className="text-primary font-medium">2 周</span>。建议采用 <span className="text-primary font-medium">「邮件主推 + LinkedIn 加温 + 电话促成」</span>三通道并行节奏，第一周锁认证与样品价值，第二周推动报价确认与合同条款。
        </p>
      </SectionCard>

      {/* 跟进节奏 */}
      <SectionCard icon={CalendarClock} title="跟进节奏（14 天计划）">
        <div className="space-y-1.5">
          {cadence.map((c) => (
            <div key={c.day} className="flex items-start gap-2 text-[12px] py-1 border-b border-border/40 last:border-b-0">
              <span className="shrink-0 w-12 px-1.5 py-0.5 rounded text-[10.5px] font-bold bg-primary/10 text-primary text-center">
                {c.day}
              </span>
              <p className="flex-1 text-foreground/85 leading-[1.55]">{c.action}</p>
              <span className="shrink-0 text-[10.5px] text-muted-foreground">{c.channel}</span>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* 关键话术 */}
      <SectionCard icon={MessageSquareText} title="关键话术模板">
        <div className="space-y-2.5">
          <ScriptCard
            channel="邮件"
            icon={Mail}
            title="首封回复 · 主动报价版"
            desc="一次性给出认证、双交期与样品抵货款政策。"
            body={emailScript}
          />
          <ScriptCard
            channel="LinkedIn"
            icon={MessageSquareText}
            title="LinkedIn 加温文案"
            desc="第 5 天发送，建立私域信任，铺垫电话沟通。"
            body={linkedinScript}
          />
          <ScriptCard
            channel="电话"
            icon={Phone}
            title="电话 / 视频会议开场脚本"
            desc="第 8 天触达，确认决策时间表与未明确条款。"
            body={phoneScript}
          />
        </div>
      </SectionCard>

      {/* 下一步动作 */}
      <SectionCard icon={ListChecks} title="下一步动作清单">
        <div className="space-y-1.5">
          {nextActions.map((a, i) => (
            <div key={i} className="flex items-start gap-2 text-[12px]">
              <span
                className={`shrink-0 px-1.5 py-0.5 rounded text-[10px] font-bold ${
                  a.priority === "P0"
                    ? "bg-primary/15 text-primary border border-primary/25"
                    : a.priority === "P1"
                      ? "bg-amber-500/10 text-amber-600 border border-amber-500/20"
                      : "bg-muted text-muted-foreground border border-border"
                }`}
              >
                {a.priority}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-foreground/90 font-medium leading-[1.55]">{a.title}</p>
                <p className="text-[11.5px] text-muted-foreground leading-[1.55] mt-0.5">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* 风险提示 */}
      <div className="flex gap-1.5 items-start text-[11.5px] text-foreground/85 rounded-lg bg-amber-500/[0.06] border border-amber-500/15 px-2.5 py-2">
        <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
        <p className="leading-[1.55]">
          买家同步询价 3-5 家中国供应商，<span className="font-medium">D+5 之前必须建立 LinkedIn 私信链路</span>，避免只在邮件中被对比报价。
        </p>
      </div>
    </div>
  );
};

export default FollowupStrategyResult;
