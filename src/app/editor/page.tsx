'use client';

import { useState } from 'react';

export default function EditorPage() {
  const [activeTab, setActiveTab] = useState<'male' | 'female'>('male');

  return (
    <div className="min-h-screen bg-[#f9f9f9] font-sora pb-20">
      <header className="flex items-center justify-between border-b-2 border-[#00328a] bg-white px-4 py-3">
        <img src="/logo.png" alt="Ishō" className="h-8 object-contain" />
        <div className="border-2 border-[#00328a] px-3 py-1 text-xs font-black text-[#00328a]">ID: 99-X</div>
      </header>

      <div className="p-4 space-y-4">
        {/* Config Tabs */}
        <div>
          <span className="text-[10px] font-black text-[#00328a] uppercase block mb-2">System Config</span>
          <div className="flex border-2 border-[#00328a]">
            <button
              onClick={() => setActiveTab('male')}
              className={`flex-1 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${
                activeTab === 'male'
                  ? 'bg-[#00328a] text-white'
                  : 'bg-[#f3f3f3] text-[#00328a]'
              }`}
            >
              Male_Ref
            </button>
            <button
              onClick={() => setActiveTab('female')}
              className={`flex-1 py-2 text-xs font-bold uppercase tracking-widest border-l-2 border-[#00328a] transition-colors ${
                activeTab === 'female'
                  ? 'bg-[#00328a] text-white'
                  : 'bg-[#f3f3f3] text-[#00328a]'
              }`}
            >
              Female_Ref
            </button>
          </div>
        </div>

        {/* Modules Accordion */}
        <div className="border-2 border-[#00328a] bg-white">
          <div className="bg-[#222] text-white px-3 py-2 flex justify-between items-center">
            <span className="text-[10px] font-black uppercase">01_Cranial_Unit</span>
            <span className="material-symbols-outlined text-xs">expand_less</span>
          </div>
          <div className="p-3 flex gap-2">
            <button className="w-20 h-20 border-2 border-dashed border-[#dadada] flex items-center justify-center text-[#dadada]">
              <span className="material-symbols-outlined">add</span>
            </button>
            <div className="w-20 h-20 bg-[#dadada] border border-[#00328a] flex items-center justify-center text-[8px] font-black uppercase text-[#00328a]">Base_01</div>
            <div className="w-20 h-20 bg-[#f3f3f3] border border-[#dadada] flex items-center justify-center text-[8px] font-black uppercase text-[#dadada]">Locked</div>
          </div>
        </div>

        {/* Mannequin Preview */}
        <div className="relative aspect-[3/4] bg-white border-2 border-[#00328a] overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(#dadada_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
          <img
            src="https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=600"
            alt="Reference Mannequin"
            className="h-[90%] grayscale object-contain"
          />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 border border-[#00328a] bg-[#222] text-white px-2 py-1 text-[8px] font-mono">
            REF: 01A_CRANIAL
          </div>
        </div>

        {/* Finalize CTA */}
        <button className="w-full bg-red-600 text-white border-2 border-black py-4 font-black uppercase tracking-tighter shadow-[4px_4px_0px_#00328a] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
          Exec_Print_Proto [04]
        </button>
      </div>
    </div>
  );
}
