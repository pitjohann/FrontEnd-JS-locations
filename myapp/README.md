# FrontEnd Locations

Here is everything you need to know about this FrontEnd.
## Backend

The backend used was the one provided by Mr. Moreau, the only change done was line 19 of the locations.service.js :
return Location.find().limit(limit).skip(offset).sort({_id:-1});

The line was changed so that the findAll function returns the latest added locations but it doesn't change anything to how it works, it just let you see the items you just added.

```bash

# go to the directory where the files are
cd my_app

#have the latest dependencies
npm install

# start the FrontEnd
npm run dev
```

When you arrive on the main page after launching the dev, you see a lot of useless things:
The counter doesn't do anything, the pictures at the top left and right will lead you to wonderful Linkedin pages.

The big button in the middle is really working and leads you to the login page, or you can directly click on the register or login page at the top.

# What works

The register page adds a user to the database. There isn't any way to add an admin, it needs to be done manually.
The login page enables you to login, as the name implies.
The Location page is available but if you aren't logged in, you won't be able to see it.
# Location page
On this page you can see the 20 latest added locations (or oldest if the back isn't changed).
There is an add button that opens a new tab and let's you create a new user. 
If you are an admin, you'll be able to create it. If not, you'll have an error because you need to be an admin.
If you are an admin, the delete button will work, if you are a user it won't.

# What doesn't work

The Edit button doesn't do anything, I didn't know how to send the Id from one page to another so the code is in full comments (for now).
I 
