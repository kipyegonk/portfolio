# 🚀 Deployment Guide - Portfolio Website

## Prerequisites

Before you begin, make sure you have:
- [ ] Git installed on your PC
- [ ] Node.js and npm installed
- [ ] A GitHub account
- [ ] Created a repository on GitHub (e.g., `portfolio`)

## Step 1: Prepare Your Repository

1. **Create a new repository on GitHub**:
   - Go to https://github.com/new
   - Repository name: `portfolio`
   - Description: "My professional portfolio website"
   - Keep it **Public** (required for free GitHub Pages)
   - Do **NOT** initialize with README, .gitignore, or license
   - Click "Create repository"

## Step 2: Update Configuration

1. **Open `package.json`** in your portfolio folder
2. **Update the `homepage` field**:
   ```json
   "homepage": "https://kipyegonk.github.io/portfolio"
   ```
   Replace `kipyegonk` with your GitHub username

## Step 3: Initialize Git and Push to GitHub

Open PowerShell or Command Prompt in your portfolio folder and run:

```bash
# Navigate to the portfolio folder
cd C:\path\to\portfolio-website

# Initialize Git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Modern portfolio website"

# Add remote repository (replace with your URL)
git remote add origin https://github.com/kipyegonk/portfolio.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 4: Install Dependencies and Test Locally

```bash
# Install all dependencies
npm install

# Start the development server
npm start
```

Your site should open at `http://localhost:3000`. Verify everything looks good!

## Step 5: Deploy to GitHub Pages

```bash
# Build and deploy
npm run deploy
```

This command will:
1. Build your production-ready site
2. Create a `gh-pages` branch
3. Push the built files to GitHub

## Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under "Source", select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

## Step 7: Access Your Live Site

Your portfolio will be live at:
```
https://kipyegonk.github.io/portfolio
```

⏱️ **Note**: It may take 2-5 minutes for the site to go live after deployment.

## Updating Your Portfolio

Whenever you make changes:

```bash
# Add changes
git add .

# Commit changes
git commit -m "Update: description of changes"

# Push to GitHub
git push

# Deploy updated site
npm run deploy
```

## Common Issues & Solutions

### Issue: "error: remote origin already exists"
**Solution**:
```bash
git remote remove origin
git remote add origin https://github.com/kipyegonk/portfolio.git
```

### Issue: "Permission denied"
**Solution**: You need to authenticate with GitHub. Use a Personal Access Token:
1. Go to GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token with `repo` permissions
3. Use the token as your password when pushing

### Issue: "npm command not found"
**Solution**: Install Node.js from https://nodejs.org/

### Issue: Site shows 404
**Solution**:
1. Check GitHub Pages settings
2. Ensure `gh-pages` branch exists
3. Wait 2-5 minutes for changes to propagate
4. Clear browser cache

## Customization Checklist

Before deploying, update:
- [ ] Hero section with your name and title
- [ ] About section with your bio
- [ ] Skills section with your technologies
- [ ] Experience section with your work history
- [ ] Projects with your actual projects
- [ ] Contact information (email, phone, location)
- [ ] GitHub and LinkedIn URLs in social links
- [ ] Project repository links

## Alternative Deployment Options

### Option 1: Vercel (Recommended for ease)
1. Push code to GitHub
2. Go to https://vercel.com
3. Import your GitHub repository
4. Click Deploy

### Option 2: Netlify
1. Push code to GitHub
2. Go to https://netlify.com
3. New site from Git
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `build`

## Need Help?

- GitHub Pages Docs: https://pages.github.com/
- React Deployment: https://create-react-app.dev/docs/deployment/
- Contact: kevinlangat008@gmail.com

---

Good luck with your portfolio! 🎉
