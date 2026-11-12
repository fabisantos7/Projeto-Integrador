import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";

export function Encerramento() {
  return (
    <section
      aria-labelledby="titulo-encerramento"
      className="bg-ink text-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-white/50">
              <span className="h-px w-10 bg-primary" aria-hidden="true" />
              Encerramento
            </p>
            <h2
              id="titulo-encerramento"
              className="mt-6 font-serif text-4xl font-medium leading-[1.12] sm:text-5xl"
            >
              Menos tempo na entrada.{" "}
              <em className="text-primary">Mais tempo para descobrir.</em>
            </h2>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-white/70">
              Uma nova experiência para a Biblioteca SENAI. Mais agilidade
              para os alunos, mais organização para a gestão e mais tempo
              dedicado ao conhecimento.
            </p>
            <a
              href="#demonstracao"
              className="mt-10 inline-flex items-center gap-3 bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-red-700"
            >
              Conhecer o BiblioQR
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Reveal>

          <Reveal delay={180}>
            <figure className="border border-white/15 p-3">
              <Image
                src="/img/livros-acervo.jpeg"
                alt="Lombadas coloridas de livros em prateleira da biblioteca, com iluminação suave"
                width={1125}
                height={750}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="h-[300px] w-full object-cover lg:h-[380px]"
              />
              <figcaption className="flex items-center justify-between px-1 pt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                <span>Fig. 02 — O acervo espera por você</span>
                <span>BiblioQR</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
