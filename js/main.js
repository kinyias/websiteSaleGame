const menuBtn = document.querySelector(".menuBtn");
const navBar = document.querySelector(".navBar");
menuBtn.addEventListener("click", navToggle);

function navToggle() {
  menuBtn.classList.toggle("openmenu");
  navBar.classList.toggle("open");
  if (navBar.classList.contains("open")) {
    navBar.style.maxHeight = navBar.scrollHeight + "px";
  } else {
    navBar.removeAttribute("style");
  }
}
const back_to_top = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 150) {
    back_to_top.classList.add('show');
  } else {

    back_to_top.classList.remove('show');
  }
});
$('.back-to-top').click(function () {
  $('html, body').animate(
    {
      scrollTop: 0,
    },
    800
  );
  return false;
});

/*=============== ZOOM HIGHLIGHT ===============*/
mediumZoom('.zoom',{
    margin: 10,
    background: '#000'
})