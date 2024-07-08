import users from '../models/users.model.js'

const usersService = {
    createUsers: async function (usersData){
        return await users.create(usersData)
    },

    getUsers: async function(){
        return await users.find()
    },

    getUsersById: async function (id){
        return await users.findById(id)
    },

    updateUsers: async function (id, usersData){
        return await users.findByIdAndDelete(id, usersData, {new: true})
    },

    deleteUsers: async function (id) {
        return await users.findByIdAndDelete(id)
    }
}

export default usersService