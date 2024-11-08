$(document).ready(function(){
    $("#popup").hide()

    $("#agregar").click(function(){
        $("#popup").show()
        $("#regresar").click(function(){
            $("#popup").hide() 
        })
    })

    //insertar datos en la tabla
    $("#formulario").submit(function(e){
        e.preventDefault()

        let nombre = $("#nombre").val()
        let apellido = $("#apellido").val()
        let cedula = $("#cedula").val()
        let correo = $("#correo").val()
        let edad = $("#edad").val()
        let fecha = $("#fecha").val()
        let opciones = $(".opciones:checked").val()
        let genero = $(".genero:checked").val()
        let hora = $("#hora").val()
        let clase = $("#clase").val()
        
        $.ajax({
            type: "POST",
            url: "enviar_datos.php",
            data: {
                nombre: nombre,
                apellido: apellido,
                cedula: cedula,
                correo: correo,
                edad: edad,
                fecha: fecha,
                opciones: opciones,
                genero: genero,
                hora: hora,
                clase: clase
            },
            success: function (response) {
                mostrar()
                $("#popup").hide()
                $("#nombre").val("")
                $("#apellido").val("")
                $("#cedula").val("")
                $("#correo").val("")
                $("#edad").val("")
                $("#fecha").val("")
                $("#hora").val("")
                $("#clase").val("")
            },
            error:function (error){
                alert(error)
            }
        });
    })

    //mostrar o leer todos los datos de la tabla 
    function mostrar(){
        $.ajax({
            type: "GET",
            url: "mostrar_datos.php",
            success: function (response) {
                $("#registroDane").html(response)
                $("#popupEliminar").hide()
                $("#popup").hide()
            }
        });
    }
    
  
    //eliminar un dato de la tabla
    $("#registroDane").on("click", ".botonEliminar", function(){
        let indice = $(this).data("id")
        eliminar (indice)
        $("#popupEliminar").show()
        $("#cancelarEliminacion").click(function(){
            $("#popupEliminar").hide() 
            $("#caja_busqueda").val("")
            mostrar()
        })
        
    })
    function eliminar (id){
        $("#eliminarFila").click(function(){
            $.ajax({
                type: "POST",
                url: "eliminar_dato.php",
                data: {
                    id:id,
                },
                success: function (response) {
                    mostrar()
                    $("#caja_busqueda").val("")
                }, 
                error: function (error){
                    alert("hay un error en " + error )
                }
            });
        })
    }

    //editar datos de la tabla
    $("#registroDane").on("click", ".botonEditar", function(){

        $("#popup").show()
        $("#regresar").click(function(){
            $("#popup").hide() 
        })

        let id = $(this).data("id")
        let nombre = $(this).data("nombre")
        let apellido = $(this).data("apellido")
        let cedula = $(this).data("cedula")
        let correo = $(this).data("correo")
        let edad = $(this).data("edad")
        let nacimiento = $(this).data("nacimiento")
        let opciones = $(this).data("ayudaSocial")
        let genero = $(this).data("genero")
        let hora = $(this).data("hora")
        let claseSocial = $(this).data("claseSocial")

        $("#nombre").val(nombre)
        $("#apellido").val(apellido)
        $("#cedula").val(cedula)
        $("#correo").val(correo)
        $("#edad").val(edad)
        $("#fecha").val(nacimiento)
        $(".opciones:checked").val(opciones)
        $(".genero:checked").val(genero)
        $("#hora").val(hora)
        $("#clase").val(claseSocial)

        $("#formulario").off("submit").submit(function(e){
            e.preventDefault()
            $.ajax({
                type: "POST",
                url: "editar_datos.php",
                data: {
                    id:id,
                    nombre: $("#nombre").val(),
                    apellido: $("#apellido").val(),
                    cedula: $("#cedula").val(),
                    correo: $("#correo").val(),
                    edad: $("#edad").val(),
                    fecha: $("#fecha").val(),
                    opciones: $(".opciones:checked").val(),
                    genero:  $(".genero:checked").val(),
                    hora: $("#hora").val(),
                    clase: $("#clase").val()
                },
                success: function (response) {
                    mostrar()
                    $("#popup").hide()
                    $("#formulario").off("submit").submit(function(e){
                        e.preventDefault()
                        let nombre = $("#nombre").val()
                        let apellido = $("#apellido").val()
                        let cedula = $("#cedula").val()
                        let correo = $("#correo").val()
                        let edad = $("#edad").val()
                        let fecha = $("#fecha").val()
                        let opciones = $(".opciones:checked").val()
                        let genero = $(".genero:checked").val()
                        let hora = $("#hora").val()
                        let clase = $("#clase").val()
                        
                        $.ajax({
                            type: "POST",
                            url: "enviar_datos.php",
                            data: {
                                nombre: nombre,
                                apellido: apellido,
                                cedula: cedula,
                                correo: correo,
                                edad: edad,
                                fecha: fecha,
                                opciones: opciones,
                                genero: genero,
                                hora: hora,
                                clase: clase
                            },
                            success: function (response) {
                                mostrar()
                                //$("#popup").hide("")
                                $("#nombre").val("")
                                $("#apellido").val("")
                                $("#cedula").val("")
                                $("#correo").val("")
                                $("#edad").val("")
                                $("#fecha").val("")
                                $("#genero").val("")
                                $("#hora").val("")
                                $("#clase").val("")
                            },
                            error:function (error){
                                alert(error)
                            }
                        });
                    })
                    $("#nombre").val("")
                    $("#apellido").val("")
                    $("#cedula").val("")
                    $("#correo").val("")
                    $("#edad").val("")
                    $("#fecha").val("")
                    $("#genero").val("")
                    $("#hora").val("")
                    $("#clase").val("")
                }
            });
        })

    })

    //buscar datos en la tabla
    function buscar_datos (consulta){
        $.ajax({
            type: "POST",
            url: "buscar.php",
            data: {
                consulta:consulta
            },
            success: function (response) {
                $("#registroDane").html(response)
            },
            error: function (error){
                alert("hay un error en " + error )
            }
        });
    }

    buscar_datos()

    $(document).on("keyup", "#caja_busqueda", function(){
        let valor = $(this).val()

        if(valor != ""){
            buscar_datos(valor)
        }else{
            mostrar() 
        }
    })

    mostrar()
})