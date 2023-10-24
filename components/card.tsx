'use client';

import { PropsWithChildren } from 'react';

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-ddPink-600 duration-700 hover:border-ddPink-400/50 hover:bg-ddPink/10 md:gap-8 ">
      <div className="pointer-events-none">
        <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-ddPink via-ddPink-100/10 to-ddPink opacity-100 transition duration-1000 group-hover:opacity-50 " />
        <div className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100" />
      </div>
      {children}
    </div>
  );
};
