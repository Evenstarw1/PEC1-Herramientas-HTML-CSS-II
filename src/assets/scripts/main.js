/* Function to open dropdown menu  */
function navBarOnClick() {
  document.querySelector('div.navbar__dropdrown').style.display = 'block';
  document.querySelector('div.navbar__bars-close').style.display = 'block';
  document.querySelector('div.navbar__bars-open').style.display = 'none';
  document.querySelector('header').style.height = '260px';
}

/* Function to close dropdown menu  */
function navBarCloseOnClick() {
  document.querySelector('div.navbar__dropdrown').style.display = 'none';
  document.querySelector('div.navbar__bars-close').style.display = 'none';
  document.querySelector('div.navbar__bars-open').style.display = 'block';
  document.querySelector('header').style.height = 'unset';
}