import { MessageSquare, AtSign, User, Send, Lock, KeyRound } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';

export function FormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isAuthSubmitting, setIsAuthSubmitting] = useState(false);
  const [authSubmitted, setAuthSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
    }, 2000);
  };

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthSubmitting(true);
    
    // Simulate authentication
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsAuthSubmitting(false);
    setAuthSubmitted(true);
    
    setTimeout(() => {
      setAuthSubmitted(false);
    }, 2000);
  };

  return (
    <section>
      <div className="flex items-center gap-2 mb-6">
        <MessageSquare className="w-6 h-6 text-orange-300" />
        <h2 className="text-xl sm:text-2xl font-medium">Forms</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="card-glass border-ghost p-8 order-2 md:order-1">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form onSubmit={handleAuthSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <div className="relative">
                      <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="you@example.com"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="login-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="login-password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full btn-orange relative overflow-hidden"
                  disabled={isAuthSubmitting || authSubmitted}
                >
                  <span className={`flex items-center justify-center gap-2 transition-all ${
                    isAuthSubmitting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                  }`}>
                    Login
                    <KeyRound className="w-4 h-4" />
                  </span>
                  
                  <span className={`absolute inset-0 flex items-center justify-center transition-all ${
                    isAuthSubmitting ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}>
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                  </span>

                  <span className={`absolute inset-0 flex items-center justify-center transition-all ${
                    authSubmitted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}>
                    Welcome Back!
                  </span>
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="register">
              <form onSubmit={handleAuthSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-name">Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="register-name"
                        placeholder="John Doe"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <div className="relative">
                      <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="register-email"
                        type="email"
                        placeholder="you@example.com"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="register-password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full btn-orange relative overflow-hidden"
                  disabled={isAuthSubmitting || authSubmitted}
                >
                  <span className={`flex items-center justify-center gap-2 transition-all ${
                    isAuthSubmitting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                  }`}>
                    Create Account
                    <KeyRound className="w-4 h-4" />
                  </span>
                  
                  <span className={`absolute inset-0 flex items-center justify-center transition-all ${
                    isAuthSubmitting ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}>
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                  </span>

                  <span className={`absolute inset-0 flex items-center justify-center transition-all ${
                    authSubmitted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}>
                    Account Created!
                  </span>
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </Card>

        <Card className="card-glass border-ghost p-8 order-1 md:order-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  className="min-h-[120px] resize-none"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full btn-orange relative overflow-hidden"
              disabled={isSubmitting || submitted}
            >
              <span className={`flex items-center justify-center gap-2 transition-all ${
                isSubmitting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}>
                Send Message
                <Send className="w-4 h-4" />
              </span>
              
              <span className={`absolute inset-0 flex items-center justify-center transition-all ${
                isSubmitting ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}>
                <svg
                  className="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              </span>

              <span className={`absolute inset-0 flex items-center justify-center transition-all ${
                submitted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}>
                Sent Successfully
              </span>
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}