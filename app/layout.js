import { Geist, Geist_Mono } from "next/font/google";
import { Reenie_Beanie } from "next/font/google";
import "./globals.css";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const reenieBeanie = Reenie_Beanie({
  weight: '400',
  subsets: ['latin'],
  variable: "--font-reenie-beanie",
  display: 'swap',
});

export const metadata = {
  title: "Poppy-Pie",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${reenieBeanie.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}