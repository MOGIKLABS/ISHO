'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { href: '/dashboard', label: 'Lab', icon: '⬡' },
  { href: '/editor', label: 'Editor', icon: '✦' },
  { href: '/mash-up', label: 'Mash-up', icon: '⚡' },
  { href: '/inventory', label: 'Inventory', icon: '◈' },
];

export function BottomBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-lab-chrome/10 bg-lab-black/90 backdrop-blur-lg md:hidden">
      <div className="flex h-16 items-center justify-around">
        {tabs.map((tab) => {
          const isActive = pathname.startsWith(tab.href);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex flex-col items-center gap-0.5 text-xs transition-colors ${
                isActive ? 'text-lab-neon' : 'text-lab-chrome'
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              <span className="font-medium">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
