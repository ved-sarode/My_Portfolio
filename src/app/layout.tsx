import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Vedant Vikas Sarode - Bioinformatics Portfolio',
  description: 'Portfolio of Vedant Vikas Sarode, a Bioinformatics graduate specializing in computational structural biology and molecular simulation.',
  keywords: ['Vedant Sarode', 'Vedant Vikas Sarode', 'Bioinformatics', 'Computational Structural Biology', 'Portfolio', 'Molecular Simulation'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="anonymous" href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col font-body bg-background text-on-surface antialiased">
        <Navigation />
        <div className="flex-grow w-full">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
