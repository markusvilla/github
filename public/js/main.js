import { getProducts } from "./api.js";
import { usuariosHtml } from "./users.js";
import { productosHtml } from "./products.js";


/*async function main() {
    const result = await getUsers()
    usuariosHtml(result.payload)
}
main()*/

async function main() {
    const result = await getProducts()
    productosHtml(result.payload)
}
main()