# Kevin Kipyegon Langat - Portfolio Website

A modern, professional portfolio website showcasing my skills as a Software Developer & Network Engineer.

##  Features

- **Modern Design**: Distinctive, professional aesthetic with smooth animations
- **Responsive**: Works perfectly on all devices
- **Performance Optimized**: Fast loading and smooth interactions
- **SEO Friendly**: Optimized for search engines

##  Built With

- React 18
- Framer Motion (animations)
- React Icons
- CSS3 with modern features

##  Installation

1. Clone the repository:
```bash
git clone https://github.com/kipyegonk/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The site will open at `http://localhost:3000`

##  Deployment to GitHub Pages

1. Update the `homepage` field in `package.json` with your GitHub username:
```json
"homepage": "https://YOUR-USERNAME.github.io/portfolio"
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

This will build the project and push it to the `gh-pages` branch.

3. Enable GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select `gh-pages` branch as the source
   - Save

Your site will be live at `https://YOUR-USERNAME.github.io/portfolio`

##  Project Structure

```
portfolio-website/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx          # Main component
│   ├── App.css          # Styles
│   ├── index.js         # Entry point
│   └── index.css        # Global styles
├── package.json
└── README.md
```

##  Customization

### Update Personal Information

Edit the content in `src/App.jsx`:
- Hero section: Name, title, description
- About section: Bio and stats
- Skills: Add/remove skills
- Experience: Update work history
- Projects: Showcase your projects
- Education: Update education and certifications
- Contact: Update contact information

### Modify Colors

Edit CSS variables in `src/App.css`:
```css
:root {
  --primary-bg: #0a0e27;
  --accent-blue: #3b82f6;
  --accent-cyan: #06b6d4;
  /* ... more variables */
}
```

### Change Fonts

Update the Google Fonts link in `public/index.html` and the font-family in CSS.

##  Contact

Kevin Kipyegon Langat
- Email: kevinlangat008@gmail.com
- Phone: +254 111 790 013
- Location: Nairobi, Kenya

##  License

This project is open source and available under the [MIT License](LICENSE).

---

