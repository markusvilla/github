export function productosHtml (data) {
    const productsLength = document.querySelector('.products')
    productsLength.textContent= `Cantidad de productos: ${data.length}`
}