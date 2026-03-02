"use client";

/**
 * Premium dark metallic membership card component.
 * Standalone – no dependencies on app context.
 * Simulates photographed matte metal under soft directional light (top-left).
 */

const CARD_WIDTH = 420;
const CARD_HEIGHT = 260;
const CARD_RADIUS = 22;

// SVG noise for micro texture (fractal noise, low contrast)
const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

const DROP_SHADOW =
  "drop-shadow(6px 10px 20px rgba(0, 0, 0, 0.55)) drop-shadow(3px 6px 12px rgba(0, 0, 0, 0.4)) drop-shadow(1px 2px 4px rgba(0, 0, 0, 0.25))";

const BOX_SHADOW_BEVEL =
  "inset 0 0 0 1px rgba(255, 255, 255, 0.1), inset 1px 1px 2px rgba(255, 255, 255, 0.08), inset -1px -1px 2px rgba(0, 0, 0, 0.35), inset 0 2px 4px rgba(0, 0, 0, 0.15)";

const BOX_SHADOW_ENGRAVED =
  "inset 0 1px 1px rgba(255, 255, 255, 0.05), inset 0 -1px 2px rgba(0, 0, 0, 0.5)";

const TEXT_SHADOW_NAME =
  "-1px -1px 0 rgba(255, 255, 255, 0.2), -0.5px -0.5px 0 rgba(255, 255, 255, 0.12), 1px 1px 0 rgba(0, 0, 0, 0.45), 0.5px 0.5px 0 rgba(0, 0, 0, 0.35)";

const TEXT_SHADOW_TITLE =
  "-1px -1px 0 rgba(255, 255, 255, 0.22), -0.5px -0.5px 0 rgba(255, 255, 255, 0.14), 1px 1px 0 rgba(0, 0, 0, 0.5), 0.5px 0.5px 0 rgba(0, 0, 0, 0.4)";

const TEXT_SHADOW_FOOTER =
  "-0.5px -0.5px 0 rgba(255, 255, 255, 0.08), 0.5px 0.5px 0 rgba(0, 0, 0, 0.35)";

const GRADIENT_METAL =
  "linear-gradient(135deg, #2d3448 0%, #272d3f 20%, #222838 45%, #1e2434 70%, #1a2030 100%)";

const GRADIENT_LIGHT =
  "linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, transparent 35%, transparent 65%, rgba(0, 0, 0, 0.06) 100%)";

interface MetallicMembershipCardProps {
  /** When true, wraps card in full-page dark background for standalone preview */
  standalone?: boolean;
}

export default function MetallicMembershipCard({ standalone = false }: MetallicMembershipCardProps) {
  const card = (
    <div
      className="relative rounded-[24px]"
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        filter: DROP_SHADOW,
      }}
    >
      {/* Bevel: outer dark rim (visible edge) */}
        <div
          className="absolute inset-0 rounded-[24px]"
          style={{
            background: "linear-gradient(135deg, #0d1018 0%, #080a0f 50%, #0a0d12 100%)",
            boxShadow: "0 1px 0 rgba(255, 255, 255, 0.04)",
          }}
        />

        {/* Card face – inset from rim, inner highlight + machined bevel */}
        <div
          className="absolute overflow-hidden rounded-[20px]"
          style={{
            top: 3,
            left: 3,
            right: 3,
            bottom: 3,
            boxShadow: BOX_SHADOW_BEVEL,
          }}
        >
          {/* Matte metal gradient – lighter top-left, darker bottom-right, extremely low contrast */}
          <div
            className="absolute inset-0"
            style={{ background: GRADIENT_METAL }}
          />

          {/* Directional light wash – reinforces top-left source */}
          <div
            className="absolute inset-0"
            style={{ background: GRADIENT_LIGHT }}
          />

          {/* Micro texture – breaks flatness */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: NOISE_SVG,
              opacity: 0.14,
              mixBlendMode: "soft-light",
            }}
          />

          {/* Content */}
          <div
            className="relative flex h-full flex-col justify-between p-8"
            style={{ zIndex: 1 }}
          >
            {/* Odin Doe – embossed: light top-left, dark bottom-right */}
            <p
              className="text-xl font-semibold tracking-wide"
            style={{
              color: "#b8bfcc",
              textShadow: TEXT_SHADOW_NAME,
            }}
            >
              Odin Doe
            </p>

            {/* Otovo Care – embossed */}
            <h2
              className="text-3xl font-semibold tracking-tight"
            style={{
              color: "#c4cad6",
              textShadow: TEXT_SHADOW_TITLE,
            }}
            >
              Otovo Care
            </h2>

            {/* Engraved seam above Protected Energy */}
            <div className="space-y-3">
              <div
                className="h-[2px] w-full rounded-full"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.35)",
                  boxShadow: BOX_SHADOW_ENGRAVED,
                }}
              />
              <p
                className="text-right text-xs font-medium tracking-widest uppercase"
                style={{
                  color: "#8f96a8",
                  textShadow: TEXT_SHADOW_FOOTER,
                }}
              >
                Protected Energy
              </p>
            </div>
          </div>
        </div>
      </div>
  );

  if (standalone) {
    return (
      <div
        className="flex min-h-screen items-center justify-center p-8"
        style={{
          background: "linear-gradient(160deg, #1a1f2e 0%, #0f1218 100%)",
        }}
      >
        {card}
      </div>
    );
  }

  return card;
}
