'use client';

import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

export const Navigation: React.FC = () => {
  return (
    <header className="h-16 w-screen bg-ddLightGreen-100">
      <div className="fixed top-0 z-40 w-full transition-colors duration-500">
        <div className="mx-auto">
          <div className="relative flex items-center">
            <Link href="/" className="mr-3">
              <Image src="/logo.png" alt="logo" width={60} height={60} />
            </Link>
            <nav className="ml-auto flex justify-between gap-4 font-display text-base font-bold duration-300">
              <Link href="/projects" className="text-ddEggshell duration-300 hover:text-ddYellow">
                Projects
              </Link>
              <Link href="/contact" className="text-ddEggshell duration-300 hover:text-ddYellow">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
