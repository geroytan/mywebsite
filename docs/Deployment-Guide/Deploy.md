---
sidebar_position: 7
---

## Deploying the Site

There are several ways to deploy a Docusaurus site. Below, we'll cover deployment to GitHub Pages, Vercel, and Netlify.

**Deploying to GitHub Pages**

GitHub Pages provides a convenient hosting solution for static websites directly from GitHub repositories.

**1. Install GitHub Pages CLI:**

First, install the GitHub Pages CLI globally on your machine using npm:

```
npm install -g gh-pages
```
**2. Add Deployment Scripts to Your package.json:-**

In your package.json file, add deployment scripts under the "scripts" section.

```
"scripts": {
  "deploy": "GIT_USER=<GitHub-username> USE_SSH=true npm run deploy"
}

/Replace <GitHub-username> with your actual GitHub username
```
**3. Run the Deploy Script:**

Execute the deploy script to deploy your site to GitHub Pages:
```
npm run deploy
```

**Deploying to Vercel**

Vercel is a cloud platform for static sites and serverless functions, known for its ease of use and seamless deployment process.

***1. Link Your Repository on the Vercel Dashboard:***

Sign in to your Vercel account and link your GitHub repository on the Vercel dashboard.

***2. Set the Build and Output Settings:***

Configure the build and output settings in Vercel. Vercel usually auto-detects these settings, but you can specify them as follows:

* Build Command: npm run build
* Output Directory: build

***3. Deploy:***

Initiate the deployment process in Vercel. Vercel will automatically handle deployments on every push to your repository.

**Deploying to Netlify**

Netlify is a comprehensive platform for deploying and managing modern web projects, offering features like continuous deployment and serverless functions.

***1. Link Your Repository on the Netlify Dashboard:***

Log in to your Netlify account and link your GitHub repository on the Netlify dashboard.

***2. Set the Build and Publish Settings:***

Configure the build and publish settings in Netlify as follows:

* Build Command: npm run build
* Publish Directory: build

***3. Deploy:***

Trigger the deployment process in Netlify. Netlify will automatically handle deployments on every push to your repository.