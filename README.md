# 🔗 Refreshed Link Saver - Chrome Extension

A minimalist and fast Chrome extension that allows users to:

- Save the current tab's URL with one click.
- Save a custom URL or note manually.
- View all saved links as clickable list items.
- Delete all saved links with a double-click.

Built with HTML, CSS, and JavaScript using Chrome Extension Manifest V3.

---

## 📸 Preview

![image](https://github.com/user-attachments/assets/7be0adab-8ff9-435a-81b7-d5844783e502)

---

## 🚀 Features

- 💾 Save current tab link (via `chrome.tabs.query`)
- ✍️ Save custom input (notes or links)
- 🧹 Clear all saved items with a double-click
- 🌐 Links open in new tabs
- 🔒 LocalStorage used for persistence

---

## 🛠️ Tech Stack

- Vanilla JavaScript
- HTML5
- CSS3
- Chrome Extensions API (Manifest V3)

---

## 📁 Project Structure

```bash
📦 Refreshed-Link-Saver/
├── app.js             # JS logic to handle storage & UI
├── main.html          # Extension popup UI
├── theme.css          # Styling
├── manifest.json      # Chrome extension configuration
└── screenshot.png     # Optional preview image
