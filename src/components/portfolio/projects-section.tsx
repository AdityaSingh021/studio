import Image from "next/image";
import { Section } from "@/components/portfolio/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/portfolio-data";
import { Download } from "lucide-react";

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      title="My Projects"
      subtitle="A selection of projects I've worked on."
    >
      <div className="space-y-16">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`grid items-center gap-8 md:grid-cols-2 md:gap-12`}
          >
            <div
              className={`relative h-80 w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0 ? "md:order-1" : "md:order-2"
              }`}
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="rounded-lg object-contain"
                data-ai-hint={project.imageHint}
              />
            </div>
            <div
              className={`space-y-4 ${
                index % 2 === 0 ? "md:order-2" : "md:order-1"
              }`}
            >
              <h3 className="text-2xl font-bold text-foreground">
                {project.title}
              </h3>
              <div className="space-y-3 text-muted-foreground">
                {project.description.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-4">
                 <Button variant="outline" asChild>
                    <a
                      href="#"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download App
                    </a>
                  </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
