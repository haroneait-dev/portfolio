"use client";

import { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GsbConfig } from "@/lib/gsb-data";

function lineClass(line: string): string {
  const t = line.trimStart();
  if (t.startsWith("!")) return "text-slate-500";
  if (
    /^(hostname|interface|router|vlan |access-list|ip access-group|enable|configure terminal|end|copy )/.test(
      t
    )
  )
    return "text-cyan-300";
  if (t.startsWith("no shutdown")) return "text-emerald-400";
  if (t.startsWith("name ")) return "text-amber-300";
  if (/^(ip address|ip helper-address|encapsulation|switchport|ip nat|network|version)/.test(t))
    return "text-slate-300";
  return "text-slate-200";
}

export function ConfigViewer({ configs }: { configs: GsbConfig[] }) {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const current = configs[active];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(current.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-slate-950 shadow-lg">
      {/* Tabs */}
      <div className="flex gap-1 overflow-x-auto border-b border-white/10 bg-slate-900/60 p-2">
        {configs.map((c, i) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              "whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
              i === active
                ? "bg-primary text-primary-foreground"
                : "text-slate-300 hover:bg-white/10 hover:text-white"
            )}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Terminal header */}
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />
          </span>
          <span className="ml-2 inline-flex items-center gap-1.5 font-mono">
            <Terminal className="h-3.5 w-3.5" />
            {current.hostname} — Cisco IOS
          </span>
        </div>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-200 transition-colors hover:bg-white/10"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" /> Copié
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" /> Copier
            </>
          )}
        </button>
      </div>

      {/* Code */}
      <div className="max-h-[28rem] overflow-auto p-4">
        <pre className="font-mono text-[12px] leading-relaxed">
          <code>
            {current.code.split("\n").map((line, i) => (
              <div key={i} className={cn("whitespace-pre", lineClass(line))}>
                {line || " "}
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
