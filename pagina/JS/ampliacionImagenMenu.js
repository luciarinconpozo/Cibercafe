document.addEventListener('DOMContentLoaded', function() {
    const imagenesMenu = document.querySelectorAll('.comidaImagen');
    const modalMenu = document.getElementById('modalMenu');
    const modalImgMenu = document.getElementById('imgModalMenu');

    imagenesMenu.forEach(function(img) {
      img.addEventListener('click', function() {

        modalMenu.style.display = 'block';
        modalImgMenu.src = this.src;
      });
    });
  
    const closeBtnMenu = document.getElementsByClassName('close')[0];
    closeBtnMenu.addEventListener('click', function() {
      modalMenu.style.display = 'none'; 
    });
  
    window.addEventListener('click', function(event) {
      if (event.target == modalMenu) {
        modalMenu.style.display = 'none';
      }
    });
  });
  