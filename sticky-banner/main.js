var target = document.querySelector('#the-target');
var topOfTarget = target.offsetTop;

function stickyBan() {
  if(window.scrollY >= topOfTarget){
    document.getElementById('the-target').classList.add('fixed-target');
  } else {
    document.getElementById('the-target').classList.remove('fixed-target');
  }
}

window.addEventListener('scroll', stickyBan);
