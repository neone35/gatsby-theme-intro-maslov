import '@testing-library/jest-dom'
// jsdom-global is optional in this environment — try to load it but don't fail tests if it's absent
try {
  // eslint-disable-next-line global-require
  require('jsdom-global/register')
} catch (e) {
  /* ignore: jsdom-global not installed in this environment */
}
