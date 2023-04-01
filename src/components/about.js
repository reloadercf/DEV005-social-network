function about(navigateTo) {
  const container = document.createElement('div');
  const html = `<h3>Learn more about us here</h3>
  <button id='return'>regresar</button>
  `;
  container.innerHTML = html;
  container.querySelector('#return').addEventListener('click', () => {
    navigateTo('/home');
  });

  return container;
}

export default about;
