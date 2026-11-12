type LogoMarcaProps = {
  className?: string;
};

/**
 * Marca do BiblioQR: um livro aberto cujas páginas carregam
 * módulos de QR Code — conhecimento + tecnologia.
 */
export function LogoMarca({ className }: LogoMarcaProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* livro aberto */}
      <path
        d="M12 5.7C9.8 4.4 6.5 4.3 3.9 5.5V18.3C6.5 17.1 9.8 17.2 12 18.5C14.2 17.2 17.5 17.1 20.1 18.3V5.5C17.5 4.3 14.2 4.4 12 5.7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M12 5.9V18.3" stroke="currentColor" strokeWidth="1.5" />
      {/* módulos QR — página esquerda */}
      <rect x="5.7" y="8.1" width="1.8" height="1.8" fill="currentColor" />
      <rect x="8.1" y="10.7" width="1.2" height="1.2" fill="currentColor" />
      <rect x="5.9" y="13" width="1.2" height="1.2" fill="currentColor" />
      {/* módulos QR — página direita */}
      <rect x="14.7" y="8.5" width="1.2" height="1.2" fill="currentColor" />
      <rect x="16.5" y="8.1" width="1.8" height="1.8" fill="currentColor" />
      <rect x="15" y="11.3" width="1.2" height="1.2" fill="currentColor" />
      <rect x="16.8" y="13.6" width="1.5" height="1.5" fill="currentColor" />
    </svg>
  );
}
