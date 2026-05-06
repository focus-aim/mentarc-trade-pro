import { Search, Mail, ArrowRight } from "lucide-react";

export type InquiryStrategyChoice = "background" | "emails";

interface InquiryStrategyPromptProps {
  onPick: (choice: InquiryStrategyChoice) => void;
  selected?: InquiryStrategyChoice | null;
}

const InquiryStrategyPrompt = ({ onPick, selected }: InquiryStrategyPromptProps) => {
  return (
    <div className="space-y-3 text-[14px] leading-relaxed">
      <p className="text-foreground/85">
        基于以上分析，建议您可以让我进一步生成以下内容，更有把握地推进这单：
      </p>

      <div className="space-y-2">
        <button
          onClick={() => onPick("background")}
          disabled={!!selected}
          className={`group w-full text-left rounded-xl border px-3.5 py-3 transition-all disabled:cursor-default ${
            selected === "background"
              ? "border-primary/50 bg-primary/8 ring-1 ring-primary/30"
              : "border-border bg-card/60 hover:border-primary/40 hover:bg-primary/[0.04]"
          }`}
        >
          <div className="flex items-start gap-2.5">
            <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Search className="h-3.5 w-3.5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[13.5px] font-semibold text-foreground">生成买家背调报告</span>
                {!selected && (
                  <ArrowRight className="h-3.5 w-3.5 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                )}
              </div>
              <p className="mt-0.5 text-[12.5px] text-muted-foreground leading-[1.7]">
                深度调查 TechSol US 的公司背景、采购历史、信用风险与决策链路，提前识别合作价值。
              </p>
            </div>
          </div>
        </button>

        <button
          onClick={() => onPick("emails")}
          disabled={!!selected}
          className={`group w-full text-left rounded-xl border px-3.5 py-3 transition-all disabled:cursor-default ${
            selected === "emails"
              ? "border-primary/50 bg-primary/8 ring-1 ring-primary/30"
              : "border-border bg-card/60 hover:border-primary/40 hover:bg-primary/[0.04]"
          }`}
        >
          <div className="flex items-start gap-2.5">
            <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Mail className="h-3.5 w-3.5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[13.5px] font-semibold text-foreground">生成两版询盘回复邮件</span>
                {!selected && (
                  <ArrowRight className="h-3.5 w-3.5 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                )}
              </div>
              <p className="mt-0.5 text-[12.5px] text-muted-foreground leading-[1.7]">
                同时输出「主动报价版」与「保守追问版」两套邮件，您可对比后择优发送。
              </p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default InquiryStrategyPrompt;
