import {
  Clock3,
  EyeOff,
  LineChart,
  PenLine,
  QrCode,
  Smartphone,
  UserX,
  BadgeCheck,
} from "lucide-react";
import { Reveal } from "./reveal";

const ANTES = [
  { icone: Clock3, texto: "Filas no totem fixo" },
  { icone: PenLine, texto: "Registro manual" },
  { icone: UserX, texto: "Alunos sem registrar presença" },
  { icone: EyeOff, texto: "Falta de visibilidade do fluxo" },
];

const DEPOIS = [
  { icone: QrCode, texto: "QR Code dinâmico" },
  { icone: Smartphone, texto: "Registro pelo celular" },
  { icone: BadgeCheck, texto: "Confirmação instantânea" },
  { icone: LineChart, texto: "Acompanhamento digital" },
];

export function ProblemaSolucao() {
  return (
    <section
      id="problema"
      aria-labelledby="titulo-problema"
      className="scroll-mt-24 border-y border-warmgray bg-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-10 bg-primary" aria-hidden="true" />
            01 / O Desafio
          </p>
          <h2
            id="titulo-problema"
            className="mt-6 font-serif text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
          >
            Uma nova página na história da entrada da biblioteca.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-graphite">
            O controle tradicional de presença pode gerar filas, registros
            esquecidos e dificuldades no acompanhamento do movimento. O
            BiblioQR propõe uma experiência mais simples e organizada.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* ANTES — método tradicional */}
          <Reveal delay={100}>
            <article className="h-full border border-warmgray bg-beige p-7 sm:p-9">
              <p className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.3em] text-graphite/70">
                Antes
                <span aria-hidden="true" className="h-1.5 w-1.5 bg-graphite/40" />
              </p>
              <h3 className="mt-4 font-serif text-2xl font-medium text-ink">
                A rotina de sempre
              </h3>

              <ul className="mt-7 divide-y divide-graphite/10 border-t border-graphite/10">
                {ANTES.map((item) => {
                  const Icone = item.icone;
                  return (
                    <li key={item.texto} className="flex items-center gap-4 py-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-graphite/25 text-graphite/70">
                        <Icone className="h-4.5 w-4.5" aria-hidden="true" />
                      </span>
                      <p className="text-[15px] leading-snug text-graphite">
                        {item.texto}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </article>
          </Reveal>

          {/* DEPOIS — experiência digital */}
          <Reveal delay={220}>
            <article className="h-full bg-ink p-7 text-white sm:p-9">
              <p className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.3em] text-white/60">
                Depois
                <span aria-hidden="true" className="h-1.5 w-1.5 bg-primary" />
              </p>
              <h3 className="mt-4 font-serif text-2xl font-medium">
                A entrada reinventada
              </h3>

              <ul className="mt-7 divide-y divide-white/10 border-t border-white/10">
                {DEPOIS.map((item) => {
                  const Icone = item.icone;
                  return (
                    <li key={item.texto} className="flex items-center gap-4 py-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-primary text-white">
                        <Icone className="h-4.5 w-4.5" aria-hidden="true" />
                      </span>
                      <p className="text-[15px] leading-snug text-white/90">
                        {item.texto}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
