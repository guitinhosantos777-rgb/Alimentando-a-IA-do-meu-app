import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TecAI Pro - Assistente para Técnicos de Refrigeração",
  description: "Ferramentas, manuais e IA especializada para profissionais de refrigeração e ar-condicionado",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased bg-slate-950 text-gray-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
