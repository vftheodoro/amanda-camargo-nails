"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import { gallery } from "@/content/gallery";
import { Icon } from "@/components/icon";

export function Gallery({ preview = false }: { preview?: boolean }) {
  const [filter, setFilter] = useState("Todos");
  const [selected, setSelected] = useState(0);
  const [failedImages, setFailedImages] = useState<readonly string[]>([]);
  const dialog = useRef<HTMLDialogElement>(null);
  const dialogTitleId = useId();
  const items = preview
    ? gallery.slice(0, 6)
    : gallery.filter((item) => filter === "Todos" || item.tag === filter);
  const current = gallery[selected];

  function openImage(id: string) {
    setSelected(gallery.findIndex((item) => item.id === id));
    dialog.current?.showModal();
  }

  function changeImage(direction: number) {
    setSelected(
      (index) => (index + direction + gallery.length) % gallery.length,
    );
  }

  return (
    <div>
      {!preview ? (
        <div
          className="gallery-filters"
          role="group"
          aria-label="Filtrar trabalhos"
        >
          {[
            "Todos",
            "Francesinha",
            "Nail art",
            "Cores & clássicos",
            "Pedicure",
          ].map((tag) => (
            <button
              key={tag}
              type="button"
              aria-pressed={filter === tag}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      ) : null}
      <div
        className={`gallery-grid ${preview ? "gallery-preview" : ""}`}
        aria-live="polite"
      >
        {items.map((item) => (
          <button
            type="button"
            key={item.id}
            className="gallery-item"
            onClick={() => openImage(item.id)}
            aria-label={`Ampliar: ${item.title}`}
          >
            <span className="gallery-image">
              {failedImages.includes(item.id) ? (
                <span className="image-unavailable">
                  <Icon name="sparkle" />
                  Imagem indisponível
                </span>
              ) : (
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes={
                    preview
                      ? "(max-width: 600px) 45vw, (max-width: 1000px) 30vw, 17vw"
                      : "(max-width: 600px) 45vw, 30vw"
                  }
                  onError={() =>
                    setFailedImages((previous) => [...previous, item.id])
                  }
                />
              )}
              <span className="gallery-expand" aria-hidden="true">
                ↗
              </span>
            </span>
            <span className="gallery-caption">
              {item.title}
              <small>{item.tag}</small>
            </span>
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="gallery-dialog"
        aria-labelledby={dialogTitleId}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") changeImage(1);
          if (event.key === "ArrowLeft") changeImage(-1);
        }}
      >
        <div className="dialog-card">
          <button
            className="dialog-close"
            type="button"
            onClick={() => dialog.current?.close()}
            aria-label="Fechar imagem"
          >
            ×
          </button>
          <div className="dialog-image">
            <Image
              src={current.image}
              alt={current.alt}
              fill
              sizes="(max-width: 600px) 90vw, 600px"
            />
          </div>
          <div className="dialog-caption">
            <button
              type="button"
              onClick={() => changeImage(-1)}
              aria-label="Imagem anterior"
            >
              ←
            </button>
            <div>
              <h2 id={dialogTitleId}>{current.title}</h2>
              <a
                href={current.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver trabalho no Instagram ↗
              </a>
            </div>
            <button
              type="button"
              onClick={() => changeImage(1)}
              aria-label="Próxima imagem"
            >
              →
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
