$(document).ready(function() {

  var modal = $('.modalBox');
  var modalcontent=$('.modalContent');


  modal.hide();

  $('.modal-open').click(function() {

  modal.fadeIn();
  modalcontent.fadeIn();

  });

  $('.close-modal').click(function () {
    modal.fadeOut();
    modalcontent.fadeOut();
});





$("#portraits").click(function() {

  window.location.href = "studiowork.html";
});

$("#weddings").click(function() {

  window.location.href = "weddings.html";
});


lightGallery(document.getElementById('animated-thumbnails'), {
    thumbnail: true,
});

});
