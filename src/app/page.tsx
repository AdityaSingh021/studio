import { Header } from '@/components/layout/header';
import { HeroSection } from '@/components/portfolio/hero-section';
import { ExperienceSection } from '@/components/portfolio/experience-section';
import { ProjectsSection } from '@/components/portfolio/projects-section';
import { SkillsSection } from '@/components/portfolio/skills-section';
import { EducationSection } from '@/components/portfolio/education-section';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
      </main>
      <Footer />
    </>
  );
}
