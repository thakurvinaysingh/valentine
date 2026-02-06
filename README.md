# 💖 Valentine's Day Mini-Game Website

A beautiful, interactive Valentine's Day proposal website with engaging mini-games, romantic animations, and customizable content. Built with React, Vite, TypeScript, and Framer Motion.

## Features

✨ **Fully Interactive**
- Welcome screen with personalized greeting
- Level 1: Puzzle game 🧩
- Level 2: Runner game 🏃
- Final proposal question with playful NO button 💕
- Celebration confetti effect 🎉

💕 **Romantic Sections**
- Auto-rotating shayari display with typing animation
- Why You Are Special cards with smooth animations
- Memory gallery with placeholder images
- Victory page with congratulations message

🎨 **Design Features**
- White and blush pink color palette
- Smooth animations and transitions
- Responsive mobile-first design
- Beautiful gradient backgrounds
- Floating hearts and decorative elements

⚙️ **Easy Customization**
- Change sender/receiver names via URL parameters
- Edit all text messages in constants file
- Add your own photos to the memory gallery
- Customize shayari, special qualities, and messages

## Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The website will open at `http://localhost:5173/`

### Build

```bash
npm run build
```

## How to Use

### 1. Basic Access

Visit the website with personalized names:

```
https://your-domain.com/?sender=YourName&receiver=LoverName
```

**Example:**
```
https://yourdomain.com/?sender=Anmol&receiver=Sarah
```

If no URL parameters are provided, the site will use default names: "Someone Special" and "My Love"

### 2. Customizing Text and Messages

Edit `/src/constants.ts` to customize:

- **MESSAGES**: Welcome message, game success messages, final question, compliments
- **SHAYARI**: Array of romantic shayari (poetry)
- **WHY_SPECIAL**: List of special qualities about your loved one
- **MEMORY_PLACEHOLDERS**: Titles for memory gallery images
- **GAME_CONFIG**: Puzzle grid size, runner game difficulty

### 3. Adding Your Own Photos

**Option A: Replace Placeholder URLs**

1. Upload your images to a free service like Pexels, Unsplash, or Imgur
2. Copy the image URLs
3. Edit `/src/constants.ts` and replace the `placeholder` URLs in `MEMORY_PLACEHOLDERS`:

```typescript
export const MEMORY_PLACEHOLDERS = [
  {
    id: 1,
    title: 'Our First Meeting',
    placeholder: 'YOUR_IMAGE_URL_HERE'
  },
  // ... more photos
];
```

**Option B: Use Local Images**

1. Add your images to `src/assets/` folder
2. Import them at the top of `MemoriesGallery.tsx`
3. Update the `placeholder` property to use the imported image

### 4. Customizing Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      rose: {
        50: '#fdf2f8',
        500: '#f91880',
        900: '#831843',
        // ... other shades
      }
    }
  }
}
```

Or modify Tailwind classes directly in components (change `rose-500`, `rose-900`, etc. to your preferred colors).

### 5. Modifying Game Difficulty

Edit `/src/constants.ts` in `GAME_CONFIG`:

```typescript
export const GAME_CONFIG = {
  puzzle: {
    gridSize: 3,  // Increase for harder puzzle (4x4, 5x5, etc.)
    difficulty: 'easy',
  },
  runner: {
    targetDistance: 100,  // Increase for longer game
    jumpHeight: 100,
    gameSpeed: 5,  // Increase for faster obstacles
  },
};
```

## File Structure

```
src/
├── components/
│   ├── WelcomeScreen.tsx       # Landing page
│   ├── PuzzleGame.tsx          # Level 1 game
│   ├── RunnerGame.tsx          # Level 2 game
│   ├── FinalQuestion.tsx       # Proposal question
│   ├── VictoryPage.tsx         # Celebration page
│   ├── ShayariSection.tsx      # Poetry section
│   ├── WhySpecialSection.tsx   # Special qualities cards
│   ├── MemoriesGallery.tsx     # Photo gallery
│   └── index.ts                # Component exports
├── hooks/
│   └── useConfetti.ts          # Confetti animation hook
├── utils/
│   └── urlParams.ts            # URL parameter handling
├── constants.ts                # Customizable content
├── App.tsx                     # Main game flow
├── index.css                   # Global styles
└── main.tsx                    # Entry point
```

## Deployment

### GitHub Pages

1. Add your repository name to `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/repository-name/',
  plugins: [react()],
});
```

2. Build and deploy:

```bash
npm run build
git add .
git commit -m "Build Valentine game"
git push origin main
```

3. In GitHub Settings → Pages, select `gh-pages` branch

### Other Hosting (Netlify, Vercel, etc.)

1. Run `npm run build`
2. Deploy the `dist/` folder to your hosting service
3. Share the link with your loved one!

## Customization Examples

### Example 1: Change Puzzle to 4x4

```typescript
// In constants.ts
export const GAME_CONFIG = {
  puzzle: {
    gridSize: 4,  // Changed from 3
  },
  // ...
};
```

### Example 2: Add More Shayari

```typescript
// In constants.ts
export const SHAYARI = [
  'Your love is my inspiration...',
  'In your eyes, I find my home...',
  // Add more lines
];
```

### Example 3: Add Special Qualities

```typescript
// In constants.ts
export const WHY_SPECIAL = [
  {
    icon: 'Heart',
    text: 'Your smile melts my heart 😊',
    description: 'Every smile makes my day better',
  },
  // Add more qualities
];
```

## Troubleshooting

**Q: URL parameters aren't working**
A: Make sure they're properly formatted: `?sender=Name1&receiver=Name2`

**Q: Photos aren't loading**
A: Check the image URL is accessible. Try using images from Pexels, Unsplash, or Imgur.

**Q: Games are too easy/hard**
A: Adjust `GAME_CONFIG` in `constants.ts`

**Q: Confetti isn't working**
A: This requires internet to load the confetti library. Check your internet connection.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Technologies Used

- **React 18**: UI framework
- **Vite**: Build tool and dev server
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **Framer Motion**: Animations
- **Lucide React**: Icons
- **Canvas API**: Runner game graphics
- **Canvas Confetti**: Celebration effects

## License

Free to use and modify for personal projects.

## Credits

Created with ❤️ for Valentine's Day proposals

---

**Enjoy creating magical Valentine's moments!** 💕
