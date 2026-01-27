import { Geist, Geist_Mono, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Pastor Reuben Wilson | Leadership, Humanitarian & Political Initiatives",
  description:
    "Explore the official platform of Pastor Reuben Wilson — highlighting leadership programs, educational initiatives, humanitarian outreach, scholarships, and political support across Nigeria.",
  keywords:
    "Pastor Reuben Wilson, leadership initiatives, scholarships, humanitarian programs, political support group, PRIFGLA, Nigeria leadership",
  author: "Pastor Reuben Wilson",
  openGraph: {
    title: "Pastor Reuben Wilson | Leadership, Humanitarian & Political Initiatives",
    description:
      "Discover Pastor Reuben Wilson’s initiatives in leadership, education, humanitarian programs, and political development across Nigeria.",
    url: "https://pastor-reuben-wilson.vercel.app/",
    siteName: "Pastor Reuben Wilson Official",
    images: [
      {
        url: "https://www.facebook.com/photo/?fbid=814958797957581&set=a.197354126384721", // Replace with a social media preview image
        width: 1200,
        height: 630,
        alt: "Pastor Reuben Wilson Official Platform",
      },
    ],
    type: "website",
  },
};




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Google Search Console verification */}
        <meta name="google-site-verification" content="oFlX-FvdiV6d8sb66HJLDO3Zc6Y_uiqzMpXC4LvCtIE" />
      </Head>
      <body
        className={`${lora.className} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}





