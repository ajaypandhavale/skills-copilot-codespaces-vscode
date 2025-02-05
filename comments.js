// Create web server
// 1. Load the express module
const express = require('express');
// 2. Create web server
const app = express();
// 3. Define the route
app.get('/comments', (req, res) => {
    res.send('This is a comment page');
});
// 4. Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});