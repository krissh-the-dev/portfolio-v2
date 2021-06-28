# Portfolio v2

[
![Netlify Status](https://api.netlify.com/api/v1/badges/36e0d159-6a65-40f1-9910-36bc4b2d67c1/deploy-status)](https://app.netlify.com/sites/modest-kare-bf32da/deploys)

The second iteration of my personal portfolio site.

TL; DR

## Forking

Yes! You can use my code and design on your site! But of course, **_with attribution_**.
I have put in a lot of effort to build this ground up. It's not easy to design and build a website, you all know that, and I strongly believe that I deserve to get attributed for my work. So, if you are planning to use my code, I request you to leave the footer unaltered.

I don't want to use harsh words, but _**plagiarism is bad**_. Please empathize my situation and give me proper credits for my work.

### Design

You can always draw inspiration from my design, and no, you don't have to give me credits for that, unless you're copying most of them. I myself drew inspirations from [Brittany Chiang](https://github.com/bchiang7).

### Attribution

If you copy only the design, you can mention just that, if you draw inspirations or copy only a part of it, then you can call it yours :)

I don't want credits for any of your work. Your heart knows what's right :) _Attribute to me wherever you think necessary_.

## Development

### Get started:

1.  You need **_node js_** (v14+ recommended) installed and setup in your machine to get started.
    Choose the one appropriate for you and install: https://nodejs.org/en/download/

2.  Fork the repository.

3.  Clone/ download your fork to your local machine.

4.  Navigate to the root directory of the project and install the dependecies using the command:

        npm install

5.  Create a `.env` file in the project root directory with the following variables: `REACT_APP_RECAPTCHA`, `REACT_APP_SERVICE_ID`, `REACT_APP_TEMPLATE_ID`, `REACT_APP_TOKEN`, `REACT_APP_USER_ID`

6.  Start the development server by using the command:

        npm start

Now you will have the semi functional site running on port 3000 on your localhost.

## Updating textual content

Most of the _content are just hard coded_ in to their corresponding files in the `src/section` directory. For the projects, the data are kept seperately in a `data.js` file in the same folder.

## Changing images

All the images used in the site is kept in `src/images` folder. Each subfolder in the folder contains the same image in different resolutions and an `index.js` file which exports them all together.

If you don't want to have responsive images, just keep a single image and export the same in different names (I did the same for most of them).

## Changing icons

All the tech icons are hand picked from different sources, mostly from [World Vector Logo](https://worldvectorlogo.com/) and [Vecor Logo Zone](https://www.vectorlogo.zone/). The other line icons (the social icons and other UI icons) are from [Feather Icons](https://feathericons.com/). You need to hand pick the icons that meet your needs. All the icons are put together into a single icon font using [Icomoon](https://icomoon.io/).

The tech icons are in `src/fonts/Logo` and the line icons are in `src/fonts/Icomoon`. There are a few changes you need to make in order to use it in the site. You can easily figure out what changes are needed by just looking into the corresponding folders and files.

## Fixing the stats and the graph

The GithHub statistics are fetched using the GitHub GraphQL API. You need a Personal Access Token in order to send requests to the API. [Click here](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) to know more about GitHub Personal Access Tokens.

1. Save the token in the `.env` that we creted earlier, in the variable `REACT_APP_TOKEN`.

   Example:
   `REACT_APP_TOKEN=abcdefg1234567`

2. Change the username to your username in the file `src/sections/Statistics/data.js`, inside the query string: `user(login: "KrishnaMoorthy12")`.

NOTE: I have set conditions to fetch and render real data only on production environment (to avoid exhausting hourly limit and reduce unnecessary requests and server load on github)

## Get the contact form working

The contact form uses [EmailJS](https://www.emailjs.com/), a freemium mailing API provider. You need to get the Access Token, the service ID and the template ID.

1. Create a new email ID (preferably Gmail)
2. Log on to www.emailjs.com and create a free account.
3. Add your new email as a service and get the service ID (`REACT_APP_SERVICE_ID`)
4. Create/ choose a template that suits you and get the template ID (`REACT_APP_TEMPLATE_ID`) .
5. Get the User ID (`REACT_APP_USER_ID`) and Access Token (`REACT_APP_TOKEN`) from the integration tab.
6. Save each value in their respective variables in the `.env` file.

## Customizing

I don't feel like writing this right now 😛, will be writing a guide sometime in the future though. Subscribe to updates by clicking on the watch button on the top right if want to get informed about changes.

## How to deploy? It's Friday!

As you would've already noticed (didn't you see the netlify status badge above?), I'm using Netlify. You can also use vercel or whatever you like.

Here's a useful article by by Abhishek Jakhar on `freeCodeCamp` that describes the process: [Click me!](https://www.freecodecamp.org/news/how-to-deploy-a-react-application-to-netlify-363b8a98a985/)

For our site to function properly, you also need to add the environment variables by going into Site Settings > Build & Deploy > Environment.

## References

Also coming soon 😪
