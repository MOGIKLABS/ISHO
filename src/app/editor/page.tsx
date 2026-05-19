'use client';

import { useEditorStore } from '@/store/editorStore';

export default function EditorPage() {
  const { activeZone, setActiveZone } = useEditorStore();

  const zones = ['hair', 'torso', 'legs', 'accessories'] as const;

  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-8 animate-fade-in">
        <p className="lab-badge mb-2">Editor</p>
        <h1 className="font-display text-3xl font-bold">Outfit Builder</h1>
        <p className="mt-2 text-lab-chrome">
          Swap pieces, layer styles, and prototype your look.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        {/* SVG doll preview area */}
        <div className="lab-card flex min-h-[480px] items-center justify-center">
          <div className="text-center text-lab-chrome">
            <p className="text-5xl mb-3">✦</p>
            <p className="text-sm">
              SVG doll canvas renders here.
              <br />
              Active zone:{' '}
              <span className="text-lab-neon font-mono">{activeZone}</span>
            </p>
          </div>
        </div>

        {/* Zone selector panel */}
        <aside className="flex flex-col gap-3">
          <p className="text-xs font-mono uppercase tracking-wider text-lab-chrome">
            Body zones
          </p>
          {zones.map((zone) => (
            <button
              key={zone}
              onClick={() => setActiveZone(zone)}
              className={`lab-card cursor-pointer text-left text-sm font-medium transition-all ${
                activeZone === zone
                  ? 'border-lab-neon/40 text-lab-neon'
                  : 'text-lab-chrome hover:text-lab-white'
              }`}
            >
              {zone.charAt(0).toUpperCase() + zone.slice(1)}
            </button>
          ))}
        </aside>
      </div>
    </div>
  );
}
