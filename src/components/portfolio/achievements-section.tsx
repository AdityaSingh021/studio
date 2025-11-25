import { Section } from "@/components/portfolio/section";
import { achievements } from "@/lib/portfolio-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AchievementsSection() {
  return (
    <Section
      id="achievements"
      title="Achievements"
      subtitle="My accomplishments and recognitions."
    >
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement) => (
          <Card key={achievement.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">
                {achievement.title}
              </CardTitle>
              <achievement.icon className="h-6 w-6 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
