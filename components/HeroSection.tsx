export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-900 via-brand-700 to-brand-500 p-8 md:p-12 shadow-glow">
      <div className="absolute inset-0 opacity-20 mix-blend-overlay">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_55%)]" />
      </div>
      <div className="relative z-10 grid gap-8 md:grid-cols-2 md:items-center">
        <div className="space-y-5 text-right">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            تعلم الألمانية بثقة
          </span>
          <h1 className="text-4xl font-bold md:text-5xl">
            DeutschMeister
            <span className="block text-lg font-normal text-white/80 md:text-xl">
              خطة تفاعلية شاملة للانتقال من مستوى المبتدئ إلى المحترف
            </span>
          </h1>
          <p className="text-base text-white/80 md:text-lg">
            اكتشف منهجاً متدرجاً مصمماً خصيصاً للناطقين بالعربية مع تمارين نطق،
            مفردات، وحوارات واقعية تُعزز مهاراتك كل يوم.
          </p>
          <div className="flex flex-col items-stretch gap-3 text-sm sm:flex-row sm:justify-end">
            <a
              href="#path"
              className="rounded-full bg-white px-6 py-3 font-semibold text-brand-700 shadow-lg transition hover:bg-slate-100"
            >
              ابدأ مسارك اليوم
            </a>
            <a
              href="#flashcards"
              className="rounded-full border border-white/50 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              جرّب البطاقات التفاعلية
            </a>
          </div>
        </div>
        <div className="grid gap-4 text-left md:text-right">
          <div className="glass-panel p-5 md:p-6">
            <p className="text-sm text-slate-300">مسار شخصي</p>
            <p className="text-2xl font-semibold text-white">خطة أسبوعية ذكية</p>
            <p className="text-sm text-slate-200">
              يتكيف التطبيق مع أهدافك ويوجهك لتحقيق تقدم مستمر قابل للقياس.
            </p>
          </div>
          <div className="glass-panel p-5 md:p-6">
            <p className="text-sm text-slate-300">مجتمع المتعلمين</p>
            <p className="text-2xl font-semibold text-white">+1200 متعلم نشط</p>
            <p className="text-sm text-slate-200">
              انضم إلى جلسات محادثة أسبوعية مع متعلمين يشاركون نفس الأهداف والطموحات.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
