"use strict";(self.webpackChunkmywebsite=self.webpackChunkmywebsite||[]).push([[326],{8877:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var o=t(4848),i=t(8453);const s={sidebar_position:8},r=void 0,l={id:"Deployment-Guide/Continuous-Deployment",title:"Continuous-Deployment",description:"Continuous Deployment (CD)",source:"@site/docs/Deployment-Guide/Continuous-Deployment.md",sourceDirName:"Deployment-Guide",slug:"/Deployment-Guide/Continuous-Deployment",permalink:"/docs/Deployment-Guide/Continuous-Deployment",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Deployment-Guide/Continuous-Deployment.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Deploy",permalink:"/docs/Deployment-Guide/Deploy"},next:{title:"intro",permalink:"/docs/intro"}},u={},d=[{value:"Continuous Deployment (CD)",id:"continuous-deployment-cd",level:2}];function c(e){const n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"continuous-deployment-cd",children:"Continuous Deployment (CD)"}),"\n",(0,o.jsx)(n.p,{children:"Automating the deployment process with every push to your repository ensures that your Docusaurus site remains up-to-date without manual intervention. Here's how you can set up Continuous Deployment with GitHub Pages (using GitHub Actions), Vercel, and Netlify:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"GitHub Pages (Using GitHub Actions)"})}),"\n",(0,o.jsx)(n.p,{children:"GitHub Actions allows you to automate tasks directly within your GitHub repository, including the deployment of your Docusaurus site to GitHub Pages."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"1. Create a GitHub Action Workflow:"})}),"\n",(0,o.jsx)(n.p,{children:"Create a GitHub Action workflow file named deploy.yml in the .github/workflows directory of your repository. Add the following content:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"name: Deploy Docusaurus to GitHub Pages\r\non:\r\n  push:\r\n    branches:\r\n      - main  # or your default branch\r\njobs:\r\n  deploy:\r\n    runs-on: ubuntu-latest\r\n    steps:\r\n      - name: Checkout\r\n        uses: actions/checkout@v2\r\n      - name: Set up Node.js\r\n        uses: actions/setup-node@v2\r\n        with:\r\n          node-version: '16'\r\n      - name: Install dependencies\r\n        run: npm install\r\n      - name: Build the site\r\n        run: npm run build\r\n      - name: Deploy to GitHub Pages\r\n        run: npm run deploy\r\n        env:\r\n          GIT_USER: ${{ secrets.GITHUB_ACTOR }}\r\n          GIT_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"2. Push the Workflow File:"})}),"\n",(0,o.jsx)(n.p,{children:"Commit and push the workflow file (deploy.yml) to your repository. GitHub Actions will automatically trigger the deployment process on every push to the specified branch."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Vercel"})}),"\n",(0,o.jsx)(n.p,{children:"Vercel provides seamless deployment capabilities for static sites, including Docusaurus projects."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:(0,o.jsx)(n.strong,{children:"1. Link Your Repository on the Vercel Dashboard:"})})}),"\n",(0,o.jsx)(n.p,{children:"Link your GitHub repository to Vercel on the Vercel dashboard."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:(0,o.jsx)(n.strong,{children:"2. Configure Build and Output Settings:"})})}),"\n",(0,o.jsx)(n.p,{children:"Set the build and output settings in Vercel. These settings are usually auto-detected, but you can specify them as follows:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Build Command: npm run build"}),"\n",(0,o.jsx)(n.li,{children:"Output Directory: build"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:(0,o.jsx)(n.strong,{children:"3. Deploy:"})})}),"\n",(0,o.jsx)(n.p,{children:"Initiate the deployment process in Vercel. Vercel will automatically handle deployments on every push to your repository."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Netlify"})}),"\n",(0,o.jsx)(n.p,{children:"Netlify offers powerful deployment automation capabilities, making it easy to deploy Docusaurus sites with Continuous Deployment."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:(0,o.jsx)(n.strong,{children:"1. Link Your Repository on the Netlify Dashboard:"})})}),"\n",(0,o.jsx)(n.p,{children:"Link your GitHub repository to Netlify on the Netlify dashboard."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:(0,o.jsx)(n.strong,{children:"2. Configure Build and Publish Settings:"})})}),"\n",(0,o.jsx)(n.p,{children:"Set the build and publish settings in Netlify as follows:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Build Command: npm run build"}),"\n",(0,o.jsx)(n.li,{children:"Publish Directory: build"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:(0,o.jsx)(n.strong,{children:"3. Deploy:"})})}),"\n",(0,o.jsx)(n.p,{children:"Trigger the deployment process in Netlify. Netlify will automatically handle deployments on every push to your repository."})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var o=t(6540);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);