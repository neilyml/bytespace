import DiscoverSkills from "@/components/home/DiscoverSkills";
import Hero from "@/components/home/Hero";
import LearningPaths from "@/components/home/LearningPaths";
import Partners from "@/components/home/Partners";
import QuickCatalog from "@/components/home/QuickCatalog";

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
    </main>
  );
}
