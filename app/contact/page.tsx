/* eslint-disable react/jsx-key */
'use client';

import { Github, Globe, Linkedin, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Navigation } from '@/components/nav';
import { Card } from '@/components/card';

const socials = [
  {
    icon: <Twitter size={20} />,
    href: 'https://twitter.com/ddubb_net',
    label: 'Twitter',
    handle: '@ddubb_net',
  },
  {
    icon: <Mail size={20} />,
    href: 'mailto:contact@ddubb.net',
    label: 'Email',
    handle: 'contact@ddubb.net',
  },
  {
    icon: <Github size={20} />,
    href: 'https://github.com/mta63089',
    label: 'Github',
    handle: 'mta63089',
  },
  {
    icon: <Linkedin size={20} />,
    href: 'https://www.linkedin.com/in/mta630',
    label: 'Linkedin',
    handle: 'mta630',
  },
  {
    icon: <Globe size={20} />,
    href: 'https://www.upwork.com/freelancers/~01d697c9a96cc999ab',
    label: 'Upwork (Freelance)',
    handle: 'Michael A.',
  },
];

export default function Contact() {
  return (
    <div className="bg-black/50">
      <Navigation />
      <div className="container mx-auto flex min-h-screen items-center justify-center px-4">
        <div className="mx-auto mt-32 grid w-full grid-cols-1 gap-8 sm:mt-0 sm:grid-cols-3 lg:gap-16">
          {socials.map((s) => (
            <Card>
              <Link
                href={s.href}
                target="_blank"
                className="group relative flex flex-col items-center gap-4 p-4 duration-700 md:gap-8 md:p-16  md:py-24  lg:pb-48"
              >
                <span
                  className="absolute h-2/3 w-px bg-gradient-to-b from-ddDarkGreen via-ddDarkGreen/50 to-transparent"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-ddDarkGreen bg-ddDarkGreen text-sm text-ddLightGreen-200 drop-shadow-lg duration-1000 group-hover:border-ddDarkGreen-200 group-hover:bg-ddDarkGreen group-hover:text-white">
                  {s.icon}
                </span>{' '}
                <div className="z-10 flex flex-col items-center">
                  <span className="font-medium text-ddLightGreen-200 duration-150 group-hover:text-white lg:text-xl xl:text-3xl">
                    {s.handle}
                  </span>
                  <span className="mt-4 text-center text-sm text-ddEggshell duration-1000 group-hover:text-ddEggshell/50">
                    {s.label}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
