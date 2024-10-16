const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Stel de statische map in voor de HTML en andere bestanden
app.use(express.static(path.join(__dirname, 'public')));

// Start de server
app.listen(PORT, () => {
    console.log(`Server draait op http://localhost:${PORT}`);
});
