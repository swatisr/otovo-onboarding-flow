"use client";

import MetallicMembershipCard from "@/components/MetallicMembershipCard";

export default function ThankYouPage() {
  return (
    <div
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4"
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

      {/* Two columns: left = thank you, right = card + text block stacked */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1000px] flex-col gap-12 px-6 py-16 md:flex-row md:items-center md:gap-16 md:px-8 md:py-20 lg:gap-20">
        {/* Left column - thank you message */}
        <div className="flex flex-1 flex-col justify-center">
          <h1 className="text-4xl font-semibold tracking-tight text-text-primary md:text-5xl lg:text-[3.5rem]">
            Thank you for subscribing
          </h1>
        </div>

        {/* Right column - card + text block stacked vertically */}
        <div className="flex flex-1 flex-col gap-8">
          <div className="flex justify-center md:justify-start">
            <MetallicMembershipCard />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold tracking-tight text-text-primary md:text-3xl">
              Lorem ipsum dolor sit amet consectetur
            </h2>
            <p className="max-w-md text-base leading-relaxed text-text-secondary">
              Lorem ipsum dolor sit amet consectetur. Eget id mattis massa magnis nec pharetra enim blandit. Urna malesuada elementum aenean aenean nam tristique in.
            </p>
            <div className="flex flex-col gap-4">
              <button
                type="button"
                className="inline-flex w-fit items-center justify-center rounded-lg bg-secondary px-6 py-3 text-base font-medium text-white transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
              >
                Button text
              </button>
              <button
                type="button"
                className="w-fit text-base font-medium text-text-primary hover:underline focus:outline-none"
              >
                Remind me later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
