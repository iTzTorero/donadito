
fetch('/actividad', {
    method: 'GET',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
        idsolicitud: '2',
        estado: estado.value,
        detalle: detalle.value,
    })
}).then(res => res.json())
    .then(data => {
        var json = data
        var DatosJson = JSON.parse(JSON.stringify(json));

        console.log(DatosJson.alumnoUTP.length);
        $("#tablaActividad").append('<tr><td>IdActividad</td>' +
            '<td>IdSolicitud</td>' +
            '<td>Estado</td>' +
            '<td>Detalle</td>' +
            '<td>Nombre donador</td>' +
            '<td>Organismo</td>' +
            '<td>Fecha</td>');
        for (i = 0; i < DatosJson.alumnoUTP.length; i++) {

            $("#Table").append('<tr>' +
                '<td align="center" style="dislay: none;">' + DatosJson.alumnoUTP[i].idactividad + '</td>' +
                '<td align="center" style="dislay: none;">' + DatosJson.alumnoUTP[i].idsolicitud + '</td>' +
                '<td align="center" style="dislay: none;">' + DatosJson.alumnoUTP[i].estado + '</td>' +
                '<td align="center" style="dislay: none;">' + DatosJson.alumnoUTP[i].detalle + '</td>' +
                '<td align="center" style="dislay: none;">' + 'Luis López' + '</td>' +
                '<td align="center" style="dislay: none;">' + 'Caritas Obregón' + '</td>' +
                '<td align="center" style="dislay: none;">' + '16/11/2022' + '</td>' + '</tr>');
        }
    })

//a ver deja buscar como hacerlo con fetch
// ahi ta el fetch arriba
// o sea si pero como pasarlo a la tabla
//la nomas crea una tabla vacia en html pero con el id="tablaActividad" 
//en el consultarDonaciones vd ya le cambié el id, no sale u.u awanta
//voy a mi casa
// te voy a marcar mientras voy caminando
//voy a guardar mi lap, es que necesito hacer comida la hare en friega pera guarda el proyecto jajaja no me deja guardar ahya



function cargarDatos() {

}