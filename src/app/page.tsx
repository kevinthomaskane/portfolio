import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { Referrals } from "@/components/referrals";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Referrals />
      <Footer />
    </main>
  );
}
