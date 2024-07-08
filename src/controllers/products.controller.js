import productService from "../services/products.services.js"

export const createProductController= async (req, res) => {
    try {
        const newProduct = await productService.createProduct(req.body)
        return res.status(200).json({
            status: 200,
            message: 'productos creados ',
            payload: newProduct
        }) 
    } catch (error) {
        return res.status(500).json({
            status:500,
            message: error.message
        })
    }
}

export const getProductController= async (req, res) => {
    try {
        const products = await productService.createProduct()

        if (products.length === 0) return res.status (404).json ({status: 404, message: 'Productos no encontrados'})

        return res.status(200).json({
            status: 200,
            message: `Cantidad de productos: ${products.length}`,
            payload: products
        }) 
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: error.message
        })
    }
}