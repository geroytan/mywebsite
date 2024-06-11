---
sidebar_position: 3
---

**Clone the Docusaurus Repository**

First, you need to clone the repository containing your Docusaurus site or create a new Docusaurus site from scratch.

***Cloning an Existing Repository***

If you have an existing Docusaurus project repository, use the git clone command to clone it to your local machine. Replace my-docusaurus-site with the desired directory name for your project:

```
git clone https://github.com/facebook/docusaurus.git my-docusaurus-site
cd my-docusaurus-site
```
***Creating a New Docusaurus Site***  

If you're starting a new Docusaurus project, you can create a new site using the Docusaurus CLI tool. This tool helps you set up a new Docusaurus site with a pre-configured template. Run the following command to create a new site, replacing my-docusaurus-site with your desired project name:

```
npx create-docusaurus@latest my-docusaurus-site classic
cd my-docusaurus-site
```

***In this command:***

* npx is a package runner tool that comes with npm, allowing you to run packages without globally installing them.

* create-docusaurus@latest specifies the Docusaurus CLI tool to create a new project using the latest version.

* my-docusaurus-site is the name of the directory where your new Docusaurus site will be created.

* classic is the template that includes a basic Docusaurus setup with some example content.