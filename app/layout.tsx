import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rivaldo Tojín - Full Stack Developer & DevOps Engineer",
  description: "Ingeniero de Desarrollo especializado en DevOps, desarrollo full stack y automatización. Experiencia en Azure, React, Angular, Python, y más.",
  keywords: ["Rivaldo Tojín", "Full Stack Developer", "DevOps", "Guatemala", "React", "Angular", "Azure", "Python", "Java"],
  authors: [{ name: "Rivaldo Alexander Tojín Ixcotoyac" }],
  openGraph: {
    title: "Rivaldo Tojín - Full Stack Developer & DevOps Engineer",
    description: "Ingeniero de Desarrollo especializado en DevOps y desarrollo full stack",
    type: "website",
    locale: "es_GT",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
