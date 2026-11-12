"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, RotateCcw } from "lucide-react";
import { QrArt } from "./qr-art";
import { Reveal } from "./reveal";

const PASSOS = [
  "O totem disponibiliza o QR Code do período",
  "O aluno escaneia utilizando a câmera do celular",
  "A presença é confirmada com um clique",
];

type Fase = "idle" | "qr" | "scan" | "form" | "done";

const STATUS: Record<Fase, string> = {
  idle: "Em espera",
  qr: "QR gerado",
  scan: "Escaneando",
  form: "Confirmando",
  done: "Registrado",
};

export function DemoCheckin() {
  const [fase, setFase] = useState<Fase>("idle");
  const [tempo, setTempo] = useState("3,4");
  const [horario, setHorario] = useState("19:42");
  const inicioRef = useRef(0);
  const timersRef = useRef<Array<ReturnType<typeof setTimeout>>>([]);

  const limparTimers = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };

  useEffect(() => {
    const timers = timersRef.current;
    return () => timers.forEach(clearTimeout);
  }, []);

  const registrarFim = () => {
    const segundos = ((performance.now() - inicioRef.current) / 1000).toFixed(1);
    setTempo(segundos.replace(".", ","));
    setHorario(
      new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    );
    setFase("done");
  };

  const iniciar = () => {
    if (fase !== "idle" && fase !== "done") return;
    limparTimers();
    inicioRef.current = performance.now();
    setFase("qr");
    timersRef.current.push(setTimeout(() => setFase("scan"), 1400));
    timersRef.current.push(setTimeout(() => setFase("form"), 2900));
    timersRef.current.push(setTimeout(registrarFim, 4400));
  };

  const confirmarManual = () => {
    limparTimers();
    registrarFim();
  };

  const repetir = () => {
    limparTimers();
    setFase("idle");
  };

  const executando = fase === "qr" || fase === "scan" || fase === "form";

  const indiceAtivo =
    fase === "idle" || fase === "done"
      ? null
      : fase === "qr"
        ? 0
        : fase === "scan"
          ? 1
          : 2;

  const statusCor = fase === "done"
    ? "text-ink"
    : executando
      ? "text-primary"
      : "text-graphite/50";

  return (
    <section
      id="demonstracao"
      aria-labelledby="titulo-demo"
      className="scroll-mt-24 bg-paper"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-10 bg-primary" aria-hidden="true" />
            02 / Experiência digital
          </p>
          <h2
            id="titulo-demo"
            className="mt-6 font-serif text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
          >
            Da leitura do código à confirmação.{" "}
            <em className="text-primary">Em poucos segundos.</em>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-graphite">
            Uma experiência intuitiva para o aluno e mais organização para a
            gestão da biblioteca.
          </p>
        </Reveal>

        <div className="mt-14 grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          {/* etapas numeradas */}
          <Reveal delay={100}>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-graphite/60">
              As três etapas
            </p>
            <ol className="divide-y divide-warmgray border-y border-warmgray">
              {PASSOS.map((passo, i) => {
                const ativo = indiceAtivo === i;
                return (
                  <li
                    key={passo}
                    aria-current={ativo ? "step" : undefined}
                    className={`flex items-baseline gap-6 px-4 py-6 transition-colors duration-300 ${
                      ativo ? "bg-white shadow-[inset_3px_0_0_0_#e92323]" : ""
                    }`}
                  >
                    <span
                      className={`font-serif text-2xl leading-none ${ativo ? "font-semibold text-primary" : "text-graphite/30"}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p
                      className={`leading-snug ${ativo ? "font-semibold text-ink" : "text-graphite"}`}
                    >
                      {passo}
                    </p>
                  </li>
                );
              })}
            </ol>
          </Reveal>

          {/* simulador do sistema */}
          <Reveal delay={200}>
            <div className="border border-warmgray bg-white">
              <div className="flex items-center justify-between border-b border-warmgray px-5 py-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-graphite/60">
                  Simulador · Entrada da biblioteca
                </p>
                <p
                  className={`flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] ${statusCor}`}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-current"
                    aria-hidden="true"
                  />
                  {STATUS[fase]}
                </p>
              </div>

              <div className="relative flex min-h-[21rem] items-center justify-center px-5 py-8 sm:min-h-[23rem] sm:px-7">
                {fase === "idle" && (
                  <div className="flex flex-col items-center gap-6 text-center">
                    <QrArt
                      seed={5}
                      dark="#c9c5bd"
                      light="transparent"
                      className="h-24 w-24 opacity-80"
                    />
                    <p className="max-w-xs text-sm leading-relaxed text-graphite/80">
                      O totem está pronto. Inicie a simulação para acompanhar o
                      check-in do início ao fim.
                    </p>
                    <button
                      type="button"
                      onClick={iniciar}
                      className="inline-flex items-center bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
                    >
                      Simular check-in agora
                    </button>
                  </div>
                )}

                {(fase === "qr" || fase === "scan") && (
                  <div className="flex flex-col items-center gap-5 text-center">
                    <div className="rounded-[1.9rem] border border-warmgray bg-white p-2 shadow-lg shadow-ink/5">
                      <div className="relative rounded-[1.5rem] border border-warmgray/70 bg-paper px-4 pb-5 pt-4">
                        <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-graphite/60">
                          Totem · QR do período
                        </p>
                        <div className="mx-auto mt-3 w-fit border-2 border-ink bg-white p-2.5">
                          <QrArt seed={11} className="h-32 w-32 sm:h-36 sm:w-36" />
                          {fase === "scan" && (
                            <span
                              className="scan-line absolute left-3 right-3 h-[3px] bg-primary"
                              aria-hidden="true"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-graphite/70">
                      {fase === "qr"
                        ? "QR exibido — aguardando o aluno"
                        : "Câmera do celular lendo o código"}
                    </p>
                  </div>
                )}

                {fase === "form" && (
                  <div className="w-full max-w-sm border border-warmgray bg-white">
                    <p className="border-b border-warmgray px-5 py-3.5 font-mono text-[10px] uppercase tracking-[0.25em] text-graphite/60">
                      Web App do Aluno · Registro de presença
                    </p>
                    <div className="space-y-3 px-5 py-5">
                      <div>
                        <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-graphite/60">
                          Aluno
                        </label>
                        <p className="mt-1 border border-warmgray bg-paper px-3 py-2.5 text-sm font-medium text-ink">
                          Rafael Oliveira
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-graphite/60">
                            RM
                          </label>
                          <p className="mt-1 border border-warmgray bg-paper px-3 py-2.5 text-sm font-medium text-ink">
                            40231
                          </p>
                        </div>
                        <div>
                          <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-graphite/60">
                            Turma
                          </label>
                          <p className="mt-1 border border-warmgray bg-paper px-3 py-2.5 text-sm font-medium text-ink">
                            Dev. Sistemas
                          </p>
                        </div>
                      </div>
                      <p className="pt-1 text-xs text-graphite/70">
                        Dados prontos pelo QR Code — só falta confirmar.
                      </p>
                    </div>
                    <div className="px-5 pb-5">
                      <button
                        type="button"
                        onClick={confirmarManual}
                        className="w-full bg-primary px-4 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-red-700"
                      >
                        Confirmar presença — 1 clique
                      </button>
                    </div>
                  </div>
                )}

                {fase === "done" && (
                  <div className="w-full max-w-sm">
                    <div className="relative border border-warmgray bg-white">
                      {/* cartão de confirmação */}
                      <div className="flex items-center gap-4 border-b border-warmgray px-5 py-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                          <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                        </span>
                        <div>
                          <p className="font-serif text-xl font-semibold text-ink">
                            Presença confirmada!
                          </p>
                          <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-primary">
                            Registro concluído
                          </p>
                        </div>
                      </div>

                      <dl className="space-y-3 px-5 py-4 text-sm">
                        <div className="flex items-baseline justify-between gap-4">
                          <dt className="text-graphite/70">Aluno</dt>
                          <dd className="font-medium text-ink">Rafael Oliveira</dd>
                        </div>
                        <div className="flex items-baseline justify-between gap-4">
                          <dt className="text-graphite/70">RM</dt>
                          <dd className="font-medium text-ink">40231</dd>
                        </div>
                        <div className="flex items-baseline justify-between gap-4">
                          <dt className="text-graphite/70">Turma</dt>
                          <dd className="font-medium text-ink">Dev. Sistemas</dd>
                        </div>
                        <div className="flex items-baseline justify-between gap-4">
                          <dt className="text-graphite/70">Horário do registro</dt>
                          <dd className="font-mono text-xs font-medium uppercase text-ink">
                            {horario}
                          </dd>
                        </div>
                      </dl>

                      <div className="flex items-center justify-between border-t border-warmgray px-5 py-3.5">
                        <span className="border border-primary/40 bg-primary/5 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-primary">
                          Concluído
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-graphite/60">
                          em {tempo} segundos
                        </span>
                      </div>

                      {/* carimbo editorial */}
                      <div className="carimbo absolute -bottom-4 -right-3 px-4 py-1.5">
                        <span className="block font-mono text-xs font-semibold uppercase tracking-[0.2em]">
                          Presente
                        </span>
                        <span className="mt-0.5 block font-mono text-[7px] uppercase tracking-[0.3em]">
                          Biblioteca SENAI
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={repetir}
                      className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-graphite underline decoration-warmgray underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
                    >
                      <RotateCcw className="h-4 w-4" aria-hidden="true" />
                      Repetir simulação
                    </button>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
