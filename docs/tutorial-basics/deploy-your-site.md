---
id: deployment-guide
title: Deployment Guide
sidebar_label: Deployment Guide
sidebar_position: 5
---

Docusaurus is an easy-to-use static site generator optimized for project documentation. This guide will walk you through the process of hosting a Docusaurus site from cloning the repository to deploying it live.

**Prerequisites**
 1.	 Node.js (version 16.x or later) and npm installed. You can download them from [Node.js official site](https://nodejs.org/en).
 2.  Git installed. You can download it from [Git official site](https://www.git-scm.com).
 3.  A hosting provider for static sites (e.g., GitHub Pages, Vercel, Netlify, etc.).

# Step-by-Step Guide

# 1. Clone the Docusaurus Repository  
First, clone the repository containing your Docusaurus site or create a new one.

```js
git clone https://github.com/facebook/docusaurus.git my-docusaurus-site
cd my-docusaurus-site
```

If you are starting a new Docusaurus site, you can create one using the Docusaurus CLI:
```js
npx create-docusaurus@latest my-docusaurus-site classic   
cd my-docusaurus-site 
```

# 2. Install Dependencies

Navigate to your project directory and install the necessary dependencies.
```js
cd my-docusaurus-site 
npm install 
```

# 3. Start the Development Server

Run the development server to preview your site locally.
```
npm run start 
```
This will start the server and open your site in the default browser. You can now edit your site, and changes will be reflected in real-time.

# 4. Build the Static Site

Once you are satisfied with your documentation site, build the static files.
```
npm run build 
```
This command generates the static files in the build directory.

# 5. Deploying the Site

There are several ways to deploy a Docusaurus site. Here, we'll cover deployment to GitHub Pages, Vercel, and Netlify.  
Deploying to GitHub Pages

**1.	Install GitHub Pages CLI:**
```
npm install -g gh-pages 
```
**2.	Add deployment scripts to your package.json:**
```
"scripts": { "deploy": "GIT_USER=<GitHub-username> USE_SSH=true npm run deploy" } 
```
**3.	Run the deploy script:**

***Deploying to Vercel***
**1.**	Link your repository on the Vercel dashboard.
**2.**	Set the build and output settings. Vercel usually auto-detects these, but you can specify them as:  
-Build Command: npm run build  
-Output Directory: build
**3.**	Deploy. Vercel will automatically handle deployments on every push.

***Deploying to Netlify***
**1.**	Link your repository on the Netlify dashboard.
**2.**	Set the build and publish settings:  
-Build Command: npm run build  
-Publish Directory: build
**3.**	Deploy. Netlify will automatically handle deployments on every push.
```
npm run deploy 
```
This will build the site and push the contents of the build directory to the gh-pages branch of your repository.

# 6. Continuous Deployment
To automate deployment with every push to your repository, you can set up Continuous Deployment (CD) with your chosen platform.
GitHub Pages (Using GitHub Actions)

**1.**	Create a GitHub Action workflow in .github/workflows/deploy.yml:
```
name: Deploy Docusaurus to GitHub Pages
on:
  push:
    branches:
      - main  # or your default branch
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'
      - name: Install dependencies
        run: npm install
      - name: Build the site
        run: npm run build
      - name: Deploy to GitHub Pages
        run: npm run deploy
        env:
          GIT_USER: ${{ secrets.GITHUB_ACTOR }}
          GIT_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

**2.**	Push the workflow file to your repository.

***Vercel***
1.	Link your repository on the Vercel dashboard.
2.	Set the build and output settings as mentioned earlier.
3.	Deploy. Vercel will handle the deployment on every push.

***Netlify***
1.	Link your repository on the Netlify dashboard.
2.	Set the build and publish settings as mentioned earlier.
3.	Deploy. Netlify will handle the deployment on every push.

# Conclusion
By following these steps, you can set up and host a Docusaurus site, making your project documentation accessible to everyone. Whether you're using GitHub Pages, Vercel, or Netlify, the process is straightforward and integrates well with continuous deployment workflows.

