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


##
<div style='display: flex; justify-content: center'>
  <a href="https://expressjs.com/" target="_blank">
    <img src="https://expressjs.com/images/express-facebook-share.png" alt="expressjs" title="ExpressJS" width="40" height="40"/>
  </a>
  <a href="https://www.mysql.com/" target="_blank">
    <img src="https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png" alt="mySQL" title="MySQL" width="40" height="40"/>
  </a>
   <a href="https://sequelize.org/" target="_blank">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRejR-J4SGeWrUT2pjFVlwxusDhXiJh5N0ZQtaxQJ8vwQ&s" alt="Sequelize" title="Sequelize" width="40" height="40"/>
  </a>
</div>
