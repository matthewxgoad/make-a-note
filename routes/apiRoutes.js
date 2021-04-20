// DEPENDENCIES
const db = require('../db/db.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// ROUTING
module.exports = (app) => {
    // CRUD, without U
    app.get('/api/notes', (req,res) => res.json(db));
    app.post('/api/notes', (req,res) => {
        const text = req.body;
        text.id = uuidv4();
        db.push(text);
            fs.writeFile(__dirname + '/../db.json', JSON.stringify(db), 
            (err) => { err ? console.log (err) : console.log('Updated!')
            });
        res.json('/../db/db.json');
    })
    app.delete('/api/notes/:id', (req,res) => {
        const { params: {id} } = req;
        for (const [i, element] of db.entries()) {
            if(element.id === id) {
                db.splice(i,1);
                fs.writeFile(__dirname + '/../db/db.json', JSON.stringify(db), (err) => {
                    err ? console.log(err) : console.log('Updated!');
                });
                res.json(db);
            } 
        }
    });
}