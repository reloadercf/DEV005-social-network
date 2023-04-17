function home(navigateTo) {
  const container = document.createElement('div');
  container.classList.add('container');
  const html = `<h1>Welcome to the home page!</h1>
      <form class='login' id='login'>
        <span>Login</span>
        <input type='email' placeholder='email' name='email'>
        <input type='password' placeholder='***' name='password'>
        <button type='submit'>Login</button>
      </form>
      <button id='signup'>Create free account now</button>
      <button id='about'>About</button>
    `;
  container.innerHTML = html;

  container.querySelector('#about').addEventListener('click', () => {
    navigateTo('/about');
  });
  container.querySelector('#signup').addEventListener('click', () => {
    navigateTo('/signup');
  });
  container.querySelector('#login').addEventListener('submit', (e) => {
    e.preventDefault();
    // login(e.target.email.value, e.target.password.value);
  });

  return container;
}

export default home;
