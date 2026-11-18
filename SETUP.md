# 🎂 Birthday Surprise Website — Setup Guide

This guide explains how to customize every part of the birthday website.

---

## Quick Start

1. Open `index.html` in your browser to preview the site.
2. Edit `script.js` to customize all content (see below).
3. Add your photos to `assets/images/`.
4. Optionally add background music to `assets/music/`.

---

## 1. Set the Secret Nickname (Password)

In `script.js`, find the `CONFIG` object at the top and change:

```js
nickname: "CHANGE_ME",  // ← Replace with your secret nickname
```

This is **case-insensitive**. If you set it to `"Sunshine"`, she can type `sunshine`, `SUNSHINE`, etc.

---

## 2. Set Her Name

```js
name: "Birthday Girl",  // ← Replace with her actual name
```

This name appears on the friendship certificate and can be used in messages.

---

## 3. Set Your Name

```js
yourName: "Your Best Friend",  // ← Replace with your name
```

Appears in the letter sign-off and certificate.

---

## 4. Add Surprise Photos (Page 3 — Floating Photos)

Place her photos in `assets/images/` and list them:

```js
surprisePhotos: [
    "assets/images/surprise1.jpg",
    "assets/images/surprise2.jpg",
    "assets/images/surprise3.jpg",
    // Add 6-10 photos for the best effect
],
```

These photos will float across the screen in Polaroid frames.

---

## 5. Add Memory Gallery Photos (Page 4)

Each memory needs a photo, caption, and optional date:

```js
memories: [
    {
        photo: "assets/images/memory1.jpg",
        caption: "The day we first met 💗",
        date: "January 2023"
    },
    {
        photo: "assets/images/memory2.jpg",
        caption: "Our first road trip!",
        date: "March 2023"
    },
    // Add as many as you want
],
```

---

## 6. Write the Personal Letter (Page 5)

Replace the placeholder text in `letterContent`:

```js
letterContent: `Dear [Name],

This is your personal letter. Write from the heart.
Use multiple lines to make it longer and more emotional.

Every word should be genuine and meaningful. 💗`,
```

Use backticks (\`) for multi-line text. Use `\n` for extra line breaks if needed.

---

## 7. Set the Final Birthday Message (Page 7)

```js
finalMessage: `Happy Birthday to the most amazing person!
Your custom final message goes here. 🎉`,
```

---

## 8. Customize "Reasons You're Special" Cards

```js
reasonsSpecial: [
    { emoji: "🌟", text: "Your smile lights up every room" },
    { emoji: "💗", text: "You have the most beautiful heart" },
    // Add more sweet compliments
],
```

Each card shows the emoji first, and flips to reveal the text when clicked.

---

## 9. Add Background Music

1. Place an MP3 file in `assets/music/`.
2. The file should be named `birthday-music.mp3`, or update the filename in `index.html`:

```html
<source src="assets/music/your-song.mp3" type="audio/mpeg">
```

Recommended: A soft, happy, instrumental track. Keep file size under 5MB for fast loading.

---

## 10. Reading Her Birthday Wishes

The three wishes she submits are saved in multiple ways:

### Method A: Browser Console
Open the browser console (F12 → Console tab) and type:
```js
viewWishes()     // View all wishes in the console
downloadWishes() // Download as a .txt file
```

### Method B: Admin URL
Add `?admin` to the URL to show a download button:
```
https://your-site.com/index.html?admin
```

### Method C: Backend API (Optional)
To receive wishes on your own device, set up a simple backend and configure:
```js
wishAPI: "https://your-api-endpoint.com/wishes",
```

The site will POST a JSON object with `wish1`, `wish2`, `wish3`, and `timestamp`.

**Simple backend options:**
- **Google Form + Sheet**: Create a Google Form with 3 fields and use the form's prefilled URL
- **Formspree.io**: Free form endpoint (sign up and use their URL)
- **Your own server**: Any endpoint that accepts POST with JSON body

---

## 11. Customize Sweet Messages (Surprise Button)

The floating 🎁 button shows random sweet messages:

```js
sweetMessages: [
    "You're the best person on this planet 🌍💗",
    "Add your own sweet messages here ✨",
    // Add as many as you like
],
```

---

## 12. Customize the Hint Text

The nickname/password page shows a hint. To change it, edit this line in `index.html`:

```html
<p class="hint-text">Hint: It's the cute name I always call you 😉</p>
```

---

## 13. Change Colors

Edit the CSS variables at the top of `style.css`:

```css
:root {
    --pink: #FFB6C1;
    --deep-pink: #FF69B4;
    --lavender: #E6E6FA;
    --cream: #FFF8E7;
    --peach: #FFDAB9;
    /* etc. */
}
```

---

## 14. Deploy the Website

### Option A: GitHub Pages (Free)
1. Push all files to a GitHub repository.
2. Go to Settings → Pages → Deploy from main branch.
3. Share the URL with her!

### Option B: Netlify (Free)
1. Drag and drop the entire folder to [netlify.com/drop](https://app.netlify.com/drop).
2. Get a shareable link instantly.

### Option C: Vercel (Free)
1. Push to GitHub and import the repo at [vercel.com](https://vercel.com).

### Option D: Share Locally
1. Zip the entire folder.
2. Send it to her and ask her to open `index.html` in a browser.

---

## File Structure

```
birthday/
├── index.html          ← Main HTML file
├── style.css           ← All styles
├── script.js           ← All logic + CONFIG
├── SETUP.md            ← This guide
├── assets/
│   ├── images/         ← All photos go here
│   └── music/          ← Background music goes here
```

---

## Tips

- **Photo sizes**: Resize photos to ~800px wide for faster loading.
- **Photo format**: Use `.jpg` or `.webp` for best compression.
- **Testing**: Test on both desktop and phone before sharing.
- **Surprise delivery**: Send her the link with a sweet message!

---

Made with 💗

