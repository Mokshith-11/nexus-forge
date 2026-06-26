import { ImageResponse } from "next/og";

export const alt = "Nexus Forge — Your entire business, powered by AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Generates the social share image at /opengraph-image. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#050505",
          padding: "72px",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 12,
            textTransform: "uppercase",
            color: "#9a9a9e",
          }}
        >
          Nexus Forge
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, lineHeight: 1.02, fontWeight: 500 }}>
            Your Entire Business.
          </div>
          <div
            style={{
              fontSize: 92,
              lineHeight: 1.02,
              fontStyle: "italic",
              color: "#cfcabd",
            }}
          >
            Powered by AI.
          </div>
        </div>

        <div
          style={{
            fontSize: 28,
            color: "#9a9a9e",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>Automation · Agents · Content · Web · Analytics</span>
          <span>nexusforge</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
