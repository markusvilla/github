export async function getUser (){
    const response = await fetch ('http://localhost:3000/api/users')
    const data = await response.json()
    console.log(data)
    return data
}

export async function getProduct (){
    const response = await fetch ('http://localhost:3000/api/products')
    const data = await response.json()
    console.log(data)
    return data
}