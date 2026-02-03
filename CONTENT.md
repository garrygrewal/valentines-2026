# Content Customization Guide

This document provides a comprehensive checklist and guide for customizing your Valentine's Day website. Follow this guide to make it truly yours!

---

## 📝 Required Customizations

These are **essential** changes you must make before deploying.

### 1. Names (Required) ⭐
**Location:** `index.html` (lines 19-20)

Find these two spans:
```html
<span id="recipient-name" class="editable-recepient-name">Manveer</span>
<span id="my-name" class="editable-my-name">Garry</span>
```

**Replace with:**
- `Manveer` → Your valentine's name
- `Garry` → Your name

**Example:**
```html
<span id="recipient-name" class="editable-recepient-name">Sarah</span>
<span id="my-name" class="editable-my-name">Alex</span>
```

---

### 2. Couple Photo (Required) ⭐
**Location:** `images/couple-photo.png`

**Steps:**
1. Choose a photo of you and your valentine
2. Save it as `couple-photo.png`
3. Place it in the `images/` folder (replace the existing one)

**Specifications:**
- Format: PNG, JPG, or WEBP
- Recommended size: 400x400px or larger (square)
- File size: Under 500KB (compress if needed)
- The photo will appear in a circle when "Yes" is clicked

**Pro tip:** Use a photo editing tool to crop to square before uploading.

---

### 3. Footer Credit (Required) ⭐
**Location:** `index.html` (line 46)

```html
<p>Made with 💛 by G</p>
```

**Replace:**
- `G` → Your initial or full name

**Example:**
```html
<p>Made with 💛 by Alex</p>
```

---

## 🎨 Highly Recommended Customizations

These add personality and make the site feel unique to your relationship.

### 4. Helper Messages (Highly Recommended) 💕
**Location:** `script.js` (lines 27-33)

These are the playful messages that appear when your valentine tries to click "No."

**Current messages:**
```javascript
const helperMessages = [
    "Baby please......",
    "Pretty pretty pretty please!",
    "Click yes and I'll buy you more Callico Critters!",
    "Please, I need that pot roast dinner!",
    "I'll watch that one hockey show with you if you click Yes!"
];
```

**Customize with:**
- Inside jokes from your relationship
- Specific promises or bribes 😄
- Things they love that you'll do
- Playful begging

**Tips:**
- Keep them short (under 80 characters)
- Add 3-7 messages (more = more variety)
- Make the last one the most desperate/funny
- Use emojis sparingly

**Example:**
```javascript
const helperMessages = [
    "But I already told everyone you said yes! 😅",
    "I'll do the dishes for a month!",
    "Please? I even learned how to cook your favorite meal!",
    "Come on, you know you want to 🥺",
    "I promise I'll watch all the rom-coms you want!"
];
```

---

### 5. Success Message (Highly Recommended) 💕
**Location:** `script.js` (line 185)

This is what appears in the card after "Yes" is clicked.

**Current message:**
```javascript
message.innerHTML = '<h1>See you on February 14th 🫡</h1>';
```

**Customize to:**
- Your actual date plans
- A sweet message
- Next steps

**Examples:**
```javascript
// With specific date/time
message.innerHTML = '<h1>See you February 14th at 7pm! 💕</h1>';

// With activity
message.innerHTML = '<h1>Can\'t wait for our date! 🌹</h1>';

// Simple and sweet
message.innerHTML = '<h1>You made my day! 💖</h1>';
```

---

## 🖼️ Optional Customizations

These are nice-to-have personalization options.

### 6. Decoration Images (Optional)
**Location:** `images/` folder

**Current decorations:**
- `kuromi-head.png` & `kuromi-head-2.png` (top-right corner)
- `pug-head.png` & `pug-head-2.png` (bottom-left corner)

**To replace:**
1. Create or find images (80x80px recommended, PNG with transparency)
2. Keep the same filenames
3. The "-2" versions appear after "Yes" is clicked (make them happier/celebratory!)

**Ideas:**
- Your favorite characters
- Your pets
- Inside joke icons
- Hobby-related icons

**Specifications:**
- Format: PNG (with transparent background preferred)
- Size: 80x80px to 200x200px
- File size: Under 100KB each

---

### 7. Floating Emoji Set (Optional)
**Location:** `script.js` (line 265)

**Current emojis:**
```javascript
const emojis = ['❤️‍🔥', '❤️', '😍', '💘', '💖', '💝', '🫶', '💕', '🌹'];
```

**Customize to:**
- Add more love emojis
- Add inside-joke emojis
- Theme around hobbies

**Example:**
```javascript
// Add more variety
const emojis = ['❤️‍🔥', '❤️', '😍', '💘', '💖', '💝', '🫶', '💕', '🌹', '💗', '💓', '💞'];

// Hobby-themed (cooking together)
const emojis = ['❤️', '💕', '🍕', '🍰', '🍝', '👨‍🍳', '👩‍🍳'];
```

---

### 8. Background Colors (Optional)
**Location:** `styles.css` (lines 37-44)

The mesh gradient background can be customized.

**Current gradient:**
```css
background: 
    radial-gradient(at 27% 37%, hsla(330, 100%, 92%, 1) 0px, transparent 50%),
    radial-gradient(at 97% 21%, hsla(280, 78%, 90%, 1) 0px, transparent 50%),
    /* ...more gradients... */
```

