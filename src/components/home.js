function home(navigateTo) {
  const container = document.createElement('div');
  const html = `Welcome to the home page!
    <button id='about'>about</button>`;
  container.innerHTML = html;

  container.querySelector('#about').addEventListener('click', () => {
    navigateTo('/about');
  });

  return container;
}

export default home;
