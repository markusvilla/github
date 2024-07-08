import User from "../models/users.model.js"

const usersService = {
    createUsers: async function (usersData){
        return await User.create(usersData)
    },

    getUsers: async function(){
        return await User.find()
    },

    getUsersById: async function (id){
        return await User.findById(id)
    },

    updateUsers: async function (id, usersData){
        return await User.findByIdAndDelete(id, usersData, {new: true})
    },

    deleteUsers: async function (id) {
        return await User.findByIdAndDelete(id)
    }
}

export default usersService