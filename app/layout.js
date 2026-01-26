import { Geist, Geist_Mono, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  title: "Pastor Reuben Wilson",
  description: "The official platform of Pastor Reuben Wilson, featuring leadership, education, humanitarian and political initiative",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
