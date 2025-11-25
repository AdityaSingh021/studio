'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Mail } from 'lucide-react';
import { navigationLinks, personalData } from '@/lib/portfolio-data';
import { Logo } from '@/components/icons';
import { cn } from '@/lib/utils';

export function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <a href="#" className="mr-6 flex items-center space-x-2">
            <Logo />
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <a href="#" className="mb-8 flex items-center">
                <Logo />
              </a>
              <nav className="flex flex-col gap-6 text-lg font-medium">
                {navigationLinks.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setSheetOpen(false)}
                    className="flex items-center gap-4 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <link.icon className="h-5 w-5" />
                    {link.name}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 items-center gap-6 text-sm md:flex">
          {navigationLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild className="group transition-all duration-300">
            <a href={`mailto:${personalData.email}`}>
              <Mail className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Contact Me
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}