require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { router } = require('./routes');
const { sequelize } = require('./config');

const app = express();
const PORT = process.env.PORT || 3010;

app.use(cors());

app.use(cookieParser('secret-asigned-cookie-key'));

// Database sync:
// sequelize.sync();
// sequelize.sync({ force: true });

// Parser:
app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log('App is running on port ', PORT);
});
