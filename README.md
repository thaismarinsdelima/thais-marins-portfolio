# Thais Marins — Portfolio

Portfolio pessoal moderno e interativo, construído para apresentar a trajetória profissional de Thais Marins nas áreas de **QA**, **Produto**, **IA & Automação** e **Soluções Digitais**.

> Dark theme com estética neon, animações avançadas de scroll/parallax e suporte a 3 idiomas.

---

## Sumário

- [Visão Geral](#visão-geral)
- [Tech Stack](#tech-stack)
- [Funcionalidades](#funcionalidades)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Primeiros Passos](#primeiros-passos)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Internacionalização (i18n)](#internacionalização-i18n)
- [Design System](#design-system)
- [Deploy](#deploy)
- [Licença](#licença)

---

## Visão Geral

Single-page application (SPA) composta por cinco seções principais:

| Seção | Descrição |
|-------|-----------|
| **Hero** | Apresentação com animação letra a letra, partículas flutuantes e parallax |
| **Sobre** | Trajetória profissional com cards de destaque (IA, Qualidade, Agilidade) |
| **Projetos** | Showcase de projetos com tags de tecnologia e links para demo/código |
| **Skills** | Áreas de atuação: IA & Automação, Produto & Qualidade, Agile, Web & Digital |
| **Contato** | Links para GitHub, LinkedIn e e-mail |

---

## Tech Stack

| Camada | Tecnologias |
|--------|-------------|
| **Framework** | React 18 |
| **Build** | Vite 5 (SWC) |
| **Linguagem** | TypeScript 5 |
| **Estilização** | Tailwind CSS 3 + shadcn/ui (Radix UI) |
| **Animações** | Framer Motion |
| **Roteamento** | React Router DOM 6 |
| **Formulários** | React Hook Form + Zod |
| **Ícones** | Lucide React |
| **Testes** | Vitest + Testing Library |
| **Lint** | ESLint 9 |

---

## Funcionalidades

- **Animações avançadas** — parallax no scroll, partículas flutuantes, texto animado letra a letra com rotação 3D, glow que segue o cursor
- **Internacionalização** — suporte completo a Inglês, Português e Espanhol com troca dinâmica
- **Design responsivo** — mobile-first com navbar adaptativa (dots de navegação no mobile)
- **Glassmorphism & Neon** — cards com efeito glass, texto com glow neon, gradientes
- **Smooth scroll** — navegação suave entre seções com detecção de seção ativa
- **Componentes reutilizáveis** — 50+ componentes UI via shadcn/ui

---

## Estrutura do Projeto

```
src/
├── assets/                  # Imagens e arquivos estáticos
├── components/
│   ├── ui/                  # Componentes shadcn/ui (button, card, dialog...)
│   ├── HeroSection.tsx      # Seção principal com parallax e partículas
│   ├── AboutSection.tsx     # Seção sobre
│   ├── ProjectsSection.tsx  # Showcase de projetos
│   ├── SkillsSection.tsx    # Áreas de atuação
│   ├── ContactSection.tsx   # Links de contato
│   ├── Navbar.tsx           # Barra de navegação fixa
│   ├── AnimatedSection.tsx  # Wrapper de animação por scroll
│   ├── FloatingParticles.tsx
│   ├── GlowCard.tsx
│   ├── MouseGlow.tsx
│   └── LanguageSelector.tsx
├── i18n/
│   ├── LanguageContext.tsx   # Context provider de idioma
│   └── translations.ts      # Strings de tradução (EN/PT/ES)
├── hooks/                   # Custom hooks
├── lib/
│   └── utils.ts             # Utilitário cn() para classes CSS
├── pages/
│   ├── Index.tsx             # Página principal
│   └── NotFound.tsx          # Página 404
├── App.tsx                   # Componente raiz com rotas
├── index.css                 # Estilos globais e classes utilitárias
└── main.tsx                  # Entry point
```

---

## Primeiros Passos

### Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendado instalar via [nvm](https://github.com/nvm-sh/nvm))
- npm (incluído com o Node.js)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/thaismarinsdelima/thais-marins-portfolio.git

# Acesse o diretório
cd thais-marins-portfolio

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O app estará disponível em `http://localhost:8080`.

---

## Scripts Disponíveis

| Script | Comando | Descrição |
|--------|---------|-----------|
| **dev** | `npm run dev` | Inicia o servidor Vite com HMR |
| **build** | `npm run build` | Build de produção otimizado |
| **build:dev** | `npm run build:dev` | Build de desenvolvimento com source maps |
| **preview** | `npm run preview` | Preview do build de produção |
| **lint** | `npm run lint` | Verifica o código com ESLint |
| **test** | `npm run test` | Executa os testes (Vitest) |
| **test:watch** | `npm run test:watch` | Testes em modo watch |

---

## Internacionalização (i18n)

O portfolio suporta três idiomas com troca dinâmica via `LanguageSelector`:

| Código | Idioma |
|--------|--------|
| `en` | English (padrão) |
| `pt` | Português (Brasil) |
| `es` | Español |

As traduções ficam em `src/i18n/translations.ts`, organizadas por seção (`nav`, `hero`, `about`, `projects`, `skills`, `contact`). Os componentes consomem via hook `useLanguage()`:

```tsx
const { t } = useLanguage();
return <h1>{t.hero.greeting}</h1>;
```

---

## Design System

### Paleta de Cores

| Token | Valor | Uso |
|-------|-------|-----|
| **Primary** | `hsl(340 100% 60%)` | Rosa neon — cor principal |
| **Neon Soft** | `hsl(340 70% 70%)` | Rosa suave para glow |
| **Background** | `hsl(0 0% 0%)` | Preto — fundo |
| **Foreground** | `hsl(0 0% 95%)` | Off-white — texto |

### Tipografia

| Uso | Fonte | Pesos |
|-----|-------|-------|
| Headings | Space Grotesk | 300–700 |
| Body | Inter | 300–600 |

### Classes Utilitárias Customizadas

| Classe | Efeito |
|--------|--------|
| `.neon-text` | Texto com glow neon forte |
| `.neon-text-subtle` | Glow neon suave |
| `.glass-card` | Card com efeito glassmorphism |
| `.gradient-text` | Texto com gradiente |
| `.section-divider` | Linha divisória entre seções |

### Animações

Definidas no Tailwind config e via Framer Motion:

- `fade-up`, `fade-in`, `scale-in` — entrada de elementos
- `glow-pulse` — pulsação do efeito neon
- `float` — flutuação suave
- Parallax baseado em scroll (Framer Motion `useScroll` + `useTransform`)

---

## Deploy

O projeto gera arquivos estáticos (SPA) e pode ser hospedado em qualquer serviço de hosting estático.

### Via Lovable

1. Acesse o projeto no [Lovable](https://lovable.dev)
2. Clique em **Share → Publish**
3. Para domínio customizado: **Project → Settings → Domains → Connect Domain**

### Via outros serviços

```bash
# Gere o build de produção
npm run build

# Os arquivos estarão em /dist — faça deploy desta pasta
```

Compatível com: **Vercel**, **Netlify**, **GitHub Pages**, **Cloudflare Pages**, entre outros.

---

## Licença

Este projeto é de uso pessoal. Todos os direitos reservados a Thais Marins.
