import SiteNav from "@/components/SiteNav";

interface ReleaseItem {
  version: string;
  date: string;
  tag: string;
  title: string;
  story: string;
  highlights: string[];
}

const RELEASES: ReleaseItem[] = [
  {
    version: "v1.4",
    date: "2026 年 5 月",
    tag: "体验升级",
    title: "听得见你的声音",
    story:
      "这一版我们把「评价」放回了对话里。专家答得好不好，你可以直接告诉它。",
    highlights: [
      "每条 AI 回答下方支持点赞 / 点踩",
      "点踩时可选理由标签，也可以只写一句吐槽",
      "你的反馈会汇总给每位专家，下次更懂你",
    ],
  },
  {
    version: "v1.3",
    date: "2026 年 5 月",
    tag: "新专家",
    title: "Eva 加入团队 · 培训专家",
    story:
      "做外贸常常遇到「想问、但又不知道问谁」的问题。Eva 是我们请来的第三位专家，专门陪你聊行业。",
    highlights: [
      "覆盖市场趋势、产品机会、平台运营等六大话题",
      "回答配套案例与延伸阅读，不是纸上谈兵",
      "右侧能力面板可视化，知道她从哪儿学来的",
    ],
  },
  {
    version: "v1.2",
    date: "2026 年 4 月",
    tag: "新能力",
    title: "运营专家会写详情页了",
    story:
      "把产品资料丢给运营专家，他会替你想清楚卖点怎么排、关键词怎么塞、图配在哪儿。",
    highlights: [
      "中英文详情页一键生成",
      "卖点拆解 + SEO 关键词 + 图文组合",
      "支持下载和继续编辑",
    ],
  },
  {
    version: "v1.1",
    date: "2026 年 4 月",
    tag: "新能力",
    title: "业务专家上线 · 询盘分析",
    story:
      "收到一封陌生询盘，不再盯着邮件发呆。业务专家会从客户动机、行业动态、合规风险三个角度帮你拆开看。",
    highlights: [
      "结构化卡片，重点一眼看到",
      "配套回复模板，复制就能用",
      "后续可一键转入背调和跟进策略",
    ],
  },
  {
    version: "v1.0",
    date: "2026 年 3 月",
    tag: "首次发布",
    title: "贸探，正式跟大家见面",
    story:
      "我们想做一件事：让每个外贸人手里都有一支 AI 专家团队。今天，第一版交付。",
    highlights: [
      "工作台 · 任务成果 · 团队管理三大基础模块",
      "贸力值体系，按次付费、按需使用",
      "新用户可申请试用，先体验再决定",
    ],
  },
];

const Updates = () => {
  return (
    <div className="min-h-screen bg-white text-[hsl(220,20%,14%)]">
      <SiteNav />

      <section className="relative pt-20 pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(217,60%,97%)] via-white to-[hsl(174,50%,97%)]" />
        <div className="absolute top-[-100px] right-[-80px] w-[420px] h-[420px] rounded-full bg-gradient-to-br from-[hsl(217,100%,50%)]/8 to-[hsl(174,100%,61%)]/6 blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-6">
          <div className="text-xs tracking-[0.2em] text-[hsl(217,100%,45%)] font-medium mb-4">
            CHANGELOG
          </div>
          <h1 className="text-[40px] font-bold leading-[1.15] tracking-tight">
            一点一点，把贸探
            <br />
            做成你顺手的工具
          </h1>
          <p className="mt-5 text-[16px] text-[hsl(220,10%,42%)] leading-relaxed max-w-xl">
            没有大词，也不画饼。这里记录我们每一次小小的更新——多了一位专家、改了一处细节、修了一个小问题。
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-28">
        <div className="space-y-10">
          {RELEASES.map((r, idx) => (
            <article
              key={r.version}
              className="grid grid-cols-[88px_1fr] md:grid-cols-[120px_1fr] gap-6"
            >
              <div className="pt-1">
                <div className="text-lg font-semibold text-[hsl(220,20%,14%)]">{r.version}</div>
                <div className="text-[13px] text-[hsl(220,10%,50%)] mt-0.5">{r.date}</div>
                <div className="mt-3 inline-flex px-2 py-0.5 rounded-md text-[11px] text-[hsl(217,100%,45%)] bg-[hsl(217,100%,96%)]">
                  {r.tag}
                </div>
              </div>

              <div
                className={`pb-10 ${
                  idx === RELEASES.length - 1
                    ? ""
                    : "border-b border-dashed border-[hsl(220,15%,90%)]"
                }`}
              >
                <h2 className="text-[22px] font-semibold leading-snug">{r.title}</h2>
                <p className="mt-3 text-[15px] text-[hsl(220,10%,42%)] leading-relaxed">
                  {r.story}
                </p>
                <ul className="mt-4 space-y-2">
                  {r.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-[14px] text-[hsl(220,15%,28%)] leading-relaxed"
                    >
                      <span className="mt-[9px] w-1 h-1 rounded-full bg-[hsl(217,100%,50%)] shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center text-[13px] text-[hsl(220,10%,55%)]">
          想看后续？关注产品动态，或在「关于我们」加客服微信，第一时间收到更新。
        </div>
      </section>
    </div>
  );
};

export default Updates;
