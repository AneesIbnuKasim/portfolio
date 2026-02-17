# Deployment Guide

Since you don't have the Vercel or Netlify CLI installed, here are the easiest ways to host your portfolio for free.

## Option 1: Vercel (Recommended)

1.  **Push to GitHub**:
    - Create a new repository on [GitHub](https://github.com/new).
    - Run these commands in your terminal:
      ```bash
      git init
      git add .
      git commit -m "Initial commit"
      git branch -M main
      git remote add origin <your-github-repo-url>
      git push -u origin main
      ```

2.  **Deploy on Vercel**:
    - Go to [vercel.com](https://vercel.com) and log in.
    - Click **"Add New..."** -> **"Project"**.
    - Select your GitHub repository.
    - Vercel will detect it's a Vite project.
    - Click **"Deploy"**.

## Option 2: Netlify Drop (No Git required)

1.  **Build the Project**:
    - Run `npm run build` in your terminal (I've already done this, check the `dist` folder).

2.  **Drag and Drop**:
    - Go to [app.netlify.com/drop](https://app.netlify.com/drop).
    - Drag and drop the `dist` folder from your project directory into the browser window.
    - Your site will be live instantly!

## Note on Routing
I have added a `vercel.json` file to ensure that if you use React Router in the future (currently using React Scroll, so it's fine), page refreshes work correctly on Vercel.
