function sendemail() {
    var name = document.getElementById("name").value
    var email= document.getElementById("email").value
    var phone= document.getElementById("phone").value
    var message = document.getElementById("message").value

    if(name==="" || email==="" || phone==="" || message === ""){
        alert("faltan campos por llenar");      
    }else{
        var params = { 
            name, 
            email, 
            phone, 
            message 
        }
        const serviceID ="service_10crjy8";
        const templateID ="template_l83pqhd";

        emailjs.send(serviceID, templateID, params)
        .then(function() {
            alert("¡CORREO ENVIADO CON ÉXITO!")
            document.getElementById("name").value=""
            document.getElementById("email").value=""
            document.getElementById("phone").value=""
            document.getElementById("message").value=""
        }, function(error) {
            alert("¡ERROR DE ENVÍO!")
        });
    }   
      
}
var onloadCallback = function() {
      grecaptcha.render('html_element', {
          'sitekey' : 'your_site_key'
        });
      };