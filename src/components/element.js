function element() {
  const container = document.createElement('section');
  const title = document.createElement('h2');
  title.textContent = 'Welcome to my App';
  container.appendChild(container);

  return container;
}
export default element;
