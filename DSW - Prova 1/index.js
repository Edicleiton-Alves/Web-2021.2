import routes from './routes.js';

const container = document.querySelector('#app');

const init = () => window.addEventListener('hashchange', renderPage);
const validateHash = (hash) => hash === ""  ? 'base' : hash.replace('#', '');

const renderPage = () => {
  const page = validateHash(window.location.hash);
  container.innerHTML = '';
  container.appendChild(routes[page]);
}

window.addEventListener('load', ()=> {
  renderPage();
  init();
});

function base64() {
  var result = document.getElementById('base64').value;
  var base64Cri = window.btoa(unescape(encodeURIComponent(result)))
  console.log(base64Cri);
  alert("Valor em Base64 Codificado é '" + base64Cri + "'");

  var base64Des = window.atob(unescape(encodeURIComponent(base64Cri)))
  console.log(base64Des);
  alert("Valor em Base64 Descodificado é '" + base64Des + "'");
}
function upperCase() {
  var result = document.getElementById('upperCase').value;
  console.log(result.toUpperCase());
  alert("Valor em UperCase é '" + result.toUpperCase() + "'");
}
function capitalCase() {
  var result = document.getElementById('capitalCase').value;
  var resultF;
  for (var i = 0; i < result.length; i++) {
      if (i == 0) {
          resultF = result[0].toUpperCase();
      }
      else {
          resultF = resultF + result[i].toLowerCase();
      }
  }
  console.log(resultF);
  alert("Valor em Captal é '" + resultF + "'");


}
function lowerCase() {
  var result = document.getElementById('lowerCase').value;
  console.log(result.toUpperCase());
  alert("Valor em UperCase é '" + result.toLowerCase() + "'");
}
function properCase() {
  var result = document.getElementById('properCase').value;
  console.log(result.toLowerCase().replace(/^(.)|\s(.)/g, function ($1) { return $1.toUpperCase(); }));
  alert("Valor em Captal é '" + result.toLowerCase().replace(/^(.)|\s(.)/g, function ($1) { return $1.toUpperCase(); }) + "'");
}