"use client";

import { useState } from 'react';
import { ArrowLeft, Search, FileText, ExternalLink } from 'lucide-react';
import { Screen } from '@/lib/types';

interface ManualsProps {
  onNavigate: (screen: Screen) => void;
}

export default function Manuals({ onNavigate }: ManualsProps) {
  const [searchTerm, setSearchTerm] = useState('');

  // Dados de exemplo (em produção viriam do Supabase)
  const manuals = [
    { nome: 'Manual LG S4-W09JA3AA', link_pdf: 'https://example.com/lg-manual.pdf' },
    { nome: 'Ficha Técnica Samsung AR12', link_pdf: 'https://example.com/samsung-manual.pdf' },
    { nome: 'Manual Midea MSM-12CR', link_pdf: 'https://example.com/midea-manual.pdf' },
    { nome: 'Guia Instalação Gree Inverter', link_pdf: 'https://example.com/gree-manual.pdf' },
    { nome: 'Manual Elgin Split 9000 BTU', link_pdf: 'https://example.com/elgin-manual.pdf' }
  ];

  const filteredManuals = manuals.filter(manual =>
    manual.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => onNavigate('home')}
          className="p-2 bg-slate-800/50 rounded-xl hover:bg-slate-800 transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-blue-400" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-white">Base Técnica</h1>
          <p className="text-slate-400 text-sm">Manuais e fichas técnicas</p>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
        <input
          type="text"
          placeholder="Buscar por marca ou modelo..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Manuals List */}
      <div className="space-y-3">
        {filteredManuals.length > 0 ? (
          filteredManuals.map((manual, idx) => (
            <a
              key={idx}
              href={manual.link_pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl hover:bg-slate-800 hover:border-blue-500 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <FileText className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium group-hover:text-blue-400 transition-colors">
                    {manual.nome}
                  </h3>
                  <p className="text-slate-500 text-sm">PDF • Disponível offline</p>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-blue-400 transition-colors" />
            </a>
          ))
        ) : (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-slate-700 mx-auto mb-4" />
            <p className="text-slate-400">Nenhum manual encontrado</p>
          </div>
        )}
      </div>

      {/* Info Card */}
      <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
        <p className="text-blue-400 text-sm">
          💡 <strong>Dica:</strong> Todos os manuais estão disponíveis offline após o primeiro acesso.
        </p>
      </div>
    </div>
  );
}
