"use client";

import MetallicMembershipCard from "@/components/MetallicMembershipCard";

export default function ThankYouPage() {
  return (
    <div
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #f9f9fc 0%, #f7f7fa 50%, #f9f9fc 100%)",
      }}
    >
      {/* Faint grid pattern - right half only */}
      <div
        className="absolute right-0 top-0 h-full w-1/2"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(27, 36, 56, 0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(27, 36, 56, 0.025) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />

      {/* Radial soft highlight behind card area */}
      <div
        className="absolute left-1/2 top-1/2 h-[80%] w-[90%] max-w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-[32px] opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(27, 36, 56, 0.03) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      {/* Centered content container */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-stretch gap-12 px-8 py-16 md:flex-row md:items-center md:gap-16 md:px-12 md:py-20 lg:gap-24 lg:px-16">
        {/* Left column */}
        <div className="flex flex-1 flex-col justify-center md:py-12">
          <h1 className="text-4xl font-semibold tracking-tight text-text-primary md:text-5xl lg:text-[3.5rem]">
            You&apos;re All Set
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-text-secondary">
            Your subscription is confirmed. We&apos;ll be in touch shortly to help you get started.
          </p>
        </div>

        {/* Right column - metallic membership card */}
        <div
          className="flex min-h-[320px] flex-1 items-center justify-center rounded-2xl p-8 md:min-h-[400px]"
          style={{
            background: "linear-gradient(160deg, #1a1f2e 0%, #0f1218 100%)",
          }}
        >
          <MetallicMembershipCard />
        </div>
      </div>
    </div>
  );
}
