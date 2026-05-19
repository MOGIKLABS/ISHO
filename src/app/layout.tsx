import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Providers } from '@/components/Providers';
import { TopNav } from '@/components/TopNav';
import { BottomBar } from '@/components/BottomBar';

export const metadata: Metadata = {
  title: 'Ishō (衣装) | Cosplay Ideation Lab',
  description:
    'AI-powered cosplay outfit builder. Remix styles, prototype looks, and bring characters to life.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-dvh flex-col">
        <Providers>
          <TopNav />
          <main className="flex-1 px-4 pb-24 pt-6 md:px-8">{children}</main>
          <BottomBar />
        </Providers>
      </body>
    </html>
  );
}
