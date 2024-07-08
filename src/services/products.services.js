import Product from "../models/products.model.js"

const productService = {
    createProduct: async function(product){
        return await Product.create(product)
    },

    getProduct: async function(){
        return await Product.find()
    }
}

export default productService