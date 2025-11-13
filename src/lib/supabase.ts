import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types
export interface User {
  id: string;
  nome: string;
  email: string;
  role: 'basic_user' | 'pro_user';
}

export interface ErrorCode {
  id: string;
  marca: string;
  modelo: string;
  codigo: string;
  descricao: string;
}

export interface Gas {
  id: string;
  gas: string;
  pressao_min: number;
  pressao_max: number;
  temperatura: number;
}

export interface Manual {
  id: string;
  nome: string;
  link_pdf: string;
}

export interface ChatMessage {
  id: string;
  user_id: string;
  pergunta: string;
  resposta: string;
  data: string;
}
