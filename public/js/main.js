import { getProduct, getUser} from "./api.js";
import { usuariosHtml } from "./users.js";
import { createProduct, productsHtml } from "./products.js";

async function main() {
    const result = await getProduct()
    productsHtml (result.payload)
    createProduct()
}
main()

async function main1() {
    const resultado = await getUser()
    usuariosHtml(resultado.length)
}
main1()