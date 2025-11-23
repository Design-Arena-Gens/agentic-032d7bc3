"use client";

import { useMemo, useState } from "react";
import { flashcards } from "@/lib/data";

export function VocabFlashcards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMeaning, setShowMeaning] = useState(false);

  const currentCard = useMemo(() => flashcards[currentIndex], [currentIndex]);

  const nextCard = () => {
    setShowMeaning(false);
    setCurrentIndex((prev) => (prev + 1) % flashcards.length);
  };

  const prevCard = () => {
    setShowMeaning(false);
    setCurrentIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <section id="flashcards" className="space-y-8">
      <header>
        <h2 className="section-title">بطاقات مفردات تفاعلية</h2>
        <p className="section-subtitle">
          وسّع مفرداتك مع بطاقات مدعّمة بالنطق العربي والأمثلة الواقعية. اضغط على البطاقة
          لكشف المعنى الاستعمالي.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-[2fr_3fr] md:items-center">
        <div className="glass-panel relative flex h-64 cursor-pointer flex-col justify-between overflow-hidden p-6 transition hover:scale-[1.01] md:h-72">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(72,87,210,0.4),_transparent_60%)]" />
          <div className="relative z-10">
            <p className="text-xs text-brand-100/80">المفردة #{currentIndex + 1}</p>
            <h3 className="mt-4 text-3xl font-semibold text-white">{currentCard.word}</h3>
            <p className="mt-2 text-sm text-brand-100/70">النطق: {currentCard.pronunciation}</p>
            {showMeaning ? (
              <div className="mt-6 space-y-2 text-sm text-slate-100">
                <p>
                  <span className="text-brand-200">المعنى:</span> {currentCard.meaning}
                </p>
                <p className="text-slate-200">
                  <span className="text-brand-200">جملة:</span> {currentCard.example}
                </p>
              </div>
            ) : (
              <p className="mt-6 text-sm text-slate-300">
                اضغط لمشاهدة الترجمة والجملة المثال
              </p>
            )}
          </div>
          <button
            className="relative z-10 rounded-full bg-white/10 px-5 py-2 text-sm text-slate-100 transition hover:bg-white/20"
            onClick={() => setShowMeaning((prev) => !prev)}
          >
            {showMeaning ? "إخفاء المعنى" : "إظهار المعنى"}
          </button>
        </div>
        <div className="glass-panel p-6 md:p-7">
          <div className="flex items-center justify-between">
            <div className="text-right">
              <h4 className="text-lg font-semibold text-white">تعليمات سريعة</h4>
              <p className="mt-2 text-sm text-slate-300">
                خصص 5 دقائق يومياً لمراجعة 4 بطاقات. حاول تكوين جملة جديدة بكل مفردة
                وشاركها مع شريك تعلم.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={prevCard}
                className="rounded-full bg-white/10 px-4 py-2 text-lg text-white transition hover:bg-white/20"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={nextCard}
                className="rounded-full bg-white/10 px-4 py-2 text-lg text-white transition hover:bg-white/20"
              >
                ›
              </button>
            </div>
          </div>
          <div className="mt-6 grid gap-3 text-sm text-slate-200 md:grid-cols-2">
            {flashcards.map((card, index) => (
              <button
                key={card.id}
                type="button"
                onClick={() => {
                  setShowMeaning(false);
                  setCurrentIndex(index);
                }}
                className={`rounded-xl border px-4 py-3 text-right transition ${
                  index === currentIndex
                    ? "border-brand-300 bg-brand-500/20 text-white"
                    : "border-white/10 bg-white/5 text-slate-200 hover:border-brand-300/50"
                }`}
              >
                {card.word}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
