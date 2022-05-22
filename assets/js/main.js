const seleccionar = () => {
  let selector = document.querySelector("#selector").value;
  let resultados = document.querySelector('.resultados');
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
          resultados.innerHTML = `Compra: <span class="signo">$</span>${i.casa.compra} <br> Venta: <span class="signo">$</span>${i.casa.venta}`;
          btn.addEventListener('click', () => {
            resultados.innerHTML = '';
          });
        }
      }
    })
    .catch(function (error) {
      console.log(error);
    })
}

window.addEventListener('change', seleccionar);

