import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  subtitle: string;
}

export function Section({ id, title, subtitle, className, children, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("container py-16 md:py-24 animate-fade-in", className)}
      {...props}
    >
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          {subtitle}
        </p>
      </div>
      {children}
    </section>
  );
}
