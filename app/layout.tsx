import { inter } from '@/app/ui/fonts';
import '@/app/ui/global.css';
import Head from 'next/head';
import HeaderWrapper from '@/app/ui/layout/headerWrapper'
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <body className={`${inter.className} antialiased`}>
        <main className="flex min-h-screen flex-col p-0">
          <HeaderWrapper></HeaderWrapper>
          {children}
        </main>
      </body>
    </html>
  );
}
