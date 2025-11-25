import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import { personalData } from "@/lib/portfolio-data";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-background">
      <div className="container relative flex items-center justify-center py-20 text-center lg:py-32">
        <div className="space-y-6">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {personalData.name}
          </h1>
          <p className="text-xl font-medium text-primary">
            {personalData.title}
          </p>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            {personalData.bio}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="group w-full sm:w-auto">
              <a href="#projects">
                My Work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
              <a href={personalData.cvUrl} download>
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-4 pt-4">
            {personalData.social.map(social => (
              <Button key={social.name} variant="ghost" size="icon" asChild>
                <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                  <social.icon className="h-6 w-6 text-muted-foreground transition-colors hover:text-accent-foreground" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
