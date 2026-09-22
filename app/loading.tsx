export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080D0E] tech-grid-pattern px-6">
      {/* Visual Tech Loading Ring */}
      <div className="relative flex items-center justify-center w-24 h-24 mb-8">
        {/* Outer Pulsing Ring */}
        <div className="absolute inset-0 rounded-full border border-[#12C887]/20 animate-ping opacity-75" />

        {/* Middle Rotating Spinner */}
        <div className="absolute inset-2 rounded-full border-2 border-transparent border-t-[#12C887] border-r-[#12C887]/40 animate-spin" />

        {/* Inner Glowing Dot */}
        <div className="w-3 h-3 rounded-full bg-[#12C887] shadow-[0_0_15px_#12C887]" />
      </div>

      {/* Loading Status Text */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#101718] border border-[#1B2727] font-mono-code text-xs text-[#12C887]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#12C887] animate-pulse" />
          <span>INITIALIZING DIGITAL SYSTEM...</span>
        </div>
        <p className="font-mono-code text-[11px] text-[#8A999A] tracking-wider uppercase">
          L.B.D Digital Hub • Loading Assets
        </p>
      </div>
    </div>
  );
}
