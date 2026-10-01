import DiscoverSkills from "@/components/home/DiscoverSkills";
import CreatorCTA from "@/components/home/CreatorCTA";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import LearningPaths from "@/components/home/LearningPaths";
import Partners from "@/components/home/Partners";
import ProfessionalGrowth from "@/components/home/ProfessionalGrowth";
import QuickCatalog from "@/components/home/QuickCatalog";
import Testimonials from "@/components/home/Testimonials";

type HomeProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const { q } = await searchParams;
  const initialQuery = (Array.isArray(q) ? q[0] : q) ?? "";

  return (
    <main className="min-h-screen w-full overflow-hidden bg-white antialiased [font-synthesis:none]">
      <Hero initialQuery={initialQuery} />
      <Partners />
      <DiscoverSkills />
      <QuickCatalog />
      <LearningPaths />
      <ProfessionalGrowth />
      <CreatorCTA />
      <Testimonials />
      <Footer />
    </main>
  );
}
