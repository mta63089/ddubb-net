import Link from 'next/link';
import React from 'react';
import { allProjects } from 'contentlayer/generated';
import { Navigation } from '@/components/nav';
import { Card } from '@/components/card';
import { Article } from '@/app/projects/article';
import { Redis } from '@upstash/redis';
import { Eye } from 'lucide-react';

const redis = Redis.fromEnv();

export const revalidate = 60;
export default async function ProjectsPage() {
  const views = (
    await redis.mget<number[]>(
      ...allProjects.map((p) => ['pageviews', 'projects', p.slug].join(':')),
    )
  ).reduce(
    (acc, v, i) => {
      acc[allProjects[i].slug] = v ?? 0;
      return acc;
    },
    {} as Record<string, number>,
  );

  const featured = allProjects.find((project) => project.slug === 'ddubb.net')!;
  const top2 = allProjects.find((project) => project.slug === 'ddubb-bot')!;
  const top3 = allProjects.find((project) => project.slug === 'ddubb.xyz')!;
  const sorted = allProjects
    .filter((p) => p.published)
    .filter(
      (project) =>
        project.slug !== featured.slug && project.slug !== top2.slug && project.slug !== top3.slug,
    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
    );

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="mx-auto max-w-7xl space-y-8 px-6 pt-20 md:space-y-16 md:pt-24 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-ddLightGreen-100 text-3xl font-bold tracking-tight sm:text-4xl">
            Projects
          </h2>
          <p className="text-ddLightGreen-400 mt-4">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <div className="bg-ddDarkGreen-800 h-px w-full" />

        <div className="mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2 ">
          <Card>
            <Link href={`/projects/${featured.slug}`}>
              <article className="relative h-full w-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-ddLightGreen-100 text-xs">
                    {featured.date ? (
                      <time dateTime={new Date(featured.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: 'medium',
                        }).format(new Date(featured.date))}
                      </time>
                    ) : (
                      <span>SOON</span>
                    )}
                  </div>
                  <span className="text-ddLightGreen-500 flex items-center gap-1 text-xs">
                    <Eye className="h-4 w-4" />{' '}
                    {Intl.NumberFormat('en-US', { notation: 'compact' }).format(
                      views[featured.slug] ?? 0,
                    )}
                  </span>
                </div>

                <h2
                  id="featured-post"
                  className="text-ddLightGreen-100 mt-4 font-display text-3xl font-bold group-hover:text-white sm:text-4xl"
                >
                  {featured.title}
                </h2>
                <p className="text-ddLightGreen-400 group-hover:text-ddLightGreen-300 mt-4 leading-8 duration-150">
                  {featured.description}
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="text-ddLightGreen-200 hover:text-ddLightGreen-50 hidden lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          <div className="mx-auto flex w-full flex-col gap-8 border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {[top2, top3].map((project) => (
              <Card key={project.slug}>
                <Article project={project} views={views[project.slug] ?? 0} />
              </Card>
            ))}
          </div>
        </div>
        <div className="bg-ddDarkGreen-800 hidden h-px w-full md:block" />

        <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-3 lg:mx-0">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
