const seleccionar = () => {
  let selector = document.querySelector("#selector").value;
  let resultado = document.querySelector('.result');
  let dolar;
  let btn = document.querySelector('.btn-limpiar');
  (selector === 'oficial') ? dolar = 'Dolar Oficial' : '';
  (selector === 'blue') ? dolar = 'Dolar Blue' : '';
  (selector === 'liqui') ? dolar = 'Dolar Contado con Liqui' : '';

  //Peticion con AXIOS
  axios.get('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    .then(function (response) {
      for (let i of response.data) {
        if (dolar === i.casa.nombre) {
          var compra = document.createElement('p');
          var venta = document.createElement('p');
          compra.textContent = "Compra: " + i.casa.compra;
          venta.textContent = "Venta: " + i.casa.venta;
          resultado.appendChild(compra);
          resultado.appendChild(venta);
          btn.addEventListener('click', () => {
            resultado.appendChild(compra).remove();
            resultado.appendChild(venta).remove();
          } );
        }
      }
    })
    .catch(function (error) {
      console.log(error);
    })
}

window.addEventListener('change', seleccionar);

