const resources = [
  {
    title: "بودكاست Deutsche Welle",
    description: "حلقات صوتية قصيرة مع نصوص مرفقة لتقوية الاستماع والمفردات.",
    link: "https://www.dw.com/de/deutsch-lernen/s-2055",
    tag: "استماع"
  },
  {
    title: "تطبيق Anki Decks",
    description: "بطاقات مراجعة يومية معدّة لمستويات A1-B1 مع نطق صحيح.",
    link: "https://ankiweb.net/shared/decks/german",
    tag: "مفردات"
  },
  {
    title: "قناة Easy German",
    description:
      "فيديوهات من الشارع الألماني مع ترجمة عربية وإنجليزية لفهم اللغة المحكية.",
    link: "https://www.youtube.com/c/easygerman",
    tag: "فيديو"
  },
  {
    title: "نماذج امتحانات Goethe",
    description: "تدرّب على شكل الامتحان الرسمي مع حلول مشروحة.",
    link: "https://www.goethe.de/prf/mat/deindex.htm",
    tag: "امتحانات"
  }
];

export function ResourcesSection() {
  return (
    <section className="space-y-8">
      <header>
        <h2 className="section-title">أدوات داعمة خارجية</h2>
        <p className="section-subtitle">
          مكِّن تعلمك باستخدام مصادر موثوقة تم اختيارها بعناية لتكمل الدروس الداخلية
          وتوفر تجربة متكاملة.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {resources.map((resource) => (
          <article key={resource.title} className="glass-panel flex flex-col p-6">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-brand-500/20 px-3 py-1 text-xs text-brand-100">
                {resource.tag}
              </span>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-brand-100 underline decoration-dotted underline-offset-4 hover:text-brand-50"
              >
                زيارة المورد
              </a>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">{resource.title}</h3>
            <p className="mt-2 text-sm text-slate-200">{resource.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
