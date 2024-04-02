import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from  "../app/components/nav"; 
import FooterBar from  "../app/components/footerr";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nyaya Kutira",
  description: "Nyaya Kutira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900`}>
        <NavBar /> {/* Include your Navbar component here */}
        {children}
        <FooterBar/>
      </body>
    </html>
  );
}  

