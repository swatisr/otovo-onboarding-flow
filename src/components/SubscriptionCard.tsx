export default function SubscriptionCard() {
  return (
    <div className="group relative w-full max-w-[380px] overflow-hidden rounded-lg border border-border-default/25 bg-surface-dark p-8 transition-colors hover:border-border-default/40">
      {/* Inner border layer 1 */}
      <div
        className="pointer-events-none absolute inset-0 rounded-lg border border-border-default/15 transition-colors group-hover:border-border-default/20"
        aria-hidden
      />

      {/* Inner border layer 2 - layered edge depth */}
      <div
        className="pointer-events-none absolute inset-2 rounded-[6px] border border-border-default/10 transition-colors group-hover:border-border-default/15"
        aria-hidden
      />

      {/* Top edge highlight - light catching metal edge */}
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 z-[1] h-px bg-bg-surface/30"
        aria-hidden
      />

      {/* Sheen band - primary metallic reflection */}
      <div
        className="pointer-events-none absolute -right-24 -top-16 h-44 w-[150%] rotate-12 bg-bg-surface/10 blur-2xl opacity-80 transition-opacity duration-200 group-hover:opacity-95"
        aria-hidden
      />

      {/* Secondary sheen - subtle cross-light */}
      <div
        className="pointer-events-none absolute -left-12 -bottom-8 h-28 w-[80%] rotate-[-15deg] bg-bg-surface/5 blur-xl opacity-60 transition-opacity duration-200 group-hover:opacity-75"
        aria-hidden
      />

      {/* Corner specular - top right */}
      <div
        className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-bg-surface/8 blur-xl opacity-70 transition-opacity duration-200 group-hover:opacity-85"
        aria-hidden
      />

      {/* Corner specular - bottom left */}
      <div
        className="pointer-events-none absolute -bottom-6 -left-6 h-16 w-16 rounded-full bg-bg-surface/5 blur-lg opacity-50 transition-opacity duration-200 group-hover:opacity-65"
        aria-hidden
      />

      {/* Bottom edge shade - depth from directional light */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] h-px bg-text-primary/15"
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-[200px] flex-col justify-between">
        {/* Customer name - engraved feel */}
        <div className="relative">
          <span
            className="absolute left-0 top-px text-xl font-semibold tracking-wide text-text-white/25"
            aria-hidden
          >
            Odin Doe
          </span>
          <p className="relative text-xl font-semibold tracking-wide text-text-white">
            Odin Doe
          </p>
        </div>

        {/* Service name */}
        <h2 className="text-3xl font-semibold text-text-white">Otovo Care</h2>

        {/* Premium cue - lower zone with separator */}
        <div className="border-t border-border-default/20 pt-4">
          <p className="text-right text-xs tracking-wide text-text-inverse/70">
            Protected Energy
          </p>
        </div>
      </div>
    </div>
  );
}
