import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import { Analytics } from '@/components/analytics';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: {
    default: 'ddubb.net',
    template: '%s | ddubb.net',
  },
  description: 'Freelance Software Engineer and Founder of ddubb',
  openGraph: {
    title: 'ddubb.net',
    description: 'Freelance Software Engineer and Founder of ddubb',
    url: 'https://ddubb.net',
    siteName: 'ddubb.net',
    images: [
      {
        url: 'https://ddubb.net/og.png',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
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
  twitter: {
    title: 'ddubb_net',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.png',
  },
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(inter.variable)}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === 'development' ? 'debug-screens' : undefined
        }`}
      >
        {children}
      </body>
    </html>
  );
}
