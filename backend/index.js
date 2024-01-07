// entry point
const connectToMongoo = require('./db');
const express = require('express')
connectToMongoo();

const app=express();
const port=3000

app.use(express.json()); // to deal with json in api


//Available Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port,()=>{
    console.log(`Exapmle app listing at http://localhost:${port}`)
})