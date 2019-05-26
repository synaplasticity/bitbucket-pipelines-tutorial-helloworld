Changing for test ....
# Bitbucket Pipelines continuous delivery and continuous integration tutorial

This repository contains the basic application used in the Bitbucket Pipelines tutorial for continuous delivery and continuous deployment. You can clone this repository and use it to follow the tutorials and experiment yourself.

## Requirements

This is a Node.js application and the tutorials are using Heroku as a deployment platform. Therefore you'll need:

  * Node 4.6 or above on your local machine to run the application.
  * 2 personal apps on Heroku, one for staing and one for production.

## Running the application locally

In order to run this application locally just clone this repository and run the command below.

```bash
npm install
node .
```

Then go to http://localhost:3000 to see the "Hello World!" welcome message.

# Running the tests locally

Running the application test.

```bash
npm test
```

Running the acceptance test will require you to have the name of your staging environment on Heroku. Please note that they will most likely fail if you haven't deployed the application in your staging environment.

```bash
HEROKU_STAGING=<your Heroku staging application> npm test acceptance-test/
```

For instance

```bash
HEROKU_STAGING=bbtut-cdeployment-staging npm test acceptance-test/
```
