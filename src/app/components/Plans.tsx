"use client";

import { ArrowLeft, Check, Sparkles } from 'lucide-react';
import { Screen, UserRole } from '@/lib/types';

interface PlansProps {
  onNavigate: (screen: Screen) => void;
  currentRole: UserRole;
  onUpgrade: (role: 'basic_user' | 'pro_user') => void;
}

export default function Plans({ onNavigate, currentRole, onUpgrade }: PlansProps) {
  const plans = [
    {
      name: 'Plano Básico',
      price: 'R$ 28,99',
      period: '/ano',
      role: 'basic_user' as const,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Códigos de erro por marca',
        'Cálculo de carga térmica',
        'Conversor de unidades',
        'Tabela de gases refrigerantes',
        'Dicionário técnico',
        'Manuais e fichas técnicas',
        'Acesso offline completo'
      ]
    },
    {
      name: 'Plano Pro',
      price: 'R$ 44,99',
      period: '/ano',
      role: 'pro_user' as const,
      color: 'from-purple-500 to-pink-500',
      popular: true,
      features: [
        'Tudo do Plano Básico',
        'Assistente IA ilimitado',
        'Respostas técnicas em tempo real',
        'Histórico de conversas',
        'Suporte prioritário',
        'Atualizações exclusivas',
        'Sem anúncios'
      ]
    }
  ];

  const handleSubscribe = (role: 'basic_user' | 'pro_user') => {
    // Em produção, integrar com sistema de pagamento
    onUpgrade(role);
    alert(`Assinatura ${role === 'basic_user' ? 'Básica' : 'Pro'} ativada com sucesso!`);
  };

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
          <h1 className="text-2xl font-bold text-white">Planos</h1>
          <p className="text-slate-400 text-sm">Escolha o melhor para você</p>
        </div>
      </div>

      {/* Current Plan Badge */}
      {currentRole && (
        <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
          <p className="text-green-400 text-sm">
            ✓ Você está no <strong>{currentRole === 'basic_user' ? 'Plano Básico' : 'Plano Pro'}</strong>
          </p>
        </div>
      )}

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.role}
            className={`relative bg-slate-800/50 backdrop-blur-sm border ${
              plan.popular ? 'border-purple-500' : 'border-slate-700'
            } rounded-2xl p-6 hover:scale-105 transition-transform`}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-xs font-semibold">
                  <Sparkles className="w-3 h-3" />
                  MAIS POPULAR
                </div>
              </div>
            )}

            {/* Plan Header */}
            <div className="text-center mb-6">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl mb-4 shadow-lg`}>
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-slate-400">{plan.period}</span>
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className={`flex-shrink-0 w-5 h-5 bg-gradient-to-br ${plan.color} rounded-full flex items-center justify-center mt-0.5`}>
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-slate-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Subscribe Button */}
            <button
              onClick={() => handleSubscribe(plan.role)}
              disabled={currentRole === plan.role}
              className={`w-full py-3 rounded-xl font-semibold transition-all ${
                currentRole === plan.role
                  ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                  : `bg-gradient-to-r ${plan.color} text-white hover:shadow-lg hover:scale-105`
              }`}
            >
              {currentRole === plan.role ? 'Plano Atual' : `Assinar ${plan.name}`}
            </button>
          </div>
        ))}
      </div>

      {/* Info */}
      <div className="mt-8 max-w-4xl mx-auto">
        <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
          <p className="text-blue-400 text-sm text-center">
            💳 Pagamento seguro • 🔄 Cancele quando quiser • ✓ Garantia de 7 dias
          </p>
        </div>
      </div>
    </div>
  );
}
