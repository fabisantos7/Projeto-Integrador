const N = 21; // grade 21x21, padrão de um QR Code

type QrArtProps = {
  seed?: number;
  dark?: string;
  light?: string;
  className?: string;
};

/**
 * Desenha uma arte de QR Code (padrão determinístico, sem aleatoriedade)
 * com os três "finder patterns" característicos nos cantos.
 */
export function QrArt({
  seed = 7,
  dark = "#18181b",
  light = "#ffffff",
  className,
}: QrArtProps) {
  const estaNoFinder = (x: number, y: number) =>
    (x < 7 && y < 7) || (x < 7 && y >= N - 7) || (x >= N - 7 && y < 7);

  const celulas: Array<{ x: number; y: number }> = [];
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (estaNoFinder(x, y)) continue;
      if ((x * 13 + y * 7 + seed * 29) % 12 < 5) {
        celulas.push({ x, y });
      }
    }
  }

  const cantos: Array<[number, number]> = [
    [0, 0],
    [N - 7, 0],
    [0, N - 7],
  ];

  return (
    <svg
      viewBox={`0 0 ${N} ${N}`}
      className={className}
      role="img"
      aria-label="QR Code de check-in da biblioteca"
      shapeRendering="crispEdges"
    >
      <rect width={N} height={N} fill={light} />
      {cantos.map(([ox, oy]) => (
        <g key={`${ox}-${oy}`}>
          <rect x={ox} y={oy} width={7} height={7} fill={dark} />
          <rect x={ox + 1} y={oy + 1} width={5} height={5} fill={light} />
          <rect x={ox + 2} y={oy + 2} width={3} height={3} fill={dark} />
        </g>
      ))}
      {celulas.map(({ x, y }) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={dark} />
      ))}
    </svg>
  );
}
