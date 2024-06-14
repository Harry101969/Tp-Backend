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
// 404 error handling middleware
app.use((req, res, next) => {
    console.log('404 error - URL not found:', req.originalUrl);
    res.status(404).send('404: Not Found');
});
app.listen(port, () => {
    console.log(`Server running at: http://localhost:${port}/api/home`);
});