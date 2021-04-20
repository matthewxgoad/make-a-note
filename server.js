const fs = require('fs');
const express = require('express');

const PORT = process.env.PORT || 1154;

const app = express();

// Middleware to parse JSON payloads
app.use(express.urlencoded( { extended: true } ) );
app.use( express.json() );

// API routes
require('./routes/apiRoutes')(app);
app.use(express.static('public'));
// HTML routes
require('./routes/htmlRoutes')(app);

// PORT listener
app.listen(PORT, () > {
    console.log(`Listening on PORT ${PORT}`);
})