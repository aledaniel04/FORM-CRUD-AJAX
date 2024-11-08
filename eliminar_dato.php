<?php
    include"conexion.php";

    $codigo = $_POST["id"];
    
    $sql = "DELETE FROM registro WHERE id=$codigo";

    if ($conn->query($sql) === TRUE) {
  echo "Record deleted successfully";
    } else {
  echo "Error deleting record: " . $conn->error;
    }
?>