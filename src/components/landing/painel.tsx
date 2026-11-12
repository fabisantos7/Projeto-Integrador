"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "./reveal";

const HORAS = [
  { hora: "07h", valor: 18 },
  { hora: "08h", valor: 42 },
  { hora: "09h", valor: 57 },
  { hora: "10h", valor: 64 },
  { hora: "11h", valor: 88 },
  { hora: "12h", valor: 124 },
  { hora: "13h", valor: 96 },
  { hora: "14h", valor: 71 },
  { hora: "15h", valor: 58 },
  { hora: "16h", valor: 49 },
  { hora: "17h", valor: 44 },
  { hora: "18h", valor: 52 },
  { hora: "19h", valor: 31 },
  { hora: "20h", valor: 14 },
];

const VALOR_MAXIMO = Math.max(...HORAS.map((h) => h.valor));
const HORA_PICO = HORAS.find((h) => h.valor === VALOR_MAXIMO)?.hora ?? "12h";
const MEDIA_DIA = Math.round(
  HORAS.reduce((soma, h) => soma + h.valor, 0) / HORAS.length
);

const KPIS = [
  { rotulo: "Check-ins realizados hoje", valor: "247", extra: "+18% vs. ontem" },
  { rotulo: "Tempo médio de registro", valor: "4,2s", extra: "por presença" },
  { rotulo: "Horário de maior movimento", valor: "12h–13h", extra: "124 check-ins" },
  { rotulo: "Registros perdidos", valor: "0", extra: "contingência ativa" },
];

export function Painel() {
  const refSecao = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const el = refSecao.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entradas) => {
        if (entradas[0]?.isIntersecting) {
          setVisivel(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="painel"
      aria-labelledby="titulo-painel"
      className="scroll-mt-24 bg-paper"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-10 bg-primary" aria-hidden="true" />
            04 / Inteligência e gestão
          </p>
          <h2
            id="titulo-painel"
            className="mt-6 font-serif text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
          >
            Entender o movimento também faz parte de uma{" "}
            <em className="text-primary">biblioteca inteligente.</em>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-graphite">
            Enquanto os alunos registram sua presença, a gestão acompanha o
            movimento da biblioteca por meio de informações organizadas e
            indicadores visuais.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div
            ref={refSecao}
            className="mt-14 border border-warmgray bg-white"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-warmgray px-5 py-4 sm:px-7">
              <p className="font-serif text-lg font-semibold text-ink">
                Movimento de hoje
              </p>
              <span className="border border-primary/50 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-primary">
                Dados ilustrativos
              </span>
            </div>

            <div className="grid gap-10 px-5 py-8 sm:px-7 lg:grid-cols-[1fr_1.5fr] lg:gap-12">
              {/* indicadores */}
              <dl className="grid grid-cols-2 gap-x-8 lg:content-center">
                {KPIS.map((kpi) => (
                  <div key={kpi.rotulo} className="border-t border-warmgray py-4">
                    <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-graphite/60">
                      {kpi.rotulo}
                    </dt>
                    <dd className="mt-2 font-serif text-3xl font-medium tracking-tight text-ink">
                      {kpi.valor}
                    </dd>
                    <dd className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-graphite/50">
                      {kpi.extra}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* gráfico de check-ins por horário */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-graphite/70">
                    Check-ins por horário
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-graphite/50">
                    07h–20h · hoje
                  </p>
                </div>

                <div
                  className="mt-5 flex h-44 items-end gap-1.5 sm:h-52 sm:gap-2"
                  role="img"
                  aria-label={`Gráfico de barras: check-ins por horário, com pico de ${VALOR_MAXIMO} registros às ${HORA_PICO}`}
                >
                  {HORAS.map((h, i) => {
                    const ehPico = h.valor === VALOR_MAXIMO;
                    const altura = visivel
                      ? Math.max((h.valor / VALOR_MAXIMO) * 100, 4)
                      : 4;
                    return (
                      <div
                        key={h.hora}
                        className="flex h-full flex-1 flex-col items-center justify-end gap-2"
                      >
                        <div
                          className="w-full transition-[height] duration-700 ease-out"
                          style={{
                            height: `${altura}%`,
                            transitionDelay: `${i * 55}ms`,
                            backgroundColor: ehPico ? "#e92323" : "#d9d6d0",
                          }}
                        />
                        <span
                          className={`font-mono text-[9px] sm:text-[10px] ${
                            ehPico
                              ? "font-semibold text-primary"
                              : "text-graphite/50"
                          }`}
                        >
                          {h.hora}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <p className="mt-4 border-t border-warmgray pt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-graphite/60">
                  Pico às {HORA_PICO} — {VALOR_MAXIMO} check-ins, mais que o
                  dobro da média do dia ({MEDIA_DIA})
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
