/**
 * @jest-environment jsdom
 */
import signup from '../../src/components/signUp.js';
// import { addUserToSocialNetwork } from '../../src/lib/__mock__/auth.js';

// jest.mock('../../src/lib/auth.js');

describe('Signup collection', () => {
  test('This is a function', () => {
    expect(typeof signup).toBe('function');
  });
  describe('Button return', () => {
    test('Have a button return', () => {
      const component = signup();
      const comeBack = component.querySelector('#return');
      expect(comeBack).not.toBe(undefined);
    });

    test('Never click a button return', () => {
      const DOM = document.createElement('div');
      const navigateTo = jest.fn();
      DOM.append(signup(navigateTo));
      expect(navigateTo).not.toHaveBeenCalled();
    });
    test('User click a button return', () => {
      const DOM = document.createElement('div');
      const navigateTo = jest.fn();
      DOM.append(signup(navigateTo));
      const comeBack = DOM.querySelector('#return');
      comeBack.click();
      expect(navigateTo).toHaveBeenCalled();
      expect(navigateTo).toHaveBeenCalledWith('/');
    });
    test('User navigate to home', () => {
      const DOM = document.createElement('div');
      const navigateTo = jest.fn();
      DOM.append(signup(navigateTo));
      const comeBack = DOM.querySelector('#return');
      comeBack.click();
      expect(navigateTo).toHaveBeenCalledWith('/');
    });
  });
  describe('Button save', () => {
    it('works with promises', async () => {
      const DOM = document.createElement('div');
      const navigateTo = jest.fn();
      DOM.append(signup(navigateTo));
      const email = DOM.querySelector('#email');
      email.value = 'carlos@carlos.com';
      const password = DOM.querySelector('#password');
      password.value = '123456';

      DOM.querySelector('#save').click();
      const answerSpan = DOM.querySelector('#answer');
      // expect(addUserToSocialNetwork).toHaveBeenCalledWith('carlos@carlos.com', '123456');
      // expect(answerSpan.textContent).toBe('');
      expect(answerSpan.classList.contains('success')).toBe(true);
    }, 1000);
  });
});
