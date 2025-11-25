import { experiences, personalData } from "@/lib/portfolio-data";
import { Section } from "@/components/portfolio/section";
import { Badge } from "@/components/ui/badge";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      title="Work Experience"
      subtitle={`My professional journey as a ${personalData.title}.`}
    >
      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-border/70">
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex items-start gap-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border bg-background text-primary shadow-sm">
              <exp.icon className="h-5 w-5" />
            </div>
            <div className="w-full">
              <p className="text-lg font-semibold text-foreground">{exp.role}</p>
              <p className="text-md text-muted-foreground">{exp.company} • {exp.period}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                {exp.description.map((point, i) => (
                  <li key={i} className="text-muted-foreground">{point}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.technologies.map(tech => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
