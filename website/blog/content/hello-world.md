---
title: The Great Gatsby
date: "2023-01-04"
description: "A journey of a thousand blog posts beginns with a simple Gatsby template"
---
`audio: /text2speech/hello-world.wav`

This is my first post on my new tech blog. To be honest, I'm stunned and proud that my former self managed to get this far. so... kinda... Cheers to myself ... Happy reading! 🥂

## How did i set up this project?

!['gatsby-meme-cheers-for-templating-imgflip.com'](./gatsby-meme.jpg)

created by https://imgflip.com/memegenerator




### Set up a static website (Gatsby)


1. Create a new Github Repository
2. Setup Gatsby `npm install -g gatsby-cli`
3. Clone the repo and create the basic scaffold with `gatsby new blog https://github.com/gatsbyjs/gatsby-starter-blog`
4. Update the website title, my name and icon in `blog/gatsby-config.js` 
5. Make some slight styling adjustsments to `blog/src/style.css` (more sushi'ish)
6. Add `"engines": {"node": "18"},` to the `blog/package.json` file to enable Azure Static Web App succeed the build workflow. Currently ASWA defaults to Node v16 which would fail with my current Gatsby version setup (`5.3.3` by the time writing this post)
7. Delete the default posts and create my very own first blog-post (`this`)

### Set up DNS & Azure Static Web App (Azure Cloud)

1. Buy a new domain. I did settle for [devops-sushi.de](www.devops-sushi.de) on [godaddy.com](godaddy.com) hence it only costs 0,01€/ first year.
2. Set up Azure Static Web App using the blog-code-repo created in the previous section
3. Create a Azure DNS-Zone and modify the nameservers of my domain [devops-sushi.de](www.devops-sushi.de) in the godaddy-portal to use the Azure nameservers
4. Add a custom-domain to my Static Web App. I choose to use a `CNAME=www` that points to the auto-generated Static Web App domain (something like `some-website-0de426900.1.azurestaticapps.net`)
5. AZ Static Web Apps requires a validation `TXT-Record` with Host `@` pointing to a gernated validation value. `Add custom domain` in the Azure portal provides functionality to validate domain ownership.

## We have to go deeper...

I'm sure I'll write a lot more interesting things in the future. For now it is just lot's of copy-paste and some dummy code *borrowed* from the [gatsby starter blog template](https://github.com/gatsbyjs/gatsby-starter-blog).
