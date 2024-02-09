require('dotenv').config();

// EXPRESS APP //
const express = require('express');
const app = express();


// IMPORTS //
const path = require('path');
const { router } = require('./router/routes');
const fs = require('fs').promises;



// VARIABLE //




// MIDDLEWARES //
app.use(express.static('public'));
app.use('/', router);




// LISTENING TO PORT //
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
