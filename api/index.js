const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const notesRoutes = require('./routes/notes.routes.js');

const PORT = 8000;

const app = express();

/** Middlewares */
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

/** Routes */
app.get('/', function(req, res) {
    res.send('Application Is Works');
});

app.use(notesRoutes);

/** Serve */
app.listen(PORT, function() {
    console.log(`Your Application is Works On Port ${PORT}`);
});