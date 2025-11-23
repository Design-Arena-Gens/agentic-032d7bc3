import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "DeutschMeister | تعلم اللغة الألمانية بسهولة",
  description:
    "منصة تفاعلية لتعلم اللغة الألمانية عبر مسارات تعلم، بطاقات مفردات، تمارين تفاعلية، ونصائح لغوية مخصصة للمتعلمين العرب."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${inter.variable} font-sans bg-slate-950 text-slate-100`}>
        {children}
      </body>
    </html>
  );
}
