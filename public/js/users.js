export function usuariosHtml(data) {
    const usuariosLengt = document.querySelector('.usuarios')
    usuariosLengt.textContent = `Cantidad de usuarios son: ${data.length}`
}