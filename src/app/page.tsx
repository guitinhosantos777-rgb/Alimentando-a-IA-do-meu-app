"use client";

import Link from "next/link";
import { Wrench, BookOpen, MessageSquare, CreditCard } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Header */}
      <header className="border-b border-blue-900/30 bg-slate-950/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <Wrench className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">TecAI Pro</h1>
              <p className="text-sm text-blue-300">Assistente Técnico Inteligente</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Bem-vindo ao TecAI Pro
            </h2>
            <p className="text-lg text-gray-300">
              Sua ferramenta completa para refrigeração e ar-condicionado
            </p>
          </div>

          {/* Menu Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Ferramentas */}
            <Link href="/tools">
              <div className="group bg-slate-900/50 border border-blue-900/30 rounded-2xl p-8 hover:bg-slate-900/70 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Ferramentas</h3>
                <p className="text-gray-400">
                  Códigos de erro, cálculos, tabelas de gases e mais
                </p>
                <div className="mt-4 inline-flex items-center text-blue-400 text-sm font-medium">
                  Acessar ferramentas →
                </div>
              </div>
            </Link>

            {/* Base Técnica */}
            <Link href="/manuals">
              <div className="group bg-slate-900/50 border border-blue-900/30 rounded-2xl p-8 hover:bg-slate-900/70 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Base Técnica</h3>
                <p className="text-gray-400">
                  Manuais e fichas técnicas de todas as marcas
                </p>
                <div className="mt-4 inline-flex items-center text-cyan-400 text-sm font-medium">
                  Ver manuais →
                </div>
              </div>
            </Link>

            {/* Assistente IA */}
            <Link href="/ai-chat">
              <div className="group bg-slate-900/50 border border-purple-900/30 rounded-2xl p-8 hover:bg-slate-900/70 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 cursor-pointer relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  PRO
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Assistente IA</h3>
                <p className="text-gray-400">
                  Tire dúvidas com inteligência artificial especializada
                </p>
                <div className="mt-4 inline-flex items-center text-purple-400 text-sm font-medium">
                  Conversar com TecAI →
                </div>
              </div>
            </Link>

            {/* Planos */}
            <Link href="/plans">
              <div className="group bg-slate-900/50 border border-emerald-900/30 rounded-2xl p-8 hover:bg-slate-900/70 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-emerald-500/50 transition-all">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Planos</h3>
                <p className="text-gray-400">
                  Escolha o plano ideal para você
                </p>
                <div className="mt-4 inline-flex items-center text-emerald-400 text-sm font-medium">
                  Ver planos →
                </div>
              </div>
            </Link>
          </div>

          {/* Features */}
          <div className="mt-16 grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-gray-400">Funciona Offline</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-400">Códigos de Erro</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">IA</div>
              <div className="text-gray-400">Assistente Especializado</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-blue-900/30 bg-slate-950/50 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-6 text-center text-gray-500 text-sm">
          TecAI Pro © 2024 - Assistente para Técnicos de Refrigeração
        </div>
      </footer>
    </div>
  );
}
