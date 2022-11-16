const bregistrarsolicitud = document.querySelector("#bregistrarsolicitud")

const descripcion = document.getElementById('descripcion');

bregistrarsolicitud.addEventListener('click', () => {

      //Validar campos
      if (descripcion.value.trim() === '') return false;
      fetch('/solicitud', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ 
            iddonador: '1',
            idorganismo: '2',
            descripcion: descripcion.value
        })
      }).then(res => res.json())
        .then(data => console.log(data.body))
})