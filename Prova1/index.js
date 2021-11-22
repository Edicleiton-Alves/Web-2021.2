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