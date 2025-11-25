import React from 'react';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-8 w-auto text-primary", className)}
      viewBox="0 0 168 53" fill="none" xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M26.5539 0L53 52.3333H0L26.5539 0Z" fill="currentColor" fillOpacity="0.8"/>
      <path d="M49 26.1667L62.227 0L75.4539 26.1667L62.227 52.3333L49 26.1667Z" stroke="currentColor" strokeWidth="4"/>
      <foreignObject x="78" y="5" width="90" height="45">
         <p xmlns="http://www.w3.org/1999/xhtml" className="font-headline text-2xl font-bold leading-none text-foreground" style={{margin: 0}}>
           Aditya
         </p>
      </foreignObject>
    </svg>
  );
}
