export function AppFooter() {
  return (
    <footer className="mt-16 border-t border-white/10 pt-6 text-xs text-slate-400">
      <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-right">
        <p>© {new Date().getFullYear()} DeutschMeister. جميع الحقوق محفوظة.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#path"
            className="rounded-full border border-white/10 px-3 py-1 text-slate-300 transition hover:border-brand-300 hover:text-white"
          >
            خطة التعلم
          </a>
          <a
            href="#flashcards"
            className="rounded-full border border-white/10 px-3 py-1 text-slate-300 transition hover:border-brand-300 hover:text-white"
          >
            بطاقات المفردات
          </a>
          <a
            href="https://www.goethe.de/prf/enindex.htm"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 px-3 py-1 text-slate-300 transition hover:border-brand-300 hover:text-white"
          >
            Goethe-Zertifikat
          </a>
        </div>
      </div>
    </footer>
  );
}
