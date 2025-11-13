// Tipos do TecAI Pro

export type UserRole = 'basic_user' | 'pro_user' | null;

export interface User {
  id: string;
  nome: string;
  email: string;
  role: UserRole;
}

export interface ErrorCode {
  id: number;
  marca: string;
  modelo: string;
  codigo: string;
  descricao: string;
}

export interface Gas {
  id: number;
  gas: string;
  pressao_min: number;
  pressao_max: number;
  temperatura: number;
}

export interface Manual {
  id: number;
  nome: string;
  link_pdf: string;
}

export interface ChatMessage {
  id: string;
  user_id: string;
  pergunta: string;
  resposta: string;
  data: string;
  isUser: boolean;
}

export interface Plan {
  name: string;
  price: string;
  role: UserRole;
  features: string[];
}

export type Screen = 'home' | 'tools' | 'manuals' | 'ai_chat' | 'plans';
