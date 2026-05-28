import SiteNav from "@/components/SiteNav";
import wechatQr from "@/assets/wechat-service-qr.png";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-[hsl(220,20%,14%)]">
      <SiteNav />

      {/* Hero · 故事开场 */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(217,60%,97%)] via-white to-[hsl(174,50%,97%)]" />
        <div className="absolute top-[-120px] left-[-80px] w-[480px] h-[480px] rounded-full bg-gradient-to-br from-[hsl(217,100%,50%)]/8 to-transparent blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-6">
          <div className="text-xs tracking-[0.2em] text-[hsl(217,100%,45%)] font-medium mb-4">
            ABOUT MENTARC
          </div>
          <h1 className="text-[42px] font-bold leading-[1.12] tracking-tight">
            我们想让外贸这件事，
            <br />
            没那么孤单。
          </h1>
          <p className="mt-6 text-[17px] text-[hsl(220,10%,38%)] leading-[1.85] max-w-2xl">
            外贸人手上事多，时差长，常常一个人对着邮件、报价单和后台想到深夜。
            <br />
            贸探（Mentarc）做的事很简单：把行业里最专业的人请进你的电脑。
            <br />
            遇到问题，随时叫一声，总有专家陪你想清楚下一步。
          </p>
        </div>
      </section>

      {/* 我们在做什么 */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-[140px_1fr] gap-6 md:gap-10">
          <div className="text-[13px] tracking-[0.15em] text-[hsl(220,10%,50%)] font-medium pt-1">
            我们在做什么
          </div>
          <div className="text-[16px] text-[hsl(220,15%,25%)] leading-[1.9]">
            贸探是一个 AI 外贸专家协作平台。
            <br />
            目前团队里有三位专家：
            <span className="text-[hsl(217,100%,45%)] font-medium">业务专家</span>负责询盘和客户，
            <span className="text-[hsl(217,100%,45%)] font-medium">运营专家</span>负责产品和详情页，
            <span className="text-[hsl(217,100%,45%)] font-medium">培训专家</span>负责行业知识。
            <br />
            他们会持续学习、持续上岗，也欢迎你告诉我们：下一位应该是谁。
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6">
        <div className="h-px bg-[hsl(220,15%,92%)]" />
      </div>

      {/* 几句心里话 */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-[140px_1fr] gap-6 md:gap-10">
          <div className="text-[13px] tracking-[0.15em] text-[hsl(220,10%,50%)] font-medium pt-1">
            几句心里话
          </div>
          <div className="space-y-5 text-[16px] text-[hsl(220,15%,25%)] leading-[1.9]">
            <p>
              我们不追求"取代外贸人"。
              <br />
              AI 再聪明，也代替不了你跟客户握过的那次手、跑过的那场展会。
            </p>
            <p>
              我们想做的是：把那些重复、繁琐、容易出错的事接过去，
              <br />
              让你把时间留给真正重要的判断和关系。
            </p>
            <p className="text-[hsl(220,10%,50%)] text-[15px]">
              —— 贸探团队
            </p>
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section className="max-w-3xl mx-auto px-6 pb-28">
        <div className="relative overflow-hidden rounded-3xl border border-[hsl(220,15%,92%)] bg-gradient-to-br from-[hsl(217,100%,98%)] via-white to-[hsl(174,60%,97%)] p-8 md:p-10">
          <div className="absolute top-[-60px] right-[-60px] w-[260px] h-[260px] rounded-full bg-gradient-to-br from-[hsl(217,100%,50%)]/10 to-transparent blur-2xl" />

          <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-10">
            <div className="shrink-0 bg-white p-3 rounded-2xl shadow-sm border border-[hsl(220,15%,92%)]">
              <img src={wechatQr} alt="企微客服二维码" className="w-44 h-44 object-contain" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="text-xs tracking-[0.2em] text-[hsl(217,100%,45%)] font-medium mb-3">
                SAY HI
              </div>
              <h2 className="text-2xl font-bold mb-3">想聊聊？扫一下就行。</h2>
              <p className="text-[15px] text-[hsl(220,10%,42%)] leading-[1.85]">
                试用申请、功能建议、合作洽谈，或者只是想说一句"用着还不错"——
                <br />
                都欢迎扫码加我们的企微，工作日通常半天内会回复你。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
