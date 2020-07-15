require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const connectionString = process.env.MONGODB_URI;

const port = process.env.PORT || 3000;

const app = express();

const userRoutes = require('./routes/user');
const speakerRoutes = require('./routes/speaker');
const calendarRoutes = require('./routes/calendar');

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(userRoutes);
app.use(speakerRoutes);
app.use(calendarRoutes);

mongoose
    .connect(connectionString, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(result => {
        app.listen(port);
    })
    .catch(err => {
        console.log(err);
    });
