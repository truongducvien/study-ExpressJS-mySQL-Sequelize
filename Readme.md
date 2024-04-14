# ExpressJS + MySQL + Sequelize

This is a basic NodeJS project that is build for studying purpose

### Step to run the server:

1. Create MySQL database schema
2. Create .env file, copy key from .env.example. These are keys that needs to connect with MySQL server
3. Install packages:
   `yarn`
4. Sync the sequelize model with MySQL database by un-comment the code in src/app.js
   `sequelize.sync({ force: true });`
5. Start the server:
   `yarn start:dev`
6. If you want to start the server in UAT environment, create .env.uat file and then run this command:
   `yarn start:uat`
