---
sidebar_position: 8
---

## Continuous Deployment (CD)

Automating the deployment process with every push to your repository ensures that your Docusaurus site remains up-to-date without manual intervention. Here's how you can set up Continuous Deployment with GitHub Pages (using GitHub Actions), Vercel, and Netlify:

**GitHub Pages (Using GitHub Actions)**

GitHub Actions allows you to automate tasks directly within your GitHub repository, including the deployment of your Docusaurus site to GitHub Pages.

**1. Create a GitHub Action Workflow:**

Create a GitHub Action workflow file named deploy.yml in the .github/workflows directory of your repository. Add the following content:

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
**2. Push the Workflow File:**

Commit and push the workflow file (deploy.yml) to your repository. GitHub Actions will automatically trigger the deployment process on every push to the specified branch.

**Vercel**

Vercel provides seamless deployment capabilities for static sites, including Docusaurus projects.

***1. Link Your Repository on the Vercel Dashboard:***

Link your GitHub repository to Vercel on the Vercel dashboard.

***2. Configure Build and Output Settings:***

Set the build and output settings in Vercel. These settings are usually auto-detected, but you can specify them as follows:

* Build Command: npm run build
* Output Directory: build

***3. Deploy:***

Initiate the deployment process in Vercel. Vercel will automatically handle deployments on every push to your repository.

**Netlify**

Netlify offers powerful deployment automation capabilities, making it easy to deploy Docusaurus sites with Continuous Deployment.

***1. Link Your Repository on the Netlify Dashboard:***

Link your GitHub repository to Netlify on the Netlify dashboard.

***2. Configure Build and Publish Settings:***

Set the build and publish settings in Netlify as follows:

* Build Command: npm run build
* Publish Directory: build

***3. Deploy:***

Trigger the deployment process in Netlify. Netlify will automatically handle deployments on every push to your repository.