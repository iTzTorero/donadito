const tabla = document.getElementById("tablaActividad")
const tbody = document.getElementById("tbody")

fetch("/actividad",{
    method: "GET"
}).then((res) => res.json())
.then((data)=>{
    tbody.innerHTML = '';
console.log(data);
    data.forEach(element=>{

        let newRow = tbody.insertRow()

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
        let txt_donador = document.createTextNode("Luis Garcia")
        cell_donador.appendChild(txt_donador)

        let cell_organismo = newRow.insertCell()
        let txt_organismo = document.createTextNode("Fundacion Jesucristo Misericordioso")
        cell_organismo.appendChild(txt_organismo)

        let cell_fecha = newRow.insertCell()
        let txt_fecha = document.createTextNode("23/11/22")
        cell_fecha.appendChild(txt_fecha)

    })
})