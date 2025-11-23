"use client";

import { useState } from "react";
import { grammarTips } from "@/lib/data";

export function GrammarTips() {
  const [activeTipId, setActiveTipId] = useState<string | null>(grammarTips[0]?.id ?? null);

  return (
    <section className="space-y-8">
      <header>
        <h2 className="section-title">القواعد بسهولة</h2>
        <p className="section-subtitle">
          اطلع على أهم القواعد مع أمثلة عملية وصيغ جاهزة للاستخدام في المحادثات
          والكتابة الرسمية.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
        <div className="glass-panel p-6">
          <dl className="space-y-4">
            {grammarTips.map((tip) => {
              const isActive = tip.id === activeTipId;
              return (
                <div
                  key={tip.id}
                  className={`rounded-2xl border px-5 py-4 transition ${
                    isActive
                      ? "border-brand-300 bg-brand-500/20"
                      : "border-white/10 bg-white/5 hover:border-brand-200/60"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveTipId(isActive ? null : tip.id)}
                    className="flex w-full items-center justify-between text-right"
                  >
                    <dt className="text-base font-semibold text-white md:text-lg">
                      {tip.title}
                    </dt>
                    <span className="rounded-full border border-white/20 px-2 py-1 text-xs text-slate-200">
                      {isActive ? "إخفاء" : "عرض"}
                    </span>
                  </button>
                  {isActive && (
                    <dd className="mt-4 space-y-3 text-sm text-slate-200">
                      <p>{tip.explanation}</p>
                      <p className="text-brand-200">الصيغة: {tip.formula}</p>
                      <p className="text-brand-100/80">مثال: {tip.example}</p>
                    </dd>
                  )}
                </div>
              );
            })}
          </dl>
        </div>
        <aside className="glass-panel space-y-4 p-6 text-sm text-slate-200">
          <h3 className="text-lg font-semibold text-white">استراتيجيات القواعد</h3>
          <p>
            اكتب كل قاعدة في دفتر خاص مع مثال شخصي. حاول تحويل كل مثال إلى جملة حقيقية
            من حياتك اليومية لتثبيت الصيغ في الذاكرة طويلة المدى.
          </p>
          <div className="rounded-2xl bg-brand-500/20 p-4">
            <p className="font-semibold text-brand-100">نصيحة سريعة</p>
            <p className="mt-2">
              أثناء الاستماع إلى المواد الصوتية، دوّن أي جمل تجذب انتباهك وأعد بنائها
              باستخدام نفس القاعدة.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
