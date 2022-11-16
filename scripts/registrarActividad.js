const bregistraractividad = document.querySelector("#bregistraractividad")

const estado = document.getElementById('estado');
const detalle = document.getElementById('detalle');

bregistraractividad.addEventListener('click', () => {

      //Validar campos
      if (estado.value.trim() === '' || detalle.value.trim() === '') return false;
      fetch('/actividad', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ 
            idsolicitud: '2',
            estado: estado.value, 
            detalle: detalle.value, 
        })
      }).then(res => res.json())
        .then(data => console.log(data.body))
})