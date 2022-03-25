# Welcome to the Remix Blog

This project was created to allow me to learn about Remix. It makes use of:

- [Remix - full stack web framework](https://remix.run)
- [Prisma - ORM for Node.js](https://prisma.io)

## Overview 

This is a blog created on Remix App Server with a SQLite db seeded with a user and example posts. The application allows for an authenticated user to create and delete their own posts. 

## Seeding the DB 

```sh
node prisma/seed.ts
```

## Viewing the DB 

```sh
npx prisma studio
```

This will open a web client on localhost:5555 to view your DB.

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```
