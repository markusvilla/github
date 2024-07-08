/*export async function getUsers (){
    const response = await fetch ('http://localhost:3000/api/users')
    const data = await response.json()
    console.log(data)
    return data
}*/

export async function getProducts (){
    const response = await fetch ('http://localhost:3000/api/products')
    const data = await response.json()
    console.log(data)
    return data
}