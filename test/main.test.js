/**
 * @jest-environment jsdom
 */
import { navigateTo } from '../src/main.js';

describe('navigateTo', () => {
  const root = document.createElement('div');
  root.id = 'content';
  document.body.appendChild(root);

  test('function', () => {
    expect(typeof navigateTo).toBe('function');
  });
/* beforeEach(() => {
    // Remove the existing onpopstate assignment
    jest.spyOn(window, 'onpopstate').mockImplementation(() => {});
  });

  it('should navigate to the home page', () => {
    const root = document.createElement('div');
    root.id = 'content';
    document.body.appendChild(root);

    // Add a new event listener for the popstate event
    window.addEventListener('popstate', () => {
      console.log('change');
      navigateTo(window.location.pathname);
    });

    navigateTo('/');
    expect(root.firstChild.tagName).toBe('H1');
    expect(root.firstChild.textContent).toBe('Home Page');
  });

  // Add more test cases here
  */
});
