import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const languages = [
  { 
    code: "en", 
    name: "English",
    flag: "🇬🇧"
  },
  { 
    code: "fr", 
    name: "Français",
    flag: "🇫🇷"
  },
];

export function LanguageSwitcher() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 group"
        >
          <Globe className="h-5 w-5 group-hover:text-orange-300" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="card-glass border-ghost">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground focus:text-foreground cursor-pointer"
          >
            <span className="text-lg" role="img" aria-label={`${lang.name} flag`}>
              {lang.flag}
            </span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}