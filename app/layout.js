import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Team 2 Stock Control ApP",
  description: "A stock control and inventory application built by team 2"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-green-500`}>{children}</body>
    </html>
  );
}
