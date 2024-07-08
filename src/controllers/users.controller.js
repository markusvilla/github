import usersService from "../services/users.services.js"

export const createUsersController = async (req, res) => {
    try {
        const newUsers = await usersService.createUsers(req.body)
        res.status(201).json(newUsers)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const getUsersController = async (req, res) => {
    try {
        const user = await usersService.getUsers()
        res.status(201).json (user)
    } catch (error) {
        res.status(500).json ({message: error.message})
    }
}