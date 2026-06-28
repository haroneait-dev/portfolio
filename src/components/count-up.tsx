"use client";

import { useEffect, useState } from "react";

/**
 * Anime un nombre de 0 jusqu'à sa valeur au montage du composant.
 * Si la valeur n'est pas numérique (ex. "SISR"), elle est affichée telle quelle.
 * Conserve un suffixe éventuel (ex. "3+").
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!match) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(target);
      return;
    }
    const duration = 1000;
    let raf = 0;
    let t0 = 0;
    const tick = (t: number) => {
      if (!t0) t0 = t;
      const p = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setN(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    const start = setTimeout(() => {
      raf = requestAnimationFrame(tick);
    }, 250);
    return () => {
      clearTimeout(start);
      cancelAnimationFrame(raf);
    };
  }, [match, target]);

  if (!match) return <span className={className}>{value}</span>;
  return (
    <span className={className}>
      {n}
      {suffix}
    </span>
  );
}
