import { Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function AnimationsSection() {
  return (
    <section className="animate-fade-in">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-6 h-6 text-orange-300" />
        <h2 className="text-xl sm:text-2xl font-medium">Animations</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="card-glass border-ghost p-8 hover:scale-105 transition-transform">
          <h3 className="text-lg font-medium mb-4">Page Transitions</h3>
          <div className="space-y-4">
            <div className="h-2 w-full bg-orange-500/20 rounded animate-pulse" />
            <div className="h-2 w-3/4 bg-orange-500/20 rounded animate-pulse delay-100" />
            <div className="h-2 w-1/2 bg-orange-500/20 rounded animate-pulse delay-200" />
          </div>
        </Card>
        <Card className="card-glass border-ghost p-8 hover:scale-105 transition-transform">
          <h3 className="text-lg font-medium mb-4">Hover States</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="aspect-square bg-orange-500/20 rounded-lg hover:bg-orange-500/30 transition-colors" />
            <div className="aspect-square bg-orange-500/20 rounded-lg hover:scale-110 transition-transform" />
            <div className="aspect-square bg-orange-500/20 rounded-lg hover:rotate-12 transition-transform" />
          </div>
        </Card>
      </div>
    </section>
  );
}