import type { ReactNode } from "react";
import { cn } from "../utils/cn";

export function Divider() {
  return (
    <div className="flex items-center justify-center gap-3 py-6 opacity-70" aria-hidden>
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold/60" />
      <span className="text-gold text-lg">✦</span>
      <span className="h-px w-24 bg-gold/40" />
      <span className="text-gold/70 text-sm">❖</span>
      <span className="h-px w-24 bg-gold/40" />
      <span className="text-gold text-lg">✦</span>
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold/60" />
    </div>
  );
}

export function SectionTitle({ kicker, title, sub }: { kicker?: string; title: string; sub?: string }) {
  return (
    <div className="mb-10 text-center">
      {kicker && <p className="mb-2 text-sm tracking-widest text-gold/80">{kicker}</p>}
      <h2 className="font-display text-3xl font-bold text-cream sm:text-4xl">{title}</h2>
      {sub && <p className="mx-auto mt-3 max-w-xl text-beige/60 fs-base">{sub}</p>}
    </div>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn(
      "rounded-2xl border border-gold/15 bg-charcoal/60 paper-texture backdrop-blur-sm shadow-xl shadow-black/20 transition-all duration-300 hover:border-gold/40",
      className
    )}>
      {children}
    </div>
  );
}

export function Button({ children, onClick, variant = "primary", className }: {
  children: ReactNode; onClick?: () => void; variant?: "primary" | "ghost" | "gold"; className?: string;
}) {
  const styles = {
    primary: "bg-olive-deep text-cream hover:bg-olive border border-olive/40",
    gold: "bg-gradient-to-l from-gold to-gold-soft text-ink hover:brightness-105 border border-gold/40 font-semibold",
    ghost: "bg-transparent text-cream border border-gold/30 hover:bg-gold/10",
  }[variant];
  return (
    <button onClick={onClick} className={cn(
      "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm transition-all duration-200 active:scale-95",
      styles, className
    )}>
      {children}
    </button>
  );
}

export function IconBtn({ children, onClick, active, label }: {
  children: ReactNode; onClick?: () => void; active?: boolean; label: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      title={label}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200 active:scale-90",
        active ? "border-gold bg-gold/20 text-gold" : "border-gold/20 text-beige/70 hover:border-gold/50 hover:text-gold"
      )}
    >
      {children}
    </button>
  );
}
