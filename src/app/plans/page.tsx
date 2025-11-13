"use client";

import Link from "next/link";
import { ArrowLeft, Check, Sparkles } from "lucide-react";

export default function PlansPage() {
  const plans = [
    {
      name: "Básico",
      price: "28,99",
      period: "ano",
      description: "Para técnicos que precisam de ferramentas essenciais",
      features: [
        "Códigos de erro de todas as marcas",
        "Cálculo de carga térmica",
        "Conversor de unidades",
        "Tabela de gases refrigerantes",
        "Dicionário técnico completo",
        "Funciona 100% offline",
        "Atualizações regulares",
      ],
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-900/30",
      hoverBorder: "hover:border-blue-500/50",
      buttonColor: "from-blue-500 to-cyan-500",
      shadowColor: "shadow-blue-500/50",
    },
    {
      name: "Pro",
      price: "44,99",
      period: "ano",
      description: "Para profissionais que querem o melhor",
      features: [
        "Tudo do Plano Básico",
        "Assistente IA especializado",
        "Respostas instantâneas 24/7",
        "Diagnósticos inteligentes",
        "Passo a passo detalhado",
        "Histórico de conversas",
        "Suporte prioritário",
        "Acesso antecipado a novidades",
      ],
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-900/30",
      hoverBorder: "hover:border-purple-500/50",
      buttonColor: "from-purple-500 to-pink-500",
      shadowColor: "shadow-purple-500/50",
      popular: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Header */}
      <header className="border-b border-blue-900/30 bg-slate-950/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <button className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
                <ArrowLeft className="w-6 h-6 text-gray-300" />
              </button>
            </Link>
            <div>
              <h1 className="text-xl font-bold text-white">Escolha seu Plano</h1>
              <p className="text-xs text-blue-300">Invista no seu crescimento profissional</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Intro */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Planos TecAI Pro
            </h2>
            <p className="text-lg text-gray-300">
              Escolha o plano ideal para suas necessidades
            </p>
          </div>

          {/* Plans Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-slate-900/50 border ${plan.borderColor} rounded-2xl p-8 ${plan.hoverBorder} transition-all duration-300 hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className={`bg-gradient-to-r ${plan.color} text-white text-sm font-bold px-6 py-2 rounded-full flex items-center gap-2 shadow-lg`}>
                      <Sparkles className="w-4 h-4" />
                      MAIS POPULAR
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-gray-400">R$</span>
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className={`mt-0.5 w-5 h-5 bg-gradient-to-br ${plan.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full bg-gradient-to-r ${plan.buttonColor} text-white font-bold py-4 rounded-xl hover:shadow-lg ${plan.shadowColor} transition-all`}
                >
                  Assinar {plan.name}
                </button>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-16 bg-slate-900/30 border border-blue-900/30 rounded-xl p-8">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Perguntas Frequentes</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-2">Posso cancelar a qualquer momento?</h4>
                <p className="text-gray-400 text-sm">
                  Sim! Você pode cancelar sua assinatura a qualquer momento sem taxas adicionais.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Como funciona o pagamento?</h4>
                <p className="text-gray-400 text-sm">
                  O pagamento é anual e pode ser feito via cartão de crédito, PIX ou boleto bancário.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Posso mudar de plano depois?</h4>
                <p className="text-gray-400 text-sm">
                  Sim! Você pode fazer upgrade do Básico para o Pro a qualquer momento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
