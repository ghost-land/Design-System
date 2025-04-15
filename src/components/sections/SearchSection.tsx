import { Search, Filter, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function SearchSection() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchCategory, setSearchCategory] = useState('all');

  return (
    <div className="space-y-6">
      {/* Desktop Search */}
      <div className="relative hidden md:flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            type="search"
            placeholder="Search components..."
            className="pl-9 bg-transparent border-border"
          />
        </div>
        <Select value={searchCategory} onValueChange={setSearchCategory}>
          <SelectTrigger className="w-[140px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="components">Components</SelectItem>
            <SelectItem value="templates">Templates</SelectItem>
            <SelectItem value="hooks">Hooks</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="icon">
          <Filter className="w-4 h-4" />
        </Button>
      </div>
      
      {/* Mobile Search */}
      <div className="md:hidden">
        <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon" className="w-10 h-10">
              <Search className="w-5 h-5" />
            </Button>
          </DialogTrigger>
          <DialogContent className="p-0 gap-0">
            <div className="flex items-center p-4 border-b">
              <Search className="w-4 h-4 text-muted-foreground mr-2" />
              <Input 
                type="search"
                placeholder="Search components..."
                className="border-0 focus-visible:ring-0 px-0"
              />
              <Button 
                variant="ghost" 
                size="icon"
                className="ml-2"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="p-2">
              <Button variant="ghost" className="w-full justify-start text-muted-foreground">
                Recent Searches
              </Button>
              <Button variant="ghost" className="w-full justify-start text-muted-foreground">
                Popular Components
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      
      {/* Command Search */}
      <div>
        <h4 className="text-sm font-medium mb-3">Command Search</h4>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Press ⌘K to search..."
            className="pl-9 bg-muted/50"
            readOnly
          />
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </div>
      </div>

      {/* Advanced Search */}
      <div>
        <h4 className="text-sm font-medium mb-3">Advanced Search</h4>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search with filters..."
                className="pl-9"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm" className="text-xs">
              Type: Component
              <X className="w-3 h-3 ml-1" />
            </Button>
            <Button variant="secondary" size="sm" className="text-xs">
              Framework: React
              <X className="w-3 h-3 ml-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Minimal Search */}
      <div>
        <h4 className="text-sm font-medium mb-3">Minimal Search</h4>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full w-10 h-10">
            <Search className="w-4 h-4" />
          </Button>
          <div className="relative flex-1">
            <Input 
              placeholder="Type to search..."
              className="rounded-full bg-muted/50 border-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}