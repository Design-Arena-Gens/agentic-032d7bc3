import { learningPath } from "@/lib/data";

export function LearningPath() {
  return (
    <section id="path" className="space-y-8">
      <header>
        <h2 className="section-title">مسار تعلم متدرج</h2>
        <p className="section-subtitle">
          اتبع خارطة طريق واضحة تقسم المهارات اللغوية إلى مراحل قصيرة تركّز على
          الإنتاج الشفهي والكتابي مع مراجعات مستمرة.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        {learningPath.map((step) => (
          <article key={step.id} className="glass-panel p-6 md:p-7">
            <header className="flex items-center justify-between">
              <span className="rounded-full bg-brand-500/20 px-4 py-1 text-xs font-semibold text-brand-100">
                {step.id.toUpperCase()}
              </span>
              <span className="text-sm text-slate-300">
                {step.estimatedHours} ساعة تعليمية
              </span>
            </header>
            <h3 className="mt-5 text-xl font-semibold text-white">{step.title}</h3>
            <p className="mt-3 text-sm text-slate-300">{step.description}</p>
            <ul className="mt-5 space-y-2 text-sm text-slate-200">
              {step.focus.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-end gap-2 rounded-full bg-white/5 px-4 py-2"
                >
                  <span>{item}</span>
                  <span className="h-2 w-2 rounded-full bg-brand-400" />
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
