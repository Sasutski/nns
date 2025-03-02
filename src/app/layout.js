import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NNS Development",
  description: "Just a small team of three",
  icons: {
    icon: '/rye.png', // Make sure rye.png is in your public folder
    // Optional: Add different sizes and formats
    apple: '/rye.png', // For Apple devices
    // Or specify multiple sizes:
    // icon: [
    //   { url: '/rye-16.png', sizes: '16x16', type: 'image/png' },
    //   { url: '/rye-32.png', sizes: '32x32', type: 'image/png' },
    //   { url: '/rye.png', sizes: '64x64', type: 'image/png' },
    // ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}