import { QrArt } from "./qr-art";
import { Reveal } from "./reveal";

const BARRAS_MINI = [34, 58, 44, 72, 55, 100, 78, 60, 66, 40];

const MODULOS = [
  {
    indice: "01",
    titulo: "Totem Inteligente",
    itens: [
      "QR Code dinâmico renovado a cada período",
      "Modo de contingência manual",
      "Redução de filas",
      "Registro simplificado",
    ],
  },
  {
    indice: "02",
    titulo: "Web App do Aluno",
    itens: [
      "Acesso direto pelo navegador",
      "Sem necessidade de instalação",
      "Formulário simplificado",
      "Registro pelo celular",
    ],
  },
  {
    indice: "03",
    titulo: "Painel Administrativo",
    itens: [
      "Fluxo de visitantes por hora e dia",
      "Identificação de horários de pico",
      "Histórico de registros",
      "Indicadores e relatórios",
    ],
  },
];

export function Recursos() {
  return (
    <section
      id="recursos"
      aria-labelledby="titulo-recursos"
      className="scroll-mt-24 border-y border-warmgray bg-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-10 bg-primary" aria-hidden="true" />
            03 / Ecossistema
          </p>
          <h2
            id="titulo-recursos"
            className="mt-6 font-serif text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
          >
            Três experiências. <em className="text-primary">Um único sistema.</em>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-graphite">
            Do primeiro contato com o QR Code até o acompanhamento dos
            registros, cada componente foi pensado para simplificar a rotina
            da biblioteca.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-16 lg:grid-cols-3">
          {/* TOTEM — tela do quiosque */}
          <Reveal>
            <article className="flex h-full flex-col">
              <div className="flex h-52 items-center justify-center bg-ink">
                <div className="text-center">
                  <div className="mx-auto flex w-fit flex-col items-center border border-white/15 bg-ink p-4">
                    <p className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.25em] text-white/50">
                      <span className="h-1.5 w-1.5 bg-primary" aria-hidden="true" />
                      Totem · Entrada
                    </p>
                    <div className="mt-3 bg-white p-2">
                      <QrArt seed={23} className="h-24 w-24" />
                    </div>
                  </div>
                  <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.25em] text-white/40">
                    QR dinâmico do período
                  </p>
                </div>
              </div>

              <p className="mt-7 font-mono text-xs text-primary">{MODULOS[0].indice}</p>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-ink">
                {MODULOS[0].titulo}
              </h3>
              <ul className="mt-5 space-y-3">
                {MODULOS[0].itens.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-graphite">
                    <span aria-hidden="true" className="mt-[0.6em] h-px w-4 shrink-0 bg-warmgray" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          {/* MOBILE — celular com a interface do aluno */}
          <Reveal delay={120}>
            <article className="flex h-full flex-col">
              <div className="flex h-52 items-end justify-center bg-beige pb-0">
                <div className="w-44 rounded-t-[1.9rem] border border-b-0 border-warmgray bg-white p-2 pb-0">
                  <div className="rounded-t-[1.5rem] border border-b-0 border-warmgray/70 bg-paper px-3 pb-4 pt-4 text-center">
                    <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-graphite/60">
                      Web App do Aluno
                    </p>
                    <div className="mt-2.5 space-y-1.5 text-left">
                      <p className="border border-warmgray bg-white px-2 py-1.5 text-[10px] font-medium text-ink">
                        Rafael Oliveira
                      </p>
                      <div className="flex gap-1.5">
                        <p className="flex-1 border border-warmgray bg-white px-2 py-1.5 text-[10px] font-medium text-ink">
                          40231
                        </p>
                        <p className="flex-1 border border-warmgray bg-white px-2 py-1.5 text-[10px] font-medium text-ink">
                          3º DS
                        </p>
                      </div>
                    </div>
                    <span className="mt-2.5 block bg-primary px-2 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-white">
                      Confirmar presença
                    </span>
                  </div>
                </div>
              </div>

              <p className="mt-7 font-mono text-xs text-primary">{MODULOS[1].indice}</p>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-ink">
                {MODULOS[1].titulo}
              </h3>
              <ul className="mt-5 space-y-3">
                {MODULOS[1].itens.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-graphite">
                    <span aria-hidden="true" className="mt-[0.6em] h-px w-4 shrink-0 bg-warmgray" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          {/* GESTÃO — prévia do painel */}
          <Reveal delay={240}>
            <article className="flex h-full flex-col">
              <div className="flex h-52 items-center justify-center bg-ink px-6">
                <div className="w-full border border-white/15 bg-white">
                  <p className="flex items-center justify-between border-b border-warmgray px-3 py-2 font-mono text-[9px] uppercase tracking-[0.2em] text-graphite/60">
                    Painel · Hoje
                    <span aria-hidden="true" className="h-1.5 w-1.5 bg-primary" />
                  </p>
                  <div className="flex gap-4 px-3 py-2.5">
                    <div>
                      <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-graphite/50">
                        Check-ins
                      </p>
                      <p className="font-serif text-xl font-semibold text-ink">247</p>
                    </div>
                    <div>
                      <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-graphite/50">
                        Tempo médio
                      </p>
                      <p className="font-serif text-xl font-semibold text-ink">4,2s</p>
                    </div>
                  </div>
                  <div className="flex h-14 items-end gap-1 px-3 pb-2" aria-hidden="true">
                    {BARRAS_MINI.map((altura, i) => (
                      <div
                        key={i}
                        className="w-full"
                        style={{
                          height: `${altura}%`,
                          backgroundColor: altura === 100 ? "#e92323" : "#d9d6d0",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-7 font-mono text-xs text-primary">{MODULOS[2].indice}</p>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-ink">
                {MODULOS[2].titulo}
              </h3>
              <ul className="mt-5 space-y-3">
                {MODULOS[2].itens.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-graphite">
                    <span aria-hidden="true" className="mt-[0.6em] h-px w-4 shrink-0 bg-warmgray" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
