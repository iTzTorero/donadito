const botonCrearSolicitud = document.getElementById('btnCrearSolicitud')
const botonAceptar = document.getElementById('botonAceptar')

const nombre = document.getElementById('nombre')
const direccion = document.getElementById('direccion')
const telefono = document.getElementById('telefono')
const correo = document.getElementById('correo')
const detalle = document.getElementById('detalle')

botonCrearSolicitud.addEventListener('click', ()=>{
    $('#myModal').modal('show');

})

botonAceptar.addEventListener('click', ()=>{
fetch('/solicitud', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
        idsolicitud: '1',
        nombreDonador: nombre.value,
        nombreOrganismo: 'Fundacion Jesucristo Misericordioso',
        direccion: direccion.value,
        telefono: telefono.value,
        correo: correo.value,
        detalle: detalle.value
    })
}).then(res => {
    res.json();
}).catch(err => console.log(err))

fetch('/actividad', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
        estado: 'Domicilio',
        detalle: 'Pendiente de contactar',
        nombreDonador: nombre.value,
        telefono: telefono.value,
        correo: correo.value,
        direccion: direccion.value,

    })
}).then(res => {
    location.reload();
    res.json();
}).catch(err => console.log(err))





})