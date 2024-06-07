---
id: deployment-guide
title: Deployment Guide
sidebar_label: Deployment Guide
sidebar_position: 5
---

Docusaurus is an easy-to-use static site generator optimized for project documentation. This guide will walk you through the process of hosting a Docusaurus site from cloning the repository to deploying it live.

## Prerequisites

1. **Node.js (version 16.x or later)**: Download it from the [Node.js official site](https://nodejs.org/).
2. **npm**: This comes with Node.js, so installing Node.js will also install npm.
3. **Git**: Download it from the [Git official site](https://git-scm.com/).
4. **A hosting provider for static sites**: Some popular options are GitHub Pages, Vercel, and Netlify.

## Step-by-Step Guide

### 1. Clone the Docusaurus Repository

You have two options here: clone an existing repository or create a new Docusaurus site.

#### Cloning an Existing Repository

If you already have a Docusaurus repository, clone it using:

**git clone https://github.com/facebook/docusaurus.git my-docusaurus-site**

**cd my-docusaurus-site**

#### Creating a New Docusaurus Site

If you're starting from scratch, you can create a new site using the Docusaurus CLI:

**npx create-docusaurus@latest my-docusaurus-site classic**

**cd my-docusaurus-site**

The `classic` template is a good starting point and includes the basic setup you need for a documentation site.

### 2. Install Dependencies

Navigate to your project directory and install the necessary dependencies:

**cd my-docusaurus-site**
**npm install**

This command reads the `package.json` file and installs all the dependencies listed there.

### 3. Start the Development Server

To preview your site locally, start the development server:

**npm run start**

This command starts a local development server and opens your site in the default browser. The server supports hot-reloading, so any changes you make to the site will be reflected in real-time.

### 4. Build the Static Site

Once you are satisfied with your documentation site, you need to build the static files:

**npm run build**

This command generates static files in the `build` directory, which can then be deployed to a static site hosting provider.

### 5. Deploying the Site

There are several ways to deploy a Docusaurus site. We'll cover deployment to GitHub Pages, Vercel, and Netlify.

#### Deploying to GitHub Pages

1. **Install GitHub Pages CLI**:

   **npm install -g gh-pages**

2. **Add deployment scripts to your `package.json`**:

   "scripts": {
   }

   Replace `<GitHub-username>` with your GitHub username.

3. **Run the deploy script**:

   **npm run deploy**

   This command builds the site and pushes the contents of the `build` directory to the `gh-pages` branch of your repository.

#### Deploying to Vercel

1. **Link your repository on the Vercel dashboard**.
2. **Set the build and output settings**. Vercel usually auto-detects these, but you can specify them as:
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
3. **Deploy**. Vercel will automatically handle deployments on every push.

#### Deploying to Netlify

1. **Link your repository on the Netlify dashboard**.
2. **Set the build and publish settings**:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `build`
3. **Deploy**. Netlify will automatically handle deployments on every push.

### 6. Continuous Deployment

To automate deployment with every push to your repository, you can set up Continuous Deployment (CD) with your chosen platform.

#### GitHub Pages (Using GitHub Actions)

1. **Create a GitHub Action workflow in `.github/workflows/deploy.yml`**:

    **name: Deploy Docusaurus to GitHub Pages**

   **on:**

     **push:**

       **branches:**

         **- main  # or your default branch**

   **jobs:**

    **deploy:**

       **runs-on: ubuntu-latest**

       **steps:**

         **- name: Checkout**

           **uses: actions/checkout@v2**


         **- name: Set up Node.js**

           **uses: actions/setup-node@v2**

           **with:**

             **node-version: '16'**

         **- name: Install dependencies**

           **run: npm install**

         **- name: Build the site**

           **run: npm run build**

         **- name: Deploy to GitHub Pages**

           **run: npm run deploy**

           **env:**
2. **Push the workflow file to your repository**.

#### Vercel

1. **Link your repository on the Vercel dashboard**.
2. **Set the build and output settings** as mentioned earlier.
3. **Deploy**. Vercel will handle the deployment on every push.

#### Netlify

1. **Link your repository on the Netlify dashboard**.
2. **Set the build and publish settings** as mentioned earlier.
3. **Deploy**. Netlify will handle the deployment on every push.

## Conclusion

By following these steps, you can set up and host a Docusaurus site, making your project documentation accessible to everyone. Whether you're using GitHub Pages, Vercel, or Netlify, the process is straightforward and integrates well with continuous deployment workflows.