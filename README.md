# 💕 Adi's Birthday Website

A beautiful pink-themed birthday website created with love by Sheshav for Adi's birthday on October 9th.

## Features

- 🎂 Beautiful birthday greeting
- ⏰ Live relationship timer (counting since January 19, 2025 at 11:52 PM)
- 📸 Photo gallery for 20 special memories
- 💌 Personal love message
- 🌸 Pink theme with floating hearts and animations
- 📱 Fully responsive design
- 🎉 Special effects on October 9th (birthday)

## Setup Instructions

### Adding Your Photos

1. Add your photos to the `photos/` folder
2. Name them `photo1.jpg`, `photo2.jpg`, etc. (up to `photo20.jpg`)
3. Supported formats: JPG, PNG, GIF
4. Recommended size: 300x300px or larger (will be automatically resized)

### Hosting on GitHub Pages

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click Save
7. Your website will be available at: `https://yourusername.github.io/repositoryname`

### Local Testing

Open `index.html` in your web browser to test locally before uploading to GitHub.

## File Structure

```
├── index.html          # Main HTML file
├── style.css           # Styling and animations
├── script.js           # Timer functionality and interactions
├── photos/             # Folder for your photos
│   ├── photo1.jpg
│   ├── photo2.jpg
│   └── ... (up to photo20.jpg)
└── README.md           # This file
```

## Customization

### Changing the Relationship Date
Edit line 2 in `script.js`:
```javascript
const relationshipStart = new Date('2025-01-19T23:52:00');
```

### Changing Names
Edit the names in `index.html`:
- Replace "Adi" with her name
- Replace "Sheshav" with your name

### Changing Colors
Edit the color variables in `style.css` to customize the pink theme.

## Special Features

- **Birthday Detection**: Special confetti animation on October 9th
- **Responsive Design**: Works on all devices
- **Smooth Animations**: Floating hearts, hover effects, and transitions
- **Live Timer**: Updates every second showing your relationship duration

Made with 💕 by Sheshav for Adi