const headerNav = document.querySelector('header nav')
const footer = document.createElement('footer');
const body = document.querySelector('body');
const footerNav = headerNav.cloneNode(true);

body.append(footer);
footer.append(footerNav);