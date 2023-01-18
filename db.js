const mongoose = require('mongoose')
const mognoURI = 'mongodb://localhost:27017/booksfreek'

const connectToMongo = ()=>{
    mongoose.connect(mognoURI, ()=>{
        console.log('Connected to mongoDB successfully!!')
    })
}

mongoose.set('strictQuery', false)

module.exports = connectToMongo;