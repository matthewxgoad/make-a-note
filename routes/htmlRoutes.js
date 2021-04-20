// DEPENDENCIES
const path = require('path');

// ROUTING
module.exports = (app) => {
    // fetch notes.html
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  // If no matching route is found default to index
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
};
