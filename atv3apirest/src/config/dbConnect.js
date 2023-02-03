import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://joas:joas123@cluster0.9indbzb.mongodb.net/Livraria')

let db = mongoose.connection

export default db