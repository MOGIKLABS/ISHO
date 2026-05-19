export default function InventoryPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-8 animate-fade-in">
        <p className="lab-badge mb-2">Inventory</p>
        <h1 className="font-display text-3xl font-bold">Saved Outfits</h1>
        <p className="mt-2 text-lab-chrome">
          Your outfit library. Revisit, remix, or export past builds.
        </p>
      </div>

      <div className="lab-card flex h-64 items-center justify-center">
        <p className="text-sm text-lab-chrome/60">
          No saved outfits yet. Build one in the Editor or Mash-up Studio.
        </p>
      </div>
    </div>
  );
}
