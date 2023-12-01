import './globals.css';
import { Rubik } from 'next/font/google';
import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const rubik = Rubik({ subsets: ['latin'] });

type Props = {
  children: ReactNode;
};

export default async function RootLayout(props: Props) {
  return (
    <html lang="en" className={rubik.className}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon-apple-touch.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body className="dark:bg-stone-900 text-neutral-100">
        <Navbar />
        {props.children}
        <Footer />
      </body>
    </html>
  );
}
