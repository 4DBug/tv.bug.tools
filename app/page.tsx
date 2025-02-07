import { Pattern } from '@/components/ui/pattern';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import HeroSection from '@/components/hero';

export default async function Home() {
  return (
    <>
      <Pattern variant="checkered" />
      <div className="mx-auto max-w-4xl p-4">
        <section className="flex h-[75vh] items-center md:h-[50vh]">
          <div className="mx-auto flex w-4/5 flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-6xl font-bold">🐛 Bug Movies</h1>
            <p className="text-sm leading-6 text-muted-foreground">
              Find and watch movies instantly with a smooth and effortless experience. The films you want, when you want them.
              <br></br>
              <br></br>
              ⚠️ Use UBlock for the best experience.
            </p>
          </div>
        </section>
      </div>
      <HeroSection />
    </>
  );
}
