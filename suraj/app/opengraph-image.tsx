import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site-config";

export const runtime = "edge";

export const alt = siteConfig.fullName;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 128,
        background: "linear-gradient(to bottom right, #0a0a0a, #1a1a1a)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "monospace",
        border: "20px solid #6366f1",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 40,
        }}
      >
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: "#6366f1", // Indigo-500
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 60,
            color: "white",
            marginRight: 30,
          }}
        >
          {siteConfig.name[0]}
        </div>
        <div
          style={{
            fontSize: 80,
            fontWeight: 900,
            background: "linear-gradient(to right, #6366f1, #a855f7)", // Indigo to Purple
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {siteConfig.fullName}
        </div>
      </div>

      <div
        style={{
          fontSize: 40,
          color: "#a1a1aa", // Neutral-400
          background: "#27272a", // Zinc-800
          padding: "10px 40px",
          borderRadius: 50,
          marginTop: 20,
        }}
      >
        {siteConfig.title}
      </div>

      <div
        style={{
          marginTop: 60,
          fontSize: 30,
          color: "#6366f1",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span style={{ color: "#a1a1aa", marginRight: 10 }}>$</span>
        cd /portfolio && npm run dev
      </div>
    </div>,
    {
      ...size,
    },
  );
}
