const seleccionar = () => {
  let selector = document.querySelector("#selector").value;
  const dolares = ['Dolar Oficial', 'Dolar Blue', 'Dolar Soja', 'Dolar Contado con Liqui', 'Dolar turista', 'Bitcoin', 'Dolar Bolsa', 'Dolar cotiza'];
  let resultado = document.querySelector('.result');
  let dolar;
  let btn = document.querySelector('.btn-limpiar');

  //Peticion con AXIOS
  axios.get('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    .then(function (response) {
      for (let i of response.data) {
        (selector === 'Dolar Oficial') ? dolar = 'Dolar Oficial' : '';
        (selector === 'Dolar Blue') ? dolar = 'Dolar Blue' : '';
        (selector === 'Dolar Contado con Liqui') ? dolar = 'Dolar Contado con Liqui' : '';
        (selector === 'Bitcoin') ? dolar = 'Bitcoin' : '';
        (selector === 'Dolar Soja') ? dolar = 'Dolar Soja' : '';
        (selector === 'Dolar Bolsa') ? dolar = 'Dolar Bolsa' : '';
        (selector === 'Dolar Turista') ? dolar = 'Dolar turista' : '';
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
          });
        }
      }
    })
    .catch(function (error) {
      console.log(error);
    })
}

window.addEventListener('change', seleccionar);

