import { weeklyPlan } from "@/lib/data";

export function WeeklyPlan() {
  return (
    <section className="space-y-8">
      <header>
        <h2 className="section-title">خطة أسبوعية جاهزة</h2>
        <p className="section-subtitle">
          التزم بخطّة سبعة أيام تشمل مراجعة، محادثة، نطق، وكتابة لتغطي جميع مهارات اللغة
          بجرعات صغيرة وفعّالة.
        </p>
      </header>
      <div className="overflow-hidden rounded-3xl border border-white/10">
        <table className="min-w-full divide-y divide-white/10 text-right text-sm text-slate-200">
          <thead className="bg-white/5 text-xs uppercase tracking-wider text-slate-300">
            <tr>
              <th className="px-4 py-3">اليوم</th>
              <th className="px-4 py-3">التركيز</th>
              <th className="px-4 py-3">الأنشطة المقترحة</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {weeklyPlan.map((day) => (
              <tr key={day.day} className="bg-white/0">
                <td className="px-4 py-4 font-semibold text-white">{day.day}</td>
                <td className="px-4 py-4 text-brand-100">{day.focus}</td>
                <td className="px-4 py-4">
                  <div className="flex flex-wrap justify-end gap-2">
                    {day.activities.map((activity) => (
                      <span
                        key={activity}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
