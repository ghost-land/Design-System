import { Type } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function TypographySection() {
  return (
    <section>
      <div className="flex items-center gap-2 mb-6">
        <Type className="w-6 h-6 text-orange-300" />
        <h2 className="text-xl sm:text-2xl font-medium">Typography</h2>
      </div>
      <Card className="card-glass border-ghost p-8">
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-medium mb-2">Heading 1</h1>
            <p className="text-muted-foreground text-sm">text-2xl sm:text-3xl font-medium</p>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-medium mb-2">Heading 2</h2>
            <p className="text-muted-foreground text-sm">text-xl sm:text-2xl font-medium</p>
          </div>
          <div>
            <p className="text-base sm:text-lg mb-2">Body Text</p>
            <p className="text-muted-foreground text-sm">text-base sm:text-lg</p>
          </div>
        </div>
      </Card>
    </section>
  );
}