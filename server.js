// DEPENDENCIES
const express = require('express');

// PORT CONFIGURATION
const PORT = process.env.PORT || 1154;

// EXPRESS SERVER
const app = express();

// Express app to parse JSON payloads
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// ROUTERS
require('./routes/apiRoutes')(app);
app.use(express.static('public'));
require('./routes/htmlRoutes')(app);

// LISTENER
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})