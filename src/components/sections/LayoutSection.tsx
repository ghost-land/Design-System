import { Layout } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function LayoutSection() {
  return (
    <section>
      <div className="flex items-center gap-2 mb-6">
        <Layout className="w-6 h-6 text-orange-300" />
        <h2 className="text-xl sm:text-2xl font-medium">Layout</h2>
      </div>
      <Card className="card-glass border-ghost p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((n) => ( 
            <div 
              key={n} 
              className="aspect-square bg-black/5 dark:bg-white/10 rounded-lg hover:scale-105 transition-transform" 
            />
          ))}
        
        </div>
      </Card>
    </section>
  );
}