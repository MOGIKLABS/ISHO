'use client';

export default function MashUpPage() {
  return (
    <div className="min-h-screen bg-[#f9f9f9] font-sora text-[#00328a] pb-20">
      <header className="bg-[#222] text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-red-600">biotech</span>
          <h1 className="text-xs font-black uppercase tracking-widest leading-none">
            Tactical_OS //<br />[Lab-Proto:001]
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <span className="block text-[8px] text-red-600 font-bold">PILOT_ID:</span>
            <span className="text-xs font-black">08-X</span>
          </div>
          <span className="material-symbols-outlined text-blue-400 animate-pulse">sensors</span>
        </div>
      </header>

      <main className="p-4 space-y-6">
        {/* Source Streams */}
        <div className="space-y-4">
          <div className="border border-[#00328a] bg-white">
            <div className="flex justify-between border-b border-[#00328a] px-2 py-1 bg-[#f3f3f3]">
              <span className="text-[10px] font-black text-[#00328a] uppercase">[Source_01]</span>
              <span className="text-[8px] font-mono">v2.04</span>
            </div>
            <div className="aspect-square bg-black flex items-center justify-center p-4">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=400"
                alt="Technical Source 1"
                className="w-full h-full object-cover opacity-60 grayscale brightness-150"
              />
            </div>
            <div className="px-2 py-2">
              <div className="h-1 bg-[#f3f3f3] w-full">
                <div className="h-full bg-[#00328a] w-[84%]"></div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-[8px] font-black uppercase">Strength</span>
                <span className="text-[8px] font-mono">84%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Synthesis Controls */}
        <div className="text-center py-4 border-y-2 border-[#00328a] border-dashed">
          <p className="text-[10px] font-mono text-[#dadada] mb-1">MASH-UP_KERNEL</p>
          <p className="text-xs font-black text-red-600 animate-pulse tracking-[0.2em]">SYNTHESIZING...</p>
        </div>

        {/* Result Area */}
        <div className="border-4 border-[#00328a] bg-white aspect-video flex flex-col items-center justify-center relative">
          <span className="material-symbols-outlined text-4xl opacity-10 absolute">biotech</span>
          <h2 className="text-xl font-black uppercase tracking-tighter">Awaiting</h2>
          <h2 className="text-xl font-black uppercase tracking-tighter">Parameters</h2>
          <div className="mt-4 border border-[#00328a] px-4 py-2 text-[8px] font-mono text-center">
            SYNC_RATE: 1.2GB/S<br />LATENCY: 4MS
          </div>
        </div>

        <button className="w-full bg-[#222] text-white py-4 font-black uppercase tracking-widest relative overflow-hidden group">
          <span className="relative z-10">Generate Mash-up</span>
          <div className="absolute bottom-0 left-0 h-1 bg-red-600 w-full"></div>
        </button>
      </main>
    </div>
  );
}
