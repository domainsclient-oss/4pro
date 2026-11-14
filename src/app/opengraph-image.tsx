/* eslint-disable @next/next/no-img-element -- next/og renders plain <img>, not next/image */
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "4pro — Accelerate Growth. Extend Impact. Projects | Products | Programs | Promotions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [logo, globe] = await Promise.all([
    readFile(join(process.cwd(), "public/brand/logo-full.png"), "base64"),
    readFile(join(process.cwd(), "src/app/icon.png"), "base64"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "linear-gradient(135deg, #ffffff 0%, #faf6ef 55%, #f1e8da 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* oversized globe mark, bleeding off the right edge */}
        <img
          src={`data:image/png;base64,${globe}`}
          width={560}
          height={560}
          style={{ position: "absolute", right: -150, top: 35, opacity: 0.16 }}
          alt=""
        />

        <div style={{ display: "flex", flexDirection: "column", padding: "70px 80px", width: "100%" }}>
          <img src={`data:image/png;base64,${logo}`} width={480} height={176} alt="" />

          <div style={{ display: "flex", flexDirection: "column", marginTop: 46 }}>
            <div style={{ fontSize: 64, fontWeight: 700, color: "#16110c", letterSpacing: -2, lineHeight: 1.05 }}>
              Accelerate Growth.
            </div>
            <div style={{ fontSize: 64, fontWeight: 700, color: "#996734", letterSpacing: -2, lineHeight: 1.1 }}>
              Extend Impact.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "auto",
              fontSize: 24,
              color: "#6b6158",
              letterSpacing: 1,
            }}
          >
            <div style={{ width: 40, height: 3, background: "#cc9833", marginRight: 16 }} />
            Chennai · India · Worldwide
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 12,
            background: "linear-gradient(90deg, #996734, #cc9833)",
          }}
        />
      </div>
    ),
    size,
  );
}
