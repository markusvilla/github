export function usuariosHtml (data) {
    const usuariosLength = document.querySelector('.user')
    usuariosLength.textContent= `Cantidad de usuarios son: ${data.Length}`
}