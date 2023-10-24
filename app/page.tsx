import Link from 'next/link';
import React from 'react';
import Particles from '@/components/particles';

const navigation = [
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export default function Home() {
  return (
    <div className="via-ddDarkGreen-600/20 flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-black to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex flex-wrap items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-ddLightGreen-500 hover:text-ddLightGreen-300 text-sm duration-500"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="animate-glow from-ddDarkGreen-300/0 via-ddDarkGreen-300/50 to-ddDarkGreen-300/0 hidden h-px w-screen animate-fade-left bg-gradient-to-r md:block" />
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
      <h1 className="text-edge-outline bg-ddYellow z-10 animate-title cursor-default whitespace-nowrap bg-clip-text font-display text-4xl font-bold text-transparent duration-1000 sm:text-6xl md:text-9xl ">
        ddubb
      </h1>

      <div className="animate-glow from-ddDarkGreen-300/0 via-ddDarkGreen-300/50 to-ddDarkGreen-300/0 hidden h-px w-screen animate-fade-right bg-gradient-to-r md:block" />
      <div className="my-16 animate-fade-in text-center">
        <h2 className="text-ddLightGreen-500 mx-6 text-sm">
          Hey there! mta630 here, welcome to my project hub!
          <br />
          Please check back often for updates!
        </h2>
      </div>
    </div>
  );
}
