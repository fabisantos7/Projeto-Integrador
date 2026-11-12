"use client";

import { useState } from "react";
import { LogoMarca } from "./logo";

const LINKS = [
  { label: "O Problema", href: "#problema" },
  { label: "Demonstração", href: "#demonstracao" },
  { label: "Recursos", href: "#recursos" },
  { label: "Painel Admin", href: "#painel" },
];

export function Navbar() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-warmgray bg-paper/95 backdrop-blur-sm">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-6 px-4 sm:px-6"
      >
        <a
          href="#topo"
          className="flex items-center gap-3 outline-offset-4 focus-visible:outline-2 focus-visible:outline-primary"
        >
          <span className="flex h-10 w-10 items-center justify-center bg-primary text-white">
            <LogoMarca className="h-6 w-6" />
          </span>
          <span className="leading-none">
            <span className="block font-serif text-xl font-semibold tracking-tight text-ink">
              BiblioQR
            </span>
            <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.3em] text-graphite/60">
              Biblioteca SENAI
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-graphite underline-offset-8 transition-colors hover:text-primary hover:underline hover:decoration-primary/40"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#demonstracao"
          className="hidden items-center bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-700 lg:inline-flex"
        >
          Ver Demonstração
        </a>

        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          aria-expanded={aberto}
          aria-controls="menu-mobile"
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          className="inline-flex h-10 w-10 items-center justify-center text-graphite transition-colors hover:text-primary lg:hidden"
        >
          <span aria-hidden="true" className="relative block h-4 w-6">
            {aberto ? (
              <span className="absolute left-0 top-1/2 h-[1.5px] w-full rotate-45 bg-current" />
            ) : (
              <span className="absolute left-0 top-0 h-[1.5px] w-full bg-current" />
            )}
            {aberto ? (
              <span className="absolute left-0 top-1/2 h-[1.5px] w-full -rotate-45 bg-current" />
            ) : (
              <>
                <span className="absolute left-0 top-1/2 h-[1.5px] w-4 bg-current" />
                <span className="absolute bottom-0 left-0 h-[1.5px] w-full bg-current" />
              </>
            )}
          </span>
        </button>
      </nav>

      {aberto && (
        <div id="menu-mobile" className="border-t border-warmgray bg-paper lg:hidden">
          <ul className="mx-auto max-w-6xl divide-y divide-warmgray px-4 sm:px-6">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setAberto(false)}
                  className="block py-3.5 text-sm font-medium text-graphite transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="py-4">
              <a
                href="#demonstracao"
                onClick={() => setAberto(false)}
                className="flex items-center justify-center bg-primary px-5 py-3 text-sm font-semibold text-white"
              >
                Ver Demonstração
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
