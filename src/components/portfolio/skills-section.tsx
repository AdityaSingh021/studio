import { Section } from "@/components/portfolio/section";
import { skillCategories } from "@/lib/portfolio-data";

export function SkillsSection() {
  return (
    <Section
      id="skills"
      title="My Skills"
      subtitle="A look at the technologies and tools I'm proficient in."
    >
      <div className="grid gap-8 md:grid-cols-2">
        {skillCategories.map((category) => (
          <div key={category.title} className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-4">
              <category.icon className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
            </div>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li key={skill.name} className="flex items-center gap-2 text-muted-foreground">
                  {skill.icon && <skill.icon className="h-5 w-5" />}
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
