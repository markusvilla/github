import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        min: 1,
        required: true
    },
    lote: {
        type: String,
        default:'1000'
    },
    caducidad: {
        type:Date,
        default: Date.now
    },
    descripcion: String,
    categoria: {
        type: String,
        default: null
    },
    precio: {
        type: Number,
        min: 1,
        required: true
    }
})

const Product= mongoose.model('Product', productSchema)
export default Product