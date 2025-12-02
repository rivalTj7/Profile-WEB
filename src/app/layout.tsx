import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rivaldo Tojín | Full Stack Developer & DevOps Engineer',
  description:
    'Ingeniero de Desarrollo Full Stack especializado en DevOps, Cloud Computing y Desarrollo de Software. Experiencia en Azure, React, Python, Java y más.',
  keywords: [
    'Full Stack Developer',
    'DevOps Engineer',
    'Software Engineer',
    'Guatemala',
    'Azure',
    'React',
    'Python',
    'Java',
    'Cloud Computing',
  ],
  authors: [{ name: 'Rivaldo Alexander Tojín Ixcotoyac' }],
  creator: 'Rivaldo Tojín',
  openGraph: {
    type: 'website',
    locale: 'es_GT',
    url: 'https://rivaldo-tojin.vercel.app',
    title: 'Rivaldo Tojín | Full Stack Developer & DevOps Engineer',
    description:
      'Ingeniero de Desarrollo Full Stack especializado en DevOps, Cloud Computing y Desarrollo de Software.',
    siteName: 'Rivaldo Tojín Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rivaldo Tojín | Full Stack Developer & DevOps Engineer',
    description:
      'Ingeniero de Desarrollo Full Stack especializado en DevOps, Cloud Computing y Desarrollo de Software.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
