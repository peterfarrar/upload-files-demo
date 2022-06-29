# UPLOAD FILES DEMO

Super simple demo of how to upload files using `multer`

## How to set this up
There are two things not in the repo.  
The first are the `/public` and `/public/uploads` directories.  You'll want to create these.  The uploads directory is where the images will be stored.  
The second thing is a `/config` directory with a `local.sh` script. The local.sh script is used by the packge.json npm scripts to run the code.  It's pretty straight forward.  The script exports environment variables that can be used by the app.  
Example:
```
export NODE_PORT=8080
export ENV=dev
```
Honestly, you don't need to put anyting in the file at all, but it does need to exist.  If you put nothing in there, the app will use the default values in the `/options.js` file.  
Alternatively, you could just modify the `package.json` scripts so that it's not used.

## How to run this
Inside the `package.json` file you'll find two scripts defined:
* `npm run start` or `npm start` will run the app using node.  
* `npm run dev` will run the app using nodemon, which is great if you want to modify the code.

## To Do
Well nothing really.  I kept this as simple as possible.  It would have been nice if I'd written tests, but too late now.  And some styling for the html would have been fun.
