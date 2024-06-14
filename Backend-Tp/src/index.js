const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const app = express();
const port = process.env.PORT
app.get('/', async (req, res) => {
    const printing = [
        { id: 1, title: 'Hello1' },
        { id: 2, title: 'Hello2' }
    ];
    res.send(printing);
});
app.listen(port, () => {
    console.log(`Server running at: http://localhost:${port}/api/home`);
});