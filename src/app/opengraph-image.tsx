import { ImageResponse } from "next/og";
export const alt =
  "Amanda Camargo Nails — Nail designer em Barnabés, Juquitiba";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#FBF6F0",
          color: "#34231E",
          border: "20px solid #F0E2D8",
        }}
      >
        <div style={{ fontSize: 20, letterSpacing: 6, marginBottom: 38 }}>
          AMANDA CAMARGO · NAIL DESIGNER
        </div>
        <div style={{ fontSize: 82, fontFamily: "serif", lineHeight: 1.1 }}>
          Beleza em cada detalhe.
        </div>
        <div style={{ fontSize: 26, marginTop: 40, color: "#715647" }}>
          Alongamento · Banho de gel · Manicure & Pedicure
        </div>
        <div style={{ fontSize: 22, marginTop: 30 }}>
          Barnabés, Juquitiba – SP · amandacamargonails.com.br
        </div>
      </div>
    ),
    size,
  );
}
