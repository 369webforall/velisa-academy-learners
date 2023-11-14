import type { Metadata } from 'next';
import './globals.css';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from '@/components/ui/theme-provider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Velisa Academy Learners Web Agency',
  description: 'Velisa Academy Learners Web Agency',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Theme>
            <Header />
            <main className="min-h-screen mt-6">{children}</main>
            <Footer />
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
