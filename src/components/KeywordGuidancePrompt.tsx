import { Sun, Snowflake, ArrowRight } from "lucide-react";

export type KeywordGuidanceChoice = "home-backup" | "fridge";

interface KeywordGuidancePromptProps {
  onPick: (choice: KeywordGuidanceChoice, prompt: string) => void;
  selected?: KeywordGuidanceChoice | null;
}

const OPTIONS: { key: KeywordGuidanceChoice; icon: typeof Sun; title: string; desc: string; prompt: string }[] = [
  {
    key: "home-backup",
    icon: Sun,
    title: "结合 \"solar generator for home backup\" 生成产品详情卖点",
    desc: "围绕 P0 主攻词，输出家庭应急场景的卖点结构，含 H1/H2 与「能带什么电器」表格。",
    prompt: "结合关键词 solar generator for home backup 生成产品详情卖点",
  },
  {
    key: "fridge",
    icon: Snowflake,
    title: "结合 \"emergency power backup for fridge\" 生成产品详情卖点",
    desc: "面向冰箱续航这一高转化长尾词，生成场景化文案与元描述建议。",
    prompt: "结合关键词 emergency power backup for fridge 生成产品详情卖点",
  },
];

const KeywordGuidancePrompt = ({ onPick, selected }: KeywordGuidancePromptProps) => {
  return (
    <div className="space-y-3 text-[14px] leading-relaxed">
      <p className="text-foreground/85">
        关键词趋势报告已输出到右侧。建议您可以让我进一步围绕以下高潜力关键词，落地到产品页文案：
      </p>

      <div className="space-y-2">
        {OPTIONS.map((opt) => {
          const Icon = opt.icon;
          const active = selected === opt.key;
          return (
            <button
              key={opt.key}
              onClick={() => onPick(opt.key, opt.prompt)}
              disabled={!!selected}
              className={`group w-full text-left rounded-xl border px-3.5 py-3 transition-all disabled:cursor-default ${
                active
                  ? "border-primary/50 bg-primary/8 ring-1 ring-primary/30"
                  : "border-border bg-card/60 hover:border-primary/40 hover:bg-primary/[0.04]"
              }`}
            >
              <div className="flex items-start gap-2.5">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-3.5 w-3.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[13.5px] font-semibold text-foreground">{opt.title}</span>
                    {!selected && (
                      <ArrowRight className="h-3.5 w-3.5 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                    )}
                  </div>
                  <p className="mt-0.5 text-[12.5px] text-muted-foreground leading-[1.7]">{opt.desc}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default KeywordGuidancePrompt;
