import { Palette } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function ColorsSection() {
  return (
    <section>
      <div className="flex items-center gap-2 mb-6">
        <Palette className="w-6 h-6 text-orange-300" />
        <h2 className="text-xl sm:text-2xl font-medium">Colors</h2>
      </div>
      <div className="grid-ghost">
        <Card className="card-glass border-ghost p-6 group hover:scale-105">
          <div className="h-24 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 mb-4" />
          <p className="text-muted-foreground">Primary Orange</p>
        </Card>
        <Card className="card-glass border-ghost p-6 group hover:scale-105">
          <div className="h-24 rounded-lg bg-gradient-to-r from-orange-600 to-orange-700 mb-4" />
          <p className="text-muted-foreground">Hover State</p>
        </Card>
        <Card className="card-glass border-ghost p-6 group hover:scale-105">
          <div className="h-24 rounded-lg bg-orange-500/20 mb-4" />
          <p className="text-muted-foreground">Transparency</p>
        </Card>
      </div>
    </section>
  );
}