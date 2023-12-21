import { readObjects } from "@/app/lib/parse-server";
import { inter } from '@/app/ui/fonts';
import '@/app/ui/global.css';
import Header from '@/app/ui/layout/header';
import Head from 'next/head';
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const projectsList = await readObjects(); 
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <body className={`${inter.className} antialiased`}>
        <main className="flex min-h-screen flex-col p-0">
          <Header projectsList={projectsList}></Header>
          {children}
        </main>
      </body>
    </html>
  );
}
