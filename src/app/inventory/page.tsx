export default function InventoryPage() {
  return (
    <div className="min-h-screen bg-[#f9f9f9] font-sora text-[#00328a] pb-20">
      <header className="p-6 border-b-2 border-[#00328a] bg-white">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-1 w-4 bg-red-600"></div>
          <span className="text-xs font-black uppercase tracking-widest">Sector: Research_Data</span>
        </div>
        <h1 className="text-3xl font-black uppercase tracking-tighter leading-none mb-4">Costume_Sci</h1>
        <p className="text-xs font-medium leading-relaxed opacity-70">
          Active archival catalog of tactical apparel prototypes. All models are rendered in high-fidelity 3D projection for engineering review.
        </p>
      </header>

      <div className="p-4 grid gap-8">
        {/* Prototype Card */}
        <article className="border-2 border-[#00328a] bg-white overflow-hidden shadow-[4px_4px_0px_#dadada]">
          <div className="relative aspect-square">
            <img
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600"
              alt="Vanguard-01"
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute top-4 left-4 bg-[#00328a] text-white px-2 py-1 text-[8px] font-black uppercase">
              Active Prototype
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-black uppercase leading-none">Vanguard-01</h3>
              <span className="text-[8px] font-bold text-red-600 border border-red-600 px-1 uppercase">[ Validated ]</span>
            </div>
            <p className="text-[8px] font-mono text-[#dadada] mb-4">SERIAL: #XP-2004  DATE: 2024.10.12</p>
            <p className="text-[10px] font-medium leading-normal mb-4">
              Multi-layered kinetic fabric with integrated heat dissipation nodes. Optimized for dense architectural zones.
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[8px] font-black uppercase">Durability</span>
              <div className="flex gap-1">
                <div className="h-2 w-2 bg-[#00328a]"></div>
                <div className="h-2 w-2 bg-[#00328a]"></div>
                <div className="h-2 w-2 bg-[#00328a]"></div>
                <div className="h-2 w-2 bg-[#dadada]"></div>
              </div>
            </div>
            <button className="w-full border-2 border-[#00328a] bg-[#00328a] text-white py-3 text-[10px] font-black uppercase tracking-widest active:bg-white active:text-[#00328a] transition-colors">
              Export Data [.OBJ]
            </button>
          </div>
        </article>
      </div>

      <footer className="p-6 text-center">
        <div className="flex items-center justify-center gap-2 text-[8px] font-mono opacity-50 uppercase">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
          System_Status: Nominal | Cache: 1.2GB
        </div>
      </footer>
    </div>
  );
}
