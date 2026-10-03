export default function Seal({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-label="بارانی نوور">
      {/* outer 12-point star */}
      <g transform="translate(60 60)">
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * Math.PI) / 6;
          const r1 = 56, r2 = 46;
          const x1 = Math.cos(a) * r1, y1 = Math.sin(a) * r1;
          const a2 = a + Math.PI / 12;
          const x2 = Math.cos(a2) * r2, y2 = Math.sin(a2) * r2;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#c9a44c" strokeWidth="1.4" opacity="0.55" />;
        })}
        <circle r="48" fill="none" stroke="#c9a44c" strokeWidth="1.6" />
        <circle r="40" fill="none" stroke="#5b7637" strokeWidth="2" />
      </g>
      {/* central light burst */}
      <g transform="translate(60 60)" fill="#7c9b4e">
        <path d="M0 -34 L7 -8 L34 0 L7 8 L0 34 L-7 8 L-34 0 L-7 -8 Z" opacity="0.95" />
        <path d="M0 -22 L4 -5 L22 0 L4 5 L0 22 L-4 5 L-22 0 L-4 -5 Z" fill="#c9a44c" />
      </g>
      <circle cx="60" cy="60" r="5" fill="#f3ecdb" />
    </svg>
  );
}
