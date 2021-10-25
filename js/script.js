$(function() {

    $('.nav-icon').on('click', function() {

        $(this).toggleClass('active');
        $('nav ul').slideToggle();
    });
});

function validar_form() {

    if (document.forms.formcontact.name.value.length == 0) {
        alert("Indicar Nombre y Apellido")
        document.fvalida.nombre.focus()
        return 0;
    }

}