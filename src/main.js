import home from './components/home.js';
import about from './components/about.js';
import contact from './components/contact.js';
import errorPath from './components/errorPaht.js';

// Define the routes and corresponding components
const routes = [
  { path: '/', component: home },
  { path: '/about', component: about },
  { path: '/contact', component: contact },
  { path: '/error', component: errorPath },
];

const root = document.getElementById('content');
// Define the default route
const defaultRoute = '/';

// Navigate to the requested route
function navigateTo(hash) {
  // Find the matching route
  const route = routes.find((r) => r.path === hash);

  // If the route exists, execute its component function
  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );

    if (root.firstChild) root.removeChild(root.firstChild);

    root.append(route.component(navigateTo));
  } else {
    // Otherwise, redirect to the default route
    navigateTo('/error');
  }
}

window.onpopstate = () => {
  console.log('change');
  navigateTo(window.location.pathname);
};

// Initialize the router
function initRouter() {
  navigateTo(window.location.pathname || defaultRoute);
}

// Start the router
initRouter();
