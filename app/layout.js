import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import MainChildren from "./components/MainChildren";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Code With Dary Flexbox",
  description: "learn flexbox basics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
