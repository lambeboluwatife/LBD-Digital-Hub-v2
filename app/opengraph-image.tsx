import { ImageResponse } from "next/og";

export const alt = "LBD Digital Hub - Web Platforms, Mobile Apps & AI Systems";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#080D0E",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          border: "1px solid #1B2727",
        }}
      >
        {/* Top Bar with Badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              backgroundColor: "#12C887",
            }}
          />
          <span
            style={{
              color: "#12C887",
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            L.B.D DIGITAL HUB // ENGINEERING & DESIGN
          </span>
        </div>

        {/* Main Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.15,
              maxWidth: "1020px",
            }}
          >
            Building High-Performance Websites, Mobile Apps &amp; AI Systems.
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#8A999A",
              maxWidth: "880px",
              lineHeight: 1.4,
            }}
          >
            We help ambitious businesses and organizations create modern digital products that attract customers and accelerate growth.
          </div>
        </div>

        {/* Bottom Feature Strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid #1B2727",
            paddingTop: "28px",
          }}
        >
          <div style={{ display: "flex", gap: "32px", fontSize: 18, color: "#DFE3E4" }}>
            <span>• Web Platforms</span>
            <span>• Mobile Applications</span>
            <span>• Smart AI Workflows</span>
            <span>• Cloud Architecture</span>
          </div>
          <div style={{ color: "#12C887", fontSize: 20, fontWeight: 700 }}>
            lbddigitalhub.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
