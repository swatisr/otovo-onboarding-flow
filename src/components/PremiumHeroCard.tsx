"use client";

import { useState } from "react";

const IMAGE_URL =
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=85";

interface PremiumHeroCardProps {
  name: string;
}

export default function PremiumHeroCard({ name }: PremiumHeroCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 py-12 md:px-6 md:py-16"
      style={{
        background:
          "linear-gradient(180deg, #0c1222 0%, #1a2234 35%, #152238 70%, #0c1222 100%), radial-gradient(ellipse 70% 60% at 50% 45%, rgba(59, 130, 246, 0.12) 0%, transparent 55%), radial-gradient(ellipse 100% 80% at 50% 50%, rgba(30, 58, 138, 0.06) 0%, transparent 70%)",
      }}
    >
      <div
        className="group relative w-full max-w-[1200px] transition-all duration-500 ease-out"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: isHovered ? "translateY(-4px)" : "translateY(0)",
          boxShadow: isHovered
            ? "0 32px 64px -12px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.05)"
            : "0 24px 48px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.03)",
        }}
      >
        <div className="flex flex-col overflow-hidden rounded-[32px] bg-white p-12 lg:flex-row">
          {/* Left: breathing space with subtle texture */}
          <div
            className="relative flex min-h-[280px] flex-1 flex-col lg:min-h-[420px]"
            style={{
              background:
                "linear-gradient(135deg, #fafafa 0%, #f5f5f5 50%, #fafafa 100%)",
            }}
          >
            <div
              className="absolute inset-0 opacity-[0.015]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }}
              aria-hidden
            />
          </div>

          {/* Right: image tile */}
          <div className="relative flex w-full items-center justify-center p-6 lg:w-[45%] lg:p-8">
            <div
              className="relative w-full overflow-hidden rounded-[24px] transition-transform duration-500 ease-out"
              style={{
                minHeight: "320px",
                transform: isHovered ? "scale(1.02)" : "scale(1)",
                boxShadow:
                  "inset 0 1px 2px rgba(255, 255, 255, 0.4), 0 8px 24px -4px rgba(0, 0, 0, 0.15)",
              }}
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${IMAGE_URL})` }}
                aria-hidden
              />
              {/* Bottom gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 50%, rgba(255, 255, 255, 0.03) 100%)",
                }}
                aria-hidden
              />
              {/* Soft glassy highlight */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, transparent 40%)",
                }}
                aria-hidden
              />

              {/* Overlay label */}
              <div
                className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center px-8 py-5 transition-shadow duration-500"
                style={{
                  backgroundColor: "rgba(42, 38, 35, 0.94)",
                  borderRadius: "16px",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  boxShadow:
                    "0 8px 32px -8px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.06)",
                }}
              >
                <p className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                  {name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
