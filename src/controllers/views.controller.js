import productService from "../services/products.services.js"
import usersService from "../services/users.services.js"

export const dashboard = async (req, res) =>{
    const users = await usersService.getUsers()
    res.render('dashboard', {users: users})
}