import type { Metadata } from "next";
import { Lato, PT_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TechComponentes | Componentes eletrônicos e orientação técnica",
  description: "Encontre componentes, kits e apoio na escolha das peças para estudar, reparar, prototipar e desenvolver soluções. Para estudantes, técnicos, makers e empresas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${lato.variable} ${ptSans.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased">
        <CartProvider>
          <Toaster position="bottom-right" />
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
