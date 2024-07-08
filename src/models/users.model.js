import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required:true
    },
    passaword: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    createAt: {
        type: Date,
        dafault: Date.now
    }
}) 

const users = mongoose.model('users', usersSchema)
export default users