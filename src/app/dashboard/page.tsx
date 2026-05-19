export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#f9f9f9] font-sora text-[#00328a] selection:bg-[#00328a] selection:text-white pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b-2 border-[#00328a] bg-[#f3f3f3] px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 overflow-hidden border border-[#00328a]">
            <img src="/logo.png" alt="Ishō Logo" className="h-full w-full object-contain p-1" />
          </div>
          <div className="leading-none">
            <h1 className="text-xs font-bold tracking-tighter uppercase">Tactical_OS // Pilot_ID:</h1>
            <p className="text-sm font-black text-[#00328a]">08-X</p>
          </div>
        </div>
        <div className="border-2 border-[#00328a] bg-white px-3 py-1 text-center">
          <span className="block text-[10px] font-bold uppercase leading-none">ID: 99-X</span>
        </div>
      </header>

      <main className="flex h-[calc(100vh-124px)]">
        {/* Left Sidebar: Metrics */}
        <div className="w-1/3 border-r-2 border-[#00328a] p-4 flex flex-col gap-4">
          <div className="border-2 border-[#00328a] bg-white p-2">
            <div className="flex items-center justify-between border-b border-[#00328a] pb-1 mb-2">
              <span className="text-[10px] font-black uppercase">System_Metrics</span>
              <div className="h-2 w-2 rounded-full bg-red-600 animate-pulse"></div>
            </div>
            <div className="space-y-1 text-[10px] font-mono leading-tight">
              <div className="flex justify-between"><span>CPU_LOAD_X86</span><span className="font-bold">74.2%</span></div>
              <div className="flex justify-between"><span>LINK_STABILITY</span><span className="font-bold">0.89 MS</span></div>
              <div className="flex justify-between"><span>CORE_01</span><span className="font-bold text-green-600">ACTIVE</span></div>
              <div className="flex justify-between"><span>TEMP</span><span className="font-bold">42°C</span></div>
            </div>
          </div>

          <button className="flex w-full items-center justify-center gap-2 border-2 border-[#00328a] bg-[#00328a] py-3 text-xs font-bold text-white uppercase transition-all active:scale-95">
            Deploy_Drone <span className="material-symbols-outlined text-sm">rocket_launch</span>
          </button>

          <button className="flex w-full items-center justify-center gap-2 border-2 border-[#00328a] bg-white py-3 text-xs font-bold text-[#00328a] uppercase transition-all active:scale-95">
            System_Logs <span className="material-symbols-outlined text-sm">terminal</span>
          </button>
        </div>

        {/* Right Content: Annotations & Alerts */}
        <div className="flex-1 p-4 bg-[#f3f3f3] relative overflow-hidden">
          <div className="bg-white border-2 border-[#00328a] p-4 mb-6">
            <h2 className="text-xs font-black uppercase border-b border-[#dadada] pb-2 mb-4">Object_Annotations</h2>
            <div className="space-y-4">
              <div>
                <span className="block text-[8px] text-[#dadada] font-bold uppercase">Part_ID</span>
                <p className="text-sm font-black">HX-900-V</p>
              </div>
              <div className="border-t border-[#dadada] pt-2">
                <span className="block text-[8px] text-[#dadada] font-bold uppercase">Material_Spec</span>
                <p className="text-sm font-black uppercase">Reinforced_Carbon_Polymer</p>
              </div>
            </div>
          </div>

          <div className="border-2 border-red-600 bg-white p-4">
            <div className="flex items-center gap-2 text-red-600 mb-2">
              <span className="material-symbols-outlined text-sm">warning</span>
              <h3 className="text-xs font-black uppercase">Integrity Alert</h3>
            </div>
            <p className="text-[10px] leading-relaxed font-medium">
              Structural micro-fissures detected in quadrant D-4. Immediate reinforcement required prior to phase 2 deployment.
            </p>
          </div>

          <div className="absolute bottom-4 left-4 border-l-4 border-red-600 pl-3">
            <p className="text-[10px] font-mono leading-none text-[#00328a] opacity-60">
              TECHNICAL ADVISORY:<br />STRUCTURAL MICRO-FISSURES DETECTED.
            </p>
          </div>
        </div>
      </main>

      {/* Navigation Bar */}
      <nav className="fixed bottom-0 z-50 flex w-full border-t-2 border-[#00328a] bg-white h-16">
        <button className="flex flex-1 flex-col items-center justify-center text-[#00328a] opacity-50">
          <span className="material-symbols-outlined">precision_manufacturing</span>
          <span className="text-[8px] font-bold mt-1">GARAGE</span>
        </button>
        <button className="flex flex-1 flex-col items-center justify-center bg-[#00328a] text-white">
          <span className="material-symbols-outlined">architecture</span>
          <span className="text-[8px] font-bold mt-1">SCHEMATICS</span>
        </button>
        <button className="flex flex-1 flex-col items-center justify-center text-[#00328a] opacity-50">
          <span className="material-symbols-outlined">settings_input_component</span>
          <span className="text-[8px] font-bold mt-1">FORGE</span>
        </button>
        <button className="flex flex-1 flex-col items-center justify-center text-[#00328a] opacity-50">
          <span className="material-symbols-outlined">settings_remote</span>
          <span className="text-[8px] font-bold mt-1">LINK</span>
        </button>
      </nav>
    </div>
  );
}
