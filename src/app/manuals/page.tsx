"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, Search, Download, ExternalLink } from "lucide-react";
import { supabase, type Manual } from "@/lib/supabase";

export default function ManualsPage() {
  const [manuals, setManuals] = useState<Manual[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadManuals();
  }, []);

  async function loadManuals() {
    try {
      const { data, error } = await supabase
        .from('manuals')
        .select('*')
        .order('nome', { ascending: true });

      if (error) throw error;
      setManuals(data || []);
    } catch (error) {
      console.error('Erro ao carregar manuais:', error);
    } finally {
      setLoading(false);
    }
  }

  const filteredManuals = manuals.filter(manual =>
    manual.nome.toLowerCase().includes(searchTerm.toLowerCase())
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
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Base Técnica</h1>
                <p className="text-xs text-cyan-300">Manuais e fichas técnicas</p>
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
                placeholder="Buscar manual por marca ou modelo..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-900/50 border border-blue-900/30 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
              />
            </div>
          </div>

          {/* Manuals List */}
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-gray-400 mt-4">Carregando manuais...</p>
            </div>
          ) : filteredManuals.length > 0 ? (
            <div className="space-y-4">
              {filteredManuals.map((manual) => (
                <div
                  key={manual.id}
                  className="bg-slate-900/50 border border-blue-900/30 rounded-xl p-6 hover:bg-slate-900/70 hover:border-cyan-500/50 transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">{manual.nome}</h3>
                      <p className="text-sm text-gray-400">Arquivo PDF disponível para download</p>
                    </div>
                    <a
                      href={manual.link_pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                    >
                      <Download className="w-4 h-4" />
                      <span className="text-sm font-medium">Abrir</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-slate-900/30 border border-blue-900/30 rounded-xl">
              <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 mb-2">
                {searchTerm ? 'Nenhum manual encontrado' : 'Nenhum manual disponível ainda'}
              </p>
              <p className="text-gray-500 text-sm">
                {searchTerm ? 'Tente buscar por outra marca ou modelo' : 'Em breve adicionaremos manuais técnicos'}
              </p>
            </div>
          )}

          {/* Info Box */}
          <div className="mt-12 bg-cyan-900/20 border border-cyan-900/30 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-2">Acesso Offline</h3>
            <p className="text-gray-400 text-sm">
              Baixe os manuais para acessá-los mesmo sem conexão com a internet.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
