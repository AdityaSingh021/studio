import Image from "next/image";
import { Section } from "@/components/portfolio/section";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/portfolio-data";

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      title="My Projects"
      subtitle="A selection of projects I've worked on."
    >
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-primary/20 hover:shadow-lg">
            <CardHeader>
              <div className="relative h-40 w-full">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="rounded-t-lg object-cover"
                  data-ai-hint={project.imageHint}
                />
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardTitle className="mb-2 text-xl">{project.title}</CardTitle>
              <p className="text-muted-foreground">{project.description}</p>
            </CardContent>
            <CardFooter className="flex flex-col items-start">
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
