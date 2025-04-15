import { Smartphone, Tablet, Laptop } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function ResponsiveSection() {
  return (
    <section className="animate-fade-in">
      <div className="flex items-center gap-2 mb-6">
        <Smartphone className="w-6 h-6 text-orange-300" />
        <h2 className="text-xl sm:text-2xl font-medium">Responsive Design</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="card-glass border-ghost p-8 group hover:scale-105">
          <div className="flex justify-center mb-6">
            <Smartphone className="w-12 h-12 text-orange-300 group-hover:scale-110 transition-transform" />
          </div>
          <h3 className="text-lg font-medium mb-2 text-center">Mobile First</h3>
          <p className="text-muted-foreground text-center">
            Optimized for devices under 640px
          </p>
        </Card>
        <Card className="card-glass border-ghost p-8 group hover:scale-105">
          <div className="flex justify-center mb-6">
            <Tablet className="w-12 h-12 text-orange-300 group-hover:scale-110 transition-transform" />
          </div>
          <h3 className="text-lg font-medium mb-2 text-center">Tablet</h3>
          <p className="text-muted-foreground text-center">
            Fluid layouts for 768px - 1024px
          </p>
        </Card>
        <Card className="card-glass border-ghost p-8 group hover:scale-105">
          <div className="flex justify-center mb-6">
            <Laptop className="w-12 h-12 text-orange-300 group-hover:scale-110 transition-transform" />
          </div>
          <h3 className="text-lg font-medium mb-2 text-center">Desktop</h3>
          <p className="text-muted-foreground text-center">
            Enhanced experiences above 1024px
          </p>
        </Card>
      </div>
    </section>
  );
}