**To change colors:**
- Adjust the hue values (first number in `hsla()`)
- Keep saturation (second number) between 70-100%
- Keep lightness (third number) between 85-95%

**Example color themes:**
- **Warm sunset:** Change hues to 0-30 (reds/oranges)
- **Ocean breeze:** Change hues to 180-220 (blues/teals)
- **Spring garden:** Change hues to 100-140 (greens/yellows)

---

### 9. Primary/Secondary Colors (Optional)
**Location:** `styles.css` (lines 14-15)

**Current colors:**
```css
--primary-color: #ff4d6d;        /* Pink/red */
--secondary-color: #ff758f;      /* Light pink */
```

**Popular alternatives:**
```css
/* Classic Valentine Red */
--primary-color: #e63946;
--secondary-color: #f77f88;

/* Purple Romance */
--primary-color: #9d4edd;
--secondary-color: #c77dff;

/* Soft Peach */
--primary-color: #ff9b85;
--secondary-color: #ffb3a7;

/* Bold Magenta */
--primary-color: #d90368;
--secondary-color: #ff6b9d;
```

---

### 10. Card Width (Optional)
**Location:** `styles.css` (line 133)

**Current width:**
```css
max-width: 520px;
```

**Customize:**
- Wider card: `max-width: 600px;`
- Narrower card: `max-width: 420px;`

---

### 11. Page Title (Optional)
**Location:** `index.html` (line 6)

**Current title:**
```html
<title>Be My Valentine? 💕</title>
```

**Customize to:**
- Your valentine's name
- A secret message
- Inside joke

**Examples:**
```html
<title>Sarah, Be My Valentine? 💕</title>
<title>A Special Question for You 💖</title>
<title>Will You Say Yes? 💕</title>
```

---

## 🎭 Advanced Customizations

For those comfortable with code.

### 12. Animation Speeds
**Location:** `styles.css` (various lines)

**Adjust these values:**
```css
/* Heartbeat animation speed (line 289) */
animation: buttonPulsate 1.5s ease-in-out infinite;
/* Try: 1s for faster, 2s for slower */

/* Floating emoji speed (line 267) */
const duration = 8 + Math.random() * 7;
/* Try: 5 + Math.random() * 5; for faster */

/* Kuromi/Pug rotation speed (line 207, 345) */
animation: ... kuromiRotate 3s ease-in-out 1s infinite;
/* Try: 2s for faster, 4s for slower */
```

---

### 13. "No" Button Shrinking
**Location:** `script.js` (line 83)

**Current shrink rate:**
```javascript
buttonScale *= 0.9;  // Shrinks to 90% each time
```

**Customize:**
- More aggressive: `buttonScale *= 0.8;` (80% each time)
- Less aggressive: `buttonScale *= 0.95;` (95% each time)

**Minimum size (line 86):**
```javascript
if (buttonScale < 0.3) {
    buttonScale = 0.3;  // Stops at 30%
}
```

---

### 14. Confetti Settings
**Location:** `script.js` (lines 221-249)

**Customize:**
- Particle count
- Spread angle
- Origin position
- Colors

**Example:**
```javascript
// More confetti
confetti({
    particleCount: 200,  // Was 100
    spread: 90,          // Was 70
    colors: ['#ff4d6d', '#ff758f', '#ffa6c1', '#ffd1e3', '#ffffff']
});
```

---

## ✅ Pre-Launch Checklist

Before deploying or sharing:

### Content
- [ ] Names updated (not "Manveer" and "Garry")
- [ ] Couple photo added to `images/` folder
- [ ] Footer updated with your initial/name
- [ ] Helper messages customized
- [ ] Success message customized

### Optional Personalization
- [ ] Decoration images replaced (if desired)
- [ ] Floating emojis customized (if desired)
- [ ] Colors adjusted (if desired)
- [ ] Page title updated (if desired)

### Testing
- [ ] Opened `index.html` in browser
- [ ] Names display correctly
- [ ] "Yes" button has heartbeat animation
- [ ] "No" button dodges when hovered/clicked
- [ ] Different messages appear with each "No" attempt
- [ ] Clicking "Yes" triggers confetti
- [ ] Couple photo appears after "Yes"
- [ ] Success message displays correctly
- [ ] Tested on mobile device
- [ ] All images load correctly

### Browser Testing
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (especially if valentine uses iPhone)

---

## 💡 Creative Ideas

### Message Ideas
- Reference specific memories
- Quote your favorite song lyrics
- Inside jokes only you two understand
- Funny bribes ("I'll finally watch that show!")
- Sweet promises ("Forever and always")

### Decoration Ideas
- Use emojis representing shared hobbies
- Add photos of pets
- Use favorite movie/TV characters
- Gaming avatars
- Food you both love

### Color Scheme Ideas
- Match your valentine's favorite color
- Use colors from your first date location
- Seasonal colors (spring pastels, autumn warmth)
- Match your couple aesthetic

---

## 🆘 Need Help?

- **Can't find a file?** All files should be in the root folder except images
- **Code not working?** Check for typos in filenames and quotes
- **Images not appearing?** Verify file names match exactly (case-sensitive)
- **Want to undo changes?** The original code is in the git history

For deployment questions, see **[DEPLOY.md](./DEPLOY.md)**.
For technical details, see **[README.md](./README.md)**.

---

**Pro tip:** Make a backup of your files before making major changes. Copy the whole folder to `valentines-test-backup/` just in case!

Good luck, and I hope they say YES! 💕
