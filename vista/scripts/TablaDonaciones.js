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


            let cellBotones = newRow.insertCell();
            //cellBotones.innerHTML = tdBotones.innerHTML;
            let botonRegistrarActividad = document.createElement("button")
            //tdBotones.querySelector("button")

            botonRegistrarActividad.textContent = 'Registrar Actividad'
            cellBotones.appendChild(botonRegistrarActividad)

            cell_donador.addEventListener('click',() => {
                //alert('Click en datos donador')
                $('#modalDatosDonador').modal('show');
            })

            botonRegistrarActividad.addEventListener("click", () => {
                //alert('Ya entre aqui')
                $('#modalRegistrarActividad').modal('show');
                if(element.estado=="donadito"){
                    //$("#donadito").prop("checked", true);
                    document.getElementById("donadito").checked = true;

                    //document.getElementById('donadito').checked(true)

                }
                else if(element.estado=="Almacen"){
                    //$("#almacen").prop("checked", true);
                    document.getElementById("almacen").checked = true;

                }
                else if(element.estado=="Domicilio"){
                    
                    //$("#domicilio").prop("checked", true);
                    document.getElementById("domicilio").checked = true;

                }
                //colorModal.value=element.color;


                //location.reload();
            })

            

        })
    })

botonRegistrarActividad.addEventListener("click", () => {
    let estadoP = null;
    if (document.getElementById('donadito').checked){
        estadoP="Donadito"     
    }else if(document.getElementById('almacen').checked){
        estadoP="Almacen"
    }
    else if(document.getElementById('domicilio').checked){
        estadoP="Domicilio"
    }

    
    fetch('/actividad', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            estado: estadoP,
            detalle: detalle.value,
            nombreDonador: 'Cristina Aguilar',
            telefono: '6442005656',
            correo: 'cristina@itson.com',
            direccion: 'Conocida',
    
        })
    }).then(res => {
        location.reload();
        res.json();
    }).catch(err => console.log(err))
    
    
})



