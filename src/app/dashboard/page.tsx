export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-8 animate-fade-in">
        <p className="lab-badge mb-2">Dashboard</p>
        <h1 className="font-display text-3xl font-bold">Your Lab</h1>
        <p className="mt-2 text-lab-chrome">
          Saved projects, recent edits, and quick actions.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Project cards will be rendered here from TanStack Query data */}
        <div className="lab-card flex h-48 flex-col items-center justify-center gap-3 border-dashed opacity-60">
          <span className="text-3xl">＋</span>
          <p className="text-sm text-lab-chrome">New project</p>
        </div>
      </div>
    </div>
  );
}
