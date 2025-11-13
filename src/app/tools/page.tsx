"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search, Wrench, Calculator, Thermometer, Droplet, BookText } from "lucide-react";

export default function ToolsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const tools = [
    {
      id: "error-codes",
      title: "Códigos de Erro",
      description: "Consulte códigos de erro por marca e modelo",
      icon: Search,
      color: "from-blue-500 to-blue-600",
      shadowColor: "shadow-blue-500/50",
    },
    {
      id: "thermal-calc",
      title: "Cálculo de Carga Térmica",
      description: "Calcule BTUs necessários para ambientes",
      icon: Calculator,
      color: "from-cyan-500 to-cyan-600",
      shadowColor: "shadow-cyan-500/50",
    },
    {
      id: "unit-converter",
      title: "Conversor de Unidades",
      description: "Converta pressão, temperatura e potência",
      icon: Thermometer,
      color: "from-purple-500 to-purple-600",
      shadowColor: "shadow-purple-500/50",
    },
    {
      id: "gas-table",
      title: "Tabela de Gases",
      description: "Pressões ideais por tipo de gás refrigerante",
      icon: Droplet,
      color: "from-emerald-500 to-emerald-600",
      shadowColor: "shadow-emerald-500/50",
    },
    {
      id: "dictionary",
      title: "Dicionário Técnico",
      description: "Termos e conceitos de refrigeração",
      icon: BookText,
      color: "from-orange-500 to-orange-600",
      shadowColor: "shadow-orange-500/50",
    },
  ];

  const filteredTools = tools.filter(tool =>
    tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Header */}
      <header className="border-b border-blue-900/30 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <button className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
                <ArrowLeft className="w-6 h-6 text-gray-300" />
              </button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Ferramentas</h1>
                <p className="text-xs text-blue-300">Offline • Sempre disponível</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar ferramenta..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-900/50 border border-blue-900/30 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredTools.map((tool) => {
              const Icon = tool.icon;
              return (
                <button
                  key={tool.id}
                  className="group bg-slate-900/50 border border-blue-900/30 rounded-2xl p-6 hover:bg-slate-900/70 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 text-left"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg ${tool.shadowColor} transition-all`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{tool.title}</h3>
                  <p className="text-gray-400 text-sm">{tool.description}</p>
                  <div className="mt-4 inline-flex items-center text-blue-400 text-sm font-medium">
                    Abrir ferramenta →
                  </div>
                </button>
              );
            })}
          </div>

          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Nenhuma ferramenta encontrada</p>
            </div>
          )}

          {/* Info Box */}
          <div className="mt-12 bg-blue-900/20 border border-blue-900/30 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-2">Funciona 100% Offline</h3>
            <p className="text-gray-400 text-sm">
              Todas as ferramentas desta seção funcionam sem conexão com a internet. 
              Perfeito para trabalhar em campo!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
