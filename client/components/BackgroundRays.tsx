export default function BackgroundRays() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient to match Hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-flaks-gradient-start to-flaks-gradient-end" />

      {/* Soft blobs */}
      <div className="absolute top-10 left-12 w-80 h-80 bg-flaks-green/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-12 w-[28rem] h-[28rem] bg-flaks-green/5 rounded-full blur-3xl" />

      {/* Rays (vary angles/positions for visual continuity) */}
      <div className="absolute top-[15%] left-0 w-full h-px bg-gradient-to-r from-transparent via-flaks-green/30 to-transparent rotate-[12deg]" />
      <div className="absolute top-[35%] left-0 w-full h-px bg-gradient-to-r from-transparent via-flaks-green/20 to-transparent -rotate-[10deg]" />
      <div className="absolute top-[55%] left-0 w-full h-px bg-gradient-to-r from-transparent via-flaks-green/25 to-transparent rotate-[8deg]" />
      <div className="absolute top-[75%] left-0 w-full h-px bg-gradient-to-r from-transparent via-flaks-green/20 to-transparent -rotate-[14deg]" />
    </div>
  );
}

