<?php

    include "conexion.php";
    
    $id = $_POST["id"];
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $cedula = $_POST["cedula"];
    $correo = $_POST["correo"];
    $edad = $_POST["edad"];
    $fecha = $_POST["fecha"];
    $opciones = $_POST["opciones"];
    $genero = $_POST["genero"];
    $hora = $_POST["hora"];
    $clase = $_POST["clase"];

    $sql = "UPDATE registro SET nombre='$nombre', apellido='$apellido', cedula='$cedula', correo='$correo', 
    edad='$edad', nacimiento='$fecha', ayudaSocial='$opciones', genero='$genero', hora='$hora', claseSocial='$clase' 
    WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        echo "ha sido actualizado con exito";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
 
    $conn->close();
?>