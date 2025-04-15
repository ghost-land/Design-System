import { Box } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function ComponentsSection() {
  return (
    <section>
      <div className="flex items-center gap-2 mb-6">
        <Box className="w-6 h-6 text-orange-300" />
        <h2 className="text-xl sm:text-2xl font-medium">Components</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="card-glass border-ghost p-8">
          <h3 className="text-lg font-medium mb-4">Buttons</h3>
          <div className="space-y-4">
            <Button className="btn-orange w-full">Primary Button</Button>
            <Button className="btn-orange w-full" disabled>Disabled Button</Button>
          </div>
        </Card>
        <Card className="card-glass border-ghost p-8">
          <h3 className="text-lg font-medium mb-4">Cards</h3>
          <Card className="card-glass border-ghost p-6">
            <p className="text-muted-foreground">Glass Card Example</p>
          </Card>
        </Card>
      </div>
    </section>
  );
}