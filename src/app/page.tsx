import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-8 py-24 text-center">
      <div className="animate-fade-in">
        <p className="lab-badge mb-4">v0.1 alpha</p>
        <h1 className="font-display text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
          衣装
          <br />
          <span className="text-lab-neon">Ishō</span>
        </h1>
      </div>

      <p
        className="max-w-md text-lg text-lab-chrome animate-fade-in"
        style={{ animationDelay: '0.15s' }}
      >
        AI-powered cosplay ideation. Remix references, prototype outfits, and
        build your look before you build the costume.
      </p>

      <div
        className="flex gap-3 animate-fade-in"
        style={{ animationDelay: '0.3s' }}
      >
        <Link href="/dashboard" className="lab-button">
          Enter the Lab
        </Link>
        <Link href="/mash-up" className="lab-button-outline">
          Try Mash-up
        </Link>
      </div>
    </div>
  );
}
