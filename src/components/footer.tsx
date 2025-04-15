import { Mail, Github, Globe, Home, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="container-ghost py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Ghost Land</h3>
            <p className="text-sm text-muted-foreground">
              Non-profit projects and content preservation.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://ghostland.at" className="text-muted-foreground hover:text-foreground transition-colors">
                <Home className="w-5 h-5" />
              </a>
              <a href="https://social.ghostland.at" className="text-muted-foreground hover:text-foreground transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="https://github.com/ghost-land/Design-System" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://status.ghostland.at" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Status
                </a>
              </li>
              <li>
                <a href="https://donate.ghostland.at" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Donate
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://ghostland.at" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="https://ghostland.at/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://ghostland.at/dmca" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  DMCA Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2020-{currentYear} Ghost Land. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-orange-300" /> by Ghost Land
          </p>
        </div>
      </div>
    </footer>
  );
}