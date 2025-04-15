import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

export function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative h-10 w-10 group"
      onClick={toggleTheme}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all group-hover:text-orange-300 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all group-hover:text-orange-300 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}