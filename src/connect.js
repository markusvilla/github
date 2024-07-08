import mongoose from 'mongoose'
import config from './config.js'

export default async function connectToDB() {
    try {
        await mongoose.connect(config.MONGO_DB_URI)
        console.log('Conectado a Mongo')
    }catch (err) {
        console.error('Error al conenctar:', err)
    }
}