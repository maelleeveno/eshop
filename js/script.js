/* NAV */

$(".deroulant").hide();
$(".hamburger").on("click", function() {
  	var target = $(this).data("target");
  	if(target!==undefined) {
  	  	$(target).toggle();
     	$(this).toggleClass("active",$(target).is(":visible"));
  	}	
});

/* CAROUSEL */ 

$(document).ready(function(){
	$('.slideHome').slick({
		// setting-name: setting-value
		autoplay: true,
		autoplaySpeed: 2500,
		slidesToScroll: 1,
		cssEase: 'ease-out',
		dots: true,
		pauseOnDotsHover: true,
		slidesToScroll: 1
	});
});	

/* SLIDE PRODUITS */

$('.encartSlide').slick({
	autoplay: true,
	autoplaySpeed: 3500,
});


/* FAQ : ELEMENTS EN MODAL */

$(document).ready(function() {

  // Lorsque l'on clique sur afficher on affiche la fenêtre modale
  $('.afficher1').click(function (e) {
    e.preventDefault();
    showModal1();
  });
  
  $('.afficher2').click(function (e) {
    e.preventDefault();
    showModal2();
  });
  
  $('.afficher3').click(function (e) {
    e.preventDefault();
    showModal3();
  });
  
  $('.afficher4').click(function (e) {
    e.preventDefault();
    showModal4();
  });
  
  $('.afficher5').click(function (e) {
    e.preventDefault();
    showModal5();
  });  
  
  $('.afficher6').click(function (e) {
    e.preventDefault();
    showModal6();
  });

  // Cliquer sur le fond pour cacher la modale  
  $('.fermer').click(function () {
		hideModal();
  });

    $('.fond').click(function () {
		hideModal();
	});
  
  // Adaptation à la taille de la fenêtre du navigateur
  $(window).resize(function () {
    resizeModal()
  });
});

function showModal1(){

  var id = $('.rep1');

  // On definit la taille de la fenetre modale
  resizeModal();

  // Effet de transition     
  $('.fond').fadeTo(500, 0.2);  
  $(id).fadeIn(500);

  $('.fenetrePopup .close').click(function (e) {
    e.preventDefault();
    // On cache la fenetre modale
    hideModal();
  });
};

function showModal2(){

  var id = $('.rep2');

  // On definit la taille de la fenetre modale
  resizeModal();

  // Effet de transition     
  $('.fond').fadeTo(500, 0.2);  
  $(id).fadeIn(500);

  $('.fenetrePopup .close').click(function (e) {
    e.preventDefault();
    // On cache la fenetre modale
    hideModal();
  });
};

function showModal3(){

  var id = $('.rep3');

  // On definit la taille de la fenetre modale
  resizeModal();

  // Effet de transition     
  $('.fond').fadeTo(500, 0.2);  
  $(id).fadeIn(500);

  $('.fenetrePopup .close').click(function (e) {
    e.preventDefault();
    // On cache la fenetre modale
    hideModal();
  });
};

function showModal4(){

  var id = $('.rep4');

  // On definit la taille de la fenetre modale
  resizeModal();

  // Effet de transition     
  $('.fond').fadeTo(500, 0.2);  
  $(id).fadeIn(500);

  $('.fenetrePopup .close').click(function (e) {
    e.preventDefault();
    // On cache la fenetre modale
    hideModal();
  });
};

function showModal5(){

  var id = $('.rep5');

  // On definit la taille de la fenetre modale
  resizeModal();

  // Effet de transition     
  $('.fond').fadeTo(500, 0.2);  
  $(id).fadeIn(500);

  $('.fenetrePopup .close').click(function (e) {
    e.preventDefault();
    // On cache la fenetre modale
    hideModal();
  });
};

function showModal6(){

  var id = $('.rep6');

  // On definit la taille de la fenetre modale
  resizeModal();

  // Effet de transition     
  $('.fond').fadeTo(500, 0.2);  
  $(id).fadeIn(500);

  $('.fenetrePopup .close').click(function (e) {
    e.preventDefault();
    // On cache la fenetre modale
    hideModal();
  });
};

function hideModal(){
  // On cache le fond et la fenêtre modale
  $('.fond, .fenetrePopup, .pageModale').hide();
}

function resizeModal(){
  var modal = $('.pageModale');
  
  // On récupère la largeur de l'écran et la hauteur de la page afin de cacher la totalité de l'écran
  var winH = $(document).height();
  var winW = $(window).width();

  // le fond aura la taille de l'écran
  $('.fond').css({'width':winW,'height':winH});

  // On récupère la hauteur et la largeur de l'écran
  var winH = $(window).height();

  // On met la fenêtre modale au centre de l'écran
  modal.css('top', winH/2 - modal.height()/2);
  modal.css('left', winW/2 - modal.width()/2);
};

/* GALLERIE PAGE PRODUIT*/

var slideIndex = 1;
showSlides(slideIndex);

	// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

	// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}





