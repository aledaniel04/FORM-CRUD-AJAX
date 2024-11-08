<?php
  include"conexion.php";
  
  $sql = "SELECT * FROM registro";
  $result = $conn->query($sql);
  if($result->num_rows > 0) {
      while($row = $result->fetch_assoc()) {
  ?>  
  <tr>
      <td><?php echo $row["id"] ?></td>
      <td><?php echo $row["nombre"] ?></td>
      <td><?php echo $row["apellido"] ?></td>
      <td><?php echo $row["cedula"] ?></td>
      <td><?php echo $row["correo"] ?></td>
      <td><?php echo $row["edad"] ?></td>
      <td><?php echo $row["nacimiento"] ?></td>
      <td><?php echo $row["ayudaSocial"] ?></td>
      <td><?php echo $row["genero"] ?></td>
      <td><?php echo $row["hora"] ?></td>
      <td><?php echo $row["claseSocial"] ?></td>
      <td><button class="botonEditar" 
      <?php echo "data-id='".$row["id"]."'" ?> 
      <?php echo "data-nombre='".$row["nombre"]."'" ?> 
      <?php echo "data-apellido='".$row["apellido"]."'" ?> 
      <?php echo "data-cedula='".$row["cedula"]."'" ?> 
      <?php echo "data-correo='".$row["correo"]."'" ?>
      <?php echo "data-edad='".$row["edad"]."'" ?> 
      <?php echo "data-nacimiento='".$row["nacimiento"]."'" ?>
      <?php echo "data-ayudaSocial='".$row["ayudaSocial"]."'" ?>
      <?php echo "data-genero='".$row["genero"]."'" ?>
      <?php echo "data-hora='".$row["hora"]."'" ?>
      <?php echo "data-claseSocial='".$row["claseSocial"]."'" ?> >Editar</button> 
      <button class="botonEliminar" <?php echo "data-id='".$row["id"]."'" ?> >Eliminar</button></td>
  </tr>
  <?php
  }}
  ?> 