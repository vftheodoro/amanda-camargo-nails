"use client";

import Image from "next/image";
import { useId, useState, type PointerEvent } from "react";

export function ComparisonSlider() {
  const [position, setPosition] = useState(50);
  const inputId = useId();
  const descriptionId = useId();

  function updateFromPointer(event: PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    if (bounds.width <= 0) return;
    setPosition(
      Math.round(
        Math.min(
          100,
          Math.max(0, ((event.clientX - bounds.left) / bounds.width) * 100),
        ),
      ),
    );
  }

  function releasePointer(event: PointerEvent<HTMLDivElement>) {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  return (
    <div className="comparison-widget">
      <div
        className="comparison-stage"
        aria-hidden="true"
        onPointerDown={(event) => {
          if (event.pointerType === "mouse" && event.button !== 0) return;
          event.currentTarget.setPointerCapture(event.pointerId);
          updateFromPointer(event);
        }}
        onPointerMove={(event) => {
          if (event.currentTarget.hasPointerCapture(event.pointerId))
            updateFromPointer(event);
        }}
        onPointerUp={releasePointer}
        onPointerCancel={releasePointer}
      >
        <div className="comparison-view comparison-after">
          <Image
            src="/images/style-comparison-floral.webp"
            alt=""
            fill
            sizes="(max-width: 760px) 180vw, 85vw"
            className="comparison-diptych comparison-right"
          />
          <span className="comparison-label comparison-label-after">
            Depois
          </span>
        </div>
        <div
          className="comparison-view comparison-before"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src="/images/style-comparison-floral.webp"
            alt=""
            fill
            sizes="(max-width: 760px) 180vw, 85vw"
            className="comparison-diptych comparison-left"
          />
          <span className="comparison-label comparison-label-before">
            Antes
          </span>
        </div>
        <span className="comparison-ai-label">Ilustração com IA</span>
        <span className="comparison-divider" style={{ left: `${position}%` }}>
          <span>
            <svg
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="m8 7-5 5 5 5m-5-5h18m-5-5 5 5-5 5" />
            </svg>
          </span>
        </span>
      </div>
      <div className="comparison-controls">
        <label htmlFor={inputId}>
          Deslize para ver a transformação de estilo
        </label>
        <input
          id={inputId}
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label="Comparar antes e depois ilustrativos"
          aria-describedby={descriptionId}
          aria-valuetext={`${position}% da imagem antes, ${100 - position}% da imagem depois`}
        />
        <div className="comparison-presets">
          <button type="button" onClick={() => setPosition(100)}>
            Ver antes
          </button>
          <span>
            Natural <span aria-hidden="true">↔</span> Flores e dourado
          </span>
          <button type="button" onClick={() => setPosition(0)}>
            Ver depois
          </button>
        </div>
      </div>
      <p className="comparison-disclosure" id={descriptionId}>
        Comparação ilustrativa criada com IA para visualizar estilos. Os
        trabalhos reais de Amanda estão na galeria.
      </p>
    </div>
  );
}
