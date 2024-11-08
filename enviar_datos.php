<?php
  include"conexion.php";

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
  

  $sql = "INSERT INTO registro (nombre, apellido, cedula, correo, edad, nacimiento, ayudaSocial, genero, hora, claseSocial)
    VALUES ('$nombre', '$apellido', '$cedula' , ' $correo', '$edad', '$fecha', '$opciones', '$genero', '$hora', '$clase')";

    if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
    } else {
  echo "Error: " . $sql . "<br>" . $conn->error;
    }
 
$conn->close();
?>