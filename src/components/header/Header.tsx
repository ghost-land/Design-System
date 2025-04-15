import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageSwitcher } from '@/components/language-switcher';
import { cn } from '@/lib/utils';
import { useState, useEffect, useRef } from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (titleRef.current) {
        const titleRect = titleRef.current.getBoundingClientRect();
        setIsScrolled(titleRect.top < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Header */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 md:hidden h-16",
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : ""
      )}>
        <div className="container-ghost">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <img src="/gland.png" alt="Ghost Land" className="w-8 h-8" />
              <h1 className={cn(
                "text-xl sm:text-2xl font-medium transition-all duration-300",
                isScrolled ? "opacity-100" : "opacity-0"
              )}>
                <span className="text-foreground">Design System</span>
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>

      {/* Desktop Navigation */}
      <div className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block",
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : ""
      )}>
        <div className="container-ghost">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img src="/gland.png" alt="Ghost Land" className="w-8 h-8" />
              <h1 className={cn(
                "text-xl sm:text-2xl font-bold transition-all duration-300",
                isScrolled ? "opacity-100" : "opacity-0"
              )}>
                <span className="text-foreground">Ghost Land</span>
                <span className="text-orange-300 ml-2">Design System</span>
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>

      <header className="container-ghost pt-32 pb-8 md:pt-28 md:pb-12">
        <h1 ref={titleRef} className="text-2xl sm:text-3xl md:text-4xl font-medium mb-3 sm:mb-4 animate-fade-in">
          Ghost Land <span className="text-gradient">Design System</span>
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl animate-fade-up leading-relaxed">
          A modern, dark-themed design system with glass morphism effects, gradient accents, and responsive components.
        </p>
      </header>
    </>
  );
}