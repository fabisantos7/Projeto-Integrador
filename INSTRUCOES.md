# BiblioQR — Sistema de Check-in Rápido para Biblioteca SENAI

**Projeto Integrador DEV 2026 · SENAI Morvan Figueiredo**

Landing page com demonstração interativa do BiblioQR: check-in da biblioteca
via QR Code em menos de 5 segundos.

---

## Como rodar no Windows (passo a passo)

### 1. Instalar as ferramentas

- **Node.js 20+** — baixe em https://nodejs.org (versão LTS, marcador "recommended").
  Instale com as opções padrão.
- Opcional: **Bun** (https://bun.sh) — funciona igual, os comandos abaixo mostram
  as duas formas.

### 2. Abrir a pasta do projeto

Extraia o zip — será criada uma única pasta chamada **`biblioqr`**. Abra essa
pasta e digite `cmd` na barra de endereço do Explorador de Arquivos para abrir
o terminal nessa pasta.

### 3. Instalar as dependências

```bash
npm install
```

### 4. Rodar o projeto

```bash
npm run dev
```

(Se estiver usando Bun: `bun install` e depois `bun run dev`.)

### 5. Abrir no navegador

Acesse **http://localhost:3000**

---

## O que dá para testar na página

| Seção | O que fazer |
| --- | --- |
| **Demonstração** | Clique em "Simular check-in agora" e acompanhe as 3 etapas; no formulário, clique em "Confirmar presença — 1 clique" |
| **Menu de navegação** | O Problema, Demonstração, Recursos, Painel Admin (âncoras da página) |
| **Painel Admin** | Gráfico animado de check-ins por horário + 4 indicadores (dados ilustrativos) |
| **Mobile** | Redimensione a janela ou use o celular — o menu hambúrguer funciona |

---

## Estrutura do código

```
src/
  app/
    layout.tsx          → fonte (Playfair Display + Inter), metadados
    page.tsx            → ordem das seções da página
    globals.css         → paleta e estilos editoriais
  components/landing/
    navbar.tsx          → menu fixo com logo livro + QR
    hero.tsx            → capa com foto real e celular sobreposto
    problema-solucao.tsx→ seção 01 / O Desafio (Antes x Depois)
    demo-checkin.tsx    → seção 02 / simulador do check-in
    recursos.tsx        → seção 03 / Totem, Web App e Painel
    painel.tsx          → seção 04 / dashboard com gráfico
    encerramento.tsx    → fechamento em fundo preto
    footer.tsx          → rodapé
    qr-art.tsx          → arte de QR Code (SVG determinístico)
    logo.tsx / reveal.tsx
  data/
    equipe.json         → nome do produto, edição e escola
public/
  img/                  → fotografias reais de biblioteca
  favicon.svg
```

## Tecnologia

Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · lucide-react
Fontes: Playfair Display (títulos) · Inter (texto) · IBM Plex Mono (detalhes)

## Deploy gratuito (Vercel)

1. Suba a pasta para um repositório no GitHub (sem a pasta `node_modules`).
2. Acesse vercel.com, faça login com o GitHub e clique em "Add New → Project".
3. A Vercel detecta o Next.js automaticamente — clique em "Deploy".
