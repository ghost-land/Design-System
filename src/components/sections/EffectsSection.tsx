import { Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function EffectsSection() {
  return (
    <section>
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-6 h-6 text-orange-300" />
        <h2 className="text-xl sm:text-2xl font-medium">Effects</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="card-glass border-ghost p-8 group">
          <h3 className="text-lg font-medium mb-4 group-hover:text-orange-300 transition-colors">
            Hover Effects
          </h3>
          <p className="text-muted-foreground">
            Interactive elements with smooth transitions and hover states.
          </p>
        </Card>
        <Card className="card-glass border-ghost p-8">
          <h3 className="text-lg font-medium mb-4">Blur & Shadows</h3>
          <div className="h-20 bg-black/5 dark:bg-white/10 backdrop-blur-xl rounded-lg" />
        </Card>
      </div>
    </section>
  );
}