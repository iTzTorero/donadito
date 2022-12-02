const tabla = document.getElementById("tablaActividad")
const tbody = document.getElementById("tbody")
const tdBotones = document.getElementById("tdboton")
const boton = document.getElementById("botonRegistrarActividad")
const botonModal = document.getElementById("modalRegistrarActividad")
const botonRegistrarActividad = document.getElementById("btnRegistrarActividad")

// variables del modal
//const estado = document.getElementById('estado');
const detalle = document.getElementById('detalle');


fetch("/actividad", {
    method: "GET"
}).then((res) => res.json())
    .then((data) => {
        tbody.innerHTML = '';
        data.forEach(element => {

            let newRow = tbody.insertRow()

            let cellidsolicitud = newRow.insertCell()
            let txtidsolicitud = document.createTextNode(element.idsolicitud)
            cellidsolicitud.appendChild(txtidsolicitud)

            let cellidactividad = newRow.insertCell()
            let txtidactividad = document.createTextNode(element.idactividad)
            cellidactividad.appendChild(txtidactividad)

            let cell_estado = newRow.insertCell()
            let txt_estado = document.createTextNode(element.estado)
            cell_estado.appendChild(txt_estado)

            let cell_detalle = newRow.insertCell()
            let txt_detalle = document.createTextNode(element.detalle)
            cell_detalle.appendChild(txt_detalle)

            let cell_donador = newRow.insertCell()
            let txt_donador = document.createTextNode(element.nombreDonador)
            cell_donador.appendChild(txt_donador)

            let cell_organismo = newRow.insertCell()
            let txt_organismo = document.createTextNode("Fundacion Jesucristo Misericordioso")
            cell_organismo.appendChild(txt_organismo)

            let cell_fecha = newRow.insertCell()
            let txt_fecha = document.createTextNode("2/12/22")
            cell_fecha.appendChild(txt_fecha)

            
            cell_organismo.addEventListener('click',() => {
                //alert('Hola')
                $('#modalOrganismo').modal('show');
            })

        })
    })





