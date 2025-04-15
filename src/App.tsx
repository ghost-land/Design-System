import { Header } from '@/components/header/Header';
import { ColorsSection } from '@/components/sections/ColorsSection';
import { TypographySection } from '@/components/sections/TypographySection';
import { ComponentsSection } from '@/components/sections/ComponentsSection';
import { EffectsSection } from '@/components/sections/EffectsSection';
import { SearchSection } from '@/components/sections/SearchSection';
import { AnimatedButtonsSection } from '@/components/sections/AnimatedButtonsSection';
import { ResponsiveSection } from '@/components/sections/ResponsiveSection';
import { LayoutSection } from '@/components/sections/LayoutSection';
import { AnimationsSection } from '@/components/sections/AnimationsSection';
import { LoadingSection } from '@/components/sections/LoadingSection';
import { ChartsSection } from '@/components/sections/ChartsSection';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Settings } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageSwitcher } from '@/components/language-switcher';
import { FormSection } from '@/components/sections/FormSection';

function App() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <Header />

      <main className="container-ghost">
        <div className="grid gap-8 sm:gap-12">
          <ColorsSection />
          <TypographySection />
          <ComponentsSection />
          <EffectsSection />

          {/* Interactive Components */}
          <section className="scroll-mt-16">
            <div className="flex items-center gap-2 mb-6">
              <Settings className="w-6 h-6 text-orange-300" />
              <h2 className="text-xl sm:text-2xl font-medium">Interactive Elements</h2>
            </div>
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              <Card className="card-glass border-ghost p-4 sm:p-6 md:p-8">
                <h3 className="text-lg font-medium mb-4">Search Bar</h3>
                <SearchSection />
              </Card>
              <Card className="card-glass border-ghost p-4 sm:p-6 md:p-8">
                <h3 className="text-lg font-medium mb-4">Animated Button</h3>
                <AnimatedButtonsSection />
              </Card>
            </div>
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 mt-4 sm:mt-6">
              <Card className="card-glass border-ghost p-4 sm:p-6 md:p-8">
                <h3 className="text-lg font-medium mb-4">Theme Switching</h3>
                <div className="flex items-center justify-center">
                  <ThemeToggle />
                </div>
              </Card>
              <Card className="card-glass border-ghost p-4 sm:p-6 md:p-8">
                <h3 className="text-lg font-medium mb-4">Language Selection</h3>
                <div className="flex items-center justify-center">
                  <LanguageSwitcher />
                </div>
              </Card>
            </div>
          </section>

          <FormSection />
          <ResponsiveSection />
          <LayoutSection />
          <LoadingSection />
          <ChartsSection />
          <AnimationsSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;