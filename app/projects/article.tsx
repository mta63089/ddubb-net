import type { Project } from '@/.contentlayer/generated';
import Link from 'next/link';
import { Eye, View } from 'lucide-react';

type Props = {
  project: Project;
  views: number;
};

export const Article: React.FC<Props> = ({ project, views }) => {
  return (
    <Link href={`/projects/${project.slug}`}>
      <article className="p-4 md:p-8">
        <div className="flex items-center justify-between gap-2">
          <span className="text-ddLightGreen-200 group-hover:border-ddDarkGreen-200 drop-shadow-orange text-xs duration-1000 group-hover:text-white">
            {project.date ? (
              <time dateTime={new Date(project.date).toISOString()}>
                {Intl.DateTimeFormat(undefined, { dateStyle: 'medium' }).format(
                  new Date(project.date),
                )}
              </time>
            ) : (
              <span>SOON</span>
            )}
          </span>
          <span className="text-ddLightGreen-500 flex  items-center gap-1 text-xs">
            <Eye className="h-4 w-4" />{' '}
            {Intl.NumberFormat('en-US', { notation: 'compact' }).format(views)}
          </span>
        </div>
        <h2 className="text-ddLightGreen-200 z-20 font-display text-xl font-medium duration-1000 group-hover:text-white lg:text-3xl">
          {project.title}
        </h2>
        <p className="text-ddLightGreen-400 group-hover:text-ddLightGreen-200 z-20  mt-4 text-sm duration-1000">
          {project.description}
        </p>
      </article>
    </Link>
  );
};
