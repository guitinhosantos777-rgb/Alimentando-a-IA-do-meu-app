"use client";

import { Wrench, BookOpen, Bot, Gem } from 'lucide-react';
import { Screen } from '@/lib/types';

interface HomeProps {
  onNavigate: (screen: Screen) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const menuItems = [
    {
      icon: Wrench,
      title: 'Ferramentas',
      description: 'Códigos, cálculos e tabelas',
      screen: 'tools' as Screen,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BookOpen,
      title: 'Base Técnica',
      description: 'Manuais e fichas técnicas',
      screen: 'manuals' as Screen,
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Bot,
      title: 'Assistente IA',
      description: 'Tire suas dúvidas técnicas',
      screen: 'ai_chat' as Screen,
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Gem,
      title: 'Planos',
      description: 'Upgrade sua conta',
      screen: 'plans' as Screen,
      color: 'from-amber-500 to-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-6">
      {/* Header */}
      <div className="text-center mb-12 pt-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-4 shadow-2xl">
          <Wrench className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-2">TecAI Pro</h1>
        <p className="text-blue-300 text-lg">Seu assistente técnico profissional</p>
      </div>

      {/* Menu Grid */}
      <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.screen}
              onClick={() => onNavigate(item.screen)}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:bg-slate-800/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl mb-4 shadow-lg group-hover:shadow-2xl transition-shadow`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.description}</p>
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div className="text-center mt-12 text-slate-500 text-sm">
        <p>Versão 1.0.0 • TecAI Pro</p>
      </div>
    </div>
  );
}
