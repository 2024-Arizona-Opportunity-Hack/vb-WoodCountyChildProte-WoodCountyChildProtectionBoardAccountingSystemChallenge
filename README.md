# Wood County Child Protection Board Accounting System

This website is an interface that can track all of Wood County Child Protection Boards financials. It was created with a React frontend written with TypeScript and a backend with Supabase with a heavy focus on Postgresql for data storage and retrieval.

# Web interface and layout

The website is a single page dashboard that is locked behind authentication that can be controlled by the organization

![Website]([https://i.imgur.com/zCAFnbG.png](https://i.imgur.com/QvYZpBM.png))

# Technologies

## Frontend

The frontend technologies used were React, Material UI Charts, TailwindCSS, DaisyUI.
Supabase was used to authenticate users and facilitated the connection to the backend.

## Backend

The backend was written with Supabase and consisted mainly of Postgresl.

# Running and deployment

## Local machine development
- clone repo `git clone git@github.com:2024-Arizona-Opportunity-Hack/vb-WoodCountyChildProte-WoodCountyChildProtectionBoardAccountingSystemChallenge.git & cd vb-WoodCountyChildProte-WoodCountyChildProtectionBoardAccountingSystemChallenge`
- install dependences `npm i`
- run dev server `npm run dev`

## Deployment
- clone repo `git clone git@github.com:2024-Arizona-Opportunity-Hack/vb-WoodCountyChildProte-WoodCountyChildProtectionBoardAccountingSystemChallenge.git & cd vb-WoodCountyChildProte-WoodCountyChildProtectionBoardAccountingSystemChallenge`
- install dependences `npm i`
- run dev server `npm run build`
- Deploy all files under `dist` folder to hosting service
