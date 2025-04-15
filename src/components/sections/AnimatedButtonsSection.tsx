import { useState, useEffect } from 'react';
import {
  Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, Bell, Heart, RefreshCw, Zap,
  Send, Upload, Download, LogIn, LogOut, Loader2, Check, ArrowRight,
  Star, Rocket, Crown, Shield, Award
} from 'lucide-react';

export function AnimatedButtonsSection() {
  const [diceValue, setDiceValue] = useState(1);
  const [isHovering, setIsHovering] = useState(false);
  const [isRinging, setIsRinging] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isRippling, setIsRippling] = useState(false);
  const [isFloating, setIsFloating] = useState(false);
  const [isGlowing, setIsGlowing] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [isExpanding, setIsExpanding] = useState(false);
  const [isWaving, setIsWaving] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const newValue = Math.floor(Math.random() * 6) + 1;
      setDiceValue(newValue);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const DiceIcon = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6][diceValue - 1];

  const handleDiceHover = () => {
    if (!isHovering) {
      setIsHovering(true);
      const newValue = Math.floor(Math.random() * 6) + 1;
      setDiceValue(newValue);
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {/* Dice Roll */}
      <div className="flex flex-col items-center gap-2">
        <div 
          className="flex justify-center animate-pulse"
          onMouseEnter={handleDiceHover}
          onMouseLeave={() => setIsHovering(false)}
        >
          <DiceIcon 
            className={`w-5 h-5 cursor-pointer group-hover:text-orange-300 transition-colors ${
              isHovering ? 'animate-dice-roll' : ''
            }`}
          />
        </div>
        <span className="text-xs text-muted-foreground">Auto Roll</span>
      </div>

      {/* Bell Notification */}
      <div className="flex flex-col items-center gap-2">
        <div className="relative">
          <Bell
            className={`w-5 h-5 cursor-pointer group-hover:text-orange-300 transition-colors ${
              isRinging ? 'animate-[shake_0.5s_ease-in-out]' : ''
            }`}
            onClick={() => {
              setIsRinging(true);
              setTimeout(() => setIsRinging(false), 500);
            }}
          />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full" />
        </div>
        <span className="text-xs text-muted-foreground">Click Shake</span>
      </div>

      {/* Heart Like */}
      <div className="flex flex-col items-center gap-2">
        <Heart
          className={`w-5 h-5 cursor-pointer group-hover:text-orange-300 transition-all ${
            isLiked ? 'fill-orange-500 text-orange-500 animate-[bounce_0.5s_ease-in-out]' : 'hover:text-orange-300'
          }`}
          onClick={() => setIsLiked(!isLiked)}
        />
        <span className="text-xs text-muted-foreground">Click Fill</span>
      </div>

      {/* Refresh Spin */}
      <div className="flex flex-col items-center gap-2">
        <RefreshCw
          className={`w-5 h-5 cursor-pointer group-hover:text-orange-300 transition-colors ${
            isSpinning ? 'animate-[spin_1s_linear]' : ''
          }`}
          onClick={() => {
            setIsSpinning(true);
            setTimeout(() => setIsSpinning(false), 1000);
          }}
        />
        <span className="text-xs text-muted-foreground">Click Spin</span>
      </div>

      {/* Pulse Button */}
      <div className="flex flex-col items-center gap-2">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-orange-500/30 animate-[pulse-ring_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
          <Zap className="w-5 h-5 cursor-pointer hover:text-orange-300 transition-colors relative" />
        </div>
        <span className="text-xs text-muted-foreground">Pulse Ring</span>
      </div>

      {/* Send Button */}
      <div className="flex flex-col items-center gap-2">
        <Send 
          className="w-5 h-5 cursor-pointer group-hover:text-orange-300 transition-all hover:-translate-y-1 hover:translate-x-1"
        />
        <span className="text-xs text-muted-foreground">Hover Slide</span>
      </div>

      {/* Upload Button */}
      <div className="flex flex-col items-center gap-2">
        <Upload 
          className="w-5 h-5 cursor-pointer group-hover:text-orange-300 transition-all hover:translate-y-[-4px]"
        />
        <span className="text-xs text-muted-foreground">Upload</span>
      </div>

      {/* Download Button */}
      <div className="flex flex-col items-center gap-2">
        <Download 
          className="w-5 h-5 cursor-pointer group-hover:text-orange-300 transition-all hover:translate-y-[4px]"
        />
        <span className="text-xs text-muted-foreground">Download</span>
      </div>

      {/* Login Button */}
      <div className="flex flex-col items-center gap-2">
        <LogIn 
          className="w-5 h-5 cursor-pointer group-hover:text-orange-300 transition-all hover:translate-x-[4px]"
        />
        <span className="text-xs text-muted-foreground">Login</span>
      </div>

      {/* Logout Button */}
      <div className="flex flex-col items-center gap-2">
        <LogOut 
          className="w-5 h-5 cursor-pointer group-hover:text-orange-300 transition-all hover:translate-x-[-4px]"
        />
        <span className="text-xs text-muted-foreground">Logout</span>
      </div>

      {/* Loading Button */}
      <div className="flex flex-col items-center gap-2">
        {isLoading ? (
          <Loader2 
            className="w-5 h-5 cursor-pointer group-hover:text-orange-300 animate-spin"
            onClick={() => setIsLoading(false)}
          />
        ) : (
          <ArrowRight 
            className="w-5 h-5 cursor-pointer group-hover:text-orange-300"
            onClick={() => setIsLoading(true)}
          />
        )}
        <span className="text-xs text-muted-foreground">Loading</span>
      </div>

      {/* Success Button */}
      <div className="flex flex-col items-center gap-2">
        <div 
          className="relative"
          onClick={() => {
            setIsSuccess(true);
            setTimeout(() => setIsSuccess(false), 1500);
          }}
        >
          <Check 
            className={`w-5 h-5 cursor-pointer group-hover:text-orange-300 transition-all absolute inset-0 ${
              isSuccess ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
          />
          <ArrowRight 
            className={`w-5 h-5 cursor-pointer group-hover:text-orange-300 transition-all ${
              isSuccess ? 'opacity-0 scale-50' : 'opacity-100 scale-100'
            }`}
          />
        </div>
        <span className="text-xs text-muted-foreground">Success</span>
      </div>

      {/* Ripple Effect Button */}
      <div className="flex flex-col items-center gap-2">
        <div 
          className="relative"
          onClick={() => {
            setIsRippling(true);
            setTimeout(() => setIsRippling(false), 600);
          }}
        >
          <Star className="w-5 h-5 cursor-pointer group-hover:text-orange-300" />
          {isRippling && (
            <div className="absolute inset-0 bg-orange-300/20 rounded-full animate-[ripple_0.6s_ease-out]" />
          )}
        </div>
        <span className="text-xs text-muted-foreground">Ripple</span>
      </div>

      {/* Floating Button */}
      <div className="flex flex-col items-center gap-2">
        <Rocket 
          className={`w-5 h-5 cursor-pointer group-hover:text-orange-300 transition-all ${
            isFloating ? 'animate-[float_2s_ease-in-out_infinite]' : ''
          }`}
          onMouseEnter={() => setIsFloating(true)}
          onMouseLeave={() => setIsFloating(false)}
        />
        <span className="text-xs text-muted-foreground">Float</span>
      </div>

      {/* Glowing Button */}
      <div className="flex flex-col items-center gap-2">
        <Crown 
          className={`w-5 h-5 cursor-pointer group-hover:text-orange-300 transition-all ${
            isGlowing ? 'animate-[glowPulse_1.5s_ease-in-out_infinite]' : ''
          }`}
          onMouseEnter={() => setIsGlowing(true)}
          onMouseLeave={() => setIsGlowing(false)}
        />
        <span className="text-xs text-muted-foreground">Glow</span>
      </div>

      {/* 3D Rotate Button */}
      <div className="flex flex-col items-center gap-2">
        <Shield 
          className={`w-5 h-5 cursor-pointer group-hover:text-orange-300 transition-all ${
            isRotating ? 'animate-[rotate3D_1s_linear]' : ''
          }`}
          onClick={() => {
            setIsRotating(true);
            setTimeout(() => setIsRotating(false), 1000);
          }}
        />
        <span className="text-xs text-muted-foreground">3D Rotate</span>
      </div>

      {/* Achievement Button */}
      <div className="flex flex-col items-center gap-2">
        <div className="relative">
          <Award 
            className="w-5 h-5 cursor-pointer group-hover:text-orange-300 transition-all hover:scale-110"
          />
          <div className="absolute -inset-1 bg-orange-300/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
        </div>
        <span className="text-xs text-muted-foreground">Achievement</span>
      </div>

      {/* Shake Effect Button */}
      <div className="flex flex-col items-center gap-2">
        <div className="relative">
          <Bell 
            className={`w-5 h-5 cursor-pointer group-hover:text-orange-300 transition-all ${
              isShaking ? 'animate-[shake_0.5s_cubic-bezier(.36,.07,.19,.97)_both]' : ''
            }`}
            onClick={() => {
              setIsShaking(true);
              setTimeout(() => setIsShaking(false), 500);
            }}
          />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full" />
        </div>
        <span className="text-xs text-muted-foreground">Shake Alert</span>
      </div>

      {/* Expand Effect Button */}
      <div className="flex flex-col items-center gap-2">
        <div 
          className="relative overflow-hidden rounded-full"
          onMouseEnter={() => setIsExpanding(true)}
          onMouseLeave={() => setIsExpanding(false)}
        >
          <Star 
            className={`w-5 h-5 cursor-pointer group-hover:text-orange-300 transition-all ${
              isExpanding ? 'scale-150 rotate-180' : ''
            }`}
          />
          {isExpanding && (
            <div className="absolute inset-0 bg-orange-300/10 animate-[ping_1s_cubic-bezier(0,0,.2,1)_infinite]" />
          )}
        </div>
        <span className="text-xs text-muted-foreground">Expand</span>
      </div>

      {/* Wave Effect Button */}
      <div className="flex flex-col items-center gap-2">
        <div 
          className="relative"
          onMouseEnter={() => setIsWaving(true)}
          onMouseLeave={() => setIsWaving(false)}
        >
          <Send 
            className={`w-5 h-5 cursor-pointer group-hover:text-orange-300 transition-all ${
              isWaving ? 'animate-[wave_1.5s_ease-in-out_infinite]' : ''
            }`}
          />
        </div>
        <span className="text-xs text-muted-foreground">Wave</span>
      </div>
    </div>
  );
}