import { Section } from "@/components/portfolio/section";
import { education } from "@/lib/portfolio-data";

export function EducationSection() {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="My academic background."
    >
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="flex items-start gap-6 rounded-lg border bg-card p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <edu.icon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">{edu.institution}</h3>
              <p className="text-md font-semibold text-primary">{edu.degree}</p>
              <p className="text-sm text-muted-foreground">{edu.period}</p>
              <p className="mt-2 text-muted-foreground">
                <span className="font-semibold text-foreground">Key Coursework:</span> {edu.coursework.join(', ')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
