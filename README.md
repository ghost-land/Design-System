# Ghost Land Design System

## 🎨 Color Palette

### Primary Colors
- **Orange Theme**
  ```css
  /* Primary */
  from-orange-500 to-orange-600
  /* Hover */
  from-orange-600 to-orange-700
  /* Accent Text */
  text-orange-300, text-orange-400
  /* Transparencies */
  orange-500/20, orange-500/10, orange-500/5
  ```

### Background
- **Dark Gradient Base**
  ```css
  background: 
    radial-gradient(circle at 0% 0%, rgba(255, 97, 0, 0.12) 0%, transparent 50%),
    radial-gradient(circle at 100% 0%, rgba(255, 97, 0, 0.12) 0%, transparent 50%),
    linear-gradient(180deg, #111827 0%, #1e1b18 100%);
  ```

### Text Colors
- Primary: `text-white/90`
- Secondary: `text-white/70`
- Tertiary: `text-white/60`
- Disabled: `text-white/40`

## 🧱 Components

### Glass Card
```css
.card-glass {
  @apply bg-gradient-to-b from-white/[0.08] to-white/[0.04] 
         backdrop-blur-md 
         rounded-2xl 
         transition-all duration-300 
         shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_4px_20px_rgba(0,0,0,0.1)];
}
```

### Primary Button
```css
.btn-orange {
  @apply bg-gradient-to-r from-orange-500 to-orange-600 
         hover:from-orange-600 hover:to-orange-700 
         text-white font-medium px-6 py-2.5 rounded-lg 
         transition-all duration-300
         focus:ring-2 focus:ring-orange-500/50 focus:outline-none;
}
```

## 📝 Typography

### Scale
- H1: `text-2xl sm:text-3xl font-medium`
- H2: `text-xl sm:text-2xl font-medium`
- Body: `text-base sm:text-lg`
- Small: `text-sm`

### Font Weights
- Regular: `font-normal`
- Medium: `font-medium`
- Bold: `font-bold`

## 🎭 Animations

### Transitions
- Standard: `transition-all duration-300`
- Smooth: `transition-all duration-500`

### Hover Effects
- Scale: `hover:scale-105`, `hover:scale-110`
- Group: Use `group` and `group-hover` for nested animations

## 🎯 Visual Effects

### Blur
- Medium: `backdrop-blur-md`
- Large: `backdrop-blur-xl`

### Shadows
```css
shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_4px_20px_rgba(0,0,0,0.1)]
```

### Borders
- Light: `border border-white/[0.03]`
- Medium: `border border-white/[0.05]`
- Heavy: `border border-white/[0.1]`

### Gradients
- Horizontal: `bg-gradient-to-r`
- Vertical: `bg-gradient-to-b`

## 📐 Layout

### Containers
- Max Width: `max-w-6xl mx-auto`
- Padding: `p-4 md:p-8`

### Grid System
```css
grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
```

### Spacing
- Small: `gap-4`
- Medium: `gap-6`
- Large: `gap-8`

## 📱 Responsive Design

### Breakpoints
- Small (sm): 640px
- Medium (md): 768px
- Large (lg): 1024px
- Extra Large (xl): 1280px

## ♿ Accessibility

### Text Selection
```css
selection:bg-orange-500/20 selection:text-orange-200
```

### Focus States
```css
focus:ring-2 focus:ring-orange-500/50 focus:outline-none
```

### Color Contrast
- Maintain WCAG 2.1 AA standards
- Use opacity for text variations

## 🎨 Icons

### Lucide React Icons
- Small: `w-4 h-4`
- Medium: `w-5 h-5`
- Large: `w-6 h-6`

### Icon Colors
- Primary: `text-orange-300`
- Secondary: `text-white/70`
- Hover: `group-hover:text-orange-200`

## 🖼️ Images

### Aspect Ratios
- Square: `aspect-square`
- Video: `aspect-video`
- Custom: `aspect-[4/3]`

### Loading
```html
loading="lazy"
decoding="async"
```

## 🎨 UI Patterns

### Cards
- Glass effect with hover states
- Consistent padding and rounded corners
- Optional border highlights

### Buttons
- Clear hover states
- Loading states when applicable
- Disabled states with reduced opacity

### Forms
- Consistent input styling
- Clear focus states
- Error and success states

### Modals
- Backdrop blur
- Smooth enter/exit animations
- Mobile-responsive layouts

## 🔧 Best Practices

### Performance
- Use `will-change` sparingly
- Optimize animations for 60fps
- Lazy load images and components

### Accessibility
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support

### Responsive Design
- Mobile-first approach
- Fluid typography
- Flexible layouts

### Dark Mode
- Already dark-themed by default
- Use opacity for variations
- Maintain contrast ratios
