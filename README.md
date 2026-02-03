# Be My Valentine? 💕

A beautiful, interactive, and responsive single-page Valentine's Day website built with plain HTML, CSS, and vanilla JavaScript. Features playful animations, custom decorations, and a fun "dodging No button" that makes it harder to say no!

## ✨ Features

### Interactive Elements
- **Heartbeat Animation**: "Yes" button pulses like a heartbeat to encourage clicking
- **Dodging "No" Button**: The "No" button runs away when hovered/clicked and gets progressively smaller
- **Cycling Messages**: Shows different pleading messages each time "No" is attempted
- **Confetti Celebration**: Celebratory confetti burst when "Yes" is clicked
- **Photo Reveal**: Displays your couple photo upon accepting

### Visual Design
- **Mesh Gradient Background**: Beautiful soft gradient with pink, lavender, and blue tones
- **Floating Emojis**: Love-themed emojis continuously float up the screen
- **Custom Decorations**: Cute character images (Kuromi & Pug) in card corners with subtle animations
- **Custom Fonts**: Dancing Script for romantic text, Lexend for clean readability
- **Responsive Design**: Looks great on desktop, tablet, and mobile devices

### Accessibility
- **Semantic HTML**: Proper structure for screen readers
- **Focus Styles**: Clear keyboard navigation indicators
- **Reduced Motion Support**: Respects user preferences for animations
- **ARIA Announcements**: Screen reader friendly success messages

### Technical
- **Zero Dependencies**: No npm, no bundlers—just pure web technologies
- **Easy Customization**: Simple placeholders for names, images, and messages
- **No Backend Required**: Completely client-side, works anywhere

## 🚀 Quick Start

### Option 1: Direct Opening (Easiest)
Simply double-click `index.html` to open it in your default browser. That's it!

### Option 2: Local Development Server (Recommended)
Using a local server provides a better development experience.

**Using Python (if installed):**
```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js (if installed):**
```bash
# Install http-server globally (one-time)
npm install -g http-server

