import { LogoMarca } from "./logo";
import equipe from "@/data/equipe.json";

const LINKS = [
  { label: "O Problema", href: "#problema" },
  { label: "Demonstração", href: "#demonstracao" },
  { label: "Recursos", href: "#recursos" },
  { label: "Painel Admin", href: "#painel" },
];

export function Footer() {
  return (
    <footer className="bg-graphite text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center bg-primary text-white">
                <LogoMarca className="h-6 w-6" />
              </span>
              <span className="leading-none">
                <span className="block font-serif text-xl font-semibold tracking-tight">
                  {equipe.nomeProduto}
                </span>
                <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.3em] text-white/50">
                  Biblioteca SENAI
                </span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              {equipe.tagline}
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/50">
              Navegação
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-10 gap-y-2.5">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline hover:decoration-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border border-white/15 px-5 py-4">
            <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white/60">
              <span className="inline-block h-1.5 w-1.5 bg-primary" aria-hidden="true" />
              {equipe.edicao}
            </p>
            <p className="mt-2 font-serif text-lg font-medium">
              {equipe.escola}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
            © 2026 {equipe.edicao} · {equipe.escola}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
            Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
