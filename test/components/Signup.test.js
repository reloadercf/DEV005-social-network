/**
 * @jest-environment jsdom
 */

import signup from '../../src/components/signUp.js';
import * as auth from '../../src/lib/auth.js';

describe('signUp', () => {
  test('snapshot of signup', () => {
    const DOM = document.createElement('div');
    DOM.append(signup());
    expect(DOM).toMatchSnapshot();
  });
  test('is a function', () => {
    expect(typeof signup).toBe('function');
  });
  test('have a button', () => {
    const DOM = document.createElement('div');
    DOM.append(signup());
    const haveAButton = DOM.querySelector('#return');
    expect(haveAButton).not.toBe(undefined);
  });
  test('after click button return call function navigateTo', () => {
    const DOM = document.createElement('div');
    const navigateTo = jest.fn();
    DOM.append(signup(navigateTo));
    const buttonBack = DOM.querySelector('#return');
    buttonBack.click();
    expect(navigateTo).toHaveBeenCalledTimes(1);
  });
  test('after click button return call function navigateTo with / ', () => {
    const DOM = document.createElement('div');
    const navigateTo = jest.fn();
    DOM.append(signup(navigateTo));
    const buttonBack = DOM.querySelector('#return');
    buttonBack.click();
    expect(navigateTo).toHaveBeenLastCalledWith('/');
  });
});

describe('Button SAVE', () => {
  test('Test of click button save', (done) => {
    jest.spyOn(auth, 'addUserToSocialNetwork').mockImplementation(() => Promise.resolve({ message: 'success', email: 'carlos@carlos.com' }));
    const DOM = document.createElement('div');
    DOM.append(signup());
    const email = DOM.querySelector('#email');
    const password = DOM.querySelector('#password');
    const answer = DOM.querySelector('#answer');
    email.value = 'carlos@carlos.com';
    password.value = '123456';

    const buttonSave = DOM.querySelector('#save');
    buttonSave.click();
    expect(auth.addUserToSocialNetwork).toHaveBeenCalledTimes(1);
    expect(auth.addUserToSocialNetwork).toHaveBeenLastCalledWith('carlos@carlos.com', '123456');
    setTimeout(() => {
      expect(answer.classList.contains('success')).toBe(true);
      expect(answer.classList.contains('error')).not.toBe(true);
      done();
    }, 0);
  });
});
