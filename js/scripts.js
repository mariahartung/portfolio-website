console.log("Hello and welcome to my portfolio site, where I share some of my latest UX work. Enjoy your visit! - Maria Hartung, UX designer based near cologne.");

function menuToggle() {
  var mQuery = window.matchMedia('(max-width: 640px)');
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle' && mQuery.matches) {
    x.className += 'responsive';
  } else {
    x.className = 'navtoggle';
  }
}