# Run server
http-server -p 8000
```

**Using PHP (if installed):**
```bash
php -S localhost:8000
```

Then open your browser and navigate to:
```
http://localhost:8000
```

## 📁 Project Structure

```
valentines-test/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Interactive behavior and logic
├── images/             # Image assets folder
│   ├── couple-photo.png    # Your couple photo (appears on success)
│   ├── kuromi-head.png     # Top-right decoration
│   ├── kuromi-head-2.png   # Success state decoration
│   ├── pug-head.png        # Bottom-left decoration
│   └── pug-head-2.png      # Success state decoration
├── CONTENT.md          # Detailed customization guide
├── DEPLOY.md           # Deployment instructions
└── README.md           # This file
```

## 🎨 Customization

Before sharing with your valentine, you'll want to personalize several elements:

### 1. **Required: Update Names** (5 seconds)
Open `index.html` and find these two spans:
```html
<span id="recipient-name" class="editable-recepient-name">Manveer</span>
<span id="my-name" class="editable-my-name">Garry</span>
```
Replace with your names.

### 2. **Required: Add Your Couple Photo** (1 minute)
- Add your photo to the `images/` folder as `couple-photo.png`
- The photo will appear in a circle when "Yes" is clicked
- Recommended: Square image, at least 400x400px

### 3. **Optional: Replace Decoration Images** (5 minutes)
Want different corner decorations?
- Replace `kuromi-head.png` and `kuromi-head-2.png` (top-right corner)
- Replace `pug-head.png` and `pug-head-2.png` (bottom-left corner)
- The "-2" versions appear after "Yes" is clicked
- Recommended: PNG with transparent background, roughly square

### 4. **Optional: Customize Helper Messages** (2 minutes)
Edit the array in `script.js` (around line 27):
```javascript
const helperMessages = [
    "Baby please......",
    "Pretty pretty pretty please!",
    "Click yes and I'll buy you more Callico Critters!",
    "Please, I need that pot roast dinner!",
    "I'll watch that one hockey show with you if you click Yes!"
];
```
Add your own playful messages that show when "No" is hovered/clicked.

### 5. **Optional: Update Success Message** (1 minute)
Edit the success text in `script.js` (around line 185):
```javascript
message.innerHTML = '<h1>See you on February 14th 🫡</h1>';
```
Change to your preferred message.

### 6. **Optional: Customize Colors** (5 minutes)
Edit CSS variables in `styles.css` (lines 13-20) or the mesh gradient (lines 37-44).

For a complete customization guide with examples, see **[CONTENT.md](./CONTENT.md)**.

## 🌐 Deployment

Ready to go live? See **[DEPLOY.md](./DEPLOY.md)** for detailed instructions on deploying to:
- Your custom domain via FTP/cPanel
- GitHub Pages (free static hosting)
- Other static hosting platforms

## 🧪 Testing Checklist

### Before Sharing
- [ ] Names are updated (not "Manveer" and "Garry")
- [ ] Your couple photo is added to `images/` folder
- [ ] (Optional) Decoration images replaced
- [ ] (Optional) Helper messages customized
- [ ] Tested on desktop browser
- [ ] Tested on mobile device

### Features to Verify
- [ ] "Yes" button has heartbeat animation
- [ ] "No" button moves away when hovered (desktop) or tapped (mobile)
- [ ] "No" button gets smaller with each attempt
- [ ] Different messages appear below buttons when "No" is attempted
- [ ] Clicking "Yes" shows confetti
- [ ] Couple photo appears after "Yes" is clicked
- [ ] Success message displays correctly
- [ ] Kuromi and Pug decorations animate
- [ ] Floating emojis move up the screen
- [ ] Footer shows "Made with 💛 by G" (or update to your initial)

## 🎯 How It Works

### HTML (`index.html`)
- Semantic structure with accessible markup
- Editable name placeholders with ID attributes
- Image elements for decorations
- Button elements with proper ARIA labels

### CSS (`styles.css`)
- **Mesh Gradient Background**: Complex radial gradients for dreamy effect
- **Floating Emojis**: CSS animations with random positions
- **Heartbeat Animation**: Multi-keyframe animation mimicking lub-dub pattern
- **Responsive Design**: Mobile-first with media queries
- **Reduced Motion**: All animations respect user preferences

### JavaScript (`script.js`)
- **Dodging Logic**: Calculates safe viewport positions for "No" button
- **Progressive Shrinking**: Tracks scale factor for button size
- **Message Cycling**: Rotates through helper messages array
- **Confetti Trigger**: Three-burst confetti pattern
- **Image Swapping**: Changes decorations on success
- **Floating Emoji Creation**: Dynamically generates and removes emoji elements

## 📚 External Dependencies

- **Canvas Confetti**: Loaded via CDN from jsDelivr
  - URL: `https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js`
  - License: ISC
  - Used for celebratory confetti animation

- **Google Fonts**: Dancing Script & Lexend
  - URL: `https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Lexend:wght@300;400;500;600;700&display=swap`
  - License: Open Font License
  - Dancing Script for romantic headings, Lexend for body text

## 🔒 Privacy & Security

- ✅ No tracking scripts or analytics
- ✅ No external API calls (except fonts and confetti library)
- ✅ No data collection—completely client-side
- ✅ No cookies or local storage
- ✅ Safe to share with anyone

## 💡 Pro Tips

1. **Test the "No" button**: Try hovering/clicking it multiple times to see the dodging behavior and different messages

2. **Mobile testing**: The "No" button behavior works differently on mobile (tap to dodge vs. hover)

3. **Image optimization**: Compress your couple photo before adding it (aim for under 500KB)

4. **Personalize messages**: The helper messages are the most fun part—make them specific to your relationship!

5. **Footer credit**: Update the footer in `index.html` (line 46) with your initial or name

6. **Browser testing**: Test in multiple browsers, especially Safari if your valentine uses iOS

## 🐛 Troubleshooting

**"No" button goes off-screen:**
- This was fixed in the code, but if it happens, refresh the page
- The button should stay within viewport bounds

**Confetti doesn't work:**
- Check browser console for errors (F12 → Console tab)
- Ensure you have an internet connection (confetti library loads from CDN)
- Try using a local server instead of opening file directly

**Images don't appear:**
- Check that images are in the `images/` folder
- Verify filenames match exactly (case-sensitive)
- Check browser console for 404 errors

**Floating emojis not showing:**
- Check if `prefers-reduced-motion` is enabled in your OS settings
- The emojis respect this accessibility preference

**Decorations not animating:**
- Same as above—check motion preferences
- Try in a different browser

**Layout looks broken:**
- Ensure `styles.css` is in the same folder as `index.html`
- Try hard-refreshing the page (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for CSS loading errors

## 🎨 Customization Ideas

- Change floating emoji set to different symbols
- Adjust dodging speed by changing animation duration
- Make "No" button disappear completely after X attempts
- Add sound effects on button clicks
- Add more confetti bursts
- Change mesh gradient colors to match your favorite colors
- Add more decoration images in other corners
- Create a countdown timer to February 14th

## 📄 License

This is a personal project. Feel free to use, modify, and share as you like! No attribution required, but appreciated.

---

Made with 💛 for Valentine's Day 2026

**Next Steps:**
1. Check **[CONTENT.md](./CONTENT.md)** for detailed customization guide
2. Check **[DEPLOY.md](./DEPLOY.md)** for deployment instructions
3. Share with your valentine! 💕
