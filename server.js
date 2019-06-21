const express = require('express');

const connectDB = require('./config/db');
const app = express();

connectDB();


//init middleware
app.use(express.json( {extended : false } )) ; 
app.use(express.urlencoded());

app.get('/', (req, res) => res.send('API Running'));

// Define route
// app.use('/api/users', require('./routes/api/users'));
// app.use('/api/duration', require('./routes/api/duration')); // never used !!
app.use('/api/week', require('./routes/api/week'));

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>  console.log("Server running on", PORT));