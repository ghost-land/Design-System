import { LineChart, Line, AreaChart, Area, BarChart, Bar, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Card } from '@/components/ui/card';
import { Activity } from 'lucide-react';

const data = [
  { name: 'Jan', value: 400, users: 240, sessions: 380 },
  { name: 'Feb', value: 300, users: 139, sessions: 280 },
  { name: 'Mar', value: 200, users: 980, sessions: 580 },
  { name: 'Apr', value: 278, users: 390, sessions: 480 },
  { name: 'May', value: 189, users: 480, sessions: 380 },
  { name: 'Jun', value: 239, users: 380, sessions: 280 },
];

const radarData = [
  { category: 'Performance', A: 90, B: 75 },
  { category: 'Reliability', A: 85, B: 80 },
  { category: 'Security', A: 95, B: 85 },
  { category: 'Usability', A: 80, B: 90 },
  { category: 'Features', A: 88, B: 82 },
];

export function ChartsSection() {
  return (
    <section className="animate-fade-in">
      <div className="flex items-center gap-2 mb-6">
        <Activity className="w-6 h-6 text-orange-300" />
        <h2 className="text-xl sm:text-2xl font-medium">Charts & Analytics</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {/* Line Chart */}
        <Card className="card-glass border-ghost p-8">
          <h3 className="text-lg font-medium mb-6">Line Chart</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--background))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="users" 
                stroke="hsl(var(--chart-1))" 
                strokeWidth={2}
                dot={{ fill: 'hsl(var(--chart-1))' }}
              />
              <Line 
                type="monotone" 
                dataKey="sessions" 
                stroke="hsl(var(--chart-2))" 
                strokeWidth={2}
                dot={{ fill: 'hsl(var(--chart-2))' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Area Chart */}
        <Card className="card-glass border-ghost p-8">
          <h3 className="text-lg font-medium mb-6">Area Chart</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--background))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="value"
                stroke="hsl(var(--chart-3))"
                fill="hsl(var(--chart-3))"
                fillOpacity={0.2}
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        {/* Bar Chart */}
        <Card className="card-glass border-ghost p-8">
          <h3 className="text-lg font-medium mb-6">Bar Chart</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--background))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Bar dataKey="users" fill="hsl(var(--chart-4))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Radar Chart */}
        <Card className="card-glass border-ghost p-8">
          <h3 className="text-lg font-medium mb-6">Radar Chart</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="hsl(var(--border))" />
              <PolarAngleAxis
                dataKey="category"
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
              />
              <PolarRadiusAxis stroke="hsl(var(--border))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--background))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                }}
              />
              <Legend 
                formatter={(value) => (
                  <span style={{ color: 'hsl(var(--foreground))' }}>
                    {value === 'A' ? 'Current' : 'Previous'}
                  </span>
                )} 
              />
              <Radar
                name="Current"
                dataKey="A"
                stroke="hsl(var(--chart-1))"
                fill="hsl(var(--chart-1))"
                fillOpacity={0.2}
              />
              <Radar
                name="Previous"
                dataKey="B"
                stroke="hsl(var(--chart-2))"
                fill="hsl(var(--chart-2))"
                fillOpacity={0.2}
              />
            </RadarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </section>
  );
}