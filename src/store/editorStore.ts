import { create } from 'zustand';

type BodyZone = 'hair' | 'torso' | 'legs' | 'accessories';

interface EditorState {
  activeZone: BodyZone;
  setActiveZone: (zone: BodyZone) => void;

  /* Each zone holds the ID of the currently selected variant */
  selections: Record<BodyZone, string | null>;
  setSelection: (zone: BodyZone, variantId: string | null) => void;

  /* Reset to blank slate */
  resetSelections: () => void;
}

const defaultSelections: Record<BodyZone, string | null> = {
  hair: null,
  torso: null,
  legs: null,
  accessories: null,
};

export const useEditorStore = create<EditorState>((set) => ({
  activeZone: 'torso',
  setActiveZone: (zone) => set({ activeZone: zone }),

  selections: { ...defaultSelections },
  setSelection: (zone, variantId) =>
    set((state) => ({
      selections: { ...state.selections, [zone]: variantId },
    })),

  resetSelections: () => set({ selections: { ...defaultSelections } }),
}));
