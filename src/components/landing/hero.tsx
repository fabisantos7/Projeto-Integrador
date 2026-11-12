import Image from "next/image";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { QrArt } from "./qr-art";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section
      id="topo"
      aria-label="Apresentação do sistema"
      className="bg-paper"
    >
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 lg:pb-24 lg:pt-16">
        <div className="grid items-center gap-16 lg:grid-cols-[1.02fr_0.98fr]">
          {/* texto de capa */}
          <Reveal>
            <p className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.3em] text-graphite">
              <span className="h-px w-10 bg-primary" aria-hidden="true" />
              Biblioteca SENAI
              <span className="text-warmgray" aria-hidden="true">
                |
              </span>
              Tecnologia e Conhecimento
            </p>

            <h1 className="mt-8 font-serif text-4xl font-medium leading-[1.08] text-ink sm:text-5xl lg:text-[3.9rem]">
              Conhecimento{" "}
              <em className="text-primary">não espera.</em>
              <span className="mt-3 block text-[0.55em] font-normal italic leading-[1.25] text-graphite">
                A sua biblioteca também não deveria.
              </span>
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-relaxed text-graphite">
              O BiblioQR transforma a entrada da Biblioteca SENAI em uma
              experiência simples, rápida e inteligente.{" "}
              <strong className="font-semibold text-ink">
                Um QR Code, um clique e a presença está registrada.
              </strong>
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#demonstracao"
                className="inline-flex items-center justify-center gap-3 bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-red-700"
              >
                Explorar demonstração
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#painel"
                className="inline-flex items-center justify-center border border-ink/70 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
              >
                Acessar painel administrativo
              </a>
            </div>
          </Reveal>

          {/* composição visual editorial */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <Reveal delay={150}>
              <figure className="border border-warmgray bg-white p-3">
                <Image
                  src="/img/biblioteca-atrio.jpg"
                  alt="Átrio de biblioteca contemporânea com estantes de madeira, arcos e balcões"
                  width={1080}
                  height={1440}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-[420px] w-full object-cover lg:h-[540px]"
                />
                <figcaption className="flex items-center justify-between px-1 pt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-graphite/60">
                  <span>Fig. 01 — Átrio da biblioteca</span>
                  <span>SENAI · 2026</span>
                </figcaption>
              </figure>
            </Reveal>

            {/* celular sobreposto */}
            <Reveal
              delay={350}
              className="absolute -left-2 bottom-12 hidden w-40 sm:block lg:-left-8 lg:w-44"
            >
              <div className="rounded-[1.9rem] border border-warmgray bg-white p-2 shadow-xl shadow-ink/10">
                <div className="rounded-[1.5rem] border border-warmgray/70 bg-paper px-3 pb-4 pt-5 text-center">
                  <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-graphite/60">
                    Biblioteca SENAI
                  </p>
                  <div className="mx-auto mt-3 w-fit border-2 border-ink bg-white p-1.5">
                    <QrArt seed={11} className="h-20 w-20 lg:h-24 lg:w-24" />
                  </div>
                  <p className="mt-3 text-[10px] font-semibold leading-snug text-ink">
                    Escaneie para registrar presença
                  </p>
                  <span className="mt-3 block bg-primary px-2 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-white">
                    Registrar presença
                  </span>
                </div>
              </div>
            </Reveal>

            {/* indicador flutuante de presença */}
            <Reveal
              delay={500}
              className="absolute right-2 top-10 lg:-right-5 lg:top-12"
            >
              <div className="flex items-center gap-3 border border-warmgray bg-white px-4 py-3 shadow-lg shadow-ink/10">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white">
                  <BadgeCheck className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="leading-tight">
                  <span className="block text-sm font-semibold text-ink">
                    Presença confirmada
                  </span>
                  <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-[0.15em] text-graphite/60">
                    RM 40231 · 4,2s
                  </span>
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
