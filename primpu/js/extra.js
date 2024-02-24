$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});

//modal
// Obtener referencia al botón y al modal
var modal = document.getElementById("myModal");
var idimg = document.getElementById("id_img");
var pimg = document.getElementById("pimg");
var span = document.getElementsByClassName("close")[0];
var overlay = document.getElementById("overlay");
var textcata = document.getElementById("descri_catalogo");

// Obtener todos los elementos de la lista
var items = document.querySelectorAll('.openModal');

// Agregar un evento de clic a cada elemento
items.forEach(function(item) {
  item.addEventListener('click', function(event) {
    // Obtener el elemento sobre el que se hizo clic
    var elementClick = event.target;
	var RefCata = elementClick.id
	switch (RefCata) {
		case "C001":
			idimg.setAttribute("src", "images/p-1.webp");
			simg.textContent="Restaurant"
			// Cuando se haga clic en el botón, mostrar el modal
			modal.style.display = "block";
			overlay.style.display = "block";			
    	break;
		case "C002":
    		idimg.setAttribute("src", "images/p-2.webp");
			simg.textContent="Sport"
			modal.style.display = "block";
			overlay.style.display = "block"; 
    	break;
		case "C003":
    		idimg.setAttribute("src", "images/p-3.webp");
			simg.textContent="Online market"
			modal.style.display = "block";
			overlay.style.display = "block"; 
    	break;
		case "C004":
    		idimg.setAttribute("src", "images/p-4.webp");
			simg.textContent="Coffees"
			modal.style.display = "block";
			overlay.style.display = "block"; 
    	break;
		case "C005":
    		idimg.setAttribute("src", "images/p-5.webp");
			simg.textContent="Veterinarians"
			modal.style.display = "block";
			overlay.style.display = "block"; 
    	break;
		case "C006":
    		idimg.setAttribute("src", "images/p-6.webp");
			simg.textContent="Cake shop"
			modal.style.display = "block";
			overlay.style.display = "block"; 
    	break;
	}
	var datos = obtenerDatos();
	datos.datosdes.forEach(descri => {
		textcata.textContent=descri[RefCata].text;
		})
   
  });
});

// Cuando se haga clic en la "x" (cerrar), ocultar el modal
span.onclick = function() {
  modal.style.display = "none";
  overlay.style.display = "none";
}

// Si el usuario hace clic fuera del modal, cerrarlo
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
	overlay.style.display = "none";
  }
}
//end modal



//datos de las descriciones que deben ir despues en un json con node.js y express por que 
//esta restrigido por el CORP
//datos json
function obtenerDatos() {
	return {
	  			"datosdes": [{
					"C001":{text:"Diseño elegante y moderno de una página web para un restaurante. La paleta de colores oscuros contrasta bellamente con las imágenes vibrantes y coloridas de los platillos, creando una experiencia visual atractiva para los visitantes del sitio."
						,gamacolor:"images/colo1.webp"},
					"C002":{text:"La página web cuenta con una navegación intuitiva y proporciona información clara sobre las clases y los instructores. Además, presenta estadísticas actualizadas que destacan la popularidad y eficacia del estudio."
						,gamacolor:""},
					"C003":{text:"El diseño es atractivo y moderno, con un fondo azul oscuro y elementos gráficos en rojo y blanco. La página web ofrece una experiencia de usuario intuitiva, permitiendo a los visitantes explorar fácilmente opciones deliciosas como “Peanut Butter”, “Pumpkin Pie” y “Jambalaya”, cada una presentada con imágenes apetitosas y precios claros."
						,gamacolor:""},
					"C004":{text:"Este diseño ofrece una experiencia de usuario intuitiva, permitiendo a los visitantes explorar fácilmente las diferentes opciones de café como “Black Coffee” y “Hot Coffees”, cada una presentada con imágenes representativas y llamativas."
						,gamacolor:""},
					"C005":{text:"La página web destaca los productos orgánicos y premium para perros, con imágenes de diferentes razas de perros en cada sección del diseño."
						,gamacolor:""},
					"C006":{text:"Este diseño permite a los usuarios explorar fácilmente diversas opciones gastronómicas, visualizar detalles nutricionales y realizar pedidos con descuentos especiales."
						,gamacolor:""}
				}]
			}
}