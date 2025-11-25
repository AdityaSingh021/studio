import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import { personalData } from "@/lib/portfolio-data";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-background">
      <div className="container relative grid items-center gap-12 py-20 md:grid-cols-2 lg:py-32">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {personalData.name}
          </h1>
          <p className="text-xl font-medium text-primary">
            {personalData.title}
          </p>
          <p className="max-w-xl text-lg text-muted-foreground">
            {personalData.bio}
          </p>
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <Button size="lg" asChild className="group w-full md:w-auto">
              <a href="#projects">
                My Work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full md:w-auto">
              <a href={personalData.cvUrl} download>
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-4 pt-4 md:justify-start">
            {personalData.social.map(social => (
              <Button key={social.name} variant="ghost" size="icon" asChild>
                <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                  <social.icon className="h-6 w-6 text-muted-foreground transition-colors hover:text-accent-foreground" />
                </a>
              </Button>
            ))}
          </div>
        </div>
        <div className="relative mx-auto h-[400px] w-[300px] md:h-[500px] md:w-[400px]">
          <Image
            src="https://picsum.photos/seed/hero-portrait/600/800"
            alt="Portrait of Aditya"
            fill
            priority
            data-ai-hint="developer portrait"
            className="rounded-lg object-cover object-top shadow-lg"
          />
          <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-lg border-4 border-primary bg-background"></div>
        </div>
      </div>
    </section>
  );
}