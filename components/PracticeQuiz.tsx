"use client";

import { useMemo, useState } from "react";
import { quizQuestions } from "@/lib/data";

type AnswerState = "idle" | "correct" | "incorrect";

export function PracticeQuiz() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answerState, setAnswerState] = useState<AnswerState>("idle");
  const [score, setScore] = useState(0);

  const currentQuestion = useMemo(() => quizQuestions[questionIndex], [questionIndex]);

  const handleAnswer = (index: number) => {
    if (answerState !== "idle") return;
    setSelectedAnswer(index);

    const isCorrect = index === currentQuestion.correctIndex;
    setAnswerState(isCorrect ? "correct" : "incorrect");
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    const nextIndex = questionIndex + 1;
    if (nextIndex < quizQuestions.length) {
      setQuestionIndex(nextIndex);
      setSelectedAnswer(null);
      setAnswerState("idle");
    } else {
      setQuestionIndex(0);
      setSelectedAnswer(null);
      setAnswerState("idle");
      setScore(0);
    }
  };

  return (
    <section className="space-y-8">
      <header className="flex flex-col gap-3 text-right md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="section-title">اختبار سريع لتعزيز الفهم</h2>
          <p className="section-subtitle">
            جرّب قدرتك على اختيار الإجابة الصحيحة، واحصل على شرح فوري لكل سؤال مع
            إعادة تعزز القاعدة أو المفردة المطلوبة.
          </p>
        </div>
        <div className="glass-panel flex items-center gap-2 px-5 py-3 text-sm text-slate-200">
          <span>النتيجة الحالية:</span>
          <span className="text-lg font-semibold text-brand-100">
            {score} / {quizQuestions.length}
          </span>
        </div>
      </header>
      <div className="glass-panel space-y-6 p-6 md:p-8">
        <div className="flex items-center justify-between text-sm text-slate-300">
          <span>سؤال {questionIndex + 1}</span>
          <button
            type="button"
            onClick={nextQuestion}
            className="rounded-full border border-white/20 px-4 py-1 text-xs text-slate-200 transition hover:bg-white/10"
          >
            {questionIndex === quizQuestions.length - 1 ? "إعادة التمرين" : "السؤال التالي"}
          </button>
        </div>
        <p className="text-xl font-semibold text-white">{currentQuestion.question}</p>
        <div className="grid gap-3">
          {currentQuestion.answers.map((answer, index) => {
            const isSelected = index === selectedAnswer;
            const isCorrect = index === currentQuestion.correctIndex;
            const baseClasses =
              "rounded-2xl border px-4 py-3 text-right transition text-sm md:text-base";

            let stateClasses = "border-white/10 bg-white/5 hover:border-brand-200/60";
            if (answerState !== "idle") {
              if (isSelected && isCorrect) {
                stateClasses = "border-emerald-400 bg-emerald-500/20";
              } else if (isSelected && !isCorrect) {
                stateClasses = "border-rose-400 bg-rose-500/20";
              } else if (isCorrect) {
                stateClasses = "border-emerald-400/60 bg-emerald-500/10";
              } else {
                stateClasses = "border-white/5 bg-white/5 opacity-60";
              }
            } else if (isSelected) {
              stateClasses = "border-brand-300 bg-brand-500/20";
            }

            return (
              <button
                key={`${currentQuestion.id}-${index}`}
                type="button"
                onClick={() => handleAnswer(index)}
                className={`${baseClasses} ${stateClasses}`}
              >
                {answer}
              </button>
            );
          })}
        </div>
        {answerState !== "idle" && (
          <div
            className={`rounded-2xl border px-4 py-3 text-sm ${
              answerState === "correct"
                ? "border-emerald-400/60 bg-emerald-500/10 text-emerald-100"
                : "border-rose-400/60 bg-rose-500/10 text-rose-100"
            }`}
          >
            {currentQuestion.explanation}
          </div>
        )}
      </div>
    </section>
  );
}
