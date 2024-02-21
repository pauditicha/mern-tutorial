const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;
const errorHandler = require('./middleware/errorMiddleware');
const connDB = require('./config/db');
const colors = require('colors');
const app = express();

connDB();
app.listen(port, () => console.log(`Server started on port ${port}`));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', require('./routes/goalRoutes'));
app.use(errorHandler);
