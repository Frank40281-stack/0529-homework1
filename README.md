# 🌸 Frank's Personal Portfolio Page

[![Live Demo](https://img.shields.io/badge/🌸%20Live%20Demo-Visit%20Site-d4848e?style=for-the-badge)](https://frank40281-stack.github.io/0529-homework2-personal-page/)

> 🔗 **Live Demo:** [https://frank40281-stack.github.io/0529-homework2-personal-page/](https://frank40281-stack.github.io/0529-homework2-personal-page/)

A single-page personal portfolio website featuring an elegant split layout, live clock, and animated cherry blossom effect.

---

## ✨ Features

| Feature | Description |
|---|---|
| 👤 **Personal Photo** | Profile photo displayed on the left panel, full-height with a subtle zoom hover effect |
| 🕐 **Live Clock** | Real-time 12-hour clock (HH : MM SS) that updates every second, with a blinking colon separator |
| 🌸 **Cherry Blossom Animation** | 80 animated five-petal blossom petals falling across the screen using HTML5 Canvas, with natural swaying, rotation, and fade-out effects |
| 🎨 **Elegant Design** | Inspired by Wix personal portfolio templates — split layout, serif typography, warm cream/rose color palette |
| 📱 **Responsive** | Stacks vertically on mobile screens (< 900px) |

---

## 🗂️ File Structure

```
Week1/
├── index.html   # Main single-page portfolio (HTML + CSS + JS)
├── photo.jpg    # Personal profile photo
└── README.md    # This file
```

---

## 🎨 Design Details

- **Layout**: Split two-column — photo on the left, content on the right
- **Color Palette**: Warm white (`#faf8f5`), rose pink (`#d4848e`), blush (`#f2ccd4`), charcoal (`#2c2828`)
- **Fonts** (Google Fonts):
  - *Playfair Display* — name heading
  - *Cormorant Garamond* — clock, tagline, italic accents
  - *Inter* — labels and UI text
- **Animations**:
  - Cherry blossom petals (Canvas-based, 80 petals, randomized sway & spin)
  - Blinking clock colon
  - Scroll line indicator
  - Ornament petal spin

---

## 🕐 Live Clock Implementation

The clock uses plain JavaScript with `setInterval` running every **1000ms**:

```js
setInterval(updateClock, 1000);
```

It displays the current local time in **12-hour format** with AM/PM indicator, plus the full date (e.g., `Sunday, May 31, 2026`).

---

## 🌸 Cherry Blossom Animation

Built with the **HTML5 Canvas API**:
- Each petal is drawn as a **5-petal flower** using `ctx.ellipse()`
- Petals fall with randomized: speed, wind drift, sway amplitude, spin rate, size, and color
- Petals fade out near the bottom of the screen and recycle back to the top
- Pool size: up to **80 petals** on screen at once

---

## 🚀 How to Run

Simply open `index.html` in any modern web browser — no build tools or server required.

```
double-click index.html
```

---

## 📦 GitHub Repository

[https://github.com/Frank40281-stack/0529-homework1](https://github.com/Frank40281-stack/0529-homework1)

---

*Made with ❤️ by Frank — 2026*
