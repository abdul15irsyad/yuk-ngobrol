import type { Metadata } from 'next';
import './globals.css';
import { Provider } from '@/components/provider/provider';
import { figtree } from '@/lib/font';

export const metadata: Metadata = {
  title: 'Yuk Ngobrol',
  description:
    'kartu yg berisi pertanyaan² tentang Masa Lalu, Kehidupan, Hubungan, dan Diri Sendiri ini bisa bikin kalian makin mengenal doi.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.className}`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
