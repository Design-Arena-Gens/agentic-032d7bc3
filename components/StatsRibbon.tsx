const stats = [
  { label: "دروس مصغرة", value: "75+", detail: "في كل مستوى" },
  { label: "حلقات محادثة", value: "24", detail: "جلسة مباشرة سنوياً" },
  { label: "تمارين نطق", value: "150+", detail: "مع صوتيات واضحة" },
  { label: "نماذج امتحانات", value: "12", detail: "تحاكي Goethe & TELC" }
];

export function StatsRibbon() {
  return (
    <section className="glass-panel flex flex-wrap items-center justify-between gap-4 p-6 text-sm md:text-base">
      {stats.map((item) => (
        <div key={item.label} className="flex flex-col text-right">
          <span className="text-xs uppercase tracking-widest text-slate-400">
            {item.label}
          </span>
          <span className="text-2xl font-semibold text-white">{item.value}</span>
          <span className="text-xs text-slate-400">{item.detail}</span>
        </div>
      ))}
    </section>
  );
}
