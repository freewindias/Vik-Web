import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/theme-provider";
import Footer from "./components/footer/footer";
import { NewNavbar } from "./components/new-navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vikrant Belu - Masterpieces in Modern Art",
  description:
    "Explore the stunning art portfolio of Vikrant Belu, a renowned artist with a diverse collection of paintings ranging from contemporary to classical. Discover breathtaking artworks that captivate the soul and inspire the imagination. Visit our gallery to experience the unique vision and creative genius of Vikrant Belu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container">
            <NewNavbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
