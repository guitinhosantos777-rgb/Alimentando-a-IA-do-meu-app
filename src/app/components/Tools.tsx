"use client";

import { useState } from 'react';
import { ArrowLeft, Search, Thermometer, Gauge, Wind, BookText, Calculator } from 'lucide-react';
import { Screen } from '@/lib/types';

interface ToolsProps {
  onNavigate: (screen: Screen) => void;
}

type ToolTab = 'error_codes' | 'thermal_calc' | 'converter' | 'gases' | 'dictionary';

export default function Tools({ onNavigate }: ToolsProps) {
  const [activeTab, setActiveTab] = useState<ToolTab>('error_codes');
  const [searchBrand, setSearchBrand] = useState('');
  const [searchModel, setSearchModel] = useState('');

  // Dados de exemplo (em produção viriam do Supabase)
  const errorCodes = [
    { marca: 'LG', modelo: 'S4-W09JA3AA', codigo: 'CH01', descricao: 'Erro no sensor de temperatura ambiente' },
    { marca: 'Samsung', modelo: 'AR12', codigo: 'E1', descricao: 'Erro no sensor de temperatura interna' },
    { marca: 'Midea', modelo: 'MSM-12CR', codigo: 'E3', descricao: 'Proteção de alta pressão' }
  ];

  const gases = [
    { gas: 'R-22', pressao_min: 4.5, pressao_max: 16.0, temperatura: 25 },
    { gas: 'R-410A', pressao_min: 8.0, pressao_max: 26.0, temperatura: 25 },
    { gas: 'R-32', pressao_min: 6.5, pressao_max: 22.0, temperatura: 25 }
  ];

  const tools = [
    { id: 'error_codes', icon: Search, label: 'Códigos de Erro' },
    { id: 'thermal_calc', icon: Calculator, label: 'Carga Térmica' },
    { id: 'converter', icon: Gauge, label: 'Conversor' },
    { id: 'gases', icon: Wind, label: 'Gases' },
    { id: 'dictionary', icon: BookText, label: 'Dicionário' }
  ];

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
          <h1 className="text-2xl font-bold text-white">Ferramentas</h1>
          <p className="text-slate-400 text-sm">Recursos técnicos offline</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <button
              key={tool.id}
              onClick={() => setActiveTab(tool.id as ToolTab)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl whitespace-nowrap transition-all ${
                activeTab === tool.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm font-medium">{tool.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
        {activeTab === 'error_codes' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white mb-4">Códigos de Erro</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Marca (ex: LG)"
                value={searchBrand}
                onChange={(e) => setSearchBrand(e.target.value)}
                className="px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="Modelo (ex: S4-W09)"
                value={searchModel}
                onChange={(e) => setSearchModel(e.target.value)}
                className="px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="space-y-3 mt-6">
              {errorCodes
                .filter(code => 
                  (!searchBrand || code.marca.toLowerCase().includes(searchBrand.toLowerCase())) &&
                  (!searchModel || code.modelo.toLowerCase().includes(searchModel.toLowerCase()))
                )
                .map((code, idx) => (
                  <div key={idx} className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span className="text-blue-400 font-semibold">{code.marca}</span>
                        <span className="text-slate-500 mx-2">•</span>
                        <span className="text-slate-300">{code.modelo}</span>
                      </div>
                      <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-lg text-sm font-mono">
                        {code.codigo}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm">{code.descricao}</p>
                  </div>
                ))}
            </div>
          </div>
        )}

        {activeTab === 'thermal_calc' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white mb-4">Cálculo de Carga Térmica</h2>
            <div className="space-y-3">
              <input
                type="number"
                placeholder="Área (m²)"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
              <input
                type="number"
                placeholder="Pé direito (m)"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
              <select className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500">
                <option>Exposição solar</option>
                <option>Baixa</option>
                <option>Média</option>
                <option>Alta</option>
              </select>
              <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all">
                Calcular BTUs
              </button>
            </div>
          </div>
        )}

        {activeTab === 'converter' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white mb-4">Conversor de Unidades</h2>
            <div className="space-y-3">
              <select className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500">
                <option>Tipo de conversão</option>
                <option>Pressão (PSI ↔ Bar)</option>
                <option>Temperatura (°C ↔ °F)</option>
                <option>Potência (BTU ↔ W)</option>
              </select>
              <input
                type="number"
                placeholder="Valor"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
              <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                <p className="text-blue-400 text-sm mb-1">Resultado:</p>
                <p className="text-white text-2xl font-bold">--</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'gases' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white mb-4">Tabela de Gases Refrigerantes</h2>
            <div className="space-y-3">
              {gases.map((gas, idx) => (
                <div key={idx} className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
                  <h3 className="text-lg font-bold text-blue-400 mb-3">{gas.gas}</h3>
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <div>
                      <p className="text-slate-500 mb-1">Pressão Min</p>
                      <p className="text-white font-semibold">{gas.pressao_min} bar</p>
                    </div>
                    <div>
                      <p className="text-slate-500 mb-1">Pressão Max</p>
                      <p className="text-white font-semibold">{gas.pressao_max} bar</p>
                    </div>
                    <div>
                      <p className="text-slate-500 mb-1">Temp. Ref.</p>
                      <p className="text-white font-semibold">{gas.temperatura}°C</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'dictionary' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white mb-4">Dicionário Técnico</h2>
            <input
              type="text"
              placeholder="Buscar termo..."
              className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
            <div className="space-y-3 mt-4">
              {['Evaporador', 'Condensador', 'Compressor', 'Válvula de Expansão'].map((term, idx) => (
                <div key={idx} className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
                  <h3 className="text-white font-semibold mb-2">{term}</h3>
                  <p className="text-slate-400 text-sm">
                    Definição técnica do termo {term.toLowerCase()}...
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
