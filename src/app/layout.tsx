import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

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
    <html lang="pt-BR" className="scroll-smooth">
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
