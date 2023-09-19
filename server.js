const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'public' directory
// app.use(express.static('public'));
// app.use(cors());

// Middleware to serve static files
//  app.use('/js', express.static(path.join(__dirname, 'js')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
