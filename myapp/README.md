# FrontEnd Locations

Here is everything you need to know about this FrontEnd.
## Backend

The backend used was the one provided by Mr. Moreau, the only change done was line 19 of the locations.service.js :
return Location.find().limit(limit).skip(offset).sort({_id:-1});

The line was changed so that the findAll function returns the latest added locations.

```bash

# go to the directory where the files are
cd my_app

#have the latest dependencies
npm install

# start the FrontEnd
npm run dev
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
