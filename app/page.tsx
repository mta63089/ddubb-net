import Link from 'next/link';
import React from 'react';
import Particles from '@/components/particles';
import Image from 'next/image';

const navigation = [
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-transparent">
      <nav className="my-16 animate-fade-in">
        <ul className="flex flex-wrap items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              <span className="font-display text-lg font-bold text-ddEggshell duration-500 hover:text-ddYellow">
                {item.name}
              </span>
            </Link>
          ))}
        </ul>
      </nav>
      <div className="animate-glow hidden h-px w-screen animate-fade-left bg-gradient-to-r from-ddPink-50/0 via-ddPink-200 to-ddPink-50/0 md:block" />
      <div className="h-1" />
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={500} />
      <div className="z-10 flex animate-title cursor-default items-center justify-center whitespace-nowrap py-4">
        <div className="relative h-[50px] w-[50px] px-1 duration-1000 md:h-[112px] md:w-[112px] md:px-2">
          <Image src="/logo.png" alt="a cute ghost logo" width={100} height={100} />
        </div>
        <h1 className="text-edge-outline bg-ddYellow bg-clip-text align-middle font-display text-4xl font-bold text-transparent duration-1000 sm:text-6xl md:text-9xl">
          ddubb
        </h1>
      </div>
      <div className="animate-glow hidden h-px w-screen animate-fade-right bg-gradient-to-r from-ddEggshell-50/0 via-ddRose-300 to-ddEggshell-50/0 md:block" />
      <div className="my-16 animate-fade-in text-center">
        <h2 className="mx-6 text-sm text-ddEggshell">
          <p className="font-semibold">Hey there! mta630 here, welcome to my project hub!</p>
          <br />
          <p className="text-xs font-light">
            This is still a work in progress and will be updated frequently in the coming weeks.
          </p>
        </h2>
      </div>
    </div>
  );
}
