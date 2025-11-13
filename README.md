# 🧰 TecAI Pro

**Aplicativo mobile para técnicos de refrigeração e ar-condicionado**

O TecAI Pro é uma ferramenta completa para profissionais da área de refrigeração, oferecendo:
- 🔧 Ferramentas técnicas offline
- 📘 Base de manuais e fichas técnicas
- 🤖 Assistente de IA especializado
- 💎 Planos Básico e Pro

---

## 🎨 Design

- **Tema:** Escuro com tons de azul técnico
- **Estilo:** Interface limpa, cards organizados, botões grandes
- **Tipografia:** Moderna e legível
- **Ícones:** Minimalistas

---

## 🏗️ Estrutura do App

### Telas Principais

1. **Home** (`/`)
   - Logotipo e menu principal
   - Atalhos para: Ferramentas, Base Técnica, Assistente IA, Planos

2. **Ferramentas** (`/tools`)
   - Códigos de erro por marca/modelo
   - Cálculo de carga térmica
   - Conversor de unidades (pressão, temperatura)
   - Tabela de gases refrigerantes
   - Dicionário técnico
   - **Funciona 100% offline**

3. **Base Técnica** (`/manuals`)
   - Lista de manuais e fichas técnicas (PDF)
   - Busca e filtro por marca
   - **Offline**

4. **Assistente IA** (`/ai-chat`)
   - Chat com IA especializada em refrigeração
   - Modelo: `gpt-4o-mini` (OpenAI)
   - **Exclusivo para Plano Pro**
   - Redireciona usuários Básicos para tela de Planos

5. **Planos** (`/plans`)
   - **Plano Básico:** R$ 28,99/ano → Ferramentas offline
   - **Plano Pro:** R$ 44,99/ano → Tudo + Assistente IA
   - Atribuição automática de `role` após pagamento

---

## 🗄️ Banco de Dados

### Tabelas Supabase

```sql
-- Códigos de erro
CREATE TABLE error_codes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  marca TEXT NOT NULL,
  modelo TEXT NOT NULL,
  codigo TEXT NOT NULL,
  descricao TEXT NOT NULL
);

-- Tabela de gases
CREATE TABLE gases_table (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  gas TEXT NOT NULL,
  pressao_min DECIMAL,
  pressao_max DECIMAL,
  temperatura DECIMAL
);

-- Manuais técnicos
CREATE TABLE manuals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  nome TEXT NOT NULL,
  link_pdf TEXT NOT NULL
);

-- Usuários
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  nome TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  role TEXT DEFAULT 'basic_user' CHECK (role IN ('basic_user', 'pro_user'))
);

-- Histórico de chat
CREATE TABLE chat_history (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  pergunta TEXT NOT NULL,
  resposta TEXT NOT NULL,
  data TIMESTAMP DEFAULT NOW()
);
```

---

## 🤖 Assistente IA - TecAI

### Configuração

- **Modelo:** `gpt-4o-mini` (OpenAI)
- **System Prompt:** Técnico experiente que ensina de forma simples e prática
- **Estilo:** Objetivo, didático, com exemplos reais
- **Segurança:** Alerta sobre procedimentos perigosos

### Características

- Explica códigos de erro
- Ensina diagnósticos e reparos
- Passo a passo de procedimentos
- Cálculos e interpretação de pressões
- Boas práticas de instalação

---

## 💳 Monetização

### Planos de Assinatura

| Plano | Preço | Recursos | Role |
|-------|-------|----------|------|
| **Básico** | R$ 28,99/ano | Ferramentas offline | `basic_user` |
| **Pro** | R$ 44,99/ano | Tudo + Assistente IA | `pro_user` |

### Controle de Acesso

- Verificação de `user.role` ao acessar tela de IA
- Redirecionamento automático para `/plans` se usuário for Básico
- Atribuição de role após confirmação de pagamento

---

## 🚀 Como Rodar o Projeto

```bash
# Instalar dependências
npm install

# Configurar variáveis de ambiente
# Crie .env.local com:
# NEXT_PUBLIC_SUPABASE_URL=sua_url
# NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_key
# OPENAI_API_KEY=sua_key_openai

# Rodar em desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

---

## 📦 Tecnologias

- **Framework:** Next.js 15 + React 19
- **Estilo:** Tailwind CSS v4
- **Banco de Dados:** Supabase
- **IA:** OpenAI API (gpt-4o-mini)
- **Ícones:** Lucide React
- **UI:** Shadcn/ui

---

## 📝 Próximos Passos

1. ✅ Estrutura base do app
2. ✅ Integração com API de IA
3. ⏳ Popular banco de dados com códigos de erro
4. ⏳ Adicionar manuais técnicos
5. ⏳ Implementar sistema de pagamento
6. ⏳ Testes offline

---

## 📄 Licença

Projeto proprietário - TecAI Pro © 2024
