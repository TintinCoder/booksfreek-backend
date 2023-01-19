const connectToMongo = require('./db')
const express = require('express')
const app = express()
const port = 5000;

app.use(express.json())
app.use('/api/auth', require('./routes/auth'))

app.listen(port, ()=>{
    console.log('BooksFreek backend running on port', port)
})

connectToMongo()