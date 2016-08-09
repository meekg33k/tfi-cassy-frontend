# CASSY Data Management Platform



## Functionality

A data capture web application designed to allow its target users enter data about their operations and to generate reports from the data entered into the system


## Running the Application

To run and test it locally, run following command after you clone the repo:

```
### Step I: Install dependencies
bower install & npm install

### Step II: Start up application server
npm start

```


## Application Dependencies

Front-End dependencies are in bower.json and package.json files
Back-End dependencies are in package.json file

Run `bower install` and `npm install` to install



## Technology Stack

Front-End: React [https://facebook.github.io/react/] (https://facebook.github.io/react/) Bootstrap [http://getbootstrap.com] (http://getbootstrap.com)
Back-End: Express [https://expressjs.com] (https://expressjs.com)
Authentication: Passport [http://passportjs.org] (http://passportjs.org)
Database: MySQL Server
Build Tool: Webpack [https://webpack.github.io] (https://webpack.github.io)
JSX Compiler: Babel [http://babel.js.io] (http://babel.js.io)



## Database Configuration

This application uses MySQL server hosted on Amazon AWS.
  * Database Name: `cassydev`
  * Schema: `therapists, students, staff, events, districts`



## Development: Extending the Application

Local server runs on port 8888. To create a new module {NAME} in the application, you need to create following components:

Model
  * Create model: `/models/{NAME}.js`. For example, /models/user.js`
  * Create model tester(optional): `/test/{NAME}Model.js`

Router
  * Create router: `/routes/{NAME}.js`
  * Register your router in `app.js`
  * Create router tester(optional): `/test/{NAME}.js`

View
  * Create component: `/public/components/` either as a js or jsx file `/public/components/{NAME}.js`
  * Create page: `/public/pages/` either as a js or jsx file `/public/pages/{NAME}.js`
  * Make sure to import the page and add it to the specific route in `/public/client.js` using the right naming convention. For example, `import {NAME}Page from "./pages/{NAME}.js"`
  * (Optional) Include components as aliases in ./webpack.config.js

Data Sources
  * Create data source: `/apis/{NAME}.js`
  * Data sources include modules that make API calls to the server and local storage modules

Services
  * Create services: `/services/{NAME}.js`
  * Server side APIs called from the client side



## Deployment:

This application is currently hosted on Heroku [https://www.heroku.com] (https://www.heroku.com) and can be accessed via the URL https://cassydataportal.herokuapp.com

To deploy on Heroku, use command `git push heroku master`
