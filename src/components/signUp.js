import { addUserToSocialNetwork } from '../lib/auth.js';

function signup(navigateTo) {
  const container = document.createElement('div');
  const html = `
      <div class='login' id='signup'>
        <span>Signup</span>
        <input type='email' placeholder='email' name='email' id='email'>
        <input type='password' placeholder='***' name='password' id='password'>
        <span id='answer'></span>
        <button id='save'>Save</button>
      </div>
      <button id='return'>Return</button>
    `;
  container.innerHTML = html;

  container.querySelector('#return').addEventListener('click', () => {
    navigateTo('/');
  });

  const answer = container.querySelector('#answer');

  container.querySelector('#save').addEventListener('click', () => {
    const email = container.querySelector('#email');
    const password = container.querySelector('#password');
    addUserToSocialNetwork(email.value, password.value)
      .then((ok) => {
        answer.classList.add(ok.message);
        answer.textContent = `${ok.message} ${ok.email} Saved`;
      })
      .catch((err) => {
        answer.classList.add(err.message);
        answer.textContent = `${err.message} ${err.email} Not saved`;
      });
  });

  return container;
}

export default signup;
