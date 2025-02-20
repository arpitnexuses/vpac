import { Inter } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <title>VPAC</title>
      </head>
      <body className="font-inter">
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'VPAC',
  description: 'VPAC description'
} 