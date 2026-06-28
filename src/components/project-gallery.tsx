"use client";

import { useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";

type GalleryImage = { src: string; caption: string };

export function ProjectGallery({
  images,
  title,
}: {
  images: GalleryImage[];
  title: string;
}) {
  const [index, setIndex] = useState<number | null>(null);
  const isOpen = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, prev, next]);

  return (
    <div className="mt-6">
      <h4 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        <ImageIcon className="h-3.5 w-3.5" />
        Galerie — photos du stage
      </h4>

      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setIndex(i)}
            className="group relative aspect-square overflow-hidden rounded-lg border border-border bg-muted"
            aria-label={`Agrandir : ${img.caption}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.caption}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="pointer-events-none absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/10" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {isOpen && index !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`Galerie ${title}`}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Fermer"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Image précédente"
            className="absolute left-2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Image suivante"
            className="absolute right-2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <figure
            className="flex max-h-[88vh] max-w-4xl flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[index].src}
              alt={images[index].caption}
              className="max-h-[78vh] w-auto rounded-xl object-contain shadow-2xl"
            />
            <figcaption className="text-center text-sm text-slate-200">
              {images[index].caption}
              <span className="ml-2 text-slate-400">
                ({index + 1}/{images.length})
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
