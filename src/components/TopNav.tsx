'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/dashboard', label: 'Lab' },
  { href: '/editor', label: 'Editor' },
  { href: '/mash-up', label: 'Mash-up' },
  { href: '/inventory', label: 'Inventory' },
];

export function TopNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-lab-chrome/10 bg-lab-black/80 backdrop-blur-lg">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-8">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight text-lab-white"
        >
          衣装 <span className="text-lab-neon">Ishō</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-pill px-4 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-lab-neon/10 text-lab-neon'
                    : 'text-lab-chrome hover:text-lab-white'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
