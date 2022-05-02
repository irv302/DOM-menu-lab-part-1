
// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

const mainEl = document.querySelector('main');
console.log(mainEl);


mainEl.style.backgroundColor = 'var(--main-bg)'
console.log(mainEl);

mainEl.innerHTML = '<h1>SEI Rock!</h1>'
console.log(mainEl);

const topMenuEl = document.querySelector(".top-menu");
console.log(topMenuEl);

