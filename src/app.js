require('dotenv').config();
const express = require('express');
const { router } = require('./routes');
const { sequelize } = require('./config');

const app = express();
const PORT = process.env.PORT || 3010;

// Database sync:
// sequelize.sync();
// sequelize.sync({ force: true });

// Parser:
app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log('App is running on port ', PORT);
});
