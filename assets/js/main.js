const seleccionar = () => {
  let selector = document.querySelector("#selector").value;
  let resultados = document.querySelector('.resultados');
  let dolar;
  let btn = document.querySelector('.btn-limpiar');

  //Peticion con AXIOS
  axios.get('https://dolarapi.com/v1/dolares')
    .then(function (response) {
      for (let i of response.data) {
        (selector === 'oficial') ? dolar = 'Oficial' : '';
        (selector === 'blue') ? dolar = 'Blue' : '';
        (selector === 'contadoconliqui') ? dolar = 'Contado con liquidación' : '';
        (selector === 'tarjeta') ? dolar = 'Tarjeta' : '';
        (selector === 'cripto') ? dolar = 'Cripto' : '';
        if (dolar === i.nombre) {
          resultados.innerHTML = `Compra: <span class="signo">$</span>${i.compra} <br> Venta: <span class="signo">$</span>${i.venta}`;
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

