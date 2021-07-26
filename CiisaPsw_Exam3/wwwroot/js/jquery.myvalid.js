$(function() {
    $.validator.addMethod("formAlphanumeric", function (value, element) {
        var pattern = /^[\w\-.,()'"\s]+$/i;
        return this.optional(element) || pattern.test(value);
      }, "El campo debe tener un valor alfanumérico (a-z, A-Z, 0-9)");
    
    $.validator.addMethod("positiveDigit", function(value, element){
        var patt = /^[\d\.\d]+$/i;
        return this.optional(element) || patt.test(value);
    }, "El precio requiere una cantidad positiva");

    $.validator.addMethod( "integer", function( value, element ) {
        return this.optional( element ) || /^\d*$/.test( value );
    }, "El campo Stock requiere un número entero positivo" );

    $( "#cformDep" ).validate({
        rules: {
            Nombre: {
                    required: true,
                    formAlphanumeric: true,
                    minlength: 4,
                    maxlength: 100,
            }
        },
        messages: {
            Nombre:{
                required: "Este campo es requerido",
                minlength: "El nombre necesita por lo menos 4 caracteres",
                maxlength: "El nombre debe ser menor a 100 caracteres"
            }
        }
    });

    $( "#eformDep" ).validate({
        rules: {
            Nombre: {
                    required: true,
                    formAlphanumeric: true,
                    minlength: 4,
                    maxlength: 100,
            }
        },
        messages: {
            Nombre:{
                required: "Este campo es requerido",
                minlength: "El nombre necesita por lo menos 4 caracteres",
                maxlength: "El nombre debe ser menor a 100 caracteres"
            }
        }
    });
    $( "#cformProd" ).validate({
        rules: {
            Nombre: {
                    required: true,
                    formAlphanumeric: true,
                    minlength: 4,
                    maxlength: 100,
            },
            PrecioUnit: {
                required: true,
                positiveDigit: true,
                maxlength: 10
            },
            Stock:{
                required: true,
                integer: true
            }
        },
        messages: {
            Nombre:{
                required: "Este campo es requerido",
                minlength: "El nombre necesita por lo menos 4 caracteres",
                maxlength: "El nombre debe ser menor a 100 caracteres"
            },
            PrecioUnit:{
                required: "Este campo es requerido",
                maxlength: "El nombre debe ser menor a 10 caracteres"
            },
            Stock:{
                required: "Este campo es requerido"
            }
        }
    });
    $( "#eformProd" ).validate({
        rules: {
            PrecioUnit: {
                required: true,
                positiveDigit: true,
                maxlength: 10
            },
            Stock:{
                required: true,
                integer: true
            }
        },
        messages: {
            PrecioUnit:{
                required: "Este campo es requerido",
                maxlength: "El nombre debe ser menor a 10 caracteres"
            },
            Stock:{
                required: "Este campo es requerido"
            }
        }
    });
 });
