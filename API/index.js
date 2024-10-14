const express = require('express');
const bodyParser = require('body-parser');
const { connectToDb } = require('./db');
//const customerRoutes = require('./routes/customerRoutes');
//const projectRoutes = require('./routes/projectRoutes');

const customerRoutes = require('./src/routes/customerRoutes'); // Update path
const projectRoutes = require('./src/routes/projectRoutes');   // Update path

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api/customers', customerRoutes);
app.use('/api/projects', projectRoutes);

connectToDb();

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

