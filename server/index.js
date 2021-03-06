require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const history = require('connect-history-api-fallback');
const connectionString = process.env.MONGODB_URI;

const port = process.env.PORT || 3000;

const app = express();

const userRoutes = require('./routes/user');
const speakerRoutes = require('./routes/speaker');
const calendarRoutes = require('./routes/calendar');
const contactRoutes = require('./routes/contact');
const errorHandler = require('./util/errorHandler');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.use(cors());
app.use(express.static('public'));
app.use(history({
    disableDotRule: true,
    verbose: true
}));

app.use(speakerRoutes);
app.use(calendarRoutes);
app.use(contactRoutes);
app.use(userRoutes);
app.use(errorHandler);

mongoose
    .connect(connectionString, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(result => {
        app.listen(port, () => console.log(`Server listening at port ${port}`));
    })
    .catch(err => {
        console.log(err);
    });
