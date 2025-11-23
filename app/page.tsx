import { HeroSection } from "@/components/HeroSection";
import { StatsRibbon } from "@/components/StatsRibbon";
import { LearningPath } from "@/components/LearningPath";
import { VocabFlashcards } from "@/components/VocabFlashcards";
import { GrammarTips } from "@/components/GrammarTips";
import { PracticeQuiz } from "@/components/PracticeQuiz";
import { WeeklyPlan } from "@/components/WeeklyPlan";
import { ResourcesSection } from "@/components/ResourcesSection";
import { AppFooter } from "@/components/AppFooter";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-4 py-10 md:px-8 md:py-16">
      <HeroSection />
      <StatsRibbon />
      <LearningPath />
      <VocabFlashcards />
      <GrammarTips />
      <PracticeQuiz />
      <WeeklyPlan />
      <ResourcesSection />
      <AppFooter />
    </main>
  );
}
